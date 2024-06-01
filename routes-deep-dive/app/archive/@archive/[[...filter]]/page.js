import { NewsList } from '@/components/news-list';
import { getAvailableNewsYears, getNewsForYear } from '@/lib/news';
import Link from 'next/link';

export default function YearNewsPage({ params }) {
    const filter = getNewsForYear(params.filter);

    const links = getAvailableNewsYears();

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links &&
                        links.map((link) => (
                            <li key={link}>
                                <Link href={`/archive/${link}`}>{link}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
}
