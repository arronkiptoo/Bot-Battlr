import React, { useState, useEffect } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import SortBar from "./components/SortBar";

const App = () => {
  // State to store enlisted bots and your bot army
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  // State to store the main list of bots from the API
  const [bots, setBots] = useState([]);

  // State to handle selected filters and sorting
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState("");

  // Fetch the list of bots from the backend API on component mount
  useEffect(() => {
    fetchBots();
  }, []);

  // Function to fetch bots from the backend API
  const fetchBots = async () => {
    try {
      const response = await fetch("http://localhost:3000/bots");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error("Error fetching bots:", error);
    }
  };

  // Function to enlist a bot into your army
  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  // Function to release a bot from your army
  const releaseBot = (bot) => {
    // Remove the bot from your army
    const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);

    // Add the bot back to the main bots list
    setBots([...bots, bot]);
  };

  // Function to discharge a bot from your army permanently
  const dischargeBot = async (botId) => {
    // Remove the bot from your army
    const updatedArmy = yourBotArmy.filter((b) => b.id !== botId);
    setYourBotArmy(updatedArmy);

    // Discharge the bot from the backend
    try {
      await fetch(`http://localhost:3000/bots/${botId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  // Function to handle sorting
  const handleSort = (sortKey) => {
    setSortBy(sortKey);
  };

  // Filter bots based on selected filters
  const filteredBots = bots.filter((bot) => {
    if (selectedFilters.length === 0) return true;
    return selectedFilters.includes(bot.bot_class);
  });

  // Sort bots based on the selected sorting criteria
  const sortedBots = filteredBots.sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  return (
    <div>
      <h1>Bot Army Builder</h1>
      <SortBar onSort={handleSort} />
      <div className="container">
        {/* Render the BotCollection component */}
        <BotCollection bots={sortedBots} enlistBot={enlistBot} />

        {/* Render the YourBotArmy component */}
        <YourBotArmy army={enlistedBots} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </div>
    </div>
  );
};

export default App;

