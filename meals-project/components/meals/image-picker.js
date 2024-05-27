'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export const ImagePicker = ({ label, name }) => {
    const [fileState, setFileState] = useState();
    const inputRef = useRef();
    const handlePickClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setFileState(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setFileState(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    };
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!fileState && <p>No image chosen.</p>}
                    {fileState && (
                        <Image
                            src={fileState}
                            alt="Preview"
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={inputRef}
                    onChange={handleFileChange}
                    required
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
