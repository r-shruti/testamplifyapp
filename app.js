const express = require('express')
const app = express()  

app.set('port', process.env.PORT || 5000);

app.get('/', (request, response) => {
  response.json({ message : 'Node.js, Express, and Postgres API' })
})

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

