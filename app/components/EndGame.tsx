import React from 'react';

interface EndGameProps {
    difficulty: string;
    correctWords: number[];
    wrongWords: number[];
    wordsPressed: number[];
    time: number;
    corrections: number;
    gameEnded: boolean;
}

export default function EndGame({
    difficulty,
    correctWords,
    wrongWords,
    wordsPressed,
    time,
    corrections,
    gameEnded,
}: EndGameProps) {
    return (
        <section className={`${gameEnded ? 'grid' : 'hidden'}`}>
            EndGame
        </section>
    );
}
