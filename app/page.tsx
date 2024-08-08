'use client';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectDifficulty from './components/SelectDifficulty';
import Game from './components/Game';
import { useState } from 'react';
import EndGame from './components/EndGame';

export default function Home() {
    const [difficulty, setDifficulty] = useState<string>('easy');
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [gameEnded, setGameEnded] = useState<boolean>(false);
    const [correctWords, setCorrectWords] = useState<number[]>([]);
    const [wrongWords, setWrongWords] = useState<number[]>([]);
    const [wordsPressed, setWordsPressed] = useState<number[]>([]);
    const [wpm, setWpm] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [corrections, setCorrections] = useState<number>(0);

    const handleStartGame = (e: any, selectedDifficulty: string) => {
        e.preventDefault();
        setGameStarted(true);
    };
    return (
        <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="w-full h-full grid place-items-center p-6">
                <SelectDifficulty
                    handleStartGame={handleStartGame}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    gameStarted={gameStarted}
                />
                <Game
                    difficulty={difficulty}
                    gameStarted={gameStarted}
                    correctWords={correctWords}
                    wrongWords={wrongWords}
                    wordsPressed={wordsPressed}
                    time={time}
                    corrections={corrections}
                    setCorrectWords={setCorrectWords}
                    setWrongWords={setWrongWords}
                    setWordsPressed={setWordsPressed}
                    setWpm={setWpm}
                    setTime={setTime}
                    setCorrections={setCorrections}
                    setGameEnded={setGameEnded}
                />
                <EndGame
                    difficulty={difficulty}
                    correctWords={correctWords}
                    wrongWords={wrongWords}
                    wordsPressed={wordsPressed}
                    time={time}
                    corrections={corrections}
                    gameEnded={gameEnded}
                />
            </main>
            <Footer />
        </div>
    );
}
