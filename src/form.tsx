import { FormEvent } from "react";


function Form(props: any) {

    function showInput(e: FormEvent) {
        e.preventDefault();

        const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        const answer : boolean = regex.test(props.email);
        // on success open success.tsx
        if(answer) {
            // add class success
            let success = document.getElementById('success');
            let header = document.getElementsByTagName('header')
            let section = document.getElementsByTagName('section');
            let form = document.getElementsByTagName('form');
            success?.classList.remove('hidden');
            form[0].classList.add('sr-only');
            section[0].classList.add('sr-only');
            header[0].classList.add('sr-only');
        }else{
            // on error, set error states, show active error states
            let error = document.getElementsByTagName('span');
            let input = document.getElementById('email');
            console.log(input);
            input!.classList.add('input-error');
            error[0].classList.remove('sr-only');
            error[0].classList.add('error');
        }
    }

    return(
        <form>
             <label htmlFor='email'>Email address<span className="sr-only">Valid email required</span></label>
             <input type='email' id='email' value={props.email} onChange={e => props.setEmail(e.target.value)}placeholder='email@company.com' autoComplete="off" className='input'></input>
             <button onClick={showInput}>Subscribe to monthly newsletter</button>
        </form>
    )
}

export default Form