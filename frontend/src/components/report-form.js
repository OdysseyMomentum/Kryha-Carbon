import React, { useState } from "react"
//import imagereport from "../assests/imagereport.jpg"
import star from "../assests/Star.png"

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

    const  handleChange = (event) => {
      const {name, value} = event.target

      setState({
          ...state,
          [name]: value
      })
    }

  return(
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
          <label style = {label1} >
              YEAR
              <input style = {yearinput}
                id = "year"
                name = "year"
                type = "date"
                value = {state.year}
                placeholder = "2023"
                onChange={handleChange}
              />
            </label>
            <br />

            <label style = {label2} >
              EMISSIONS
              <input style = {inputstyle}
                id = "emissions"
                name = "emissions"
                type = "number"
                value = {state.emissions}
                placeholder = "AMOUNT"
                min = "1"
                onChange={handleChange}
              />
            </label>
            <br />

            <label style = {label3} >
              PRODUCT
              <input style = {inputstyle}
                id = "product"
                name= "product"
                type = "number"
                value = {state.product}
                placeholder = "AMOUNT"
                min = "1"
                onChange={handleChange}
              />

            </label>
            <br />

            <label style = {label4} >
              COMPENSATION
              <div style ={inputstyle4}>
                <input style = {rectangle2}
                  id = "compensation"
                  name = "compensation"
                  type = "number"
                  value = {state.compensation}
                  placeholder = "AMOUNT"
                  min = "1"
                  onChange={handleChange}
                />
              </div>
            </label>
            <br />


            <label style = {label5} for="ratio">ratio</label>
            <div style = {selectoption}>
              <select style = {rectangle1}
                id = "ratio"
                name = "ratio"
                value = {state.ratio}
                onChange = {handleChange}
              >
                <option value="">-----</option>
                <option value="1">1</option>
                <option value="2">2</option>

              </select>
            </div>
              <div style = {alignstar1}>
                <img src= {star} alt="star"/>
              </div>
              <div style = {alignstar2}>
                <img src= {star} alt="star"/>
              </div>
              <div style = {alignstar3}>
                <img src= {star} alt="star"/>
              </div>

            <br />

            <button style = {reportbutton}>DONE</button>
          </form>
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

const selectoption = {
  position: 'absolute',
  left: '51.18%',
  right: '24.79%',
  top: '64.44%',
  bottom: '29.78%',
  background: '#D7CEF1',
  borderRadius: '3px',
}


const inputstyle = {
  height: '52px',
  width: '346px',
  left: '737px',
  top: '343px',
  boxSizing: 'border-box',
  borderRadius: '3px',
  border: '1px solid #CCFF00',
}

const inputstyle4 = {
  height: '52px',
  width: '346px',
  left: '737px',
  top: '343px',
  boxSizing: 'border-box',
  borderRadius: '3px',
  border: '1px solid #CCFF00'
}

const yearinput = {
  height: '52px',
  width: '346px',
  left: '737px',
  top: '271px',
  borderRadius: '3px',
  background: '#D7CEF1',
}

/** done */
/* stars*/
const alignstar1 = {
  position: 'absolute',
  left: '78.26%',
  right: '19.65%',
  top: '65.44%',
  bottom: '31.22%',
}

const alignstar2 = {
  position: 'absolute',
  left: '80.9%%',
  right: '17.01%',
  top: '65.44%',
  bottom: '31.22%',
}

const alignstar3 = {
  position: 'absolute',
  left: '83.54%',
  right: '14.38%',
  top: '65.44%',
  bottom: '31.22%',
}

/**button*/
const reportbutton = {
  height: '52px',
  width: '160px',
  position: 'absolute',
  left: '64.1%',
  right: '24.79%',
  top: '80%',
  bottom: '14.22%',
  border: '1px solid #453C62',
  boxSizing: 'border-box',
  borderRadius: '3px',
  color: '#61528D',
  backgroundColor: '#DDDDDD',
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

const label1 = {
  position: 'absolute',
  left: '30.42%',
  right: '65.83%',
  top: '31.67%',
  bottom: '66.33%',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '100%',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#453C62',
}

const label2 = {
  position: 'absolute',
  left: '30.42%',
  right: '61.81%',
  top: '39.67%',
  bottom: '58.33%',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '100%',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#453C62',
}

const label3 = {
  position: 'absolute',
  left: '30.42%',
  right: '62.78%',
  top: '47.56%',
  bottom: '50.44%',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '100%',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#453C62',
}

const label4 = {
  position: 'absolute',
  left: '30.42%',
  right: '58.19%',
  top: '55.56%',
  bottom: '42.44%',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '100%',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#453C62',
}

const label5 = {
  position: 'absolute',
  left: '30.42%',
  right: '65.35%',
  top: '66%',
  bottom: '32%',

  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '100%',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#453C62',
}

const rectangle1 = {
  height: '60px',
  width: '431px',
  left: '737px',
  top: '580px',
  background: '#D7CEF1',
}

const rectangle2 = {
  height: '60px',
  width: '431px',
  left: '737px',
  top: '580px',
  border: '1px solid #CCFF00',
}
