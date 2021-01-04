import React from "react";
import Board from "./components/Board";
import Header from "./components/Header";

export default function App() {
    return (
        <div className="select-none">
            <Header title="Tik Tak Toe" />
            <Board />
        </div>
    );
}
