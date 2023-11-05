import React, { useState } from "react";
import BotSpecs from "./BotSpecs";

const BotCollection = ({ bots, enlistBot }) => {
    // State to store the selected bot
    const [selectedBot, setSelectedBot] = useState(null);

    // Function to handle when a bot card is clicked
    const handleClick = (bot) => {
        setSelectedBot(bot);
    };

    // Function to go back from BotSpecs to the bot collection view
    const goBack = () => {
        setSelectedBot(null);
    };

    // If a bot is selected, render the BotSpecs component to show the details of the selected bot
    if (selectedBot) {
        return <BotSpecs bot={selectedBot} enlistBot={enlistBot} goBack={goBack} />;
    }

    // If no bot is selected, render the bot collection view
    return (
        <div>
            <h2 className="collection-heading">Bot Collection</h2>
            <div className="bot-collection">
                {bots.map((bot) => (
                    <div key={bot.id} className="bot-card" onClick={() => handleClick(bot)}>
                        <img src={bot.avatar_url} alt={bot.name} />
                        <p>{bot.name}</p>
                        <p>Class: {bot.bot_class}</p>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p className="catchphrase">{bot.catchphrase}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BotCollection;
