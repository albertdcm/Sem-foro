import React, { useState, useEffect } from "react";

const Home = () => {
    const [color, setColor] = useState("red");

    useEffect(() => {
        const colors = ["red", "yellow", "green"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % colors.length; // alterna entre 0,1,2
            setColor(colors[index]);
        }, 3000); // cada 3 segundos

        return () => clearInterval(interval); // limpia el intervalo al desmontar
    }, []);

    return (
        <div className="traffic-light-container">
            <div 
                className={`light red ${color === "red" ? "selected" : ""}`}
                onClick={() => setColor("red")}
            ></div>
            <div 
                className={`light yellow ${color === "yellow" ? "selected" : ""}`}
                onClick={() => setColor("yellow")}
            ></div>
            <div 
                className={`light green ${color === "green" ? "selected" : ""}`}
                onClick={() => setColor("green")}
            ></div>
        </div>
    );
};

export default Home;