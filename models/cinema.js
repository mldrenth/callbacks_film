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

Cinema.prototype.filterByGenre = function (genre) {
  const filmObjects = this.films.filter(film => film.genre === genre);
  return filmObjects
}

Cinema.prototype.checkForYear = function (year) {
  const filmObjects = this.films.some(film => film.year === year);
  return filmObjects
}

Cinema.prototype.checkForLength = function (length) {
  const lengthCondition = this.films.every(film => film.length >= length);
  return lengthCondition;
}

Cinema.prototype.calculateRunningTime = function (){
  const runningTime = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0)
  return runningTime;
}

module.exports = Cinema;
