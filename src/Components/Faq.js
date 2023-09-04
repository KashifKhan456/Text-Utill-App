import React from 'react'

export default function Faq(props) {
    const myStyle = {backgroundColor : props.mode === 'light' ? 'white' : 'rgb(1, 11, 29)', color: props.mode === 'light' ? 'black' : 'white'}
  return (
    <div className='container my-5' style={myStyle}>
        <h3 className='text-center my-3'>{props.heading}</h3>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      How do I use the text manipulation features in this app?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>To use the text manipulation features, simply follow these steps:</strong> 
        <ul>
        <li>Enter or paste the text you want to manipulate in the provided text input area.</li>
        <li>Click on the desired action button, such as "Copy," "Uppercase," "Lowercase," "Clear," or "Capitalize."</li>
       <li> The app will apply the selected action to the text, and you can see the result in the same text area.</li>
        <li>If you used the "Copy" action, the manipulated text is now in your clipboard for easy sharing or pasting.</li> <code>.accordion-body</code>, though the transition does limit overflow.
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      Can I undo or revert a text manipulation action?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>No,</strong> the app does not have an undo feature for text manipulation actions. It's important to double-check the results before performing an action, as some actions like "Clear" can permanently remove text.<code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      Is my text stored or saved on your server?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>No,</strong> your text is not stored or saved on our server. All text manipulation actions are performed locally in your browser, ensuring your privacy and data security. <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      Is this app free to use?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes, </strong>this app is free to use. There are no subscription fees or charges for accessing and using its text manipulation features.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      Can I use this app on mobile devices?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Yes,</strong> this app is responsive and can be used on mobile devices, including smartphones and tablets. It adapts to various screen sizes for your convenience.
      </div>
    </div>
  </div>
  
  
</div>
    </div>
  )
}
