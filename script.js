const speedDiv = document.getElementById("speed");

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(position => {
        let speed = position.coords.speed;

        if (speed === null) {
            speedDiv.textContent = "Detecting speed...";
            return;
        }

        speedDiv.textContent = speed.toFixed(2);
    });
}