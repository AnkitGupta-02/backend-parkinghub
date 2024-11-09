const pool = require("./config/db.js");
const { v4: uuidv4 } = require("uuid");
const id = uuidv4();

const parkingSpots = [
  [
    "ParkingHub",
    28.542094,
    77.184638,
    "Nelson Mandela Marg, Vasant Kunj II, Delhi 110070, India",
  ],
  [
    "IIT Delhi ParkingHub",
    28.545292,
    77.185596,
    "IIT Campus, Hauz Khas, New Delhi, 110016, India",
  ],
  [
    "Block E",
    28.54288,
    77.188278,
    "Block E, Hauz Khas, New Delhi, 110016, India",
  ],
  [
    "Aryabhatta Rd",
    28.543329,
    77.17557,
    "Aryabhatta Rd, Hauz Khas, New Delhi, 110016, India",
  ],
  [
    "Karakoram Hostel",
    28.547872,
    77.182594,
    "Karakoram Hostel, IIT Delhi, New Delhi, 110016, India",
  ],
  [
    "Badarpur Metro Station",
    28.500761,
    77.302343,
    "Badarpur Metro Station, Badarpur, New Delhi, 110044, India",
  ],
  [
    "Tughlaqabad Fort",
    28.515319,
    77.284811,
    "Tughlaqabad Fort, Tughlakabad, New Delhi, 110044, India",
  ],
  [
    "NTPC Badarpur",
    28.49493,
    77.30304,
    "NTPC Badarpur, Badarpur, New Delhi, 110044, India",
  ],
  [
    "Badarpur Border",
    28.50111,
    77.30283,
    "Badarpur Border, Badarpur, New Delhi, 110044, India",
  ],
  [
    "Badarpur Thermal Power Station",
    28.49483,
    77.30405,
    "Badarpur Thermal Power Station, New Delhi, 110044, India",
  ],
  [
    "Sangam Vihar Main Market",
    28.508174,
    77.251129,
    "Sangam Vihar Main Market, Sangam Vihar, New Delhi, 110080, India",
  ],
  [
    "Batra Hospital",
    28.505947,
    77.252485,
    "Batra Hospital, Tughlakabad Institutional Area, New Delhi, 110062, India",
  ],
  [
    "Deoli Gaon",
    28.51147,
    77.247933,
    "Deoli Gaon, Sangam Vihar, New Delhi, 110062, India",
  ],
  [
    "B Block Sangam Vihar",
    28.509432,
    77.25093,
    "B Block, Sangam Vihar, New Delhi, 110080, India",
  ],
  [
    "H Block Sangam Vihar",
    28.510517,
    77.248745,
    "H Block, Sangam Vihar, New Delhi, 110080, India",
  ],
  [
    "RK Puram Sector 1",
    28.568716,
    77.180989,
    "RK Puram Sector 1, RK Puram, New Delhi, 110022, India",
  ],
  [
    "RK Puram Sector 2",
    28.566894,
    77.178488,
    "RK Puram Sector 2, RK Puram, New Delhi, 110022, India",
  ],
  [
    "RK Puram Sector 6",
    28.563515,
    77.173383,
    "RK Puram Sector 6, RK Puram, New Delhi, 110022, India",
  ],
  [
    "RK Puram Sector 8",
    28.562171,
    77.170871,
    "RK Puram Sector 8, RK Puram, New Delhi, 110022, India",
  ],
  [
    "Moti Bagh",
    28.576768,
    77.165761,
    "Moti Bagh, Chanakyapuri, New Delhi, 110021, India",
  ],
  [
    "Nehru Place",
    28.549444,
    77.250556,
    "Nehru Place, Kalkaji, New Delhi, 110019, India",
  ],
  [
    "Kalkaji Mandir",
    28.54932,
    77.25947,
    "Kalkaji Mandir, Kalkaji, New Delhi, 110019, India",
  ],
  [
    "Hauz Khas Village",
    28.553992,
    77.193516,
    "Hauz Khas Village, Deer Park, New Delhi, 110016, India",
  ],
  [
    "Green Park",
    28.563668,
    77.205817,
    "Green Park, Hauz Khas, New Delhi, 110016, India",
  ],
  [
    "AIIMS Delhi",
    28.567237,
    77.210884,
    "AIIMS Delhi, Ansari Nagar, New Delhi, 110029, India",
  ],
];

const query = `
      INSERT INTO parking_spots (id, name, lat, lng, address)
      VALUES (?, ?, ?, ?, ?)
    `;

async function insertData() {
   
    for (const spot of parkingSpots) {
        const id = uuidV4();
        const result = await pool.query(query, [id, ...spot]);
        console.log(result);
    }
}

// Run the function
// insertData();