// assets/data/rooms-data.js
const roomTypes = {
  deluxe: {
    id: "deluxe",
    name: "Deluxe Double Rooms",
    category: "Luxury Room",
    price: "$560",
    size: "1500 SQ.FT",
    capacity: "2 - 5 Persons",
    images: [
      "assets/images/rooms/Deluxe1.jpg",
      "assets/images/rooms/Deluxe2.jpg",
      "assets/images/rooms/Deluxe3.jpg",
      "assets/images/rooms/Deluxe4.jpg",
    ],
    description: [
      "Spacious and elegantly designed, our Deluxe Family Rooms offer the perfect blend of comfort and luxury. Ideal for families or groups, featuring a separate living area and panoramic views.",
      "Enjoy premium bedding, a large marble bathroom with rain shower, and direct access to our tropical garden or pool view.",
    ],
    checkIn: [
      "Check-in from 2:00 PM - anytime",
      "Early check-in available upon request (subject to availability)",
    ],
    checkOut: [
      "Check-out by 12:00 PM",
      "Late check-out available until 6:00 PM (additional charge)",
    ],
    houseRules:
      "No smoking in rooms. Pets are not allowed. Quiet hours from 10:00 PM to 7:00 AM. Maximum occupancy strictly enforced.",
    childrenBeds:
      "Children of all ages are welcome. Baby cots available free of charge. Extra beds available for children 6+ at $35/night.",
    amenities: [
      "2 - 5 Persons",
      "Free High-Speed WiFi",
      "Private Swimming Pool Access",
      "Daily Breakfast Included",
      "1500 SQ.FT Total Area",
      "Fitness Center & Spa Access",
    ],
    bed: "2 King Beds + 1 Sofa Bed",
    rating: 4.5,
  },

  double: {
    id: "double",
    name: "Quadruple Room",
    category: "Luxury Suite",
    price: "$620",
    size: "1800 SQ.FT",
    capacity: "2 - 4 Persons",
    images: [
      "assets/images/rooms/double-queen1.jpg",
      "assets/images/rooms/double-queen2.jpg",
      "assets/images/rooms/double-queen3.jpg",
    ],
    description: [
      "Indulge in refined elegance with our Double Suite Rooms. Perfect for couples or small families, offering separate bedroom and living spaces with ocean or garden views.",
      "Features a private balcony, luxury linens, and a deep soaking tub for ultimate relaxation.",
    ],
    checkIn: [
      "Check-in from 2:00 PM - anytime",
      "VIP early check-in for suite guests",
    ],
    checkOut: [
      "Check-out by 12:00 PM",
      "Complimentary late check-out until 2:00 PM",
    ],
    houseRules:
      "Non-smoking suite. No parties or events. Guests must present ID at check-in. Maximum 4 persons.",
    childrenBeds:
      "Children welcome. Rollaway beds available at $40/night. Cribs free for infants under 2.",
    amenities: [
      "2 - 4 Persons",
      "Free Premium WiFi",
      "Private Jacuzzi",
      "Gourmet Breakfast Included",
      "1800 SQ.FT Suite",
      "24-Hour Butler Service",
    ],
    bed: "2 Queen Beds",
    rating: 5,
  },

  superior: {
    id: "superior",
    name: "Triple Rooms",
    category: "Premium Room",
    price: "$480",
    size: "1200 SQ.FT",
    capacity: "1 - 3 Persons",
    images: [
      "assets/images/rooms/superior1.jpg",
      "assets/images/rooms/superior2.jpg",
      "assets/images/rooms/superior3.jpg",
    ],
    description: [
      "Modern comfort meets tropical charm in our Superior Bed Rooms. Perfect for solo travelers or couples seeking a peaceful retreat with all essential luxuries.",
      "Enjoy a private balcony with garden views, a spacious work desk, and high-end bathroom amenities.",
    ],
    checkIn: [
      "Check-in from 2:00 PM",
      "Early check-in subject to availability",
    ],
    checkOut: [
      "Check-out by 12:00 PM",
      "Late check-out available (fees apply)",
    ],
    houseRules:
      "Quiet and clean environment. No outside food in rooms. Maximum 3 guests. No pets.",
    childrenBeds:
      "Children 0–5 stay free in existing beds. Extra bed for ages 6+ at $30/night.",
    amenities: [
      "1 - 3 Persons",
      "Free WiFi",
      "Private Balcony",
      "Continental Breakfast",
      "1200 SQ.FT Room",
      "Mini Bar & Coffee Station",
    ],
    bed: "1 King Bed",
    rating: 4,
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
