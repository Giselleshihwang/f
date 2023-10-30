function showwinfChill(temp, windspeed){
    const windChillSpan = document.getElementById("whindchill")
    let message ="N/A";

    if(temp<=50 && speed >3){
        let chillfactor = Math.pow(speed, 0.16);
        let chill = 35.75 + (0.6215*temp) - (35.75*chillfactor) + (0.4275 * temp * chillfactor);
        message = `${chill}`;
    }

    windChillSpan.textContent = message
}

const temperatureSpan = document.getElementById("temperature");
const windspeedSpan = document.getElementById("windspeed");
const temperature = parseFloat(temperatureSpan.textContent);
const windspeed = parseFloat(windspeedSpan.textContent);

showwinfChill(temperature, windspeed);