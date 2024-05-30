import Link from 'next/link';

export default function NewsPage() {
    return (
        <div>
            <h1>News Page</h1>
            <Link href="/news/first-news-item">First News Item</Link>
            <Link href="/news/second-news-item">Second News Item</Link>
            <Link href="/news/third-news-item">Third News Item</Link>
        </div>
    );
}
