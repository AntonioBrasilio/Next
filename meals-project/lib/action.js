'use server';

export const submitShare = async (formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        email: formData.get('email'),
    };

    console.log(meal);
};
