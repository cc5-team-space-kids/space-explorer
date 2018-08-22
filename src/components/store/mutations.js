export const SET_MESSAGE = (state, message) => {
  state.message = message;
};

export const SET_SATELLITES = (state, satellites) => {
  satellites.above.map((satellite) => {
    return {
      lat: satellite.satlat,
      lng: satellite.satlng,
    };
  })
  .forEach((satellite) => {
    state.markers.push({ position: satellite });
  });
};
