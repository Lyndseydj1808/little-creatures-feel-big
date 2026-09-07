import React, { useState } from "react";
import { creaturesArray } from "./creaturesData";
import HomeButton from "../../components/HomeButton";
import BackButton from "../../components/BackButton";
import "./KindCreatures.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import MainGamesButton from "../../components/MainGamesButton";
import shuffleArray from "../../utils/shuffleArray";
import AudioButton from "../../components/audioButton";

export default function KindCreatures({ childName }) {
  /*pass childName prop in */
  const [selection, setSelection] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  //initializes state with shuffled creatures
  const [shuffledCreatures, setShuffledCreatures] = useState(() => shuffleArray(creaturesArray));

  const currentCreature = shuffledCreatures[currentIndex];

  //fallback protection in case of empty array
  if(shuffledCreatures.length === 0) {
        return <div className="feeling-friends-container"><LoadingSpinner /></div>;
  }
  
  function handleAnswer(option) {
    /*sets selection to option chosen by user */
    setSelection(option.affirmation);
    const sound = new Audio(option.audio);
    sound.play();

  }

  function nextCreature() {
    setCurrentIndex(currentIndex + 1);
    setSelection("");
    setImageLoaded(false);
  }

  if (currentIndex >= shuffledCreatures.length) {
    /*return this if game is over */
    return (
      <div className="end-game-container">
        <h2 className="end-game-feedback">
          {childName
            ? `Thank you ${childName}! You're amazing! You helped all our creatures feel so special today! 🌟`
            : `You're amazing! You helped all our creatures feel so special today! 🌟`}
          {/*ternary operator...if childName exists display this..else display this */}
        </h2>
        <button
          className="play-again-button"
          onClick={() => {
            setCurrentIndex(0);
            setSelection("");
            setImageLoaded(false);
            setShuffledCreatures(shuffleArray(creaturesArray));//shuffles on replay
          }}
        >
          ▶️ Play Again!
        </button>
        <MainGamesButton />
        <HomeButton />
      </div>
    );
  }

  const options = currentCreature.options.map(
    (option /*maps options and handles on click */) => (
      <div key={option.affirmation} className="option-wrapper">
       <AudioButton audioSrc={option.audio} />
        <button
          className="option-button"
          onClick={() => handleAnswer(option)}
      >
        {option.affirmation}
      </button>
      
      </div>
    ),
  );

  return (
    <div className="kind-creatures-container">
      <h1 className="game-title">Kind Creatures!</h1>
      <h2 className="game-question">
        <AudioButton audioSrc={currentCreature.questionAudio} />
        {`Help ${currentCreature.name} the ${currentCreature.creature} feel amazing! Pick something kind to say!`}
        {/*uses string interpolation to incorporate current creature info*/}
      </h2>
      {!imageLoaded /*if image is not loaded display spinner */ && (
        <div className="loading-placeholder">
          <LoadingSpinner />
        </div>
      )}
      {imageLoaded &&
        selection /*if image is loaded and selection exists then display selection...this appears above the image */ && (
          <div className="user-selection">{selection}</div>
        )}
      <img
        className="creature-image"
        src={currentCreature.image}
        alt={`Image of a ${currentCreature.creature} generated using Nano Banana (AI)`}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
      {imageLoaded && <div className="options">{options}</div>}
      {/*if image is loaded display options */}
      {selection && (
        <button className="next-question-button" onClick={nextCreature}>
          Next Creature ➡️
        </button>
      )}
      <BackButton />
    </div>
  );
}
