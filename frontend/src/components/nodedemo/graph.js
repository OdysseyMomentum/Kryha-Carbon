import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import color from '../../styles/color'
import { ReactComponent as NodeLineLeft } from "../../assets/node-connect-left.svg";
import { ReactComponent as NodeLineRight } from "../../assets/node-connect-right.svg";
import { ReactComponent as NodeLine } from "../../assets/node-connect.svg";
import { StarRating } from '../shared/star-rating';
import { Text } from '../../styles/components';

const determineConnection = (row1, row2) => {
    if (row1.active === row2.active) {
        return ({
                    straight: true,
                    active: row1.active
                })
        
    } else {
        if (row1.active === 1) {
            return {
                straight: false,
                active: row1.active > 1 && row2 > 1 ? 2 : 1,
                direction:  row1.active > row2.active ? "right" : "left"
            }
        }
    }
    return {
        straight: false,

    }
}

export const Graph = () => {
    
    const [graph, setGraph] = useState({
        upstream: {
            node1: {
                rating: 2,
            },
            node2: {
                rating: 1,
            },
            node3: {
                rating: 2,
            },
            active: 3
        },
        midstream: {
            node1: {
                rating: 0,
                active: false
            },
            node2: {
                rating: 2,
                active: true
            },
            node3: {
                rating: 2,
                active: false
            },
            active: 2

        },
        downstream: {
            node1: {
                rating: 1,
                active: false
            },
            node2: {
                rating: 1,
                active: true
            },
            node3: {
                rating: 3,
                active: false
            },
            active: 1

        },
        nodeConnection1: determineConnection({active: 1}, {active: 2}),
        nodeConnection2: determineConnection({active: 2}, {active: 1})
    })

    useEffect(() => {
        setGraph(prevState => ({
            ...prevState,
            nodeConnection1: determineConnection(prevState.upstream, prevState.midstream),
            nodeConnection2: determineConnection(prevState.midstream, prevState.downstream)
        }))
    }, [])

    return (
        <Container>
            <Column>
                <CircleRow active={graph.upstream.active} rating={graph.upstream} stream="upstream" setActive={(stream, node) => setGraph(prevState => ({ ...prevState, [stream]: { ...prevState[stream], active: node } }))}/>
                <CircleRow active={graph.midstream.active} rating={graph.midstream} stream="midstream" setActive={(stream, node) => setGraph(prevState => ({ ...prevState, [stream]: { ...prevState[stream], active: node } }))}/>
                <CircleRow active={graph.downstream.active} rating={graph.downstream} stream="downstream" setActive={(stream, node) => setGraph(prevState => ({ ...prevState, [stream]: { ...prevState[stream], active: node } }))}/>
            </Column>
            <Row style={{justifyContent: "center"}}>
                <Text.H1 color={color.neon} style={{marginRight: "20px"}}>Average: </Text.H1>
                <StarRating fill={color.neon} rating={Math.round((graph.upstream["node" + graph.upstream.active].rating + graph.midstream["node" + graph.midstream.active].rating + graph.downstream["node" + graph.downstream.active].rating) / 3)} />
            </Row>
        </Container>
    )
}
            
            
const CircleRow = (props) => {      
    console.log(props.rating)
    return (
        <Row>
            <Text.H3 style={{textTransform: "uppercase", marginTop: "75px"}}>{props.stream}</Text.H3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100px"}}>
                <Circle color={props.active === 1 ? color.neon : color.darkPurple} onClick={() => props.setActive(props.stream, 1)}/>
                <StarRating fill={props.active === 1 && color.neon} rating={props.rating.node1.rating} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100px"}}>
                <Circle color={props.active === 2 ? color.neon : color.darkPurple} onClick={() => props.setActive(props.stream, 2)} />
                <StarRating fill={props.active === 2 && color.neon} rating={props.rating.node2.rating} />

            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100px"}}>
                <Circle color={props.active === 3 ? color.neon : color.darkPurple} onClick={() => props.setActive(props.stream, 3)} />
                <StarRating fill={props.active === 3 && color.neon} rating={props.rating.node3.rating} />
            </div>
        </Row>
    )
}
const ConnectingRow = (props) => {       
    return (
        <Row style={{ justifyContent: props.active === 1 ? "flex-start" : "flex-end", height: "250px", width: "105%"}}>
            {props.direction === "left"
                ? <NodeLineLeftScale scale={0.7}/>
                : <NodeLineRightScale scale={0.7}/>}
        </Row>
    )
}
const ConnectingRowStraight = (props) => {       
    return (
        <Row style={{
            justifyContent:
                props.active === 1
                    ? "flex-start"
                    : props.active === 2 
                        ? "center"
                        : "flex-end", height: "250px", width: "105%"
        }}>
            <NodeLine />
        </Row>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 30px 200px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
`
const Row = styled.div`
    display: flex;
    width: 100%;
    height: 250px;
    justify-content: space-between;
    align-items: center;
`
const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: ${props => props.color};
    z-index: 300;
`
const NodeLineLeftScale = styled(NodeLineLeft)`
    transform: scale(${props=>props.scale || 1});
`
const NodeLineRightScale = styled(NodeLineRight)`
    transform: scale(${props=>props.scale || 1});
`