window.alert("Welcome to the Spaceship Access Portal");

document.getElementById("loginButton").onclick = function () {
    const password = document.getElementById("password").value;
    const spaceship = document.getElementById("spaceship");
    const loginButton = document.getElementById("loginButton");
    
    if (password === "Password" || password === "password") {
        // Success - Launch sequence
        loginButton.textContent = "LAUNCHING...";
        loginButton.disabled = true;
        
        // Add launch sequence animation
        spaceship.classList.add("launch-sequence");
        
        // Play launch sound effect (optional)
        // You can add an audio element for sound effects
        
        setTimeout(() => {
            window.alert("Launch Successful! Welcome aboard!");
            // Navigate to website2 after animation
            window.location.href = "portal.html";
        }, 3000); // Wait for animation to complete
        
        document.getElementById("password").value = "";
    } else {
        // Failed login - Shake effect
        window.alert("Access Denied! Invalid access code!");
        
        // Add error animation
        spaceship.style.animation = "none";
        spaceship.style.transform = "translateX(-10px)";
        
        setTimeout(() => {
            spaceship.style.transform = "translateX(10px)";
        }, 100);
        
        setTimeout(() => {
            spaceship.style.transform = "translateX(-5px)";
        }, 200);
        
        setTimeout(() => {
            spaceship.style.transform = "translateX(5px)";
        }, 300);
        
        setTimeout(() => {
            spaceship.style.transform = "translateX(0)";
            spaceship.style.animation = "spaceshipHover 3s ease-in-out infinite alternate";
        }, 400);
        
        document.getElementById("password").value = "";
        loginButton.textContent = "LAUNCH";
        loginButton.disabled = false;
    }
}
