const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');
const GalleryImage = require('./models/GalleryImage');

dotenv.config();

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/photography-portfolio';

// Sample images (using placeholder URLs for now)
const sampleImages = [
  {
    title: "Wedding Ceremony",
    description: "Beautiful moments from a wedding ceremony",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80",
    category: "wedding",
    tags: ["wedding", "ceremony", "celebration"],
    featured: true,
    displayOrder: 1
  },
  {
    title: "Engagement Photoshoot",
    description: "Romantic engagement moments",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    category: "engagement",
    tags: ["engagement", "portrait", "couple"],
    featured: true,
    displayOrder: 2
  },
  {
    title: "Pre-Wedding Shoot",
    description: "Candid pre-wedding moments",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&q=80",
    category: "pre-wedding",
    tags: ["pre-wedding", "couple", "outdoor"],
    featured: true,
    displayOrder: 3
  },
  {
    title: "Maternity Portrait",
    description: "Beautiful maternity shoot",
    imageUrl: "https://images.unsplash.com/photo-1515221318891-2b226a16d3c7?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1515221318891-2b226a16d3c7?w=300&q=80",
    category: "maternity",
    tags: ["maternity", "pregnant", "portrait"],
    featured: true,
    displayOrder: 4
  },
  {
    title: "Family Gathering",
    description: "Joyful family moments",
    imageUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&q=80",
    category: "family",
    tags: ["family", "group", "celebration"],
    featured: true,
    displayOrder: 5
  },
  {
    title: "Haldi Ceremony",
    description: "Vibrant haldi celebration",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&q=80",
    category: "haldi",
    tags: ["haldi", "ceremony", "celebration"],
    featured: true,
    displayOrder: 6
  },
  {
    title: "Cultural Event",
    description: "Traditional cultural celebration",
    imageUrl: "https://images.unsplash.com/photo-1465146072230-91cabc968266?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1465146072230-91cabc968266?w=300&q=80",
    category: "cultural",
    tags: ["cultural", "traditional", "celebration"],
    featured: false,
    displayOrder: 7
  },
  {
    title: "Birthday Party",
    description: "Fun birthday celebration",
    imageUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300&q=80",
    category: "events",
    tags: ["birthday", "party", "celebration"],
    featured: false,
    displayOrder: 8
  },
  {
    title: "Corporate Event",
    description: "Professional corporate photography",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80",
    category: "events",
    tags: ["corporate", "professional", "event"],
    featured: false,
    displayOrder: 9
  },
  {
    title: "Portrait Session",
    description: "Professional portrait photography",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80",
    category: "portrait",
    tags: ["portrait", "professional"],
    featured: false,
    displayOrder: 10
  },
  {
    title: "Landscape Photography",
    description: "Scenic landscape shots",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    thumbnailUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80",
    category: "landscape",
    tags: ["landscape", "nature", "scenic"],
    featured: false,
    displayOrder: 11
  }
];

// Sample services
const sampleServices = [
  {
    name: "Wedding Photography",
    slug: "wedding",
    description: "Capturing your special wedding day with elegance and emotion",
    longDescription: "We specialize in capturing the most precious moments of your wedding day. From candid moments to formal portraits, we ensure every emotion is preserved beautifully.",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80"
    ],
    features: ["Full Day Coverage", "Edited Photos", "Videography Option", "Album Design"],
    price: {
      startingFrom: 50000,
      currency: "INR"
    },
    duration: "8-12 hours",
    displayOrder: 1,
    active: true
  },
  {
    name: "Engagement Photography",
    slug: "engagement",
    description: "Celebrate your engagement with beautiful couple portraits",
    longDescription: "Let us capture the joy and love in your engagement. From pre-planned shoots to candid moments, we create memories that last forever.",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=80"
    ],
    features: ["Location Shoot", "Multiple Outfits", "Edited Photos", "Digital Copies"],
    price: {
      startingFrom: 15000,
      currency: "INR"
    },
    duration: "3-4 hours",
    displayOrder: 2,
    active: true
  },
  {
    name: "Pre-Wedding Photography",
    slug: "pre-wedding",
    description: "Romantic pre-wedding shoots in exotic locations",
    longDescription: "Create magical memories before your big day. Our pre-wedding packages include exotic locations and creative storytelling.",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
      "https://images.unsplash.com/photo-1514078309087-a71300b04a0a?w=1200&q=80"
    ],
    features: ["Multiple Locations", "Cinematic Video", "Same-Day Edit", "Premium Album"],
    price: {
      startingFrom: 30000,
      currency: "INR"
    },
    duration: "1-2 days",
    displayOrder: 3,
    active: true
  },
  {
    name: "Maternity Photography",
    slug: "maternity",
    description: "Celebrate motherhood with beautiful maternity portraits",
    longDescription: "Preserve the beautiful moments of pregnancy with artistic and tasteful maternity photography.",
    coverImage: "https://images.unsplash.com/photo-1515221318891-2b226a16d3c7?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1515221318891-2b226a16d3c7?w=1200&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80"
    ],
    features: ["Indoor & Outdoor", "Maternity Poses", "Family Inclusion", "Beautiful Backdrops"],
    price: {
      startingFrom: 10000,
      currency: "INR"
    },
    duration: "2-3 hours",
    displayOrder: 4,
    active: true
  },
  {
    name: "Family Photography",
    slug: "family",
    description: "Capture precious family moments together",
    longDescription: "Family is everything. Let us capture the love and joy of your family in beautiful photographs.",
    coverImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80"
    ],
    features: ["Candid Moments", "Multiple Locations", "All Ages Welcome", "Extended Session"],
    price: {
      startingFrom: 8000,
      currency: "INR"
    },
    duration: "3-4 hours",
    displayOrder: 5,
    active: true
  },
  {
    name: "Cultural Photography",
    slug: "cultural",
    description: "Document your cultural celebrations with authenticity",
    longDescription: "Preserve the traditions and celebrations that define your culture with respectful and artistic photography.",
    coverImage: "https://images.unsplash.com/photo-1465146072230-91cabc968266?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1465146072230-91cabc968266?w=1200&q=80",
      "https://images.unsplash.com/photo-1519671482677-2bf373b9df51?w=1200&q=80"
    ],
    features: ["Full Event Coverage", "Cultural Sensitivity", "Videography", "Same-Day Edit"],
    price: {
      startingFrom: 20000,
      currency: "INR"
    },
    duration: "Full Event",
    displayOrder: 6,
    active: true
  },
  {
    name: "Haldi Photography",
    slug: "haldi",
    description: "Colorful haldi ceremony photography",
    longDescription: "Capture the vibrant colors and joyous moments of your haldi celebration.",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
    ],
    features: ["Full Day Coverage", "Videography", "Cinematic Edit", "Album"],
    price: {
      startingFrom: 25000,
      currency: "INR"
    },
    duration: "6-8 hours",
    displayOrder: 7,
    active: true
  },
  {
    name: "Event Photography",
    slug: "events",
    description: "Professional photography for all types of events",
    longDescription: "From corporate events to parties, we capture every important moment professionally.",
    coverImage: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
    ],
    features: ["Event Coverage", "Edited Photos", "Quick Turnaround", "Digital Delivery"],
    price: {
      startingFrom: 12000,
      currency: "INR"
    },
    duration: "Flexible",
    displayOrder: 8,
    active: true
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(mongoURI);
    console.log('✓ Connected to MongoDB');

    // Clear existing data
    await Service.deleteMany({});
    await GalleryImage.deleteMany({});
    console.log('✓ Cleared existing data');

    // Insert services
    const insertedServices = await Service.insertMany(sampleServices);
    console.log(`✓ Inserted ${insertedServices.length} services`);

    // Insert images
    const insertedImages = await GalleryImage.insertMany(sampleImages);
    console.log(`✓ Inserted ${insertedImages.length} gallery images`);

    console.log('\n✓ Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Seeding error:', error.message);
    process.exit(1);
  }
}

seedDatabase();
