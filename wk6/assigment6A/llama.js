// Vue Introduction-https://vuejs.org/v2/guide/
/*          In <html> 
  v-bind:title="message" | v-if=""" | v-for="todo in todos" 
  v-on:click="reverseMessage" | v-model="message"  */

  var app = new Vue({
  el: '#llama-image',
  data: {
    image:'https://i.pinimg.com/474x/bc/51/1e/bc511eaac7725f4a0620f4ac7c115085.jpg',
  } 
})



new Vue({
  el: '#myApp',
  data: {
    message: 'Facts about Llamas',
    llamasAreCute:true
  },

});

// creating a to do list
new Vue({
  el: '#llama-ol',
  data: {
    llamaFacts: [
      { text: 'Lama Glama is the scientific name(species) name for Llamas.' },
      { text: 'Llamas are herbivores that forage on a wide variety of plants & trees. ' },
      { text: 'Llamas are pseudoruminants. They have 1 stomach with 3 chambers. ' },
      { text: 'Llamas evolved from camels. they are the camel’s hippie cousins. ' },
      { text: 'Llamas are not able to retain water like camels. ' },
      { text: ' The gestation period of a llama is 11.5 months!!. ' },
       { text: 'Llamas generally have a single baby, called a "cria which is Spanish for kid. ' },
      { text: 'A Llama mama is called a "dam". ' },
      { text: 'A good quality llama costs between $5,000 & $15,000. ' },
      { text: 'Llamas produce special nano-antibodies that are used for vaccine & therapy research.  ' }, 
    ]
  }
});

new Vue({
  el: '#bonus-llama',
  data: {
    show: false
    //show: true fact on to start
  }
})

// v-model directive- 2-way bind between form input and app
new Vue({
    el: '#llamaMessage',
    data: {
      message: ''
    }
  });

  