require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/gymapp`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries); // no inmporta como lo ponga en el modelo por que esto lo arregla

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Coach, Rutina, TipoRutina } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.hasOne(Coach, { foreignKey: 'userId' }); // Un usuario puede tener un coach
Coach.belongsTo(User, { foreignKey: 'userId' }); // Un coach pertenece a un usuario

Coach.hasMany(Rutina, { foreignKey: 'coachId' }); // Un coach puede tener muchas rutinas
Rutina.belongsTo(Coach, { foreignKey: 'coachId' }); // Una rutina pertenece a un coach

Rutina.belongsTo(TipoRutina, { foreignKey: 'tipoRutinaId' }); // Una rutina pertenece a un tipo de rutina
TipoRutina.hasMany(Rutina, { foreignKey: 'tipoRutinaId' }); // Un tipo de rutina puede tener muchas rutinas

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
