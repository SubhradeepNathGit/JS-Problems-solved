// Convert an async operation to return a Promise

function fetchData() {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}


fetchData()
  .then(result => console.log(result))  
  .catch(error => console.error(error)); 
