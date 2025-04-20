// require("dotenv").config();
// const mongoose = require('mongoose');
// const ParkingSpots = require('./seeders/init.js');
// const { Spot } = require("./models/spotSchema.js");


// async function seedDatabase(Spots) {
//     try {
//       // Make sure your database is connected
//       await mongoose.connect(process.env.DB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
  
//       // Insert the data
//       await Spot.insertMany(Spots,{ timestamps: true });
  
//       console.log('Data seeded successfully!');
//     } catch (error) {
//       console.error('Error seeding data:', error);
//     } finally {
//       // Close the connection
//       mongoose.connection.close();
//     }
//   }
  
//   seedDatabase(ParkingSpots);
