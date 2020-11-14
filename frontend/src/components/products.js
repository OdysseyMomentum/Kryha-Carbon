import React from 'react'
import styled from 'styled-components'
import { Text } from '../styles/components'

export const Products = () => {

    return (
        <Container>
            <Text.H1>PRODUCTS</Text.H1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`