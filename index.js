// const Donate = document.getElementById('donate'); 
// Donate.addEventListener('click', function() { 
//     window.location.href = 'donate/donate.html'; 
// });

// // Simulated data
// const conflicts = {
//     gaza: 50000,
//     ukraine: 1000000,
//     syria: 656000,
//     sudan: 30000,
//     yemen: 377000,
//     myanmar: 50000
//   };

//   // Function to simulate count updates
//   function updateCounts() {
//     for (let region in conflicts) {
//       // Simulate an increase
//       conflicts[region] += Math.floor(Math.random() * 5);
//       document.getElementById(region).textContent = conflicts[region].toLocaleString();
//     }
//   }

//   // Update counts every 5 seconds
//   setInterval(updateCounts, 3000);
document.addEventListener("readystatechange", function () {
  let progressBar = document.getElementById("progress-bar");
  let loadingScreen = document.getElementById("loading-screen");
  let content = document.getElementById("content");

  let loadingStages = { "loading": 30, "interactive": 70, "complete": 100 };
  let progress = loadingStages[document.readyState] || 0;

  progressBar.style.width = progress + "%";
  progressBar.style.background = `linear-gradient(to right, purple ${100 - progress}%, white ${progress}%)`;

  if (document.readyState === "complete") {
      setTimeout(() => {
          loadingScreen.style.display = "none";
          content.style.display = "block";
      }, 500);
  }
});








// const login = document.getElementById('login');
// login.addEventListener('click', function() { 
//     window.location.href = 'login/login.html'; 
// });