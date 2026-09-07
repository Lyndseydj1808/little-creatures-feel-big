//import all creature images
import unicornHappy from '../../assets/images/creatures/unicorn-happy.png'
import unicornSad from '../../assets/images/creatures/unicorn-sad.png'
import unicornAngry from '../../assets/images/creatures/unicorn-angry.png'
import dragonExcited from '../../assets/images/creatures/dragon-excited.png'
import dragonHappy from '../../assets/images/creatures/dragon-happy.png'
import llamaHappy from '../../assets/images/creatures/llama-happy.png'
import llamaSad from '../../assets/images/creatures/llama-sad.png'
import peacockDisappointed from '../../assets/images/creatures/peacock-disappointed.png'
import peacockExcited from '../../assets/images/creatures/peacock-excited.png'
import peacockScared from '../../assets/images/creatures/peacock-scared.png'
import phoenixAngry from '../../assets/images/creatures/phoenix-angry.png'
import phoenixSad from '../../assets/images/creatures/phoenix-sad.png'
import unicornAudio from '../../assets/audio/feelingFriends/unicorn.mp3'
import dragonAudio from '../../assets/audio/feelingFriends/dragon.mp3'
import llamaAudio from '../../assets/audio/feelingFriends/llama.mp3'
import peacockAudio from '../../assets/audio/feelingFriends/peacock.mp3'
import phoenixAudio from '../../assets/audio/feelingFriends/phoenix.mp3'

//array of data for feeling friends questions
export const feelingFriendsQuestions = [
    {
        id: 1,
         creature: "Unicorn",
         name: "Yardly",
         questionAudio: unicornAudio,
         image: unicornHappy,
         options: ["Happy", "Sad", "Angry", "Scared" ],
         correctAnswer: "Happy"

    },
    {
        id: 2,
        creature: "Unicorn",
        name: "Yardly",
        questionAudio: unicornAudio,
        image: unicornSad,
        options: ["Happy", "Sad", "Angry", "Excited"],
        correctAnswer: "Sad"
    },
    {
        id: 3,
        creature: "Unicorn",
        name: "Yardly",
        questionAudio: unicornAudio,
        image: unicornAngry,
        options: ["Happy", "Sad", "Angry", "Excited"],
        correctAnswer: "Angry"
    },
    {
        id: 4,
        creature: "Dragon",
        name: "Danny",
        questionAudio: dragonAudio,
        image: dragonExcited,
        options: ["Scared", "Disappointed", "Angry", "Excited"],
        correctAnswer: "Excited"
    },
    {
        id: 5,
        creature: "Dragon",
        name: "Danny",
        questionAudio: dragonAudio,
        image: dragonHappy,
        options: ["Happy", "Sad", "Angry", "Excited"],
        correctAnswer: "Happy"
    },
    {
        id: 6,
        creature: "Llama",
        name: "Larry",
        questionAudio: llamaAudio,
        image: llamaHappy,
        options: ["Happy", "Sad", "Angry", "Excited"],
        correctAnswer: "Happy"
    },
    {
        id: 7,
        creature: "Llama",
        name: "Larry",
        questionAudio: llamaAudio,
        image: llamaSad,
        options: ["Happy", "Sad", "Angry", "Scared"],
        correctAnswer: "Sad"
    },
        {
        id: 8,
        creature: "Peacock",
        name: "Perry",
        questionAudio: peacockAudio,
        image: peacockDisappointed,
        options: ["Happy", "Excited", "Disappointed", "Scared"],
        correctAnswer: "Disappointed"
    },
        {
        id: 9,
        creature: "Peacock",
        name: "Perry",
        questionAudio: peacockAudio,
        image: peacockExcited,
        options: ["Excited", "Sad", "Angry", "Scared"],
        correctAnswer: "Excited"
    },
        {
        id: 10,
        creature: "Peacock",
        name: "Perry",
        questionAudio: peacockAudio,
        image: peacockScared,
        options: ["Happy", "Excited", "Angry", "Scared"],
        correctAnswer: "Scared"
    },
        {
        id: 11,
        creature: "Phoenix",
        name: "Finnleigh",
        questionAudio: phoenixAudio,
        image: phoenixAngry,
        options: ["Happy", "Sad", "Angry", "Excited"],
        correctAnswer: "Angry"
    },
        {
        id: 12,
        creature: "Phoenix",
        name: "Finnleigh",
        questionAudio: phoenixAudio,
        image: phoenixSad,
        options: ["Happy", "Sad", "Angry", "Excited"],
        correctAnswer: "Sad"
    }
]