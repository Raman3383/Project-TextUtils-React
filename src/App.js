import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";
//We have imported the BrowserRouter as Router, Switch, Route, Link from react-router-dom
//BrowserRouter is the router that we will use to wrap our entire application.
//Routes is used to switch between different routes.
//Route is used to define the route for the component.
//Link is used to create a link to navigate to different routes.
//We will use these components to create a single page application with multiple routes.
//We will create different components for different routes and then use the Link component to navigate between the routes.

function App() {
  const [mode,setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);
  //showAlert function to show the alert message and type when it is called in any component where we pass it as a prop.
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500); //This will close the alert after 1500ms or 1.5 seconds
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';//this will change the background color of the body to dark blue
      showAlert("Dark mode has been enabled","success");  
      //This will change the title of the website to TextUtils - Dark Mode
      document.title = 'TextUtils - Dark Mode';

      //setInterval is a function that will run the code inside it after every 2 seconds, like some virus pop ups on our screen
      //We can use this to change the title of the website after every 2 seconds, like a virus pop up
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing mode';
      // }
      // ,2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }
      // ,1000);
      //This is just an example of how we can use setInterval to change the title of the website after every 2 seconds
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");  
      document.title = 'TextUtils - Light Mode';
      //This will change the title of the website to TextUtils - Light Mode
    }
  }
  return (
    <>
    {/* <Router> */}
      {/*We can use any component here as many times as we want and that too in 2 ways , ex:
      1. <NavBar/>
      2. <NavBar></NavBar>
      */}

      <Navbar title="TextUtils" aboutText="AboutTextiles" mode={mode} toggleMode={toggleMode}/>
      
      {/* we are passing a prop to the navbar component. 
      NavBar is a component that we have created in the Navbar.js file.
      We are passing a prop named title with the value "TextUtils" and another prop named aboutText with the value "About".
      In the Navbar.js file, we will receive these props and use them in the componenthere
      Props are custom attributes and created by us.
      We can use this navbar component multiple times with different titles for different webpages.
      Similarly we can pass as many props as we want so that we can use this component multiple times with different props. 
      */}
    
      {/* To use defaultProps, we can use the component without passing any props */}
      {/* <Navbar></Navbar> */}
      <Alert alert={alert} />
      <div className="container my-3"> 
        {/* A <Switch> now <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
        <About mode={mode}/>
        {/* <Routes>
          We will use exact path instead of path to match the exact path, otherwise it will match the path that starts with the given path 
          
           
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
        </Routes> */}
        {/* We have used the Link component to create a link to navigate to different routes in Navbar.js. */}
      </div>
    {/* </Router> */}
          {/* We will use switch(now router) and then we will use route to define the route for the component.
          Then we will put our textform and about component inside the route component.
          The route component will render the component based on the path.
          If the path is /about, then the about component will be rendered.
          If the path is /, then the textform component will be rendered.
          */}
    </>
  );
}

export default App;
/* We have created various funcional components like :
1.	Navbar.js
2.	About.js
3.	Textform.js
4.  Alert.js
Then we call all the components in the App.js file.
Navbar creates a navigation bar for the website.
About creates an about section for the website where we  can toggle between light and dark mode 
And where we have used the bootstrap accordion component.
TextForm creates a form where we can enter text and perform various operations on it like converting it to uppercase,
lowercase, copying the text, removing extra spaces, etc.
We have also used the useState hook to create state variables in the components.
We have also passed props to the components.

*/

