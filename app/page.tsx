'use client';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectDifficulty from './components/SelectDifficulty';
import Game from './components/Game';
import { useState } from 'react';
import EndGame from './components/EndGame';

export default function Home() {
    //STATES
    const [difficulty, setDifficulty] = useState<string>('easy');
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [gameEnded, setGameEnded] = useState<boolean>(false);
    const [correctWords, setCorrectWords] = useState<number[]>([]);
    const [wrongWords, setWrongWords] = useState<number[]>([]);
    const [wordsPressed, setWordsPressed] = useState<number[]>([]);
    const [wpm, setWpm] = useState<number>(0);
    const [time, setTime] = useState<number>(0);
    const [corrections, setCorrections] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const handleStartGame = (e: any) => {
        e.preventDefault();
        setGameStarted(true);
    };

    const handleRestartGame = (e: MouseEvent) => {
        e.preventDefault();
        setGameStarted(true);
        setGameEnded(false);
        setCorrectWords([]);
        setWrongWords([]);
        setWordsPressed([]);
        setWpm(0);
        setTime(0);
        setCorrections(0);
        setIndex(0);
        setKeyPressed(false);
    };

    const handleChooseDificulty = (e: MouseEvent) => {
        e.preventDefault();
        setGameStarted(false);
        setGameEnded(false);
        setCorrectWords([]);
        setWrongWords([]);
        setWordsPressed([]);
        setWpm(0);
        setTime(0);
        setCorrections(0);
        setIndex(0);
        setKeyPressed(false);
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
                    index={index}
                    setIndex={setIndex}
                    keyPressed={keyPressed}
                    setKeyPressed={setKeyPressed}
                    gameEnded={gameEnded}
                />
                <EndGame
                    difficulty={difficulty}
                    correctWords={correctWords}
                    wrongWords={wrongWords}
                    wordsPressed={wordsPressed}
                    time={time}
                    corrections={corrections}
                    wpm={wpm}
                    gameEnded={gameEnded}
                    restartGame={handleRestartGame}
                    chooseDificulty={handleChooseDificulty}
                />
            </main>
            <Footer />
        </div>
    );
}
