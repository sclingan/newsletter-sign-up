import { useState } from 'react';

function Success() {
    return(
        <div className="sr-only" id='success'>
            <img src="../public/images/icon-success.svg"></img>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to . 
               Please open it and click the button inside to confirm your subscription.</p>
            <button>Dismiss message</button>   
        </div>
    )
}

export default Success