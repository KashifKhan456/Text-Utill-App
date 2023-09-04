import React from 'react';
import userImage from '../Images/person.png';
import  './About.css'
export default function About(props) {
  return (
    <div className='container' style={{color : props.mode === 'light' ? 'black' : 'white'}}>
      <h3 className='text-center my-5'>{props.heading}</h3>
      <div className="row">
        <div className="col-md-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente earum sint voluptatum. Sit in impedit voluptas illum laboriosam nemo facilis, alias quaerat, sequi neque deleniti sed quae eaque similique voluptates repudiandae a incidunt sunt veritatis id. Hic quam culpa id vitae, ullam incidunt maiores ab accusantium corrupti nesciunt reprehenderit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quidem doloremque, officia a quae vero illo consequuntur consectetur beatae repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore delectus perspiciatis, nisi provident molestiae porro blanditiis eligendi fugiat natus asperiores?</p>
        </div>
        <div className="col-md-6 right-image">
          <img src={userImage} alt="User Pic" />
        </div>
      </div>
    </div>
  )
}
