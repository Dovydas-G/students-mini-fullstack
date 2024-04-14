import { Link } from 'react-router-dom';
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <nav>
                <Link to='/'>Students</Link>
                <Link to='/basketball'>Basketball</Link>
            </nav>
        </header>
    );
}