import { NewsList } from '@/components/news-list';
import { getNewsForYear } from '@/lib/news';

export default function YearNewsPage({ params }) {
    const news = getNewsForYear(params.year);

    return <NewsList news={news} />;
}
