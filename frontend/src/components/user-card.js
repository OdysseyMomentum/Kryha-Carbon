import React from 'react'
import styled from 'styled-components'
import { useStore } from '../context'
import color from '../styles/color'
import { Text } from '../styles/components'

export const UserCard = () => {

    const { user } = useStore()
    
    return (
        <Container>
            <Row>
                <Circle>
                    <Text.H3 style={{textTransform: "uppercase"}}>
                        {user.email[0] + user.email[1]}
                    </Text.H3>
                </Circle>
                <Column>
                <Text.H4 color={color.neon} style={{textTransform: "uppercase"}}>
                    {user.email.split("@")[0]}
                </Text.H4>
                </Column>
            </Row>
            <Text.H4 color={color.neon} style={{marginLeft: "100px", textTransform: "uppercase", fontWeight: "lighter"}}>
                {user.accountType}
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
    margin-bottom: -40px;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
` 
