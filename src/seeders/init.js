const mongoose = require('mongoose');
const adminId = new mongoose.Types.ObjectId("67a25ade9f26c8cf5288d125");

const ParkingSpots =[
  {
    spotName: "ParkingHub",
    location: { 
      type: "Point", 
      coordinates: [28.542094, 77.184638]
    },
    address: "Nelson Mandela Marg, Vasant Kunj II, Delhi 110070, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 50,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Parking Lot",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "IIT Delhi ParkingHub",
    location: { 
      type: "Point", 
      coordinates: [28.545292, 77.185596]
    },
    address: "IIT Campus, Hauz Khas, New Delhi, 110016, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 40,
    capacity: 5,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Garage",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Block E",
    location: { 
      type: "Point", 
      coordinates: [28.54288, 77.188278]
    },
    address: "Block E, Hauz Khas, New Delhi, 110016, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 45,
    capacity: 8,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Street Parking",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Aryabhatta Rd",
    location: { 
      type: "Point", 
      coordinates: [28.543329, 77.17557]
    },
    address: "Aryabhatta Rd, Hauz Khas, New Delhi, 110016, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 35,
    capacity: 6,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Driveway",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Karakoram Hostel",
    location: { 
      type: "Point", 
      coordinates: [28.547872, 77.182594]
    },
    address: "Karakoram Hostel, IIT Delhi, New Delhi, 110016, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 30,
    capacity: 7,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Parking Lot",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Badarpur Metro Station",
    location: { 
      type: "Point", 
      coordinates: [28.500761, 77.302343]
    },
    address: "Badarpur Metro Station, Badarpur, New Delhi, 110044, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 25,
    capacity: 12,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Parking Lot",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Tughlaqabad Fort",
    location: { 
      type: "Point", 
      coordinates: [28.515319, 77.284811]
    },
    address: "Tughlaqabad Fort, Tughlakabad, New Delhi, 110044, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 20,
    capacity: 15,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Street Parking",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "NTPC Badarpur",
    location: { 
      type: "Point", 
      coordinates: [28.49493, 77.30304]
    },
    address: "NTPC Badarpur, Badarpur, New Delhi, 110044, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 30,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Garage",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Badarpur Border",
    location: { 
      type: "Point", 
      coordinates: [28.50111, 77.30283]
    },
    address: "Badarpur Border, Badarpur, New Delhi, 110044, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 30,
    capacity: 14,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Driveway",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Badarpur Thermal Power Station",
    location: { 
      type: "Point", 
      coordinates: [28.49483, 77.30405]
    },
    address: "Badarpur Thermal Power Station, New Delhi, 110044, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 20,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Parking Lot",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Sangam Vihar Main Market",
    location: { 
      type: "Point", 
      coordinates: [28.508174, 77.251129]
    },
    address: "Sangam Vihar Main Market, Sangam Vihar, New Delhi, 110080, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 25,
    capacity: 8,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Street Parking",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Batra Hospital",
    location: { 
      type: "Point", 
      coordinates: [28.505947, 77.252485]
    },
    address: "Batra Hospital, Tughlakabad Institutional Area, New Delhi, 110062, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 30,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Garage",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Deoli Gaon",
    location: { 
      type: "Point", 
      coordinates: [28.51147, 77.247933]
    },
    address: "Deoli Gaon, Sangam Vihar, New Delhi, 110062, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 20,
    capacity: 6,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Driveway",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "B Block Sangam Vihar",
    location: { 
      type: "Point", 
      coordinates: [28.509432, 77.25093]
    },
    address: "B Block, Sangam Vihar, New Delhi, 110080, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 25,
    capacity: 5,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Street Parking",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "H Block Sangam Vihar",
    location: { 
      type: "Point", 
      coordinates: [28.510517, 77.248745]
    },
    address: "H Block, Sangam Vihar, New Delhi, 110080, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 20,
    capacity: 5,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Driveway",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "RK Puram Sector 1",
    location: { 
      type: "Point", 
      coordinates: [28.568716, 77.180989]
    },
    address: "RK Puram Sector 1, RK Puram, New Delhi, 110022, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 50,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Parking Lot",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "RK Puram Sector 2",
    location: { 
      type: "Point", 
      coordinates: [28.566894, 77.178488]
    },
    address: "RK Puram Sector 2, RK Puram, New Delhi, 110022, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 50,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Garage",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "RK Puram Sector 6",
    location: { 
      type: "Point", 
      coordinates: [28.563515, 77.173383]
    },
    address: "RK Puram Sector 6, RK Puram, New Delhi, 110022, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 50,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Street Parking",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "RK Puram Sector 8",
    location: { 
      type: "Point", 
      coordinates: [28.562171, 77.170871]
    },
    address: "RK Puram Sector 8, RK Puram, New Delhi, 110022, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 50,
    capacity: 10,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Driveway",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  },
  {
    spotName: "Moti Bagh",
    location: { 
      type: "Point", 
      coordinates: [28.576768, 77.165761]
    },
    address: "Moti Bagh, Chanakyapuri, New Delhi, 110021, India",
    ownerId: "65aef0b1c3d4e5678f9a3141",
    pricePerHour: 55,
    capacity: 12,
    isAvailable: true,
    isApprovedStatus: "Pending",
    spotType: "Parking Lot",
    images: ["https://unsplash.com/photos/a-group-of-cars-parked-in-a-parking-lot-P3Tscv0rMHg"]
  }
];


module.exports = ParkingSpots;