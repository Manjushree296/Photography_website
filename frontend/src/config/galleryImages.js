/**
 * GALLERY IMAGES CONFIGURATION
 * 
 * All images are loaded from Google Drive using direct links
 * Format: https://drive.google.com/uc?id=FILE_ID
 * 
 * HOW TO USE:
 * 1. Open your Google Drive folder
 * 2. Right-click on an image -> Get link
 * 3. Copy the FILE_ID from the link: https://drive.google.com/file/d/FILE_ID/view
 * 4. Replace FILE_ID below with the actual ID
 * 
 * FOLDER STRUCTURE:
 * /Photography Portfolio
 *   /Hero Images (for home page slider)
 *   /Wedding
 *   /Pre-Wedding
 *   /Baby Shots
 *   /Maternity
 *   /Events
 */

// Hero Slider Images (for Home page)
export const heroImages = [
  {
    id: 'hero-1',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_HERO_IMAGE_1_ID',
    title: 'Wedding Moments'
  },
  {
    id: 'hero-2',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_HERO_IMAGE_2_ID',
    title: 'Precious Moments'
  },
  {
    id: 'hero-3',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_HERO_IMAGE_3_ID',
    title: 'Beautiful Stories'
  }
];

// Wedding Category
export const weddingImages = [
  {
    id: 'wedding-1',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_WEDDING_1_ID',
    title: 'Wedding Day',
    category: 'wedding'
  },
  {
    id: 'wedding-2',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_WEDDING_2_ID',
    title: 'Wedding Ceremony',
    category: 'wedding'
  },
  {
    id: 'wedding-3',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_WEDDING_3_ID',
    title: 'Reception',
    category: 'wedding'
  },
  {
    id: 'wedding-4',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_WEDDING_4_ID',
    title: 'Dance Moments',
    category: 'wedding'
  },
  {
    id: 'wedding-5',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_WEDDING_5_ID',
    title: 'Couple Portrait',
    category: 'wedding'
  },
  {
    id: 'wedding-6',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_WEDDING_6_ID',
    title: 'Candid Moment',
    category: 'wedding'
  }
];

// Pre-Wedding Category
export const preweddingImages = [
  {
    id: 'prewedding-1',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_PREWEDDING_1_ID',
    title: 'Engagement Shoot',
    category: 'prewedding'
  },
  {
    id: 'prewedding-2',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_PREWEDDING_2_ID',
    title: 'Couple Photoshoot',
    category: 'prewedding'
  },
  {
    id: 'prewedding-3',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_PREWEDDING_3_ID',
    title: 'Romantic Moment',
    category: 'prewedding'
  },
  {
    id: 'prewedding-4',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_PREWEDDING_4_ID',
    title: 'Sunset Shot',
    category: 'prewedding'
  },
  {
    id: 'prewedding-5',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_PREWEDDING_5_ID',
    title: 'Couple Pose',
    category: 'prewedding'
  },
  {
    id: 'prewedding-6',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_PREWEDDING_6_ID',
    title: 'Romantic Evening',
    category: 'prewedding'
  }
];

// Baby Shots Category
export const babyImages = [
  {
    id: 'baby-1',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_BABY_1_ID',
    title: 'Newborn Portrait',
    category: 'baby'
  },
  {
    id: 'baby-2',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_BABY_2_ID',
    title: 'Baby Smile',
    category: 'baby'
  },
  {
    id: 'baby-3',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_BABY_3_ID',
    title: 'Family Moment',
    category: 'baby'
  },
  {
    id: 'baby-4',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_BABY_4_ID',
    title: 'Baby Details',
    category: 'baby'
  },
  {
    id: 'baby-5',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_BABY_5_ID',
    title: 'Parent and Baby',
    category: 'baby'
  },
  {
    id: 'baby-6',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_BABY_6_ID',
    title: 'Adorable Shot',
    category: 'baby'
  }
];

// Maternity Category
export const maternityImages = [
  {
    id: 'maternity-1',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_MATERNITY_1_ID',
    title: 'Maternity Glow',
    category: 'maternity'
  },
  {
    id: 'maternity-2',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_MATERNITY_2_ID',
    title: 'Expecting Mother',
    category: 'maternity'
  },
  {
    id: 'maternity-3',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_MATERNITY_3_ID',
    title: 'Couple Maternity',
    category: 'maternity'
  },
  {
    id: 'maternity-4',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_MATERNITY_4_ID',
    title: 'Belly Portrait',
    category: 'maternity'
  },
  {
    id: 'maternity-5',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_MATERNITY_5_ID',
    title: 'Outdoor Shoot',
    category: 'maternity'
  },
  {
    id: 'maternity-6',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_MATERNITY_6_ID',
    title: 'Studio Portrait',
    category: 'maternity'
  }
];

// Events Category
export const eventsImages = [
  {
    id: 'events-1',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_EVENTS_1_ID',
    title: 'Event Celebration',
    category: 'events'
  },
  {
    id: 'events-2',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_EVENTS_2_ID',
    title: 'Party Moments',
    category: 'events'
  },
  {
    id: 'events-3',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_EVENTS_3_ID',
    title: 'Group Photo',
    category: 'events'
  },
  {
    id: 'events-4',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_EVENTS_4_ID',
    title: 'Decoration Shot',
    category: 'events'
  },
  {
    id: 'events-5',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_EVENTS_5_ID',
    title: 'Candid Event',
    category: 'events'
  },
  {
    id: 'events-6',
    url: 'https://drive.google.com/uc?id=REPLACE_WITH_EVENTS_6_ID',
    title: 'Event Highlight',
    category: 'events'
  }
];

// All gallery images grouped by category
export const allGalleryImages = {
  wedding: weddingImages,
  prewedding: preweddingImages,
  baby: babyImages,
  maternity: maternityImages,
  events: eventsImages
};

// Gallery categories for navigation
export const galleryCategories = [
  { id: 'wedding', name: 'Wedding', path: '/wedding' },
  { id: 'prewedding', name: 'Pre-Wedding', path: '/prewedding' },
  { id: 'baby', name: 'Baby Shots', path: '/baby' },
  { id: 'maternity', name: 'Maternity', path: '/maternity' },
  { id: 'events', name: 'Events', path: '/events' }
];
