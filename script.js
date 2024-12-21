
// Convert Celsius to Fahrenheit or vice versa.
// Task:
// Ask the user to choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.
// Take the temperature as input and use the formulas:
// C to F: F=(C×9/5)+32F = (C \times 9/5) + 32F=(C×9/5)+32
// F to C: C=(F−32)×5/9C = (F - 32) \times 5/9C=(F−32)×5/9
// Print the result using if conditions to ensure the correct formula is applied.
  var conversionType = prompt("Choose a conversion type:\n1 for Celsius to Fahrenheit\n2 for Fahrenheit to Celsius");
  var temperature = prompt("Enter the temperature:");  
  
  
  if (conversionType == 1) 
    {
      result = (temperature * 9/5) + 32;
      console.log(temperature + "°C is " + result + "°F");
  } 
  else if (conversionType == 2) 
    {
      result = (temperature - 32) * 5/9;
      console.log(temperature + "°F is " + result + "°C");
  } 
  else {
      console.log("Invalid choice. Please enter 1 or 2.");
  }



  