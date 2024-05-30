'use-client';

export default function DetailsPage({ params }) {
    const { details } = params;

    return (
        <div>
            <div>{details}</div>
        </div>
    );
}
