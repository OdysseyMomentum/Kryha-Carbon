import React from 'react'
import styled from 'styled-components'
import { useStore } from '../context'
import color from '../styles/color'
import { Text } from '../styles/components'

export const UserCard = () => {
    // FIXME
    // const { user } = useStore()
    const user = "SUN GIMLI"
    const role = "DOWNSTREAM"
    return (
        <Container>
            <Row>
                <Circle>
                    <Text.H3 style={{textTransform: "capitalize"}}>
                        {user[0] + user[1]}
                    </Text.H3>
                </Circle>
                <Text.H4 color={color.neon}>
                    {user}
                </Text.H4>
            </Row>
            <Text.H4 color={color.neon} style={{marginLeft: "115px"}}>
                {role}
            </Text.H4>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
    align-items: center;
    justify-content: space-between;
    margin: 27px 35px;
`
const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 57px;
    height: 57px;
    border-radius: 50px;
    background-color: ${color.neon};
    color: ${color.darkPurple};
`
const Row = styled.div`
    display: flex;
    width: 160px;
    align-items: center;
    justify-content: space-between;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
` 
