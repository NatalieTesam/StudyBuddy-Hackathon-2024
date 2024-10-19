// FlashcardComponent.tsx
import React, { useState } from 'react';
import './Flashcard.css'; // Optional: import styles if you want

interface Flashcard {
    term: string;
    description: string;
}

const FlashcardComponent: React.FC = () => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [term, setTerm] = useState('');
    const [description, setDescription] = useState('');

    // Function to handle adding a flashcard
    const addFlashcard = () => {
        if (!term || !description) return; // Prevent adding empty cards

        const newFlashcard: Flashcard = {
            term,
            description,
        };

        setFlashcards([...flashcards, newFlashcard]);
        setTerm(''); // Reset term input
        setDescription(''); // Reset description input
    };

    return (
        <div className="flashcard-container">
            <h1>Flashcard Manager</h1>
            <div>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Key Term"
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button onClick={addFlashcard}>Add Flashcard</button>
            </div>

            <h2>Flashcards</h2>
            <div className="flashcard-list">
                {flashcards.map((flashcard, index) => (
                    <Flashcard key={index} term={flashcard.term} description={flashcard.description} />
                ))}
            </div>
        </div>
    );
};

// Flashcard Component to display individual flashcards
const Flashcard: React.FC<{ term: string; description: string }> = ({ term, description }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="flashcard-inner">
                <div className="flashcard-front">
                    <h3>{term}</h3>
                </div>
                <div className="flashcard-back">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FlashcardComponent;
