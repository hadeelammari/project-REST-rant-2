const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/.images/salad.jpeg" alt="Salad" />
              </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
    )
}

module.exports = home
