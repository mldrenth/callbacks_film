const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllTitles = function (){
  const allTitles = this.films.map( film => film.title);
  return allTitles;
}

Cinema.prototype.findByTitle = function (title) {
  const filmObject = this.films.find(film => film.title === title);
  return filmObject;
}

module.exports = Cinema;
