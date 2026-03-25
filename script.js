let lastPosition = null;

function distanceMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = x => x * Math.PI / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon/2) * Math.sin(dLon/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

navigator.geolocation.watchPosition(position => {
    if (lastPosition) {
        const lat1 = lastPosition.coords.latitude;
        const lon1 = lastPosition.coords.longitude;
        const lat2 = position.coords.latitude;
        const lon2 = position.coords.longitude;

        const distance = distanceMeters(lat1, lon1, lat2, lon2);

        const time = (position.timestamp - lastPosition.timestamp) / 1000;

        const speed = distance / time;

        document.getElementById("speed").textContent =
            speed.toFixed(2) + " m/s";
    }

    lastPosition = position;
});