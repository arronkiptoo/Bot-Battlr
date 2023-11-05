import React from "react";

const BotSpecs = ({ bot, enlistBot, goBack }) => {
    return (
        <div>
            <h2>Bot Specs</h2>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>Name: {bot.name}</p>
            <p>Type: {bot.bot_class}</p>
            <p>Strength: {bot.strength}</p>
            <button onClick={() => enlistBot(bot)}>Enlist</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default BotSpecs;