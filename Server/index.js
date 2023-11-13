const server = require('./src/app.js');
const { conn } = require('./src/db.js');


const port = process.env.PORT || 3001


conn.sync({ force: false }).then(() => {
   //cargarPruevas();
  server.listen(port, () => {

    console.log(`%s listening at ${port} `);
  });
});
