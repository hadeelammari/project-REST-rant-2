const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
            </head>
            <nav>
                <ul>
                    <li>
                    <a href="/">Home</a>
                    </li>
                    <li>
                    <a href="/places">Places</a>
                    </li>
                    <li>
                    <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
            <body>
                {html.children}
            </body>
        </html>
    )
  }

module.exports = Def

  