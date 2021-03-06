// Assignment10A Display data from an external API in Vue -w/ Node Modules 
/* created() and mounted() Vue.js hooks
 HTTP request - promise - .get .then method....function   
                    ****  -- >axios.get(url) .then(function (res) 
This combined with mounted() Vue hook here.  
Created() or mounted() Vue hook can also be written separate from HTTP request-promise-.get .then method */
Vue.component('beer-component', {
  template: `<div v-bind:class="['beer']">
                <img v-bind:src="beer.image_url" height="235" />
             <div>
             <div class = "info">
              <h3>{{beer.name}}</h3>
              <p>{{beer.tagline}}</p>
              <!--<p>{{beer.description}}-->
               <p>ABV -  {{beer.abv}}</p> 
              <p>Attenuation Level - {{beer.attenuation_level}}</p>
              <p>Yeast -  {{beer.ingredients.yeast}}</p>
            </div>
        </div>
      </div>`,
  props: ['beer']
});
const vm = new Vue({
  el: '#app',
  data: {
    beers: []
  },
  mounted () {
    axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=16').then(response => {
      console.log('response', response);
      vm.beers = response.data;
      console.log(vm.beers);
    });
  }
});