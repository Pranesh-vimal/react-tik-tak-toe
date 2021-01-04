import React from "react";

function Message({ gameActive, restartGame, gameDraw, value }) {
    return (
        <div>
            {!gameActive ? (
                <div className="my-2">
                    {gameDraw ? (
                        <p className="text-red-500 py-2">Game Draw</p>
                    ) : (
                        <div>
                            <p className="text-red-500 py-2">Game Over</p>
                            <p className="text-indigo-500 py-2">
                                {value === 1 ? (
                                    <i className="fas fa-yin-yang"></i>
                                ) : (
                                    <i className="fas fa-times"></i>
                                )}
                                <span className="mx-2">Won</span>
                            </p>
                        </div>
                    )}
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
    );
}

export default Message;
