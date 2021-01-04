import React from "react";

export default function Sign({ value }) {
    return (
        <div className="h-10">
            {value === 1 ? (
                <i className="fas fa-times"></i>
            ) : value === 10 ? (
                <i className="fas fa-yin-yang"></i>
            ) : (
                ""
            )}
        </div>
    );
}
