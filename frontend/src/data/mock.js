// Mock data for Elana Podbrezsky Art Gallery

export const artistInfo = {
  name: "Elana Podbrezsky",
  tagline: "Contemporary Abstract Expressionist",
  bio: `Elana Podbrezsky is a contemporary abstract expressionist whose work explores the interplay between color, emotion, and the natural world. Born in Eastern Europe and now based in New York, her paintings are characterized by bold brushstrokes, luminous color palettes, and a deep connection to the landscapes of her childhood.

With over two decades of artistic practice, Elana has exhibited in galleries across Europe and North America. Her work is held in private collections worldwide, and she has been featured in numerous art publications. Each piece is a meditation on memory, place, and the ineffable beauty of the present moment.`,
  shortBio: "Contemporary abstract expressionist exploring color, emotion, and nature. Based in New York, exhibited internationally.",
  portrait: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=800&q=80",
  email: "studio@elanapodbrezsky.com",
  instagram: "@elanapodbrezsky",
  location: "New York, NY"
};

export const featuredArtwork = {
  id: "featured-1",
  title: "Horizon Dreams",
  year: 2024,
  medium: "Oil on canvas",
  dimensions: '48" x 72"',
  price: 12500,
  image: "https://images.unsplash.com/flagged/photo-1567934150921-7632371abb32?w=1600&q=80",
  description: "A sweeping exploration of light and landscape, this piece captures the ephemeral beauty of dawn breaking over distant mountains."
};

export const artworks = [
  {
    id: "art-1",
    title: "Golden Whispers",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '36" x 48"',
    price: 8500,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1531056416665-266c4099c928?w=800&q=80",
    available: true
  },
  {
    id: "art-2",
    title: "Azure Meditation",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: '40" x 40"',
    price: 6800,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1533208087231-c3618eab623c?w=800&q=80",
    available: true
  },
  {
    id: "art-3",
    title: "Crimson Flow",
    year: 2023,
    medium: "Mixed media on canvas",
    dimensions: '30" x 40"',
    price: 5200,
    category: "abstract",
    image: "https://images.unsplash.com/photo-1531489956451-20957fab52f2?w=800&q=80",
    available: true
  },
  {
    id: "art-4",
    title: "Emerald Dreams",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: '48" x 60"',
    price: 9800,
    category: "landscape",
    image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?w=800",
    available: true
  },
  {
    id: "art-5",
    title: "Twilight Symphony",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '36" x 36"',
    price: 5800,
    category: "abstract",
    image: "https://images.pexels.com/photos/1573434/pexels-photo-1573434.jpeg?w=800",
    available: false
  },
  {
    id: "art-6",
    title: "Morning Light",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: '24" x 36"',
    price: 4200,
    category: "landscape",
    image: "https://images.unsplash.com/photo-1602464729960-f95937746b68?w=800&q=80",
    available: true
  }
];

export const exhibitions = [
  {
    id: "ex-1",
    title: "Chromatic Horizons",
    venue: "Artspace Gallery",
    location: "New York, NY",
    startDate: "2025-09-15",
    endDate: "2025-10-30",
    description: "A solo exhibition featuring Elana's latest series exploring the boundaries between abstraction and landscape.",
    image: "https://images.unsplash.com/photo-1522878308970-972ec5eedc0d?w=800&q=80",
    upcoming: true
  },
  {
    id: "ex-2",
    title: "Abstract Visions",
    venue: "Modern Art Center",
    location: "Los Angeles, CA",
    startDate: "2025-06-01",
    endDate: "2025-07-15",
    description: "Group exhibition featuring contemporary abstract expressionists.",
    image: "https://images.pexels.com/photos/3778361/pexels-photo-3778361.jpeg?w=800",
    upcoming: false
  }
];

export const categories = [
  { id: "all", name: "All Works" },
  { id: "abstract", name: "Abstract" },
  { id: "landscape", name: "Landscape" }
];

export const testimonials = [
  {
    id: "test-1",
    quote: "Elana's work brings an extraordinary sense of light and emotion into our home. Each day we discover something new in the layers of color.",
    author: "Sarah M.",
    title: "Private Collector, Boston"
  },
  {
    id: "test-2",
    quote: "Her ability to capture the essence of landscape through abstraction is truly remarkable. A joy to collect.",
    author: "James L.",
    title: "Art Advisor, New York"
  }
];
