import React, { useState } from "react"
import styled from 'styled-components'

import {ReactComponent as BackArrow} from '../assets/icons/back-arrow.svg'
import { ButtonPrimary } from "../styles/components/button"
import {Inputs, Text} from "../styles/components"
import { createReport } from "../actions/report"
import { useStore } from "../context"
import color from "../styles/color"
import { useHistory } from "react-router-dom"
import ROUTES from "../router/routes"
import { StarRating } from "./shared/star-rating"

const VerifyForm = () => {

  const history = useHistory()
  const { user } = useStore()
    const [state, setState] = useState({
      year: "",
      emissions: "",
      product: "",
      compensation: "",
      ratio: 3
    })

    const handleSubmit = (event) => {
      event.preventDefault()
      createReport({
        email: user.email,
        report: {
          emissions: state.emissions,
          year: state.year,
          stars: Math.round(Math.random()*3),
        }
      })
    }

  const handleInput = (event)=>setState(prevState=>({...prevState, [event.target.name]: event.target.value}))

  return(
    <Container>
      <BackArrow style={{ marginTop: "40px", cursor: "pointer" }} onClick={()=>history.push(ROUTES.REPORTS)}/>
      <div style={{marginBottom: "60px", borderBottom: "1px solid "+ color.darkPurple, width: "100%"}}>
        <h2>Verification supply chain partners</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <Row style={{justifyContent: "flex-end"}}>
          <H3>WATTO PHONE 6</H3>
        </Row>
        <Row>
          <H3 width="400px">WATTO</H3>
          <H3 color={color.darkPurple}>DOWNSTREAM</H3>
        </Row>
        <Row>
          <H3 width="400px">SAMSUNG ELECTRONICS (YOU)</H3>
          <H3 color={color.darkPurple}>MIDSTREAM</H3>
        </Row>
        

        <ButtonPrimary style={{marginTop: "80px", marginLeft: "525px"}}>DONE</ButtonPrimary>
      </form>
    </Container>
  )
}

export default VerifyForm

const Container = styled.div`
    padding: 0 100px;
    width: 100%;
    margin: 0 auto;

    h2 {
        font-weight: 700;
        font-size: 40px;
        color: ${color.neon};
        margin-bottom: 60px;
    }
`;

const H3 = styled(Text.H3)`
  width: ${props => props.width || "200px"};
  color: ${props=>props.color || color.neon};
  text-transform: uppercase;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`