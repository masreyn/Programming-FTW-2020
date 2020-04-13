Vue.component('beer-component', {
  template: `<div v-bind:class="['beer']">
         <!--<img v-bind:src="beer.image" v-bind:alt="beer.name">
          <img v-bind:src="beer.img" height="300" />-->
          <img v-bind:src="beer.image_url" height="300" />
         <div>
          <h3>{{beer.name}}</h3>
          <h5>
            <!--<p>Description - {{beer.description}}</p>-->
            <p>Blurb - {{beer.tagline}}
            <p>ABV {{beer.abv}}</p>
            <p>Attenuation Level - {{beer.attenuation_level}}</p>
            <p>Hops - {{beer.hops}}</p>
            <p>Yeast {{beer._yeast}}</p>
          </h5>
        </div>
      </div>`,
  props: ['beer']
});

// var baseURL = "https://api.punkapi.com/v2/"
const vm = new Vue({
  el: '#app',
  data: {
    beers: []
  },
  mounted () {
    axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=15').then(response => {
      console.log('response', response);
      vm.beers = response.data;
      console.log(vm.beers);
    });
  }
});