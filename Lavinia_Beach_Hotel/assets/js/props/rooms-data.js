// assets/data/rooms-data.js
const roomTypes = {
  deluxe: {
    id: "deluxe",
    name: "Deluxe Double Rooms With Sea View",
    category: "Luxury Room",
    adults: "2",
    children: "0",
    // price: "$560",
    size: "1500 SQ.FT",
    capacity: "2 - 5 Persons",
    images: [
      "assets/images/rooms/Deluxe1.jpg",
      "assets/images/rooms/Deluxe2.jpg",
      "assets/images/rooms/Deluxe5.jpg",
      "assets/images/rooms/Deluxe3.jpg",
      "assets/images/rooms/Deluxe4.jpg",
    ],
    description: [
      "Cozy double room with air conditioning, private bathroom, and a balcony overlooking the sea.",
      "Includes tea/coffee maker, flat-screen TV, free Wi-Fi ideal for couples or solo travelers.",
    ],
    checkIn: [
      "Check-in from 1:00 PM",
      "Early check-in upon request (subject to availability)",
    ],
    checkOut: [
      "Check-out by 11:00 AM",
      "Late check-out subject to availability (additional charge may apply)",
    ],
    houseRules:
      "Non-smoking room. No pets. Maximum occupancy strictly enforced.",
    childrenBeds:
      "Children stay free using existing beds (subject to occupancy limits). Extra beds not guaranteed — request in advance.",
    amenities: [
      "1 - 2 Persons",
      "Air Conditioning",
      "Free Wi-Fi",
      "Sea View Balcony",
      "Flat-screen TV",
      "Private Bathroom",
      "Tea/Coffee Maker",
      "Daily Housekeeping",
    ],
    bed: "1 King Bed",
    rating: null, // if you have rating data
  },

  double: {
    id: "double",
    name: "Quadruple Room With Sea View",
    category: "Luxury Suite",
    // price: "$620",
    size: "1800 SQ.FT",
    capacity: "2 - 4 Persons",
    adults: "2",
    children: "2",
    images: [
      "assets/images/rooms/double-queen1.jpg",
      "assets/images/rooms/double-queen4.jpg",
      "assets/images/rooms/double-queen2.jpg",
      "assets/images/rooms/double-queen5.jpg",
      "assets/images/rooms/double-queen3.jpg",
    ],
    description: [
      "Room suitable for up to 4 guests perfect for families or groups needing extra space.",
      "Features air conditioning, balcony, private bathroom, free Wi-Fi and sea-view or garden-view (as per booking).",
    ],
    checkIn: ["Check-in from 1:00 PM", "Early check-in on request"],
    checkOut: [
      "Check-out by 11:00 AM",
      "Late check-out possible (extra charges apply)",
    ],
    houseRules: "Non-smoking. No pets. Maximum occupancy strictly enforced.",
    childrenBeds:
      "Cribs or extra beds available upon request (subject to availability).",
    amenities: [
      "2 - 4 Persons",
      "Air Conditioning",
      "Free Wi-Fi",
      "Balcony or Terrace",
      "Flat-screen TV",
      "Private Bathroom",
      "Tea/Coffee Maker",
      "Daily Housekeeping",
    ],
    bed: "2 Double Beds (or configuration per hotel availability)",
    rating: null,
  },

  superior: {
    id: "superior",
    name: "Triple Rooms With Sea View",
    category: "Premium Room",
    adults: "2",
    children: "1",
    // price: "$480",
    size: "1200 SQ.FT",
    capacity: "1 - 3 Persons",
    images: [
      "assets/images/rooms/superior1.jpg",
      "assets/images/rooms/superior4.jpg",
      "assets/images/rooms/superior2.jpg",
      "assets/images/rooms/superior5.jpg",
      "assets/images/rooms/superior3.jpg",
    ],
    description: [
      "Spacious triple room with balcony good for small families or three guests sharing.",
      "Includes air conditioning, private bathroom, Wi-Fi and all standard comforts.",
    ],
    checkIn: [
      "Check-in from 1:00 PM",
      "Early check-in subject to availability",
    ],
    checkOut: [
      "Check-out by 11:00 AM",
      "Late check-out possible with extra fee",
    ],
    houseRules: "Non-smoking. No pets. Maximum 3 persons.",
    childrenBeds:
      "Children welcome. Use existing beds or request extra bed (availability upon request).",
    amenities: [
      "1 - 3 Persons",
      "Air Conditioning",
      "Free Wi-Fi",
      "Balcony",
      "Flat-screen TV",
      "Private Bathroom",
      "Tea/Coffee Maker",
      "Daily Housekeeping",
    ],
    bed: "1 King Bed + 1 Extra Bed / Bunk or Sofa (as per property configuration)",
    rating: null,
  },

  // junior: {
  //   id: "junior",
  //   name: "Junior Suite Rooms",
  //   category: "Executive Suite",
  //   price: "$720",
  //   size: "2000 SQ.FT",
  //   capacity: "2 - 4 Persons",
  //   images: [
  //     "assets/images/rooms/junior1.jpg",
  //     "assets/images/rooms/junior2.jpg",
  //   ],
  //   description: [
  //     "Elevate your stay with our Junior Suite Rooms — open-plan luxury with a dedicated living area, panoramic windows, and exclusive access to the executive lounge.",
  //     "Perfect for business travelers or couples wanting extra space and privacy.",
  //   ],
  //   checkIn: ["Priority check-in from 1:00 PM", "Express check-in available"],
  //   checkOut: [
  //     "Check-out by 12:00 PM",
  //     "Late check-out until 4:00 PM (complimentary for loyalty members)",
  //   ],
  //   houseRules:
  //     "Executive floor access only. Business attire in lounge. No children under 12 in lounge after 8 PM.",
  //   childrenBeds:
  //     "Children welcome. One extra bed allowed at $45/night. Cribs available.",
  //   amenities: [
  //     "2 - 4 Persons",
  //     "Ultra-Fast WiFi",
  //     "Executive Lounge Access",
  //     "Full Breakfast Buffet",
  //     "2000 SQ.FT Open Layout",
  //     "Nespresso Machine & Minibar",
  //   ],
  //   bed: "1 King Bed + Pull-out Sofa",
  //   rating: 4.8,
  // },

  // family: {
  //   id: "family",
  //   name: "Family Suite Room",
  //   category: "Family Suite",
  //   price: "$850",
  //   size: "2500 SQ.FT",
  //   capacity: "4 - 8 Persons",
  //   images: [
  //     "assets/images/rooms/family1.jpg",
  //     "assets/images/rooms/family2.jpg",
  //   ],
  //   description: [
  //     "Designed for larger families, our Family Suite offers two bedrooms, a full kitchenette, and a spacious living area — all with direct beach access.",
  //     "Includes children's play corner, bunk beds, and family-friendly dining options.",
  //   ],
  //   checkIn: [
  //     "Family early check-in from 12:00 PM",
  //     "Dedicated family welcome pack",
  //   ],
  //   checkOut: ["Check-out by 11:00 AM", "Flexible late check-out for families"],
  //   houseRules:
  //     "Family-friendly environment. Supervised children only in pool areas. No glass near pool.",
  //   childrenBeds:
  //     "Up to 4 children stay free. Bunk beds included. Extra beds at $25/child.",
  //   amenities: [
  //     "4 - 8 Persons",
  //     "Free WiFi & Smart TV",
  //     "Kids Pool & Play Area",
  //     "All Meals Included Option",
  //     "2500 SQ.FT Suite",
  //     "Kitchenette & Laundry",
  //   ],
  //   bed: "2 King Beds + 2 Bunk Beds",
  //   rating: 4.7,
  // },
};
