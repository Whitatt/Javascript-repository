function my_Dictionary() {//the function is a dictionary//
    var Movies = {//I chose Movies as the variable//
        Genre:"Horror",//within the movies, I provided a genre, theme, release year, the film itself and the director//
        Theme:"SciFi",
        Year:"1986",
        Film:"Aliens",
        Director:"James Cameron"
    };
    delete Movies.Genre;//Output is undefined, value no longer exists in the dictionary//
    document.getElementById("Dictionary").innerHTML = Movies.Theme;//dictionary is the get element by id//
}