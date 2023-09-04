import React from 'react'
import PropTypes from 'prop-types'

export default function TextArea(props) {
    // console.log(props)
  return (
    <div>
      <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea style={{backgroundColor : props.mode === 'light' ? 'white' : 'rgb(1, 11, 29)', 
            color: props.mode === 'light' ? 'black' : 'white'}} className="form-control" onChange={props.onChangeHandler} value={props.text} id="formArea" rows="10"></textarea>
        </div>
    </div>
  )
}
TextArea.prototype ={
    heading: PropTypes.string ,
    onChangeHandler : PropTypes.func
}
// default proptypes 
TextArea.defaultProps={
    heading:'Enter Some text to proceed'
    };
