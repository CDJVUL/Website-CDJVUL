<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  props: ["modelValue"],

  mounted() {
    const { center, zoom } = this.modelValue

    const map = new mapboxgl.Map({
      accessToken: "pk.eyJ1IjoibHBzOTciLCJhIjoiY21rdDA4cXRoMW5kaTNmb2ZlZXdqcXI2dCJ9.pDUtwwHHj4Z05DrQ8rgLAg",
      container: this.$refs.mapContainer,
      style: "mapbox://styles/mapbox/standard",
      center,
      zoom
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([-71.27519738144522, 46.77866339706584])
      .addTo(map);

    // assign the map instance to this component's map property
    this.map = map;
  },

  // clean up the map instance when the component is unmounted
  unmounted() {
    this.map.remove();
    this.map = null;
  },

  methods: {
    getLocation() {
      return {
        center: this.map.getCenter(),
        zoom: this.map.getZoom(),
      };
    },
  }
};
</script>

<style>
/* make the map container fill its parent */
.map-container {
  width: 100%;
  height: 100%;
}
</style>