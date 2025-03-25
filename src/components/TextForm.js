//States of components in React
/*States are the heart of React components. 
States are the source of data and must be kept as simple as possible. 
Basically, states are the objects which determine components rendering and behavior. 
They are mutable means they can be changed, unlike the props and create dynamic and interactive components.
States can only be used in class components.  
They can be initialized by props.
States can be changed inside the component.
States can be changed using setStates method.
States can be used in the render function.
States are used in dynamic components.
*/
//Simply type rfc and press tab to get the basic structure of a functional component.
import React, {useState} from 'react'
//To use states in a functional component, we use hooks. We import the useState hook from react.
//Hooks are functions that let you use state and other React features without writing a class.
//useState is a hook that allows you to have state variables in functional components.

/*We will use the useState hook to create a state variable in the TextForm component.
We will create a state variable named text and a function setText to update the state variable.
useState is a function that takes the initial state as an argument and returns an array with two values.
The first value is the current state value and the second value is the function that allows you to update the state value.
    e.g. const [text,setText] = useState('Enter text here');
Here, text is the state variable which will take the initial value of 'Enter text here'
setText is the function that will update the state variable.

We cannot set the state variable directly using text = 'Enter text here' as we do in class components.
We have to use the setText function to update the state variable.
*/

export default function TextForm(props) {
  const [text,setText] = useState("");
  //text = 'new text'; Wrong way to change the state variable text
  // setText("new text"); //Correct way to change the state variable text

  //function to convert the text to uppercase when the button is clicked
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!!","success");
  }
  
  //function to convert the text to lowercase when the button is clicked
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!!","success");
  }
  
  // function to clear the text when the button is clicked
  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!!!","success");
  }

  //function to copy the text when the button is clicked
  const handleCopyText = () => {
    let text = document.getElementById('myBox');
    text.select();//selects the text in the textarea
    navigator.clipboard.writeText(text.value);
    //navigator.clipboard.writeText(text.value) copies the text to the clipboard.
    props.showAlert("Text Copied!!!","success");
  }

  //handle Extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);//split the text based on spaces, / is the regular expression for spaces
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!!!","success");
  }


  //function to handle the change in the textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
    //event.target.value gives the value of the text in the textarea
    
  }
 
  
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'lightGray':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        {/* The value in the textarea is set to the state variable text.
        The initial value of the state variable text is 'Enter text here'.
        We have to use onChange event to change the value of the state variable text.
        Without this we won't be able to change the value of the state variable text , means we wont be able tp type in the textarea.
        The onChange event calls the handleOnChange function which updates the state variable text.
        */}
        </div>

        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to UpperCase</button> 
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}> Convert to LowerrCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}> Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}> Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}my-2>
        <h2>Your text summary</h2>
        {/* <p> <b>{text.split(" ").length} Words and {text.length} Characters</b></p> */}
        {/* text.split(" ").length gives the number of words in the text.
        {/* split(" ") splits the text into words based on the spaces between them.
        It counts the words as well the spaces after the text as a word.
         */}
        {/* I want the word count to be 0 when the text is empty as now I am getting word count as 1 when text is empty. 
        I will do this by : 
        */}
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        {/* split(/\s+/) splits the text based on one or more spaces.

        <p> {0.008 * text.split(" ").length} Minutes read</p>
        {/* 0.008 is the average time taken to read a word. Means around 125 words are read in a minute.
        So, we multiply the number of words with 0.008 to get the time taken to read the text.
         */}
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text in the textbox to preview"}</p>      
        </div>
    </> 
  )
}


