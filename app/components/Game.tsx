import { useEffect, useState } from 'react';
import { GAMETEXTS } from '../lib/constants';
import { checkValidEntry } from '../lib/util';

interface GameProps {
    difficulty: string;
    gameStarted: boolean;
    correctWords: number[];
    wrongWords: number[];
    wordsPressed: number[];
    time: number;
    corrections: number;
    setCorrectWords: any;
    setWrongWords: any;
    setWordsPressed: any;
    setWpm: any;
    setTime: any;
    setCorrections: any;
    setGameEnded: any;
}
export default function Game({
    difficulty,
    gameStarted,
    correctWords,
    wrongWords,
    wordsPressed,
    time,
    corrections,
    setCorrectWords,
    setWrongWords,
    setWordsPressed,
    setWpm,
    setTime,
    setCorrections,
    setGameEnded,
}: GameProps) {
    const gameText: string = GAMETEXTS[difficulty as keyof typeof GAMETEXTS];

    //STATES
    const [index, setIndex] = useState<number>(0);

    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    useEffect(() => {
        // Update the time when difficulty or gameStarted changes
    }, [difficulty, gameStarted]);

    useEffect(() => {
        //HANDLE KEYPRESS
        const handleKeyPress = (e: KeyboardEvent) => {
            setKeyPressed(true);
            if (e.key === 'Backspace' && index !== 0) {
                setCorrections((prev: number) => prev + 1);
                setIndex(index - 1);
                setWordsPressed((prev: any) => prev.slice(0, -1));
                if (wrongWords.includes(index - 1)) {
                    setWrongWords((prev: any) => prev.slice(0, -1));
                } else {
                    setCorrectWords((prev: any) => prev.slice(0, -1));
                }
                return;
            }
            //CHECK IF KEY IS A LETTER OR NUMBER OR PONTUATION
            if (checkValidEntry(e.key)) {
                if (e.key === gameText.charAt(index)) {
                    setIndex(index + 1);
                    setCorrectWords((prev: number[]) => [...prev, index]);
                    setWordsPressed((prev: number[]) => [...prev, index]);
                    return;
                } else {
                    setIndex(index + 1);
                    setWordsPressed((prev: number[]) => [...prev, index]);
                    setWrongWords((prev: number[]) => [...prev, index]);
                    return;
                }
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [index]);

    useEffect(() => {
        setTimeout(() => {
            if (gameStarted && keyPressed) {
                setTime(time + 1);
            }
        }, 1000);

        //GAME END STUFF
        if (time === 0 || index === gameText.length) {
            const grossWpm = correctWords.length / 5 / (time / 60);
            const netWpm = Math.max(0, grossWpm - corrections);
            setWpm(Math.round(netWpm * 100) / 100);
            setGameEnded(true);
        }
    }, [time, index]);
    return (
        <section
            className={`${
                gameStarted ? 'flex' : 'hidden'
            } w-3/4  flex-col items-center justify-center flex-wrap gap-4`}
        >
            <h1
                className={`text-4xl ${
                    keyPressed ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-500`}
            >
                Type to start
            </h1>
            <section className="flex flex-row bg-zinc-800 rounded-md p-6 tracking-wide text-xl leading-10 items-center justify-center flex-wrap">
                {gameText.split('').map((letter, letterIndex) => {
                    const isCorrect =
                        correctWords.includes(letterIndex) &&
                        wordsPressed.includes(letterIndex);

                    const isWrong =
                        wrongWords.includes(letterIndex) &&
                        wordsPressed.includes(letterIndex);

                    const isCurrent = index === letterIndex;

                    const isSpace = letter === ' ';
                    return (
                        <span
                            key={`${letter}-${letterIndex}`}
                            className={`${
                                isCorrect && isSpace
                                    ? 'underline decoration-green-500 '
                                    : ''
                            }${
                                isWrong && isSpace
                                    ? 'underline decoration-red-500'
                                    : ''
                            }${isCurrent ? 'underline' : ''} ${
                                isCorrect ? 'text-green-500' : ''
                            }${isWrong ? 'text-red-500' : ''}`}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    );
                })}
            </section>
        </section>
    );
}
