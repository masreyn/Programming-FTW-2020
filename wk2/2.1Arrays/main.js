        /*Steps
        1. create an array with the title of your favorite movie titles
        2. prompt the user to enter their favorite movie. 
        3. Use the prompt() method to do this.
        4. add the movie to the array using push or create a new array with concat
        5. display full list of movies with toString() method
        */
       
myMoviesArray = ['Big Lebowski ', ' Harry Potter ', ' The Seventh Seal ', ' Urgh ', ' Singing in the Rain', ];
console.log(myMoviesArray);

//add user input w/ array manipuation.  "push" - add items to the end
let inputMovie = prompt('What was the last movie you watched?');
myMoviesArray.push(inputMovie);
console.log(myMoviesArray);

//toString() method
        /*console.log(kensCar.toString());
        const myCars = ['rav', 'pilot', 'juke'];    
        console.log(myCars.toString());
        */
console.log(myMoviesArray.toString());
const allMovies = myMoviesArray.toString();
alert('Here is the list of recently watched movies: ' +  allMovies);
