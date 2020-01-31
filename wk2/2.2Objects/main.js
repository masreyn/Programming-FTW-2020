
const gamesArray = [
    {title: 'Sorry', type: 'board game', numberOfPlayers:'4', description: 'Slide, collide and win the Sorry! 1st released in U.S, by Parker Brothers in 1934.'},
    {title: 'Trouble', type: 'board game', numberOfPlayers:'4', description: 'Trouble is Pop-O-Matic!!'},
    {title: 'FIFA', type: 'video game', numberOfPlayers:'2', description: 'Experience professional stadium playing with FIFA!'}
]

console.log(gamesArray);
console.log('title of 1st game is', gamesArray[0].title);

let gameNum = prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game');

alert('You selected ' +  gamesArray[gameNum -1].title + '--which is a ' + gamesArray[gameNum -1].type + ' for ' + gamesArray[gameNum -1].numberOfPlayers + ' players. ' + gamesArray[gameNum -1].description);



