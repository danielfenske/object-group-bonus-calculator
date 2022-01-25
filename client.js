const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonusCalc(array) {
  console.log('in bonusCalc');
  
  for (let i=0; i<array.length; i++) {
    if (array[i].reviewRating <= 2) {
      console.log(array[i], 'No bonus this year');
    }else if (array[i].reviewRating === 3) {
      console.log(array[i], '4% bonus this year');
      
    } else if (array[i].reviewRating === 4) {
      console.log(array[i], '6% bonus this year');
      
    } else if (array[i].reviewRating === 5) {
      console.log(array[i], '10% bonus this year');
      
    } 
    
  } // end loop
} // bonusCalc

bonusCalc(employees);