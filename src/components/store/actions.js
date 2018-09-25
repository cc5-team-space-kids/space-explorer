export const ADD_MESSAGE = (store, message) => {
  store.commit("SET_MESSAGE", message)
}

export const SET_CENTER = (store, newPosition) => {
  store.commit("SET_CENTER", newPosition);
};

export const SET_BACKGROUND_URL = (store) => {
  const RapidAPI = require('rapidapi-connect');
  const rapid = new RapidAPI(process.env.VUE_APP_RAKUTEN_PKG, process.env.VUE_APP_RAKUTEN_PROJ);

  rapid.call('NasaAPI', 'getPictureOfTheDay', { 
    'apiKey': process.env.VUE_APP_NAK    
    }).on('success', (result)=>{
      let url = "";
      if (!result) {
        url = "https://apod.nasa.gov/apod/image/1809/NGC6727-drudis.jpg";
      } else {
        url = result.hdurl;
      }
      store.commit("SET_IMG_URL", url);
    }).on('error', (err)=>{
      console.log(err);
    });
}

export const SET_SATELLITES = async (store, loc) => {
  const url = `https://www.n2yo.com/rest/v1/satellite/above/${loc.lat}/${loc.lng}/100/30/0/&apiKey=${process.env.VUE_APP_SATELITE_API}`
  const satellites = await fetch(url)
    .then((data) => {
      return data.json();
    })
    .catch((e) => console.log(e));

  store.commit("SET_SATELLITES", satellites);
};

export const SET_SUN_INFO = async (store, loc) => {
  const d = new Date();
  const lat = loc.lat;
  const lng = loc.lng;
  const date = d.getUTCFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + d.getDate();

  const url = `https://sun.p.mashape.com/api/sun/?latitude=${lat}&longitude=${lng}&date=${date}`;

  const unirest = require('unirest');

  const info = await new Promise((resolve) => {
    unirest.get(url)
    .header("X-Mashape-Key", "OHJHR7IfeCmshao1sHNDuj8PtDi1p1fNjd1jsnXbs3LPozz5rN")
    .header("X-Mashape-Host", "sun.p.mashape.com")
    .end((res) => {
      if (res) {
        resolve(res.body);
      }
    });
  })

  if (info !== undefined){
    store.commit("SET_SUN_INFO", info);
  }
  console.log("Sun info API doesn't work.")
};

export const SET_MOON_INFO = async (store) => {
  const unirest = require('unirest');

  const info = await new Promise((resolve) => {
    unirest.get("https://burningsoul-moon-v1.p.mashape.com/")
      .header("X-Mashape-Key", "OHJHR7IfeCmshao1sHNDuj8PtDi1p1fNjd1jsnXbs3LPozz5rN")
      .header("X-Mashape-Host", "burningsoul-moon-v1.p.mashape.com")
      .end((res) => {
        if (res) {
          resolve(res.body);
        }
      });
  })
  if (info !== undefined){
    store.commit("SET_MOON_INFO", info);
  }
  console.log("Moon info API doesn't work.")
};