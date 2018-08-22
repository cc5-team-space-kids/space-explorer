export const ADD_MESSAGE = (store, message) => {
  store.commit("SET_MESSAGE", message);
};

export const SET_SATELLITES = async (store, lat, lon) => {
  // TODO: async calls to https://www.n2yo.com/rest/v1/satellite/above/41.702/-76.014/0/70/18/&apiKey=
  console.log("here is huuuu");

  const satellites = {
    info: { category: "Amateur radio", transactionscount: 2, satcount: 3 },
    above: [
      {
        satid: 2655,
        satname: "OPS 9328 (IDSCS 15)",
        intDesignator: "1967-003H",
        launchDate: "1967-01-18",
        satlat: -1.4806,
        satlng: -38.0926,
        satalt: 33667.2074
      },
      {
        satid: 25396,
        satname: "TMSAT",
        intDesignator: "1998-043C",
        launchDate: "1998-07-10",
        satlat: 46.0963,
        satlng: -59.8386,
        satalt: 814.9339
      },
      {
        satid: 40054,
        satname: "AISAT",
        intDesignator: "2014-034B",
        launchDate: "2014-06-30",
        satlat: 41.1694,
        satlng: -84.9528,
        satalt: 638.2996
      }
    ]
  };
  store.commit("SET_SATELLITES", satellites);
};
