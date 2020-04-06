// Assignment 9A
// <tr is="my-light" <tr is="plant-component">.

Vue.component('plant-component', {
  template: `<tr>
    <td>{{name}}</td>
    <td>{{date}}</td>
    <td>{{number}}</td>
    <td><img v-bind:src="image" v-bind:alt="name" /></td>
    <td>{{collected}}</td>
  </tr>`,
  props: ['name', 'date', 'number', 'image', 'collected']
});

const vm = new Vue({
  el: '#app',
  data: {
    newPlantObj: {
      name: '',
      date: null,
      number: '',
      image: '',
      collected: false
    },
    plants: [
      {
        name: 'Aster "Woods"',
        date: '08/2018',
        number: '9',
        image: 'images/asterW2rx.png',
        collected: true
      },
      {
        name: 'Coreopsis "Zagreb"',
        date: 'TBD',
        number: 'TBD',
        image: 'images/coreopsis2rx.png',
        collected: false
      },
      {
        name: 'Lupine "Russell hybrid mix"',
        date: '6/2018',
        number: '8',
        image: 'images/lupineHybrid2.png',
        collected: true
      },
      {
        name: 'Hemerocalis "Stella D Oro" (Daylilly)',
        date: '05/2018',
        number: '6',
        image: 'images/stellad3rx.png',
        collected: true
      },
      {
        name: 'Iris Germanica (Bearded Iris)',
        date: 'TBD',
        number: 'TBD',
        image: 'images/iris_beardGer2rx.jpg',
        collected: false
      },
      {
        name: 'Peony "Karl Rosenfeld"',
        date: '08/2018',
        number: '5',
        image: 'images/peonyMagn2.jpeg',
        collected: true
      }
    ]
  },
  methods: {
    submitHandler: () => {
      console.log('submitted');
      vm.plants = vm.plants.concat(vm.newPlantObj);
      vm.resetForm();
    },
    checkName: function () {
      if (this.newPlantObj.name !== '') {
        vm.submitHandler();
      } else {
        alert('Please fill in the name');
      }
    },
    resetForm: () => {
      vm.newPlantObj = {
        name: '',
        date: '',
        height: '',
        number: '',
        image: '',
        collected: false
      };
    },
    deleteItem: item => {
      vm.plants = vm.plants.filter(plant => {
        return plant !== item;
      });
    }
  }
});
