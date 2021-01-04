import React, { useState, useEffect } from "react";
import Sign from "./Sign";

function Board() {
    const box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [value, setValue] = useState(10);
    let [sign, setSign] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let [roundWon, setRoundWon] = useState(false);
    let [gameActive, setGameActive] = useState(true);

    const updateSign = (index) => {
        if (sign[index] === 0 && gameActive) {
            value === 1 ? setValue(10) : setValue(1);

            setSign((prevSign) => [
                ...prevSign.slice(0, index),
                value,
                ...prevSign.slice(index + 1),
            ]);
        }
    };

    const restartGame = () => {
        if (!gameActive) {
            setValue(10);
            setSign([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            setRoundWon(false);
            setGameActive(true);
        }
        return;
    };

    useEffect(() => {
        const checkGameEnded = () => {
            const winningConditions = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                let a = sign[winCondition[0]];
                let b = sign[winCondition[1]];
                let c = sign[winCondition[2]];
                if (a === 0 || b === 0 || c === 0) {
                    continue;
                }
                if (a === b && b === c) {
                    setRoundWon(true);
                    break;
                }
            }
        };

        const makeGameEnd = () => {
            if (roundWon) {
                setGameActive(false);
                return;
            }
        };

        setRoundWon(false);
        checkGameEnded();
        makeGameEnd();
    }, [sign, roundWon, gameActive]);

    return (
        <div className="grid grid-cols-3 mt-5 pt-5">
            <div></div>
            <div className="">
                <div className="grid grid-cols-3 gap-2">
                    {box.map((index) => {
                        return (
                            <div
                                className="w-full text-3xl text-center border-2 bg-purple-600 bg-opacity-75 text-white border-solid py-10 rounded-md"
                                key={index}
                                onClick={() => updateSign(index)}
                            >
                                <Sign value={sign[index]} />
                            </div>
                        );
                    })}
                </div>
                <div className="my-2 py-2 text-center text-3xl">
                    {roundWon ? (
                        <div className="my-2">
                            <p className="text-red-500 py-2">Game Over</p>
                            <p className="text-indigo-500 py-2">
                                {value === 1 ? (
                                    <i className="fas fa-yin-yang"></i>
                                ) : (
                                    <i className="fas fa-times"></i>
                                )}{" "}
                                <span className="mx-2">Won</span>
                            </p>
                            <div
                                className="my-2 py-2 px-4 rounded bg-yellow-400 text-white cursor-pointer"
                                onClick={restartGame}
                            >
                                Restart
                            </div>
                        </div>
                    ) : (
                        <p>
                            {value === 10 ? (
                                <i className="fas fa-yin-yang text-red-400"></i>
                            ) : (
                                <i className="fas fa-times text-green-400"></i>
                            )}
                            's <span className="mx-2">Turn</span>
                        </p>
                    )}
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Board;
