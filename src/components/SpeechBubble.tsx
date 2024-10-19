import "./SpeechBubble.css";

export default function SpeechBubble() {
  interface SpeechBubbleProps {
    text: string;
  }

  const motivation = [
    "Believe in yourself! You can achieve anything with perseverance and hard work.",
    "Believe in yourself!",
    "Keep pushing forward!",
    "Success is within your reach!",
    "You can achieve great things!",
    "Dream big and dare to fail!",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  ];

  const greetings = [
    "Hello! How's your day going?",
    "Hi there! It's wonderful to see you!",
    "Greetings! Hope you're feeling great today!",
    "Hey! What's new with you?",
    "Salutations! Wishing you a fantastic day!",
    "Welcome! How have you been?",
    "Hi! Ready to tackle the day?",
    "Good to see you! What’s on your mind?",
    "Hello! Let’s make today amazing!",
    "Hey there! What adventures await you today?",
  ];

  const farewells = [
    "Take care and see you soon!",
    "Goodbye! Stay safe!",
    "Catch you later!",
    "See you next time!",
    "Farewell! Until we meet again!",
    "Bye for now!",
    "Stay awesome! Talk soon!",
    "Adios! Have a great day!",
    "Later! Take it easy!",
    "It was great seeing you! Goodbye!",
  ];

  type TextType = "motivational" | "greeting" | "farewell" | "informative";

  function generateText(type: TextType): string {
    switch (type) {
      case "motivational":
        return generateRandomQuote(motivation);
      case "greeting":
        return generateRandomQuote(greetings);
      case "farewell":
        return generateRandomQuote(farewells);
      case "informative":
        return "Did you know? TypeScript adds static types to JavaScript, helping to catch errors early.";
      default:
        return "Unknown text type.";
    }
  }

  function generateRandomQuote(quotes: Array<string>) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote;
  }

  return (
    <>
      <div className='bubble-container'>
        <div className='speech-bubble'>{text}</div>
      </div>
    </>
  );
}
