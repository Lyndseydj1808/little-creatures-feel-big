import React from 'react'
import './audioButton.css'

//audio button component to play audio on click
export default function AudioButton({audioSrc}) {

    
    const handlePlay = () => {
        const sound = new Audio(audioSrc);
        sound.play();
    };

    return (
        <div>
            <button className="audio-button" onClick={handlePlay}>
                🔊
            </button>
        </div>

    );
}