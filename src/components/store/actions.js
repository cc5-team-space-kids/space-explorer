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