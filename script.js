
function convertTemperature() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");
    let resultElement = document.getElementById("result");

    if (celsiusInput.value !== "") {
      let celsius = parseFloat(celsiusInput.value);
      let fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (fahrenheitInput.value !== "") {
      let fahrenheit = parseFloat(fahrenheitInput.value);
      let celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      resultElement.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
      resultElement.textContent = "";
    }
  }