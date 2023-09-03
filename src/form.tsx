import { showInput } from "./handle-form";

function Form() {
    return(
        <form>
             <label htmlFor='email'>Email address<span className="sr-only">Valid email required</span></label>
             <input type='email' id='email' placeholder='email@company.com' autoComplete="off"></input>
             <button onClick={showInput}>Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form