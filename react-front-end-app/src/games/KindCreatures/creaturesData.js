//import all creature images
import unicornMirror from "../../assets/images/creatures/unicorn-mirror.png";
import dragonMirror from "../../assets/images/creatures/dragon-mirror.png";
import llamaMirror from "../../assets/images/creatures/llama-mirror.png";
import peacockMirror from "../../assets/images/creatures/peacock-mirror.png";
import phoenixMirror from "../../assets/images/creatures/phoenix-mirror.png";
import kcDragon from "../../assets/audio/kindCreatures/kc-dragon.mp3";
import kcDragonA1 from "../../assets/audio/kindCreatures/kc-dragon-a1.mp3";
import kcDragonA2 from "../../assets/audio/kindCreatures/kc-dragon-a2.mp3";
import kcDragonA3 from "../../assets/audio/kindCreatures/kc-dragon-a3.mp3";
import kcLlama from "../../assets/audio/kindCreatures/kc-llama.mp3";
import kcLlamaA1 from "../../assets/audio/kindCreatures/kc-llama-a1.mp3";
import kcLlamaA2 from "../../assets/audio/kindCreatures/kc-llama-a2.mp3";
import kcLlamaA3 from "../../assets/audio/kindCreatures/kc-llama-a3.mp3";
import kcPeacock from "../../assets/audio/kindCreatures/kc-peacock.mp3";
import kcPeacockA1 from "../../assets/audio/kindCreatures/kc-peacock-a1.mp3";
import kcPeacockA2 from "../../assets/audio/kindCreatures/kc-peacock-a2.mp3";
import kcPeacockA3 from "../../assets/audio/kindCreatures/kc-peacock-a3.mp3";
import kcPhoenix from "../../assets/audio/kindCreatures/kc-phoenix.mp3";
import kcPhoenixA1 from "../../assets/audio/kindCreatures/kc-phoenix-a1.mp3";
import kcPhoenixA2 from "../../assets/audio/kindCreatures/kc-phoenix-a2.mp3";
import kcPhoenixA3 from "../../assets/audio/kindCreatures/kc-phoenix-a3.mp3";
import kcUnicorn from "../../assets/audio/kindCreatures/kc-unicorn.mp3";
import kcUnicornA1 from "../../assets/audio/kindCreatures/kc-unicorn-a1.mp3";
import kcUnicornA2 from "../../assets/audio/kindCreatures/kc-unicorn-a2.mp3";
import kcUnicornA3 from "../../assets/audio/kindCreatures/kc-unicorn-a3.mp3";

//array of data for kind creatures game
export const creaturesArray = [
  {
    id: 1,
    creature: "Unicorn",
    name: "Yardly",
    questionAudio: kcUnicorn,
    image: unicornMirror,
    options: [
      {affirmation: "I love my body!", audio: kcUnicornA1},
      {affirmation: "I am kind!", audio: kcUnicornA2},
      {affirmation: "My mistakes help me learn and grow!", audio: kcUnicornA3},
    ],
  },
  {
    id: 2,
    creature: "Dragon",
    name: "Danny",
    questionAudio: kcDragon,
    image: dragonMirror,
    options: [
      {affirmation: "I am enough!", audio: kcDragonA1},
      {affirmation: "I am a good friend!", audio: kcDragonA2},
      {affirmation: "I am amazing!", audio: kcDragonA3},
    ],
  },
  {
    id: 3,
    creature: "Llama",
    name: "Larry",
    questionAudio: kcLlama,
    image: llamaMirror,
    options: [
      {affirmation: "I am good!", audio: kcLlamaA1},
      {affirmation: "I am brave!", audio: kcLlamaA2},
      {affirmation: "Today is going to be an amazing day!", audio: kcLlamaA3},
    ],
  },
  {
    id: 4,
    creature: "Peacock",
    name: "Perry",
    questionAudio: kcPeacock,
    image: peacockMirror,
    options: [
      {affirmation: "I am beautiful!", audio: kcPeacockA1},
      {affirmation: "I can do hard things!", audio: kcPeacockA2},
      {affirmation: "I believe in myself!", audio: kcPeacockA3},
    ],
  },
  {
    id: 5,
    creature: "Phoenix",
    name: "Finnleigh",
    questionAudio: kcPhoenix,
    image: phoenixMirror,
    options: [
      {affirmation: "I am loved!", audio: kcPhoenixA1},
      {affirmation: "I am capable of so much!", audio: kcPhoenixA2},
      {affirmation: "I am happy!", audio: kcPhoenixA3},
    ],
  },
];
