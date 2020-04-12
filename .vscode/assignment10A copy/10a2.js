Vue.component('beer-component', {
    template: `
       <div v-bind:class="['beer']">
                      <!--<img v-bind:src="beer.image" v-bind:alt="beer.name">
                        <img v-bind:src="beer.img" height="300" />
                        <p>Yeast - {{beer._yeast}}</p>>-->
          <img v-bind:src="beer.image_url" height="300" /  
         <div>
          <h3>{{beer.name}}</h3>
          <h5>
            <p>Description - {{beer.desription}}}</p>
            <p>Yeast - {{beer._yeast}}</p>
            <p>Hops - {{beer.hops}}</p>
            <p>ABV - {{beer.abv}}</p>
          </h5>
        </div>
      </div>`,
  props: ['beer'],
});

const vm = new Vue({
  el: '#app',
  data: {
    beers: []
},
var baseURL="https://api.punkapi.com/v2/beers?page=1&per_page=8"
    created: function() {
    this.getBeers();
}
methods: {
  axios.get('baseURL')
  .then(response => {
  vm.beers = response.data;
  });
 } 
});