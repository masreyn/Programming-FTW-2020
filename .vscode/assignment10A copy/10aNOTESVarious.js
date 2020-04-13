Vue.component('beer-component', {
    template: `
       <div v-bind:class="['beer']">
         <!--<img v-bind:src="beer.image" v-bind:alt="beer.name">
          <img v-bind:src="beer.img" height="300" />-->
          <img v-bind:src="beer.image_url" height="300" />
        <div>
          <h3>{{beer.name}}</h3>
          <h5>
            <p>Description - {{beer.desription}}}</p>
            <p>Yeast - {{beer.yeast}}</p>
            <p>Hops - {{beer.hops}}</p>
            <p>ABV - {{beer.abv}}</p>
          </h5>
        </div>
      </div>`,
  props: ['beer'],
});

// var baseURL = "https://api.punkapi.com/v2/beers/random"
const vm = new Vue({
  el: '#app',
  data: {
    beers: []
  },
  /* created: function () {
            this.fetchApod();
        },
        methods: {
            fetchApod: function () {
                var apiKey = 'lkgI9to0hRizfzk4xTAxtNTTFkkA4Mtq7y1yW5me';
                var url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;
                axios.get(url)
                    .then(function (res) {
                        vm.imgSrc = res.data.url;
                        vm.imgTitle = res.data.title;
                    });
            }
        }
    });

    methods: {
        getFilms: function() {
            axios.get(baseURL + "/films").then(function(response){
                console.log(response);
                vm.films = response.data;
            })
        }
    },
    created: function() {
        this.getFilms();
    }
    should work- but not// // // // // // // // 
            mounted () {
            axios.get('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                // console.log('response', response);
                vm.beers = response.data;
                // console.log(vm.beers);
            });
        }
  */
var baseURL = "https://api.punkapi.com/v2/beers/random"
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