import React, { useState } from "react"

function ReportForm() {

    const [state, setState] = useState({
      name: "",
      carbonLevel: "",
      carbonTonnes: "",
      distance: "",
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
      <div className="report-form">
        <form onSubmit = {handleSubmit}>
          <label>
            Carbon levels
            <input
              name="carbonLevel"
              type = "text"
              value = {state.carbonLevel}
              placeholder = "CarbonLevels"
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Company name
            <input
              name="name"
              type = "text"
              value = {state.name}
              placeholder = "Company Name"
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Carbon Tonnes
            <input
              id = "carbon_tonnes"
              name="Carbon Tonnes"
              type = "number"
              value = {state.carbonTonnes}
              placeholder = "Company Name"
              onChange={handleChange}
            />
          </label>

          <select
            id = "distance"
            name = "distance"
            value={state.distance}
            onChange={handleChange}
          >
            <option value="">-- Please Choose a distance --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
          <br />

          <button className="report-button">Report </button>
        </form>
      </div>
  )
}

export default ReportForm
