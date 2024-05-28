'use client';

import { useFormStatus } from 'react-dom';

export const MealsFormSubmit = () => {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit">
            {pending ? 'Submiting...' : 'Share Meal'}
        </button>
    );
};
