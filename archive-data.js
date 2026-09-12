/* archive-data.js — Haus of Memories Archive
   ============================================================
   This is the single source of truth for the archive: collections
   and archive entries. archive.html, collection.html, item.html,
   and shop.html all read from ARCHIVE_COLLECTIONS / ARCHIVE_ENTRIES
   below and render themselves — you should never need to hand-edit
   HTML to add a photograph.

   ── ADDING A NEW PHOTOGRAPH ──
   1. Drop the image file in /images/<collection-key>/ (keep the
      original file — do not crop, stretch, recolor, or upscale it).
   2. Check its actual pixel dimensions (Preview/Finder "Get Info",
      or `sips -g pixelWidth -g pixelHeight file.jpg` on a Mac).
   3. Pull whatever EXIF exists (date, camera) with Finder's Info
      panel, Photos app, or `exiftool file.jpg`. If a field isn't
      there, leave it as null / "Unknown" below — never guess.
   4. Never store exact GPS coordinates here. generalLocation should
      always be a city/area, not an address or lat/long.
   5. Copy one of the entries below, give it the next sequential
      Archive ID — zero-padded numbers, no prefix (000007, 000008...)
      — fill in what you actually know, and set `image` to the file
      path. Print sizes and pricing are derived automatically from
      width/height — you don't set them by hand.

   The entries currently below are PLACEHOLDER / SAMPLE records so
   the site has something to render — they are not real photographs.
   Swap them out (or delete them) as real archive entries go in.
   ============================================================ */

/* ── Collections ──
   `status: 'live'` collections appear as browsable; `'coming-soon'`
   collections show on the Archive page as a preview of what's next
   but have no entries yet. Add a new collection here any time —
   entries reference it by `key`. */
const ARCHIVE_COLLECTIONS = [
  {
    key: 'graffiti',
    name: 'Rural Artwork',
    tagline: 'Work found on walls and surfaces out past the city, photographed where it stands.',
    status: 'live'
  },
  {
    key: 'trains',
    name: 'Trains',
    tagline: 'Freight cars, yards, and the marks that travel with them.',
    status: 'coming-soon'
  },
  {
    key: 'architecture',
    name: 'Architecture',
    tagline: 'Buildings and structures worth remembering before they change.',
    status: 'coming-soon'
  },
  {
    key: 'abandoned',
    name: 'Abandoned Places',
    tagline: 'Spaces left behind, still holding their shape.',
    status: 'coming-soon'
  },
  {
    key: 'signs',
    name: 'Signs & Street Typography',
    tagline: 'Hand-painted and found lettering from the everyday city.',
    status: 'coming-soon'
  },
  {
    key: 'murals',
    name: 'Murals',
    tagline: 'Sanctioned and unsanctioned large-scale work.',
    status: 'coming-soon'
  },
  {
    key: 'fences',
    name: 'Chain-Link & Fences',
    tagline: 'Found marks on chain-link, wood, and wire — the boundary lines of a place.',
    status: 'coming-soon'
  },
  {
    key: 'overpasses',
    name: 'Underpasses & Overpasses',
    tagline: 'Where the city passes over itself, and what collects underneath.',
    status: 'coming-soon'
  },
  {
    key: 'industrial',
    name: 'Loading Docks & Industrial',
    tagline: 'The working edges of the city — docks, warehouses, and the marks they carry.',
    status: 'coming-soon'
  },
  {
    key: 'drains',
    name: 'Storm Drains & Concrete',
    tagline: 'Concrete channels and drainage — surfaces the city rarely looks at twice.',
    status: 'coming-soon'
  },
  {
    key: 'alleys',
    name: 'Alleyways',
    tagline: 'The spaces between buildings, held onto before they change.',
    status: 'coming-soon'
  },
  {
    key: 'night',
    name: 'Night Photography',
    tagline: 'What the city looks like after most of it has gone home.',
    status: 'coming-soon'
  },
  {
    key: 'objects',
    name: 'Found Objects',
    tagline: 'Things left behind, photographed where they were found.',
    status: 'coming-soon'
  },
  {
    key: 'landscapes',
    name: 'Landscapes & Transient Moments',
    tagline: 'Skies, light, and moments that exist once.',
    status: 'coming-soon'
  },
  {
    key: 'disappearing',
    name: 'Disappearing Places',
    tagline: 'Spaces on their way to becoming something else, or nothing at all.',
    status: 'coming-soon'
  },
  {
    key: 'rooftops',
    name: 'Rooftops',
    tagline: 'Views the ground level never shows.',
    status: 'coming-soon'
  },
  {
    key: 'doorways',
    name: 'Doorways',
    tagline: 'Entrances, thresholds, and what they lead to.',
    status: 'coming-soon'
  },
  {
    key: 'windows',
    name: 'Windows',
    tagline: 'What a window frames, on either side of the glass.',
    status: 'coming-soon'
  },
  {
    key: 'stairwells',
    name: 'Stairwells',
    tagline: 'In-between spaces, usually passed through without a second look.',
    status: 'coming-soon'
  },
  {
    key: 'parking',
    name: 'Parking Structures',
    tagline: 'Concrete, striping, and the geometry of holding cars.',
    status: 'coming-soon'
  },
  {
    key: 'bridges',
    name: 'Bridges',
    tagline: 'Crossings, and what gathers underneath them.',
    status: 'coming-soon'
  },
  {
    key: 'neon',
    name: 'Neon & Signage Lights',
    tagline: 'Lit signs, old and new, and the glow they leave on a street.',
    status: 'coming-soon'
  },
  {
    key: 'relics',
    name: 'Payphones & Relics',
    tagline: 'Leftover technology, still standing after its purpose ended.',
    status: 'coming-soon'
  },
  {
    key: 'storefronts',
    name: 'Storefronts',
    tagline: 'Shopfronts, open and shuttered, as the street changes around them.',
    status: 'coming-soon'
  },
  {
    key: 'sidewalks',
    name: 'Sidewalks & Pavement',
    tagline: 'What collects on the ground — cracks, stains, stencils, wear.',
    status: 'coming-soon'
  },
  {
    key: 'skies',
    name: 'Skies & Weather',
    tagline: 'The sky above whatever else is being documented.',
    status: 'coming-soon'
  },
  {
    key: 'utility',
    name: 'Water Towers & Utility',
    tagline: 'The infrastructure that keeps a city running, rarely photographed on purpose.',
    status: 'coming-soon'
  },
  {
    key: 'vacant',
    name: 'Vacant Lots',
    tagline: 'Empty parcels, waiting to become something else.',
    status: 'coming-soon'
  },
  {
    key: 'billboards',
    name: 'Billboards & Advertising',
    tagline: 'Large-format advertising and the messages plastered across a changing skyline.',
    status: 'coming-soon'
  },
  {
    key: 'construction',
    name: 'Construction Sites',
    tagline: 'Scaffolding, cranes, and a city caught mid-change.',
    status: 'coming-soon'
  }
];

/* ── Archive Entries ──
   Fields left as null render as "Unknown" — never invented.
   `image: null` renders a placeholder tile (aspect-ratio matched
   to width/height so layout is still accurate) until a real file
   is added. */
const ARCHIVE_ENTRIES = [
  {
    id: '000001',
    title: 'Freight Car, East Yard',
    collection: 'graffiti',
    datePhotographed: '2024-06-02',
    generalLocation: 'Phoenix, AZ',
    medium: 'Freight car / spray paint',
    condition: 'Car status since photographed — unknown',
    camera: 'iPhone 13 Pro',
    width: 4032,
    height: 3024,
    editionType: 'limited',
    editionSize: 25,
    image: null
  },
  {
    id: '000002',
    title: 'Underpass, 7th Street',
    collection: 'graffiti',
    datePhotographed: null,
    generalLocation: 'Phoenix, AZ',
    medium: 'Wall / spray paint',
    condition: 'Painted over, spring 2025',
    camera: null,
    width: 3024,
    height: 4032,
    editionType: 'open',
    editionSize: null,
    image: null
  },
  {
    id: '000003',
    title: 'Boxcar Tag, No. 2',
    collection: 'graffiti',
    datePhotographed: '2024-09-14',
    generalLocation: 'Tempe, AZ',
    medium: 'Freight car / marker and spray paint',
    condition: 'Unknown',
    camera: 'iPhone 13 Pro',
    width: 4032,
    height: 3024,
    editionType: 'limited',
    editionSize: 25,
    image: null
  },
  {
    id: '000004',
    title: 'Alley Wall, Grand Ave',
    collection: 'graffiti',
    datePhotographed: '2025-01-19',
    generalLocation: 'Phoenix, AZ',
    medium: 'Wall / spray paint',
    condition: 'Standing as of photograph date',
    camera: 'iPhone 15 Pro',
    width: 4284,
    height: 5712,
    editionType: 'open',
    editionSize: null,
    image: null
  },
  {
    id: '000005',
    title: 'Yard Fence, Chainlink Study',
    collection: 'graffiti',
    datePhotographed: null,
    generalLocation: 'Mesa, AZ',
    medium: 'Chainlink fence / found marks',
    condition: 'Unknown',
    camera: null,
    width: 3024,
    height: 3024,
    editionType: 'limited',
    editionSize: 10,
    image: null
  },
  {
    id: '000006',
    title: 'Overpass Throw-Up, Night',
    collection: 'graffiti',
    datePhotographed: '2025-04-02',
    generalLocation: 'Phoenix, AZ',
    medium: 'Overpass wall / spray paint',
    condition: 'Unknown',
    camera: 'iPhone 15 Pro',
    width: 4284,
    height: 3213,
    editionType: 'open',
    editionSize: null,
    image: null
  }
];

/* ── Print size / pricing ──
   Standard offered sizes with their price at full size. A size is
   only offered if the photograph's actual resolution supports it
   at roughly 300 DPI on the long edge — we never upscale past what
   the file can actually support. Prints are produced with a thin
   archival border so the full, uncropped frame is always preserved,
   regardless of how a given photo's aspect ratio compares to these
   standard paper sizes. */
const PRINT_SIZES = [
  { label: '5×7', longIn: 7, price: 15 },
  { label: '8×10', longIn: 10, price: 30 },
  { label: '11×14', longIn: 14, price: 60 },
  { label: '16×20', longIn: 20, price: 85 },
  { label: '20×24', longIn: 24, price: 125 },
  { label: '24×36', longIn: 36, price: 200 }
];

const PRINT_DPI = 300;

/**
 * Given a photograph's actual pixel dimensions, return the
 * recommended full-resolution print size and the list of standard
 * sizes that don't exceed what the resolution can support.
 */
function calcPrintOptions(widthPx, heightPx) {
  if (!widthPx || !heightPx) {
    return { known: false, recommended: null, longIn: null, shortIn: null, sizes: [] };
  }
  const longPx = Math.max(widthPx, heightPx);
  const shortPx = Math.min(widthPx, heightPx);
  const longIn = longPx / PRINT_DPI;
  const shortIn = shortPx / PRINT_DPI;
  const sizes = PRINT_SIZES.filter(s => s.longIn <= longIn + 0.05);
  return {
    known: true,
    recommended: `${longIn.toFixed(1)} × ${shortIn.toFixed(1)} in`,
    longIn,
    shortIn,
    sizes
  };
}

function getEntry(id) {
  return ARCHIVE_ENTRIES.find(e => e.id === id) || null;
}

function getCollection(key) {
  return ARCHIVE_COLLECTIONS.find(c => c.key === key) || null;
}

function getEntriesByCollection(key) {
  return ARCHIVE_ENTRIES.filter(e => e.collection === key);
}

function formatDate(dateStr) {
  if (!dateStr) return 'Unknown';
  const d = new Date(dateStr + 'T12:00:00');
  if (isNaN(d)) return 'Unknown';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function orDefault(val, fallback = 'Unknown') {
  return (val === null || val === undefined || val === '') ? fallback : val;
}
