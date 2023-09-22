
function Success(props: any) {
    return(
        <div className="sr-only" id='success'>
            <img src="../public/images/icon-success.svg"></img>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to {props.email}. 
               Please open it and click the button inside to confirm your subscription.</p>
               {/* Add logic to dismiss message and reload page */}
            <button>Dismiss message</button>   
        </div>
    )
}

export default Success