import React, { useState } from "react"
import styled from 'styled-components'
import { toast } from "react-toastify";

import {ReactComponent as BackArrow} from '../assets/icons/back-arrow.svg'
import { ButtonPrimary } from "../styles/components/button"
import {Buttons, Inputs, Text} from "../styles/components"
import { createReport } from "../actions/report"
import { useStore } from "../context"
import color from "../styles/color"
import { useHistory } from "react-router-dom"
import ROUTES from "../router/routes"
import { verify } from "../actions/verify";

const VerifyForm = () => {

  const history = useHistory()
  const { user, toVerifies } = useStore()
    const [state, setState] = useState({
      verified: 1,
      section: 1
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

  const onVerify = async () => {
    const res = await verify(toVerify.receiver, toVerify.sender, toVerify.product.name);

    if (res) {
      toast.success("Successfully verified");
      return setState(prevState =>{ return { ...prevState, section: 2 }});
    } else {
      return toast.error("Verification failed");
    }
  }

  const toVerify = toVerifies[0];

  if (state.section === 1) {
    return (
      <Container>
        <div>
          <div style={{ marginBottom: "60px", borderBottom: "1px solid " + color.darkPurple, width: "100%" }}>
            <BackArrow style={{ marginTop: "40px", cursor: "pointer" }} onClick={() => history.push(ROUTES.REPORTS)} />
            <h2>Verification supply chain partners</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <Row style={{ justifyContent: "flex-start" }}>
              <H3 color={color.darkPurple}>{toVerify.product.name}</H3>
            </Row>
            <Row>
              <H3 width="400px">{toVerify.sender}</H3>
              <H3 color={color.darkPurple}>DOWNSTREAM</H3>
            </Row>
            <Row>
              <H3 width="400px">{toVerify.receiver} (YOU)</H3>
              <H3 color={color.darkPurple}>MIDSTREAM</H3>
            </Row>
          </form>
        </div>
        <div style={{ marginBottom: "200px" }}>
          <Row style={{ marginTop: "30px" }}>
            <Text.H3 style={{ width: "400px" }}>Do you verify you are part of this product?</Text.H3>
            <Row width="200px">
              {state.verified === 0
                ? <>
                  <Buttons.ButtonPrimary style={{ marginRight: "10px" }} onClick={() => setState(prevState=>{ return { ...prevState, verified: 1 }})}>YES</Buttons.ButtonPrimary>
                  <Buttons.ButtonTertiary onClick={() => setState(prevState=>{ return { ...prevState, verified: 0 }})}>NO</Buttons.ButtonTertiary>
                </>
                : <>
                  <Buttons.ButtonTertiary style={{ marginRight: "10px" }} onClick={() => setState(prevState=>{ return { ...prevState, verified: 1 }})}>YES</Buttons.ButtonTertiary>
                  <Buttons.ButtonPrimary onClick={() => setState(prevState=>{ return { ...prevState, verified: 0 }})}>NO</Buttons.ButtonPrimary>
                </>
              }
            </Row>
          </Row>
          <Text.P style={{ textTransform: "none", fontStyle: "italic" }}>If you agree, your report will be verified with your blockchain data</Text.P>
          <Row style={{ justifyContent: "flex-end" }}>
            <ButtonPrimary style={{ marginTop: "80px", marginLeft: "525px" }} onClick={onVerify}>Next</ButtonPrimary>
          </Row>
        </div>
      </Container>
    )
  } else if (state.section === 2) {
    return (
      <Container>
        <div>
          <div style={{ marginBottom: "60px", borderBottom: "1px solid " + color.darkPurple, width: "100%" }}>
            <BackArrow style={{ marginTop: "40px", cursor: "pointer" }} onClick={() => history.push(ROUTES.REPORTS)} />
            <h2>Verification supply chain partners</h2>
          </div>
          <ConfirmationContainer>
            <Text.H1>Thanks!</Text.H1>
            <Row>
              <Text.P>Would you like to add your upstream partners of this supply chain?</Text.P>
              <Buttons.ButtonPrimary style={{ marginRight: "10px" }} onClick={() => setState({ verified: 1 })}>YES</Buttons.ButtonPrimary>
              <Buttons.ButtonTertiary onClick={() => setState({ verified: 0 })}>NO</Buttons.ButtonTertiary>
            </Row>
          </ConfirmationContainer>
        </div>
      </Container>
    )
  } else { return null }
}

export default VerifyForm

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  width: ${props => props.width};
  margin: ${props => props.margin};
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`
const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 820px;
  height: 299px;
  padding: 50px 59px;
  background: ${color.veryLightPurple};

`