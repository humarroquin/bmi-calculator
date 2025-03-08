"use strict";

// metric
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const metricResult = document.querySelector(".metric-result");
const welcomeMessage = document.querySelector(".welcome-message");
const metricMessage = document.querySelector(".metric-message");
const BMIDescription = document.querySelector(".BMI-description");

let weight1, weight2;

function metricBMICalculation() {
  if (!weight.value || !height.value || height.value < 100) {
    welcomeMessage.classList.remove("hidden");
    metricMessage.classList.add("hidden");
    return;
  }

  welcomeMessage.classList.add("hidden");
  metricMessage.classList.remove("hidden");

  const heightInMetersValue = Number(height.value) / 100;
  const weightValue = Number(weight.value);
  const BMI = weightValue / heightInMetersValue ** 2;
  metricResult.textContent = BMI.toFixed(1);
  const idealWeight = BMI * heightInMetersValue ** 2;

  // todo: calculate ranges: "Your ideal weight is between 63.3kgs - 85.2kgs."
  BMIDescription.textContent = `Your BMI suggests that you have a ${
    BMI >= 18.5 && BMI <= 24.9 ? "healthy" : "unhealthy"
  } weight. Your ideal weight should be ${idealWeight.toFixed(1)}kgs.`;
}

weight.addEventListener("input", metricBMICalculation);
height.addEventListener("input", metricBMICalculation);
