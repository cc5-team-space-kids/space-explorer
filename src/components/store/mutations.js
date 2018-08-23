export const SET_CENTER = (state, newCenter) => {
  state.center = newCenter;
}

export const SET_IMG_URL = (state, url) => {
  state.imgUrl = url;
}

export const SET_SATELLITES = (state, satellites) => {
  satellites.above.map((satellite) => {
    return {
      lat: satellite.satlat,
      lng: satellite.satlng,
      al: satellite.satalt,
      name: satellite.satname,
      launchDate: satellite.launchDate,
    };
  })
  .forEach((satellite) => {
    state.markers.push({ position: satellite });
  });
};

export const SET_SUN_INFO = (state, sunInfo) => {
  state.sunInfo = JSON.parse(sunInfo);
};

export const SET_MOON_INFO = (state, moonInfo) => {
  state.moonInfo.push(moonInfo);
};
