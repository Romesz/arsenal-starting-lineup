# arsenal-starting-lineup

Idea is to create Arsenal team lineup visually.

To start the project:
* npm install
* create a .env file in the root and define the route to your DB server like DB_LINK=fake_server_route
* node app.js or node run-script build (builds babel and runs express server)
* localhost:3000

Js file (for the client side) generated with babel (Convert Ecmascript 6 to 5):
* node babel.js

Features:
  * Visually show players and user can cutomise the starting 11 in canvas
  * Store data in database and request for changes (if there is any) in a certain period of time

Future improvements:
  * Get position of players somhow and draw them into the starting lineup based on that
  * Use pictures with player names
  * Implement real drag and drop feature
