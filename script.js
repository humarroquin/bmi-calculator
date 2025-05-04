"use strict";

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const metricResult = document.querySelector(".metric-result");
const welcomeMessage = document.querySelector(".welcome-message");
const metricMessage = document.querySelector(".metric-message");
const BMIDescription = document.querySelector(".BMI-description");

function updateUI() {
  const heightVal = Number(height.value);
  const weightVal = Number(weight.value);

  // don't update on empty inputs or height numbers below 100
  if (!weightVal || !heightVal || heightVal < 100) {
    welcomeMessage.classList.remove("hidden");
    metricMessage.classList.add("hidden");
    return;
  }

  // proceed to update UI with BMI result and message
  welcomeMessage.classList.add("hidden");
  metricMessage.classList.remove("hidden");

  // convert to numbers and height to meters
  const heightInMetersValue = heightVal / 100;

  function calculateBMI() {
    return weightVal / heightInMetersValue ** 2;
  }

  function getWeightRange(bmi) {
    return bmi * heightInMetersValue ** 2;
  }

  const BMI = calculateBMI();
  const minWeight = getWeightRange(18.5);
  const maxWeight = getWeightRange(24.9);
  const isHealthy = BMI >= 18.5 && BMI <= 24.9;

  metricResult.textContent = BMI.toFixed(1);

  BMIDescription.textContent = `Your BMI suggests that you have ${
    isHealthy ? "a healthy" : "an unhealthy"
  } weight. ${
    isHealthy
      ? `Your ideal weight should be between ${minWeight.toFixed(
          1
        )}kg and ${maxWeight.toFixed(1)}kg`
      : ""
  }`;
}

weight.addEventListener("input", updateUI);
height.addEventListener("input", updateUI);
