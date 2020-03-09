/* this assignment, your collection object should have 3 to 5 properties. Create an array of exactly 5 of these objects and include this array as one of the properties in your Vue data object.  */
// Guitars 5 Object with 3-5 properties

// Guitar 1 = Object 1  "Mustang",
const guitarArry = [
  {
    name: 'Mustang',
    maker: 'Fender',
    shape: 'Cutaway, solid',
    period: '1964-82',
    pickups: '2-Single-coil',
    players: 'Kurt Cobain, David Byrne, Nick Cave, Frank Black- Pixies, Thurston Moore- Sonic Youth.'
  },
  // Guitar 2 = Object 2 "Flying V"
  {
    name: 'Flying V',
    maker: 'Gibson',
    shape: 'V, solid',
    period: '1958-present',
    pickups: '2 Double-coil (humbucking)',
    players: 'Albert King, Chuck Berry, Mike McCready- Pearl Jam.'
  },
  // Guitar 3 = Object 3  Bo Diddley ‘Big B’
  {
    name: 'Bo Diddley "Big B"',
    maker: 'Gretsch',
    shape: 'Rectangle, hollow',
    period: '1959-present',
    pickups: '2 Double-coil (humbucking)',
    players: 'Bo Diddley, Jack Black- White Stripes'
  },
  // Guitar 4 = Object 4 Teardrop Vox Mark III
  {
    name: 'Teardrop  Mark III',
    maker: 'Vox',
    shape: 'Teardrop, solid',
    period: '1963-present',
    pickups: '2-3 Single-coil',
    players: 'The Mark VI was made for Brian Jones of The Rolling Stones.'
  },
  // Guitar 5 = Object 5. Mosrite Mark V Mosrite Mark V Ventures
  {
    name: 'Mark V Ventures',
    maker: 'Mosrite',
    shape: 'Cutaway, solid',
    period: '1956-94',
    pickups: '2-Single-coil',
    players: 'Johnny Ramone, Ricky Wilson- The B-52s, Dave Alexander-The Stooges, Robert Smith-The Cure.'
  }
];
var myVue = new Vue({
  el: '#app',
  data: {
    guitarsAr: guitarArry,
    guitarHeadlineAlign: 'center',
    guitarHeadline: {
      color: '#369ba3',
      fontSize: '3rem'
    },
  }
});
