// Function to simulate ordering food (returns a Promise)
function orderFood() {
    return new Promise((resolve) => {
      console.log("Order placed: Food is being ordered");
      resolve(); // Once the order is placed, resolve the promise
    });
  }
  
  // Function to simulate cooking food (returns a Promise)
  function cookFood() {
    return new Promise((resolve) => {
      console.log("Cooking the food");
      resolve(); // Once cooking is done, resolve the promise
    });
  }
  
  // Function to simulate serving food (returns a Promise)
  function serveFood() {
    return new Promise((resolve) => {
      console.log("Serving the food");
      resolve(); // Once food is served, resolve the promise
    });
  }
  
  // Function to simulate eating food (returns a Promise)
  function eatFood() {
    return new Promise((resolve) => {
      console.log("Eating the food");

      resolve(); // Once food is eaten, resolve the promise
    });
  }
  
  // Using async/await to handle the process sequentially
  async function foodProcess() {
    try {
      await orderFood();  // Wait for the food order to be placed
      await cookFood();   // Wait for the food to be cooked
      await serveFood();  // Wait for the food to be served
      await eatFood();    // Wait for the food to be eaten
      console.log("Food process is complete!");  // Final message when everything is done
    } catch (error) {
      console.error("An error occurred:", error);  // Error handling if something goes wrong
    }
  }
  

  foodProcess();

  function add(){
    alert("work is done😎😎😊😉😊😎😎")
  }
  