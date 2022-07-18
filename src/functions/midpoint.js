const toRad = (val) => {
  return (val * Math.PI) / 180;
};

const toDeg = (val) => {
  return val * (180 / Math.PI);
};

//-- Define middle point function
export function middlePoint(lat1, lng1, lat2, lng2) {
  //-- Longitude difference
  var dLng = toRad(lng2 - lng1);

  //-- Convert to radians
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);
  lng1 = toRad(lng1);

  let bX = Math.cos(lat2) * Math.cos(dLng);
  let bY = Math.cos(lat2) * Math.sin(dLng);
  let lat3 = Math.atan2(
    Math.sin(lat1) + Math.sin(lat2),
    Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY)
  );
  let lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

  //-- Return result
  return [toDeg(lng3), toDeg(lat3)];
}
