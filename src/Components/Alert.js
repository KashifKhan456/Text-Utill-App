import React from 'react'

export default function Alert(props) {
    // For capitalizing function
    const capitalizeFunc = (word)=>{
        const lowerCase = word.toLowerCase();
        const firstLetterUppercase = lowerCase[0].toUpperCase() + lowerCase.slice(1);
        return firstLetterUppercase;
    }
   const myStyle = {position : 'fixed', top: '60px', width :'100%'}
    // console.log(props.alert);
  return (
    <div style={myStyle}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFunc(props.alert.type)}</strong> {props.alert.msg}.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
