import {
  resolve
} from 'path';
import {
  rejects
} from 'assert';

export const ADD_MESSAGE = (store, message) => {
  store.commit("SET_MESSAGE", message)
}

export const SET_BACKGROUND_URL = (store) => {
  const RapidAPI = require('rapidapi-connect');
  const rapid = new RapidAPI(process.env.VUE_APP_RAKUTEN_PKG, process.env.VUE_APP_RAKUTEN_PROJ);

  rapid.call('NasaAPI', 'getPictureOfTheDay', {
    'apiKey': process.env.VUE_APP_NAK
  }).on('success', (result) => {
    store.commit("SET_IMG_URL", result.url);
  }).on('error', (err) => {
    console.log(err);
  });
}

export const SET_SATELLITES = async (store, loc) => {
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

export const SET_SUN_INFO = async (store, loc) => {
  const d = new Date();
  const lat = loc.lat;
  const lng = loc.lng;
  const date = d.getUTCFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + d.getUTCDay();

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

  store.commit("SET_SUN_INFO", info);
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

  store.commit("SET_MOON_INFO", info);
};