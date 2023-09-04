import React from 'react'

export default function Alert(props) {
    // console.log(props.alert);
  return (
    <div>
      {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> You should check in on some of those fields below.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  )
}
