import React from 'react';
import './App.css';


//** Styling **/
// The names are a little different because they are written in JS
const buttonstyling = {
  backgroundColor: 'orangered',
  borderStyle: 'solid'
};


const Button = props => {

  return <button onClick={ props.clickEvent }> { props.children } </button>

} // Button component ** returns JSX code


const embiggen = event => {

  console.log( event.target);

  // ** Dynamically add a className to it after a click
  // .button1 is defined already in App.css
  event.target.classList.add('button1');

} // embiggen() function **


function App() {

  return (

    <>
    
      <button 
        onClick={ () => console.log('** After event => 1. Hello in anonymous function !')}
        className='button1'
        > 1. Hello 
      </button>

      <button 
        onClick={ () => console.log('** After event => 2. Hello in anonymous function !')}
        style={buttonstyling}
        > 2. Hello 
      </button>

      <Button text={"WhatsApp !"} clickEvent={ embiggen }> Callback function </Button>

      {/* *** Child text ! is a Child of the Button component *** */}
      {/* Children are passed in props as props.children  */}
      <Button clickEvent={ embiggen }> 
        Child text ! 
        <p>P tag</p>
      </Button>

    </>

  );
}


export default App;

