import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  // Manually apply default props as an alternative to using the defaultProps property if defaultProps is not working
  /*const title = props.title ?? 'Set title here';
    const aboutText = props.aboutText ?? 'About';
    */
  //We can also destructure the props like this:  
  //const { title, aboutText } = props;
   
  return (
    /*I have to show the dark mode only if dark mode is true in App.js , 
    If dark mode is true, then I will apply the bg-dark class to the navbar
    I will write the nav className ="string"  as JSX expression.
    by adding curly braces {} and then I will write the ternary operator inside the curly braces.
    And also will write navbar-dark as navbar-${props.mode} and dark is now the prop that we are passing to the component. 
    ${} is used to write the variable inside the string.
    */
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/*We can also use the bg-${props.mode} to change the background color of the navbar based on the mode*/}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/about">{props.aboutText}</a>
              </li>
            </ul>
            {/*Add a switch for dark mode*/}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-2`}> 
              {/*If the mode is light, then(?) the text should be dark, else(:)) the text should be light*/}
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-danger mx-1" type="submit" >Search</button>
              {/* outline-success is a bootstrap class which gives a green outline to the button 
              btn btn-outline-primary gives blue outline to the button
              btn btn-outline-danger gives red outline to the button
              btn btn-outline-warning gives yellow outline to the button
              btn btn-primary gives blue color to the button
              btn btn-danger gives red color to the button
              */}
            </form>
            
          </div>
        </div>
      </nav>
  )
  //Basically we are creating a navbar here and then we are not fixing the title
  //but we are passing it as a prop like : {props.title} so that we can use this component multiple times with different titles
  //We can pass as many props as we want
}
//We can set the prop types for the props that we are passing to the component
//Here we are passing 2 props: title and aboutText
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

/*This means our prop types must be string for title and aboutText, we cannot pass the number or any other type of data
If we type number, it will give us a warning in the console, but it will be displayed on the webpage
isRequired means that the prop is required, if we don't pass the prop, it will give us an error in the console , 
But if defaultProps is set, then it will not give us an error in the console, but it will display the default value on the webpage
*/
/*
We can also set the deafult props for the props that we are passing to the component
Here we are setting the default props for the title and aboutText
*/
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
/*But this is not working in the latest version of react, so we have to set the default props manually as shown above
OR we can set the react and react-dom to the version 18.2.0 in the package.json file
*/
