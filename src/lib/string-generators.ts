export function generateRandomUsername(): string {
    const adjectives = [
      "Swift", "Silent", "Happy", "Brave", "Clever", "Mighty", "Witty", "Funky", "Chilly", "Jolly"
    ];
    const nouns = [
      "Tiger", "Eagle", "Panda", "Wizard", "Ninja", "Robot", "Penguin", "Lion", "Falcon", "Unicorn"
    ];
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(100 + Math.random() * 9999);
  
    return `${randomAdjective}${randomNoun}${randomNumber}`;
  }

  export function generateRandomColorHex() {
  // Generate a random integer between 0 and 255 for each color component
  const randomInt = () => Math.floor(Math.random() * 256);

  // Convert each component to a 2-digit hexadecimal string
  const red = randomInt().toString(16).padStart(2, '0');
  const green = randomInt().toString(16).padStart(2, '0');
  const blue = randomInt().toString(16).padStart(2, '0');

  // Combine the components into a single hex color string
  return `#${red}${green}${blue}`;
}