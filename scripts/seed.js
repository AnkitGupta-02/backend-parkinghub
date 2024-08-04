const sequelize = require("../db/database");
const Place = require("../model/Place");

const predefinedNearbyPlaces = [
  { name: "ParkingHub", lat: 28.542094, lon: 77.184638 },
  { name: "IIT Delhi ParkingHub", lat: 28.545292, lon: 77.185596 },
  { name: "Block E", lat: 28.54288, lon: 77.188278 },
  { name: "Aryabhatta Rd", lat: 28.543329, lon: 77.17557 },
  { name: "Karakoram Hostel", lat: 28.547872, lon: 77.182594 },
  { name: "Badarpur Metro Station", lat: 28.500761, lon: 77.302343 },
  { name: "Tughlaqabad Fort", lat: 28.515319, lon: 77.284811 },
  { name: "NTPC Badarpur", lat: 28.49493, lon: 77.30304 },
  { name: "Badarpur Border", lat: 28.50111, lon: 77.30283 },
  { name: "Badarpur Thermal Power Station", lat: 28.49483, lon: 77.30405 },
  { name: "Sangam Vihar Main Market", lat: 28.508174, lon: 77.251129 },
  { name: "Batra Hospital", lat: 28.505947, lon: 77.252485 },
  { name: "Deoli Gaon", lat: 28.51147, lon: 77.247933 },
  { name: "B Block Sangam Vihar", lat: 28.509432, lon: 77.25093 },
  { name: "H Block Sangam Vihar", lat: 28.510517, lon: 77.248745 },
  { name: "RK Puram Sector 1", lat: 28.568716, lon: 77.180989 },
  { name: "RK Puram Sector 2", lat: 28.566894, lon: 77.178488 },
  { name: "RK Puram Sector 6", lat: 28.563515, lon: 77.173383 },
  { name: "RK Puram Sector 8", lat: 28.562171, lon: 77.170871 },
  { name: "Moti Bagh", lat: 28.576768, lon: 77.165761 },
  { name: "Nehru Place", lat: 28.549444, lon: 77.250556 },
  { name: "Kalkaji Mandir", lat: 28.54932, lon: 77.25947 },
  { name: "Hauz Khas Village", lat: 28.553992, lon: 77.193516 },
  { name: "Green Park", lat: 28.563668, lon: 77.205817 },
  { name: "AIIMS Delhi", lat: 28.567237, lon: 77.210884 },
];

sequelize
  .sync({ force: true })
  .then(async () => {
    await Place.bulkCreate(predefinedNearbyPlaces);
    console.log("Database seeded successfully");
    process.exit();
  })
  .catch((error) => {
    console.error("Error seeding the database", error);
    process.exit(1);
  });
