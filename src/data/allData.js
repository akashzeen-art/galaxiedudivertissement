export const heroData = {
  title: "UNLEASH THE POWER",
  subtitle: "Experience the most intense slap fighting action. Raw power meets precision in the ultimate combat sport.",
  backgroundVideo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop",
  primaryCTA: "Watch Highlights",
  secondaryCTA: "Upcoming Fights"
};

export const featuredEvents = [
  {
    id: 1,
    title: "WORLD CHAMPIONSHIP",
    date: "Dec 15, 2024",
    location: "Las Vegas, NV",
    fighter1: { name: "Thunder Mike", country: "USA", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&h=300&fit=crop" },
    fighter2: { name: "Iron Fist", country: "RUS", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
    status: "LIVE"
  },
  {
    id: 2,
    title: "KNOCKOUT SERIES",
    date: "Dec 22, 2024",
    location: "Miami, FL",
    fighter1: { name: "Slap King", country: "BRA", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    fighter2: { name: "Power Punch", country: "UK", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" },
    status: "UPCOMING"
  },
  {
    id: 3,
    title: "RISING STARS",
    date: "Jan 5, 2025",
    location: "New York, NY",
    fighter1: { name: "Young Gun", country: "CAN", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" },
    fighter2: { name: "Storm", country: "AUS", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
    status: "UPCOMING"
  }
];

export const videoCategories = [
  { id: 'highlights', name: 'Highlights', active: true },
  { id: 'knockouts', name: 'Knockouts', active: false },
  { id: 'matches', name: 'Full Matches', active: false },
  { id: 'interviews', name: 'Interviews', active: false }
];

export const slapVideos = [
  {
    id: 1,
    title: "Epic Knockout Compilation",
    duration: "5:42",
    views: "2.1M",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=225&fit=crop",
    category: "highlights"
  },
  {
    id: 2,
    title: "Thunder Mike vs Iron Fist",
    duration: "12:30",
    views: "1.8M",
    thumbnail: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=225&fit=crop",
    category: "matches"
  },
  {
    id: 3,
    title: "Best Slaps of 2024",
    duration: "8:15",
    views: "3.2M",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop",
    category: "highlights"
  },
  {
    id: 4,
    title: "Fighter Interview: Slap King",
    duration: "15:20",
    views: "890K",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=225&fit=crop",
    category: "interviews"
  },
  {
    id: 5,
    title: "Instant KO Moments",
    duration: "3:45",
    views: "4.1M",
    thumbnail: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=225&fit=crop",
    category: "knockouts"
  }
];

export const topFighters = [
  {
    id: 1,
    name: "ARM WRESTLING",
    weightClass: "Heavyweight",
    country: "USA",
    record: "15-2",
    koPercentage: 85,
    powerRating: 95,
    image: "/ArmWrestlingProfile.png",
    trending: true
  },
  {
    id: 2,
    name: "MMA FIGHT",
    weightClass: "Heavyweight",
    country: "RUS",
    record: "18-1",
    koPercentage: 92,
    powerRating: 98,
    image: "/MMAFightProfile.png",
    trending: false
  },
  {
    id: 3,
    name: "TAEKWONDO",
    weightClass: "Light Heavyweight",
    country: "BRA",
    record: "12-3",
    koPercentage: 78,
    powerRating: 88,
    image: "/TaekwondoProfile.png",
    trending: true
  },
  {
    id: 4,
    name: "KICKBOXING",
    weightClass: "Middleweight",
    country: "UK",
    record: "14-4",
    koPercentage: 71,
    powerRating: 82,
    image: "/KickBoxingProfile.png",
    trending: false
  },
  {
    id: 5,
    name: "Young Gun",
    weightClass: "Welterweight",
    country: "CAN",
    record: "8-1",
    koPercentage: 89,
    powerRating: 85,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    trending: true
  }
];

export const rankings = [
  { rank: 1, fighter: "ARM WRESTLING", record: "18-1", koPercentage: 92 },
  { rank: 2, fighter: "MMA FIGHT", record: "15-2", koPercentage: 85 },
  { rank: 3, fighter: "TAEKWONDO", record: "16-3", koPercentage: 87 },
  { rank: 4, fighter: "KICKBOXING", record: "11-1", koPercentage: 91 },
  { rank: 5, fighter: "SLAP FIGHT", record: "12-3", koPercentage: 78 }
];

export const aiRecommendations = [
  {
    id: 1,
    title: "Thunder Mike's Greatest Hits",
    type: "video",
    aiTag: "Based on your viewing history",
    thumbnail: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Heavyweight Championship",
    type: "event",
    aiTag: "Trending in your area",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Rising Stars Tournament",
    type: "event",
    aiTag: "Similar to your favorites",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop"
  }
];

export const newsUpdates = [
  {
    id: 1,
    title: "Thunder Mike Announces Retirement Plans",
    summary: "The heavyweight champion hints at stepping down after next fight",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=250&fit=crop",
    date: "2 hours ago"
  },
  {
    id: 2,
    title: "New Weight Class Introduced",
    summary: "Super Heavyweight division to debut in 2025 season",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    date: "5 hours ago"
  },
  {
    id: 3,
    title: "Record-Breaking PPV Sales",
    summary: "Last weekend's championship broke all previous viewership records",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=250&fit=crop",
    date: "1 day ago"
  }
];

export const fanZone = {
  poll: {
    question: "Who wins the next championship?",
    options: [
      { name: "ARM WRESTLING", percentage: 45, votes: 2847 },
      { name: "MMA FIGHT", percentage: 35, votes: 2213 },
      { name: "TAEKWONDO", percentage: 20, votes: 1264 }
    ]
  },
  reactions: [
    { emoji: "🔥", label: "Fire", count: 1247 },
    { emoji: "👊", label: "Punch", count: 892 },
    { emoji: "👑", label: "Crown", count: 634 }
  ],
  comments: [
    { id: 1, initial: "A", username: "ArmWrestling_Fan", text: "ARM WRESTLING is unstoppable! 🔥", time: "2 min ago" },
    { id: 2, initial: "M", username: "MMA_King", text: "MMA FIGHT has the power! 👊", time: "5 min ago" }
  ]
};