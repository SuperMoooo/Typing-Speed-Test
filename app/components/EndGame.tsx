import React from 'react';

interface EndGameProps {
    difficulty: string;
    correctWords: number[];
    wrongWords: number[];
    wordsPressed: number[];
    time: number;
    corrections: number;
    wpm: number;
    gameEnded: boolean;
    restartGame: (e: MouseEvent) => void;
    chooseDificulty: (e: MouseEvent) => void;
}

export default function EndGame({
    difficulty,
    correctWords,
    wrongWords,
    wordsPressed,
    time,
    corrections,
    wpm,
    gameEnded,
    restartGame,
    chooseDificulty,
}: EndGameProps) {
    return (
        <form
            className={`${
                gameEnded ? 'grid' : 'hidden'
            }  bg-zinc-800 rounded-md w-96 p-6 h-96 grid-rows-[auto_1fr_auto] gap-6`}
        >
            <div className="text-center text-3xl">Time: {time}</div>
            <main className="grid grid-rows-5 *:flex *:justify-between *:items-center">
                <div>
                    <h1>Difficulty:</h1>
                    <h2>{difficulty.toUpperCase()}</h2>
                </div>
                <div>
                    <h1>WPM:</h1>
                    <h2>{wpm}</h2>
                </div>
                <div>
                    <h1>Correct Words:</h1>
                    <h2>{correctWords.length}</h2>
                </div>
                <div>
                    <h1>Wrong Words:</h1>
                    <h2>{wrongWords.length}</h2>
                </div>
                <div>
                    <h1>Words Pressed:</h1>
                    <h2>{wordsPressed.length}</h2>
                </div>
                <div>
                    <h1>Corrections:</h1>
                    <h2>{corrections}</h2>
                </div>
            </main>
            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={(e: any) => restartGame(e)}
                    className="bg-blue-500 px-4 py-2 rounded-md w-full hover:bg-blue-400 transition-colors"
                >
                    Play again
                </button>
                <button
                    onClick={(e: any) => chooseDificulty(e)}
                    className="border border-blue-500 px-4 py-2 rounded-md w-full hover:bg-blue-400 transition-colors"
                >
                    Select difficulty
                </button>
            </div>
        </form>
    );
}
