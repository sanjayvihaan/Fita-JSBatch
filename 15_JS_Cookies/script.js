// Basic Concepts to with Cookies

// --- Set a Cookie ---
document.cookie = "name=Sanjay; expires=Tue, 26 Nov 2024 20:35:00 UTC; path=/; priorit=low";
console.log(document.cookie);


// --- Get a Cookie ---
console.log(document.cookie);


// --- Delete a Cookie --
document.cookie = "name=; expires=Mon, 25 Nov 2024 00:00:00 UTC; path=/; priorit=low";



// ---- Example: Remembering the User's Name ----
// Want to greet the user by their name when they visit the site again


// --- set a cookie

function setUserNameCookie(name) {
    // document.cookie = `username=${name}; expires=Tue, 26 Nov 2024 20:35:00 UTC; path=/; priorit=medium`;
}


// --- get a cookie

function getUserNameCookie(){
    const cookies = document.cookie.split(';');

    for(let cookie of cookies) {
        const [key, values] = cookie.split('=');
        if (key === "username") {
            return values;
        }
    }

    return null;
}


// usage
const username = getUserNameCookie();

if (username) {
    alert(`Welcome back, ${username}`);
} else {
    const name = prompt("What is your name?");
    if (name) {
        setUserNameCookie(name);
        alert("Welcom, " + name + "! we'll remember you." )
    }
}


// Set Cookie for theme preference

function setTheme(theme) {
    document.cookie = `theme=${theme}; expires=Tue, 26 Nov 2024 20:35:00 UTC; path=/; priority=medium`;
}

// get cookie
function getTheme() {
    const cookiesList = document.cookie.split(';');
    for (let cookie of cookiesList) {
        const [key, value] = cookie.split('=');
        if (key === 'theme') {
            return value;
        }
    }

    return null;
}

const theme = getTheme();
if (theme === "dark") {
    document.body.classList.add("dark-theme");
}


// Toogle theme
const togglebtn = document.querySelector('#theme-toggle');
togglebtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    if (isDark) {
        document.body.classList.remove('dark-mode');
        setTheme('light');
    } else {
        document.body.classList.add('dark-mode');
        setTheme('dark');
    }
})
