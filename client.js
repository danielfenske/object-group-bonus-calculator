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

    let object = {
      name: array[i].name,
      bonusPercentage: array[i].bonusPercentage,
      totalCompensation: array[i].totalCompensation,
      totalBonus: array[i].totalBonus
    };

    if (array[i].reviewRating <= 2) {
      // console.log(array[i], 'No bonus this year');
      object.bonusPercentage = 0;

    } else if (array[i].reviewRating === 3) {
      // console.log(array[i], '4% bonus this year');
     object.bonusPercentage = 4;
      
    } else if (array[i].reviewRating === 4) {
      // console.log(array[i], '6% bonus this year');
     object.bonusPercentage = 6;
      
    } else if (array[i].reviewRating === 5) {
      // console.log(array[i], '10% bonus this year');
      object.bonusPercentage = 10;
  
    }
    // console.log(object); // outputs all correct bonus percentages for each employee

    if (array[i].employeeNumber.length === 4) {
      object.bonusPercentage += 5;
    }
    // console.log(object); // bonus percentage for Scout and Atticus goes up 5
    
    if (array[i].annualSalary > 65000) {
      object.bonusPercentage -= 1;
    }
    // console.log(object); // bonus percentage for Scout and Robert go down 1

    if (object.bonusPercentage < 0) {
      object.bonusPercentage = 0;
    }
    console.log(object); // bonus percentage for Robert goes to 0

    if (object.bonusPercentage > 13) {
      object.bonusPercentage = 13;
    }
    console.log(object); // Scout's bonus percentage reduced to 13

  } // end loop
} // bonusCalc

bonusCalc(employees);


// salary = (salary * .04) + (+salary);