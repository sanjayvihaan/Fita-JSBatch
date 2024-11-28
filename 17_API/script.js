// Function to show response on the screen:

function showResponse(data) {
    document.getElementById("response").innerText = JSON.stringify(data, null, 2);
}

// Function for AJAX Request:

function ajaxRequest(url, data) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);

    xhttp.onload = function() {
        if (xhttp.status === 200) {
            showResponse(JSON.parse(xhttp.responseText))
        } else {
            showResponse({ error: xhttp.statusText })
        }
    };

    xhttp.onerror = function() {
        showResponse({ error: "Network Error" })
    };

    xhttp.send(JSON.stringify(data));
}

// Fuction to fetch request
function fetchRequest(url, data) {
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data),
    })
     .then((response) => response.json())
     .then((data) => showResponse(data))     
     .then((error) => showResponse({ error: error.message }));
}   


// API Endpoints:
const sendOtpUrl = "http://localhost:3000/api/auth/send-otp";
const verifyOtpUrl = "http://localhost:3000/api/auth/verify-otp";
const setupPasswordUrl = "http://localhost:3000/api/auth/user-setup-password";
const loginUrl = "http://localhost:3000/api/auth/login-user";

// Fuction to get values from input fields:

function getValue(id) {
    return document.getElementById(id).value.trim();
}

// Event Listener for buttons

document.getElementById("sendOtp").addEventListener("click", function() {
    const phone = getValue("phone");

    if (!phone) {
        return showResponse({ error: "Phone number is required" });
    }

    const requestData = {phone};
    fetchRequest(sendOtpUrl, requestData);

})


document.getElementById("verfiyOtp").addEventListener("click", function() {
    const phone = getValue("phone");
    const otp = getValue("otp");

    if (!phone || !otp) {
        return showResponse({ error: "Phone number and otp is required" });
    }

    const requestData = {phone, otp};
    fetchRequest(verifyOtpUrl, requestData);

})


document.getElementById("setupPassword").addEventListener("click", function() {
    const phone = getValue("phone");
    const password = getValue("password");

    if (!phone || !password) {
        return showResponse({ error: "Phone number and password is required to set" });
    }

    const requestData = {phone, password};
    fetchRequest(setupPasswordUrl, requestData);

})

document.getElementById("loginUser").addEventListener("click", function() {
    const phone = getValue("phone");
    const password = getValue("password");

    if (!phone || !password) {
        return showResponse({ error: "Phone number and password is required to Login" });
    }

    const requestData = {phone, password};
    fetchRequest(loginUrl, requestData);

})