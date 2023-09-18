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
        // on success open success.tsx
        // on error, set error states, show active error states
        if(answer) {
            console.log('passed');
            // remove class main
            // add class success
            let main = document.getElementsByTagName('main');
            console.log(main);
            // main[0].classList.add('sr-only');
        }else{
            console.log('failed');
            let error = document.getElementsByTagName('span');
            let input = document.getElementById('email');
            console.log(input);
            input!.classList.add('input-error');
            error[0].classList.remove('sr-only');
            error[0].classList.add('error');
            console.log(error);
        }
    }

    return(
        <form>
             <label htmlFor='email'>Email address<span className="sr-only">Valid email required</span></label>
             <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)}placeholder='email@company.com' autoComplete="off" className='input'></input>
             <button onClick={showInput}>Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form