import React, { useState } from "react"
//import imagereport from "../assests/imagereport.jpg"

import { ButtonPrimary } from "../styles/components/button"
import {Inputs} from "../styles/components"
import {StarRating} from "../components/shared/star-rating"

function ReportForm() {

    const [state, setState] = useState({
      year: "",
      emissions: "",
      product: "",
      compensation: "",
      ratio: ""
    })

    const handleSubmit = (event) => {
      event.preventDefault()
      alert("we did it!")
    }

    const handleInput = (event)=>setState(prevState=>({...prevState, [event.target.name]: event.target.value}))
  return(
    <div>
      <div style = {row}>
        <div style= {{...column, ...left}}>
          {/*<img src= {imagereport} alt="side bar"/>*/}
          <div  style = {sidebar}>
            <p>Report &amp; audit carbon emissions for a more sustainable supply chain</p>
          </div>
        </div>

        <div style={{...column, ...right}}>
            <h1 style = {header}>Create Report</h1>
            <hr style = {line}/>
          <div className = "report-form">
            <form onSubmit = {handleSubmit}>
              <Inputs.Input label="YEAR" value={state.year} name="year" onChange={handleInput}/>
              <br/>
              <Inputs.Input label="EMISSIONS" value={state.EMISSIONS} name="emissions" onChange={handleInput}/>
              <br />
              <Inputs.Input label="PRODUCT" value={state.product} name="product" onChange={handleInput}/>
              <br />
              <Inputs.Input label="COMPENSATION" value={state.compensation} name="compensation" onChange={handleInput}/>
              <br />

              <StarRating  rating={2} />
              <br />
              <ButtonPrimary >DONE</ButtonPrimary>
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

document.body.style.backgroundColor = "#9287B1";

export default ReportForm

const sidebar = {
  left: '13.96%',
  right: '19.94%',
  top: '62.79%',
  bottom: '22.48%',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '100%',
  color: '#CBFF5B',
}

const line = {
  width: '825px',
  height: '0px',
  left: '433px',
  top: '200px',
  border: '1px solid #453C62',
}

/*header*/
const header = {
  left: '30.07%',
  right: '42.57%',
  top: '11.11%',
  bottom: '84.44%',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '40px',
  lineHeight: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  color: '#CBFF5B',
}

const column = {
  float: 'left',
  padding: '10px',
  height: '903px',
  left: '0px',
  top: '0px',
}

const left = {
  width: '25%',
  overflow: 'hidden',
  left: '0px',
  top: '0px',
}

const right = {
  width: '75%',
}

const row  = {
  display: 'flex',
  clear: 'both',
}
