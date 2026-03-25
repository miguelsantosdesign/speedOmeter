const speedDiv = document.getElementById("speed");

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(position => {
        let speed = position.coords.speed;

        if (speed === null) {
            speedDiv.textContent = "Detecting speed...";
            return;
        }

        let kmh = speed * 3.6;
        speedDiv.textContent = kmh.toFixed(1) + " km/h";
    });
}