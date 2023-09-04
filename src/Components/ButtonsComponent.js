import React from 'react'

export default function ButtonsComponent(props) {
  return (
    <div>
      <button type="submit" onClick={() => props.onButtonClick('uppercase')} className="btn btn-primary mb-2 mx-1" disabled={props.text.length === 0}>Uppercase</button>

        <button disabled= {props.text.length ===0} type="submit" onClick={()=>{ props.onButtonClick('lowercase')}} className="btn btn-primary mb-2 mx-1">Lowercase</button>

        <button disabled= {props.text.length ===0} type="submit" onClick={()=>{ props.onButtonClick('removeSpaces')}} className="btn btn-primary mb-2 mx-1">Remove Spaces</button>

        <button disabled= {props.text.length ===0} type="submit" onClick={()=>{ props.onButtonClick('copyText')}} className="btn btn-primary mb-2 mx-1">Copy Text</button>

        <button disabled= {props.text.length ===0} type="submit" onClick={()=>{ props.onButtonClick('capitalizeText')}} className="btn btn-primary mb-2 mx-1">Capitalize Case</button>

        <button disabled= {props.text.length ===0} type="submit" onClick={()=>{ props.onButtonClick('clearText')}} className="btn btn-primary mb-2 mx-1">Clear Text</button>
        
    </div>
  )
}
