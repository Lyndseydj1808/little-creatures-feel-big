///Updated shuffle using Fisher-Yates algorithm for better random shuffle and created a reusable utility so it can be used for multiple games.
export default function shuffleArray(array) {
  const newArray = [...array];//creates a copy of the array instead of mutating the original
  for(let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}