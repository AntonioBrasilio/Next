'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

const isInvalidText = (text) => !text || text === '';

export const submitShare = async (prevState, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.image) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email || !meal.creator_email.includes('@') || !meal.image || meal.image.size === 0)
    ) {
        return {
            message: 'Please fill out all fields.',
        };
    }

    await saveMeal(meal);
    redirect('/meals');
};
