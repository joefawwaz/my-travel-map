const travelData = [
  // 2023
  { city: "Singapore", country: "Singapore", lat: 1.3521, lng: 103.8198, year: 2023, description: "Singapore Marathon 2023! Joining the 10k.", image: "assets/img/IMG_1974.jpg", hoverDescription: "Marina Bay lights ✨", hoverImage: "assets/img/IMG_1907.jpg" },
  { city: "Genting", country: "Malaysia", lat: 3.4213, lng: 101.7934, year: 2023, description: "Cool mountain escape 🎢", image: "https://source.unsplash.com/200x150/?genting", hoverDescription: "Cool mountain escape 🎢", hoverImage: "" },
  { city: "Kuala Lumpur", country: "Malaysia", lat: 3.1390, lng: 101.6869, year: 2023, description: "Petronas and street food 🌃", image: "https://source.unsplash.com/200x150/?kualalumpur", hoverDescription: "Petronas and street food 🌃", hoverImage: "" },
  { city: "Ho Chi Minh", country: "Vietnam", lat: 10.7769, lng: 106.7009, year: 2023, description: "Chaotic scooters & pho 🍜", image: "https://source.unsplash.com/200x150/?hochiminh", hoverDescription: "Chaotic scooters & pho 🍜", hoverImage: "" },
  { city: "Hanoi", country: "Vietnam", lat: 21.0285, lng: 105.8542, year: 2023, description: "Old Quarter vibes 🚲", image: "https://source.unsplash.com/200x150/?hanoi", hoverDescription: "Old Quarter vibes 🚲", hoverImage: "" },
  { city: "Sapa", country: "Vietnam", lat: 22.3402, lng: 103.8448, year: 2023, description: "Rice terraces & chill 🌾", image: "https://source.unsplash.com/200x150/?sapa", hoverDescription: "Rice terraces & chill 🌾", hoverImage: "" },
  { city: "Lao Cai", country: "Vietnam", lat: 22.4856, lng: 103.9707, year: 2023, description: "Border adventures 🚉", image: "https://source.unsplash.com/200x150/?laocai", hoverDescription: "Border adventures 🚉", hoverImage: "" },

  // 2024
  { city: "Bali", country: "Indonesia", lat: -8.3405, lng: 115.0920, year: 2024, description: "Beach vibes & sunset 🌅", image: "https://source.unsplash.com/200x150/?bali", hoverDescription: "Beach vibes & sunset 🌅", hoverImage: "" },
  { city: "Padang", country: "Indonesia", lat: -0.9471, lng: 100.4172, year: 2024, description: "Rendang heaven 🍛", image: "https://source.unsplash.com/200x150/?padang", hoverDescription: "Rendang heaven 🍛", hoverImage: "" },
  { city: "Almaty", country: "Kazakhstan", lat: 43.2220, lng: 76.8512, year: 2024, description: "Mountain skyline 🏔️", image: "https://source.unsplash.com/200x150/?almaty", hoverDescription: "Mountain skyline 🏔️", hoverImage: "" },
  { city: "Kolsai Lakes", country: "Kazakhstan", lat: 42.9374, lng: 78.3325, year: 2024, description: "Hidden blue lakes 💧", image: "https://source.unsplash.com/200x150/?lake", hoverDescription: "Hidden blue lakes 💧", hoverImage: "" },
  { city: "Charyn Canyon", country: "Kazakhstan", lat: 43.3653, lng: 79.0681, year: 2024, description: "Mini Grand Canyon 🏜️", image: "https://source.unsplash.com/200x150/?canyon", hoverDescription: "Mini Grand Canyon 🏜️", hoverImage: "" },
  { city: "Ankara", country: "Turkey", lat: 39.9334, lng: 32.8597, year: 2024, description: "Capital city hustle 🏛️", image: "https://source.unsplash.com/200x150/?ankara", hoverDescription: "Capital city hustle 🏛️", hoverImage: "" },
  { city: "Cappadocia", country: "Turkey", lat: 38.6431, lng: 34.8270, year: 2024, description: "Hot air balloons 🎈", image: "https://source.unsplash.com/200x150/?cappadocia", hoverDescription: "Hot air balloons 🎈", hoverImage: "" },
  { city: "Istanbul", country: "Turkey", lat: 41.0082, lng: 28.9784, year: 2024, description: "Mosques & bazaars 🕌", image: "https://source.unsplash.com/200x150/?istanbul", hoverDescription: "Mosques & bazaars 🕌", hoverImage: "" },
  { city: "Abu Dhabi", country: "UAE", lat: 24.4539, lng: 54.3773, year: 2024, description: "Sheikh Zayed beauty 🤍", image: "https://source.unsplash.com/200x150/?abudhabi", hoverDescription: "Sheikh Zayed beauty 🤍", hoverImage: "" },
  { city: "Dubai", country: "UAE", lat: 25.276987, lng: 55.296249, year: 2024, description: "Skyscraper flex 🏙️", image: "https://source.unsplash.com/200x150/?dubai", hoverDescription: "Skyscraper flex 🏙️", hoverImage: "" },

  // 2025
  { city: "Tokyo", country: "Japan", lat: 35.6895, lng: 139.6917, year: 2025, description: "Neon nights ✨", image: "https://source.unsplash.com/200x150/?tokyo", hoverDescription: "Neon nights ✨", hoverImage: "" },
  { city: "Sapporo", country: "Japan", lat: 43.0618, lng: 141.3545, year: 2025, description: "Snow & ramen ❄️", image: "https://source.unsplash.com/200x150/?sapporo", hoverDescription: "Snow & ramen ❄️", hoverImage: "" },
  { city: "Niseko", country: "Japan", lat: 42.8048, lng: 140.6874, year: 2025, description: "Ski heaven ⛷️", image: "https://source.unsplash.com/200x150/?niseko", hoverDescription: "Ski heaven ⛷️", hoverImage: "" },
  { city: "Otaru", country: "Japan", lat: 43.1907, lng: 140.9947, year: 2025, description: "Canal town magic 🏮", image: "https://source.unsplash.com/200x150/?otaru", hoverDescription: "Canal town magic 🏮", hoverImage: "" },
  { city: "Asahikawa", country: "Japan", lat: 43.7706, lng: 142.3648, year: 2025, description: "Zoo & snow festivals 🐧", image: "https://source.unsplash.com/200x150/?asahikawa", hoverDescription: "Zoo & snow festivals 🐧", hoverImage: "" },
  { city: "Furano", country: "Japan", lat: 43.3420, lng: 142.3834, year: 2025, description: "Lavender fields 💜", image: "https://source.unsplash.com/200x150/?furano", hoverDescription: "Lavender fields 💜", hoverImage: "" },
  { city: "Biei", country: "Japan", lat: 43.5917, lng: 142.4677, year: 2025, description: "Rolling hills 🌿", image: "https://source.unsplash.com/200x150/?biei", hoverDescription: "Rolling hills 🌿", hoverImage: "" },
  { city: "Wakkanai", country: "Japan", lat: 45.4094, lng: 141.6739, year: 2025, description: "Northern tip views 🌊", image: "https://source.unsplash.com/200x150/?wakkanai", hoverDescription: "Northern tip views 🌊", hoverImage: "" },
  { city: "Fuji", country: "Japan", lat: 35.3606, lng: 138.7274, year: 2025, description: "Iconic peak & chill lakes 🗻", image: "https://source.unsplash.com/200x150/?fuji", hoverDescription: "Iconic peak & chill lakes 🗻", hoverImage: "" },
  { city: "Melbourne", country: "Australia", lat: -37.8136, lng: 144.9631, year: 2025, description: "Laneways & cafes ☕", image: "https://source.unsplash.com/200x150/?melbourne", hoverDescription: "Laneways & cafes ☕", hoverImage: "" },
  { city: "Daylesford", country: "Australia", lat: -37.3417, lng: 144.1420, year: 2025, description: "Hot springs vibes 💦", image: "https://source.unsplash.com/200x150/?daylesford", hoverDescription: "Hot springs vibes 💦", hoverImage: "" },
  { city: "Hobart", country: "Australia", lat: -42.8821, lng: 147.3272, year: 2025, description: "Art & markets 🎨", image: "https://source.unsplash.com/200x150/?hobart", hoverDescription: "Art & markets 🎨", hoverImage: "" },
  { city: "Bruny Island", country: "Australia", lat: -43.4236, lng: 147.3317, year: 2025, description: "Oysters & cliffs 🦪", image: "https://source.unsplash.com/200x150/?brunyisland", hoverDescription: "Oysters & cliffs 🦪", hoverImage: "" },
  { city: "Eaglehawk", country: "Australia", lat: -43.0257, lng: 147.9574, year: 2025, description: "Sea caves & coastlines 🌊", image: "https://source.unsplash.com/200x150/?tasmania", hoverDescription: "Sea caves & coastlines 🌊", hoverImage: "" },
];
