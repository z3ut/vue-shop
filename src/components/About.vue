<template>
  <div class="container">
    <div id="map"></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu elementum turpis. Vivamus pellentesque ultrices erat, in tincidunt ipsum pulvinar sit amet. Ut nisl sem, pulvinar quis elit ac, dictum accumsan lorem. Duis ultricies dolor a quam sagittis sagittis. Suspendisse vel laoreet nulla. Maecenas et felis arcu. Nullam dignissim finibus purus a tristique. Morbi finibus a metus eget cursus. Aliquam a velit elit.</p>
    <p>Vestibulum ornare enim nulla, id tempor tortor viverra ac. Aenean neque magna, cursus id ullamcorper id, convallis mattis ex. Duis tempus, risus et maximus cursus, quam mauris dignissim ante, finibus pulvinar ligula mi ac arcu. Vivamus dapibus et felis ut egestas. Duis ac tincidunt tortor. Phasellus rutrum interdum quam ut porttitor. Quisque libero lorem, tristique in hendrerit vitae, tempor sit amet risus. Proin at felis sagittis, ultrices sapien ac, maximus purus. Maecenas venenatis dolor non nunc eleifend, lobortis mollis erat mollis. Nunc at ornare metus, eu auctor lectus.</p>
  </div>
</template>

<script>
import L from 'leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../node_modules/leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('../../node_modules/leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('../../node_modules/leaflet/dist/images/marker-shadow.png')
})
const MAP_DEFAULT_ZOOM = 14
const MAP_DEFAULT_CENTER = L.latLng(53.982895, 27.404664)

export default {
  name: 'about',
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.map = L.map('map')
      .setView(MAP_DEFAULT_CENTER, MAP_DEFAULT_ZOOM)
    this.map.attributionControl.setPrefix('')
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy;&nbsp;<a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors,&nbsp;' + new Date().getFullYear()
    }).addTo(this.map)
    L.marker(MAP_DEFAULT_CENTER, {})
      .bindPopup('My gorgeous shop')
      .addTo(this.map)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../shared/styles/main.scss';

#map {
  height: 400px;
  width: 500px;
  float: left;
  margin: .5em;
}

img {
  float: right;
  margin: .5em;
}

p {
  text-align: justify;
}
</style>
