import React from "react";

function Header({ title }) {
    return (
        <div className="text-center py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white">
            {title}
        </div>
    );
}

export default Header;
