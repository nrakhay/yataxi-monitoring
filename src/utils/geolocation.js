const defaultCenter = {
  lat: 43.23981336939662,
  lng: 76.90414653118162,
};

const getBrowserLocation = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: lng } = pos.coords;
          resolve({ lat, lng });
        },
        () => {
          reject(defaultCenter);
        }
      );
    } else {
      reject(defaultCenter);
    }
  });
};

export default getBrowserLocation;
