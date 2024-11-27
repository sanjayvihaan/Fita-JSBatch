function loadDoc() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    // Method: GET,POST, PUT, DELETE
    xhttp.open("GET", "simple.txt");
    xhttp.send();

}


let req = new XMLHttpRequest();
console.log(req);


req.onload = function() {

}



// Weather API

document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const location = document.getElementById("location").value;
    const apiKey = "c31e24a92c624e149fc181417232412"
    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    // console.log(location);

    // Create an XMLHttpRequest object
    const httpReq = new XMLHttpRequest();
    httpReq.open("GET", apiURL);


    httpReq.onload = function() {
        let weatherDiv = document.getElementById("weather");


        if (httpReq.status == 200) {
            const data = JSON.parse(httpReq.responseText);
            weatherDiv.innerHTML = `
            <h2>Weather in ${data.location.name}</h2><br>
                <img src="${data.current.condition.icon}" alt="Weather Icon">
               <p>Location: ${data.location.name}, ${data.location.country}, ${data.location.region}</p>
               <p>Temperature: ${data.current.temp_c}°C, ${data.current.temp_f}°F  </p>
               <p>Humidity: ${data.current.humidity}</p>
            `
            console.log(data);

        } else {
            console.error("Error: ", httpReq.status);
            console.log("Error: ", httpReq.responseText);
        }
    }


    httpReq.send();




})


