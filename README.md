# Project Name
### Bot Army Builder

## Author
### AARON KIPTOO

## Description

Bot Army Builder is a web application that allows users to build their own bot army by enlisting bots from a collection of available bots. Users can view detailed information about each bot, sort the bots by health, damage, or armor, and filter the bots by their class. Once enlisted, the bots will be added to the user's bot army. The user can also release bots from their army or discharge them permanently from service.

## Table of Contents

    * Features
    * Technologies Used
    * Getting Started
    * Installation
    * Dependencies
    * Usage
    * Contributing
    * License

## Features

    * View a collection of available bots with their names, classes, health, damage, armor, and catchphrases.
    * Click on a bot to view detailed specifications in the BotSpecs component.
    * Enlist bots into your bot army by clicking the "Enlist" button in the BotSpecs view.
    * Delete transactions to remove them from the list.
    * Sort the bots in the collection by their health, damage, or armor using the SortBar component.
    * Filter the bots by their class (Support, Medic, Assault, Defender, Captain, or Witch) using the SortBar component.
    * View your enlisted bot army with their names, classes, health, damage, and armor in the YourBotArmy component.
    * Release bots from your army by clicking the "Release" button in the YourBotArmy component.
    * Permanently discharge bots from service by clicking the "Discharge" button in the YourBotArmy component.

## Technologies Used

   * React: A JavaScript library for building user interfaces.
   * Axios: A promise-based HTTP client for making API requests.
   * CSS: Used for styling the application.

## Installation
To get started with Bot Army Builder, follow these steps:

Clone the repository to your local machine using the following command:

    * git clone git@github.com:arronkiptoo/Bot-Battlr.git

Navigate to the project directory:


    * cd bot-robot

Install the required dependencies:

    * npm install
    or
    * npm install react-router-dom

Usage

Start the development server:


    * npm start

* Open your web browser and navigate to http://localhost:3001 to access the application.

## Dependencies

Bot Army Builder uses the following dependencies:

    * React: A JavaScript library for building user interfaces.

    * react-dom: A package that provides DOM-specific methods for React.

    * react-scripts: A set of scripts and configuration used by Create React App.

## API

The application fetches bot data from a local backend API, which is provided in the *db.json* file. The API runs on *http://localhost:3000/bots* and returns a list of available bots in JSON format.

## Demo Images


## Contributing

Contributions to Bot Army Builder are welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request.

## License
MIT License

Copyright (c) 2023 AARON KIPTOO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

