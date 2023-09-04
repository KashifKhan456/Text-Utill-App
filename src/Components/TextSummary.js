import React from 'react'
import PropTypes from 'prop-types'


export default function TextSummary(props) {
  // console.log(text);
  const wordsCount = props.text.split(/\s+/).filter((element)=>{return element.length !==0}).length;
  
  const readingTime = (0.008 * wordsCount).toFixed(5);
  const charactersCount = props.text.length;
  return (
    <div>
          <h4>{props.heading}</h4>
          <p>Words {wordsCount} and Characters {charactersCount}</p>
          <p> {readingTime} Minutes to read </p>
    </div>
  )
}
TextSummary.prototype = {
  text: PropTypes.string,
  heading : PropTypes.string
}
// default proptypes 
TextSummary.defaultProps={
  text:'Enter Something',
  heading: 'You Text Summary'
}
