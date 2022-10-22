// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
function bmi(weight, height) {
    const BMI = weight / (height*height);
    return BMI <= 18.5? "Underweight" : (BMI <= 25.0? "Normal": (BMI <= 30.0? "Overweight" : "Obese"));
  }