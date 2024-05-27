'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

export const ImagePicker = ({ label, name }) => {
    const inputRef = useRef();
    const handlePickClick = () => {
        inputRef.current.click();
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputRef}
                />
                <button
                    className={classes.button}
                    onClick={handlePickClick}
                    type="button">
                    Choose Image
                </button>
            </div>
        </div>
    );
};
