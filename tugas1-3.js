
const printSegitiga = (num) => {
    if (typeof num !== "number" || num <= 0) {
      console.log("Input positive number");
      return;
    }
    for (let i = num; i >= 1; i--) {
      let print = "";
      for (let j = 1; j <= i; j++) {
        print += j + " ";
      }
      console.log(print);
    }
  };
  
  printSegitiga(5);