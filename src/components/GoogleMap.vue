<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace"
        />
        <button @click="addMarker">Add</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="5"
      map-type-id="satellite"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: this.$store.state.center,
      markers: this.$store.state.markers,
      places: this.$store.state.places,
      currentPlace: this.$store.state.currentPlace,
    };
  },

  watch: {
    center: function (val, oldVal) {
      if (val !== oldVal) {
        this.getSatellites();
        this.getSunInfo();
      }
    }
  },

  async mounted() {
    const location = await this.geolocate();
    this.getMoonInfo();
  },

  

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    getSatellites() {
      const loc = this.center;
      this.$store.dispatch("SET_SATELLITES", loc);
    },
    getSunInfo() {
      const loc = this.center;
      this.$store.dispatch("SET_SUN_INFO", loc);
    },
    getMoonInfo() {
      this.$store.dispatch("SET_MOON_INFO");
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>