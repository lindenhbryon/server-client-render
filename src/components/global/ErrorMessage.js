import React from 'react';
function ErrorMessage(props) {
  const errClass = props.error == true ? 'alert-success' : 'alert-danger';
    if(typeof props.error == 'undefined' || props.message == null){
        return null;
    }
    return (
        <div className={'alert ' + errClass}>
          {props.message}
        </div>
    );
  }

  export default ErrorMessage;