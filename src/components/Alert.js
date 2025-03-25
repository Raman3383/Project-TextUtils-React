import React from 'react'

export default function Alert(props) {
    //alert fucntion type is passed in small letters in the props, similarly ots displayed. 
    // So we create a fucntion to capitalize the first letter of the alert type.
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); 
        //charAt(0) gives the first character of the string and slice(1) gives the rest of the string.'
    }
  return (
    props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        {/* This is the close button to close the alert. 
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      */}
       {/* But we will not use this button as we dont want the user to close the alert 
       and alert should disappear after some time. We will use setTimeout function to close the alert after some time
       in App.js */}
    
    </div>
  )
}

//props.alert && is a short circuit operator. 
// It means that if props.alert is true then only the alert will be shown.
//As our alert value is null initially(const [alert,setAlert] = useState(null)), the alert will not be shown initially. 
// So it gives error when we try to show the alert initially as props.alert is null and then the div in our alert.js is shown with null values.
//So we use props.alert && to show the alert only when props.alert is true.
