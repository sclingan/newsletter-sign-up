
function Success(props: any) {
    function reload() {
        window.location.reload()
    }
    return(
        <div className="sr-only" id='success'>
            <img src="../public/images/icon-success.svg"></img>
            <h2>Thanks for subscribing!</h2>
            <p>A confirmation email has been sent to {props.email}. 
               Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={reload}>Dismiss message</button>   
        </div>
    )
}

export default Success