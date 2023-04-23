<!DOCTYPE html>
<html>
<head>
  <title>Goons to the Moon</title>
  <style>
    /* Add custom CSS styles for your app's UI here */
  </style>
</head>
<body>
  <h1>Goons to the Moon</h1>
  <div id="gameOutput"></div>
  <button onclick="launchGoon('Heavy')">Launch Heavy Goon</button>
  <button onclick="launchGoon('Light')">Launch Light Goon</button>
  <button onclick="launchGoon('Smart')">Launch Smart Goon</button>
  <button onclick="launchGoon('Scrappy')">Launch Scrappy Goon</button>
  <button onclick="launchGoon('Normal')">Launch Normal Goon</button>
  <button onclick="putGoonsToWork()">Put Goons to Work</button>
  <script>
    // Game variables
    let goonsLaunched = 0;
    let moonDistance = 0;
    let gold = 0;
    let goonsOnMoon = 0;

    // Goon types with characteristics and costs
    const goonTypes = {
      'Heavy': { speed: 2, cost: 50 },
      'Light': { speed: 0.5, cost: 50 },
      'Smart': { speed: 1, cost: 100 },
      'Scrappy': { speed: 1, cost: 75 },
      'Normal': { speed: 1, cost: 25 }
    };

    // Function to start the game
    function startGame() {
      // Display game introduction and backstory
      document.getElementById('gameOutput').innerText = "Welcome to Goons to the Moon!\n\nIn the year 2099, Earth is facing an overpopulation crisis. To ease the strain on the planet, scientists have developed a plan to send goons, small humanoid robots, to the moon to establish a colony. Your task is to launch as many goons as possible to the moon and help establish a new civilization there.\n\nClick the buttons to launch goons towards the moon!";
    }

    // Function to launch a goon
    function launchGoon(goonType) {
      const goon = goonTypes[goonType];
      if (gold >= goon.cost) {
        gold -= goon.cost;
        goonsLaunched++;
        moonDistance += Math.floor(Math.random() * 101 * goon.speed); // Random distance multiplied by goon's speed
        updateGameOutput();
      } else {
        alert("Not enough gold to launch this goon.");
      }
    }

    // Function to put goons to work on the moon
    function putGoonsToWork() {
      if (goonsLaunched > 0) {
        goonsOnMoon = goonsLaunched;
        gold += goonsOnMoon * 5; // 5 gold per second per goon on the moon
        updateGameOutput();
        setInterval(function() {
          gold += goonsOnMoon * 5; // Update gold every second
          updateGameOutput();
        }, 1000);
      } else {
        alert("No goons have been launched yet.");
      }
    }

    // Function to update game output
    function updateGameOutput() {
      let gameOutput = `Goons Launched: ${goonsLaunched}\nMoon Distance: ${moonDistance}
