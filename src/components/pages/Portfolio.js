import React from "react";

function Portfolio() {
  return (
    <div>
      <section className="portfolio bg-light" id="portfolio">
        <div className="container text-center">
          <h1>Portfolio</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://morning-hollows-80184.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./img/appdemo.gif"
                  className="img-fluid p-2" alt="Galleristic"/></a>
                <div className="card-body">
                  <h2 className="card-title">Galleristic</h2>
                  <p className="card-text">Where artists and art lovers meet</p>
                  <a href="https://morning-hollows-80184.herokuapp.com/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Live Demo</a>
                  <a href="https://github.com/MahirErden/galleristic" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://mahirerden.github.io/DrinkUp/" target="_blank" rel="noopener noreferrer"><img src="./img/Drinks.gif"
                  className="img-fluid p-2" alt="Drink Up" /></a>
                <div className="card-body">
                  <h2 className="card-title">Drink Up</h2>
                  <p className="card-text">Alcoholic and Non-alcoholic drinks recipes</p>
                  <a href="https://mahirerden.github.io/DrinkUp/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Live Demo</a>
                  <a href="https://github.com/MahirErden/DrinkUp" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://pure-beyond-13416.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="./img/EatDaBurger.gif"
                  className="img-fluid p-2" alt="EatDaBurger" /></a>
                <div className="card-body">
                  <h2 className="card-title">Eat-Da-Burger</h2>
                  <p className="card-text">Node.js Express Handlebars application</p>
                  <a href="https://pure-beyond-13416.herokuapp.com/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Live Demo</a>
                  <a href="https://github.com/MahirErden/burger" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://mahirerden.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer"><img src="./img/CodeQuiz.gif"
                  className="img-fluid p-2" alt="Code Quiz" /></a>
                <div className="card-body">
                  <h2 className="card-title">Code Quiz</h2>
                  <p className="card-text">Javascript code quiz application</p>
                  <a href="https://mahirerden.github.io/CodeQuiz/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Live Demo</a>
                  <a href="https://github.com/MahirErden/CodeQuiz" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://mahirerden.github.io/WeatherDashboard/" target="_blank" rel="noopener noreferrer"><img src="./img/WeatherDashboard.gif"
                  className="img-fluid p-2" alt="Weather Dashboard" /></a>
                <div className="card-body">
                  <h2 className="card-title">Weather Dashboard</h2>
                  <p className="card-text">Daily and 5-days weather forecast application</p>
                  <a href="https://mahirerden.github.io/WeatherDashboard/" className="btn btn-primary ml-3" rel="noopener noreferrer" target="_blank">Live Demo</a>
                  <a href="https://github.com/MahirErden/WeatherDashboard" className="btn btn-primary ml-3" rel="noopener noreferrer" target="_blank">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
