'use client';

interface someProps {
    handleStartGame: any;
    difficulty: string;
    setDifficulty: any;
    gameStarted: boolean;
}
export default function SelectDifficulty({
    handleStartGame,
    difficulty,
    setDifficulty,
    gameStarted,
}: someProps) {
    return (
        <form
            className={`grid grid-rows-[auto_1fr_auto] place-items-center bg-zinc-800 rounded-md w-96 p-6 h-96 ${
                gameStarted ? 'hidden' : ''
            }`}
        >
            <label className="w-full text-center text-3xl">
                Select Difficulty:
            </label>
            <select
                className="w-full bg-transparent text-center cursor-pointer *:bg-zinc-800 *:text-lg text-xl outline-none border border-zinc-700 rounded-md p-2"
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="advanced">Advanced</option>
            </select>

            <button
                className="bg-blue-500 px-4 py-2 rounded-md w-full hover:bg-blue-400 transition-colors"
                onClick={(e) => handleStartGame(e, difficulty)}
            >
                Start
            </button>
        </form>
    );
}
