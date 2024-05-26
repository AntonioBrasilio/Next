import logo from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import { MainHeaderBackground } from './main-header-background';
import NavLink from './nav-link';

export const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link
                    className={classes.logo}
                    href="/">
                    <Image
                        src={logo}
                        alt="A plate with food on it"
                        priority
                    />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodies community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
