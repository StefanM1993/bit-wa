import React from 'react';
import './GalleryOfGifs.css';

const GalleryOfGifs = ({ gifs }) => {
    const getId = ({ currentTarget }) => {
        console.log(currentTarget.getAttribute("data-id"))
    }

    return (
        <div className="GalleryOfGifs">
            {gifs.map((gif) => (
                <div>
                    <img
                        className="GalleryOfGifs__img"
                        src={gif.images.downsized.url}
                        alt="GIPHY"
                    />
                    <button data-id={gif.id}
                        className="GalleryOfGifs__btn"
                        onClick={getId} >x</button>
                </div>
            ))}
        </div>
    );
}

export { GalleryOfGifs };