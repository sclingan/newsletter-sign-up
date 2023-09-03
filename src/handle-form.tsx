// Get form input

const input: any = document.querySelector<HTMLInputElement>('input[id="email"]');

export function showInput(event: any) {
    event.preventDefault();
        const email: string  = input.value;
        console.log(email);
        console.log(typeof(email));
        // validate email
        // find a regex that works!
        const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        const answer : boolean = regex.test(email);
        if(answer) {
            console.log('passed');
        } else {
            console.log('failed');
        }
}