// Get form input

const input: any = document.querySelector<HTMLInputElement>('input[id="email"]');

export function showInput(event: any) {
    event.preventDefault();
        const email: string  = input.value;
        console.log(email);
        console.log(typeof(email));
}