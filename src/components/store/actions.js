export const ADD_MESSAGE = (store, message) => {
  store.commit("SET_MESSAGE", message)
}

export const SET_BACKGROUND_URL = (store) => {
  // const RapidAPI = require('rapidapi-connect');
  // const rapid = new RapidAPI(process.env.VUE_APP_RAKUTEN_PKG, process.env.VUE_APP_RAKUTEN_PROJ);

  // rapid.call('NasaAPI', 'getPictureOfTheDay', { 
  // }).on('success', (result)=>{
  //   store.commit("SET_IMG_URL", result.url);
  // }).on('error', (err)=>{
  //   console.log(err);
  // });

  // const url = "https://photojournal.jpl.nasa.gov/jpeg/PIA14417.jpg";
  // store.commit("SET_IMG_URL", url);

}
 
export const SET_SATELLITES = async (store, loc) => {
  // TODO: async calls to https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18/&apiKey=
  const url = `https://www.n2yo.com/rest/v1/satellite/above/${loc.lat}/${loc.lng}/100/30/0/&apiKey=${process.env.VUE_APP_SATELITE_API}`
  const satellites = await fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      return json;
    })
    .catch((e) => console.log(e));

  store.commit("SET_SATELLITES", satellites);
};
