import { useState } from 'react';


function Form() {

    const [email, setEmail] = useState('');
        // Find correct type for e: event
    function showInput(e: any) {
        e.preventDefault();
        console.log(email);

        // Find a better regex to test
        const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        const answer : boolean = regex.test(email);
        console.log(answer);
        // on success open success.tsx
        // on error, set error states, show active error states
    }

    return(
        <form>
             <label htmlFor='email'>Email address<span className="sr-only">Valid email required</span></label>
             <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)}placeholder='email@company.com' autoComplete="off"></input>
             <button onClick={showInput}>Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form