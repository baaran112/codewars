// DESCRIPTION:
// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

const howManyGifts = (maxBudget, gifts) => {
    const sortedArray = gifts.sort( (a, b) => a - b )
    let result = 0;
    let x = 0;
    
    for (let i = 0 ; i < sortedArray.length ; i++) {
      if (maxBudget === 0){
        result = 0;
      }else if (maxBudget > 0 && x < maxBudget && sortedArray[i] >= 0){
        x += sortedArray[i];
        result++;
      }
    }
    
    if (x > maxBudget){
      result--;
    }
    
    return result;
  }