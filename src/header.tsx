import mobile from '../public/images/illustration-sign-up-mobile.svg';
import desktop from '../public/images/illustration-sign-up-desktop.svg';

function Header() {
    return( 
    <header>
        <picture>
            <source media='(min-width: 50rem)' srcSet={desktop} />
            <source media='(max-width: 50rem)' srcSet={mobile} />
            <img src='../public/images/illustration-sign-up-mobile.svg'></img>
        </picture>
    </header>
    )
}

export default Header