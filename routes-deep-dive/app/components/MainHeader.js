import Link from 'next/link';

export const MainHeader = () => {
    return (
        <header>
            <h1>Main Header</h1>
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
        </header>
    );
};
