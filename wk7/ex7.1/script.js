
// creating a to do list
var vm = new Vue ({
  el: '#llamaAlpaca',
  // // v-bind Bindings-href, title, class, style
  data: {
    linkLlama: 'https://en.wikipedia.org/wiki/Llama',
    titleLlama: 'Llama Wiki & Cited References',
    linkAlpaca: 'https://en.wikipedia.org/wiki/Alpaca',
    titleAlpaca: 'Alpaca Wiki & Cited References',
    myClass: '#c0392b',
    myParaAlignment: 'center',
    myInlineStyle: {
      color: '#2c3e50',
      fontSize: '2rem'
    },
    // Llama sxn
    // array for llama
    llamaFacts: [
      { text: 'Lama glama is the scientific name for llamas.' },
      { text: 'Llamas are bred to haul heavy loads.' },
      { text: 'Llama fleece is course & long with wavy fibers.' },
      { text: 'Llama fleece is inferior to the wool of the alpaca.' },
      { text: 'A llama costs between $5,000 & $15,000.' },
      { text: 'The Llama genome has not been sequenced or even completely mapped.' },
      { text: 'Ilamas have 36 pairs of chromosomes. ' }
    ],

    // Alpaca sxn
    // array for alpaca
    alpacaFacts: [
      { text: 'Vicugna pacos is the scientific name for Alpacas.' },
      { text: 'Alpacas are strictly bred for their wool.' },
      { text: 'Alpaca wool is soft, hypoallergenic.' },
      { text: 'Alpace wool is more valuable than llama fleece.' },
      { text: 'Alpaca price ranges from $250-$1500 per animal. ' },
      { text: 'The Alpaca genome has not been sequenced or even completely mapped.' },
      { text: 'Alpacas have 36 pairs of chromosomes. ' }
    ]
  }
});
