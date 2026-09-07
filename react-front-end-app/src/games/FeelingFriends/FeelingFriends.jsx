import React from "react";
import BackButton from "../../components/BackButton";
import { feelingFriendsQuestions } from "./feelingFriendsQuestions";
import { useState } from "react";
import "./FeelingFriends.css";
import HomeButton from "../../components/HomeButton";
import LoadingSpinner from "../../components/LoadingSpinner";
import MainGamesButton from "../../components/MainGamesButton";
import shuffleArray from "../../utils/shuffleArray";
import happyAudio from "../../assets/audio/feelings/happy.mp3";
import sadAudio from "../../assets/audio/feelings/sad.mp3";
import angryAudio from "../../assets/audio/feelings/angry.mp3";
import scaredAudio from "../../assets/audio/feelings/scared.mp3";
import excitedAudio from "../../assets/audio/feelings/excited.mp3";
import disappointedAudio from "../../assets/audio/feelings/disappointed.mp3";
import AudioButton from "../../components/audioButton";

const feelingEmojis = {
  Happy: {emoji: "😊", audio: happyAudio },
  Sad: {emoji: "😢", audio: sadAudio },
  Angry: {emoji: "😠", audio: angryAudio},
  Scared: {emoji: "😨", audio: scaredAudio},
  Excited: {emoji: "🤩", audio: excitedAudio},
  Disappointed: {emoji: "😞", audio: disappointedAudio},
};

export default function FeelingFriends({ childName }) {
  /*passed childName as a prop to this function to incorporate the child’s name from the form input into the end game message */
  const [score, setScore] = useState(0);/*state to track score*/
  const [currentIndex, setCurrentIndex] = useState(0);/*State to track current index */
  const [feedback, setFeedback] = useState("");/*state to set feedback after child selects option */
  const [imageLoaded, setImageLoaded] = useState(false);/*state to track image loaded status so loading spinner can show if image not laoded */
  
  //Initializes state with a shuffled version of the questions array
  const [questions, setQuestions] = useState(() => shuffleArray(feelingFriendsQuestions));
  
  //fallback protection in case of empty array
  if (questions.length === 0) {
    return <div className="feeling-friends-container"><LoadingSpinner /></div>;
  }

  const currentQuestion = questions[currentIndex];

  if (currentIndex >= questions.length) {/*logic to show end of game feedback */
    return (
      <div className="end-game-container">
        <h2 className="end-game-feedback">
          {childName
            ? `Congratulations ${childName}! You finished the game!`
            : `Congratulations! You finished the game!`}{/*ternary operator...shows childName if there is one...if not displays general message */}
        </h2>
        <p className="score-feedback">
          You got {score} out of {questions.length} questions right!
          Great job!
        </p>
        <button
          className="play-again-button"
          onClick={() => {
            setQuestions(shuffleArray(feelingFriendsQuestions));//shuffles questions for play again
            setCurrentIndex(0);
            setScore(0);
            setFeedback("");
            setImageLoaded(false);
          }}/*resets all state for replay */
        >
          ▶️ Play Again!
        </button>
        <MainGamesButton />
        <HomeButton />
      </div>
    );
  }

  function handleAnswer(option) {
    if (option === currentQuestion.correctAnswer) {
      /*used an if statement to display feedback if child chooses correct answer */
      setScore(
        score + 1,
      ); /* used a React hook to update the users score when correct */
      setFeedback(`That's right! ${currentQuestion.name} the ${currentQuestion.creature} is
          feeling ${currentQuestion.correctAnswer}. Great job!`); /*React hook to setFeedback and string interpolation to incorporate the creature name into the question displayed above the image */
    } else {
      setFeedback(`Not quite. The ${currentQuestion.creature} is feeling
          ${currentQuestion.correctAnswer} right now.`);/*else display this if child selects incorrect answer */
    }
  }

  function nextQuestion() {/*goes to next creature index, resets feedback and image loaded status */
    setCurrentIndex(currentIndex + 1);
    setFeedback("");
    setImageLoaded(false);
  }

  const options = currentQuestion.options.map((option) => (/*maps through the options in my array to display all options */
    <div className="option-button-container" key={option}>
            <AudioButton audioSrc={feelingEmojis[option].audio} />
    <button
      className="option-button"
      onClick={() =>
        handleAnswer(option)
      } /* I used React hooks and an event handler to handle user selection. */
    >
      {option} {feelingEmojis[option].emoji}{/*shows the option and the corresponding feeling emoji*/}
    </button>
    </div>
  ));

  return (
    <div className="feeling-friends-container">
      <h1 className="game-title">Feeling Friends!</h1>
      <h2 className="game-question">
        <AudioButton audioSrc={currentQuestion.questionAudio} />
        How do you think {currentQuestion.name} the {currentQuestion.creature}{" "}
        is feeling right now?
      </h2>{/*uses string interpolation to pull the current name and creature into the question */}
      {!imageLoaded && (/* conditional rendering to display a loading spinner until the image is loaded */
        <div className="loading-placeholder">
          <LoadingSpinner />
        </div>
      )}
      <img
        className="creature-image"
        src={currentQuestion.image}
        alt={`Image of a ${currentQuestion.creature} generated using Nano Banana (AI)`}
        onLoad={() => setImageLoaded(true)}/* event handler that fires once the image has fully downloaded and rendered */
        style={{ display: imageLoaded ? "block" : "none" }}/* hides the image while it's loading, shows it when it's ready. */
      />
      {feedback && <div className="feedback">{feedback}</div>}{" "}
      {/*If feedback is truthy, show this*/}
      {feedback && (
        <button className="next-question-button" onClick={nextQuestion}>
          Next Question ➡️
        </button>
      )}{" "}
      {/*Shows next question button if feedback exists */}
      {!feedback && imageLoaded && <div className="options-grid">{options}</div>}{" "}
      {/*only shows options when feedback does not exist */}
      <BackButton />
    </div>
  );
}
