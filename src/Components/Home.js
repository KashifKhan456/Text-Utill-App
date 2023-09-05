import React, { useState } from 'react'
import TextSummary from './TextSummary';
import TextArea from './TextArea';
import ButtonsComponent from './ButtonsComponent';

export default function Home(props) {
    const [text, setText] = useState('Enter Text here');

    const onChangeHandler = (e)=>{
    setText(e.target.value);
    }
    // onClickUppercase Event
    // const onClickUppercase = ()=>{
    //     const newValue = text.toUpperCase();
    //     setText(newValue);
    // }
    // // onClickLowercase Event
    // const onClickLowercase = ()=>{
    //     const newValue=  text.toLowerCase();
    //     setText(newValue)
    // }
    // // onClickCopyText Event
    // const onClickCopyText= ()=>{
    //     navigator.clipboard.writeText(`${text}`);
    // }
    // // onClickRemoveSpaces Event
    // const onClickRemoveSpaces=()=>{
    //     const newString = `${text}`.replace(/\s+/g,' ') ;
    //     setText(newString)
    // }
    // // onClickCapitalize Event
    
    // const onClickCapitalize = ()=>{
    //     const words = text.split(' ');

    //     const capitalizedText = words
    //       .map((word) => {
    //         if (!word.trim()) {
    //           // Handle cases where there are consecutive spaces.
    //           return word;
    //         }
    //         return word.charAt(0).toUpperCase() + word.slice(1);
    //       })
    //       .join(' ');
    
    //     setText(capitalizedText);
    // }
    // // onClickClearText Event
    // const onClickClearText = ()=>{
    //     setText('');
    // }

    // for button components 
    const handleButtonsClick = (action)=>{
      switch(action){
  
        case 'uppercase':
          setText(text.toUpperCase());
          props.showAlert("Text has been converted into Uppercase","success");
          break;
        
        case 'lowercase':
          setText(text.toLowerCase());
          props.showAlert("Text has been converted into Lowercase","success");
          break;
        
        case 'removeSpaces':
          const newString = `${text}`.replace(/\s+/g,' ') ;
          setText(newString);
          props.showAlert("Extra Spaces has been remvoed from your text","success");
          break;

        case 'copyText':
          navigator.clipboard.writeText(`${text}`);
          props.showAlert("Text has been copied to your clipboard","success");
          break;

        case 'capitalizeText':
          const words = text.split(' ');

        const capitalizedText = words
          .map((word) => {
            if (!word.trim()) {
              // Handle cases where there are consecutive spaces.
              return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
    
        setText(capitalizedText);
        props.showAlert("Text has been converted into Capitalize case","success");
        break;
        case 'clearText':
          setText('');
          props.showAlert("Your text has been erased write something to anylyze","success");
          break;
          default:
            break;
            //end of switch statement
      }
    }

    
  return (
    <div className='container my-3' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <TextArea onChangeHandler={onChangeHandler} text={text} mode={props.mode} heading='Enter text here'/>

        <ButtonsComponent text={text} onButtonClick={handleButtonsClick}/>

        <div className='my-3'>
          <TextSummary text={text} heading='Your text summary'/>
        </div>
    </div>
  )
}
