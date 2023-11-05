import React from "react";

const YourBotArmy = ({ army, releaseBot, dischargeBot }) => {
    return (
        <div className="your-bot-army">
            {/* Heading for your bot army */}
            <h2>Your Bot Army</h2>


            {/* Unordered list to display the enlisted bots */}
            <ul>
                {/* Map through the enlisted bots array and render each bot */}
                {army.map((bot) => (
                    <li key={bot.id}>
                        {/* Display the bot avatar */}
                        <img src={bot.avatar_url} alt={bot.name} />

                        {/* Display the bot name, class, health, damage, and armor */}
                        <p>
                            {bot.name} - {bot.bot_class} (Health: {bot.health}, Damage: {bot.damage}, Armor: {bot.armor})
                        </p>

                        {/* Button to release the bot from your army */}
                        <button onClick={() => releaseBot(bot)}>Release</button>

                        {/* Button to discharge the bot permanently from your army */}
                        <button className="discharge-button" onClick={() => dischargeBot(bot.id)}>
                            Discharge
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YourBotArmy;

