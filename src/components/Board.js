import React, { useState, useEffect } from "react";
import Message from "./Message";
import Sign from "./Sign";

function Board() {
    const box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [value, setValue] = useState(10);
    let [sign, setSign] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let [roundWon, setRoundWon] = useState(false);
    let [gameActive, setGameActive] = useState(true);
    let [gameDraw, setGameDraw] = useState(false);

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

        const checkRoundDraw = () => {
            let roundDraw = !sign.includes(0);
            if (roundDraw) {
                setGameDraw(true);
                setGameActive(false);
            }
            return;
        };

        setRoundWon(false);
        checkGameEnded();
        makeGameEnd();
        checkRoundDraw();
    }, [sign, roundWon, gameActive, gameDraw]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 pt-5">
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
                    <Message
                        gameActive={gameActive}
                        restartGame={restartGame}
                        gameDraw={gameDraw}
                        value={value}
                    />
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Board;
