/* archive-data.js — Haus of Memories Archive
   ============================================================
   Generated from the contents of /images. Each numbered folder in
   /images IS an archive — images/0001/, images/0002/, and so on.
   There are no category names: an archive is simply what's in it.

   ── ADDING PHOTOGRAPHS ──
   1. Make a new numbered folder under /images (next number up), or
      drop files into an existing one. Keep the original file — do
      not crop, stretch, recolor, or upscale it.
   2. Every field below is read from the file itself: real pixel
      dimensions, and the capture date and camera from EXIF where
      the file carries them. Anything the file doesn't state stays
      null and renders as "Unknown" — never guessed.
   3. Exact GPS is never stored here. generalLocation is a city or
      area or nothing at all — never an address or coordinates.
   4. Print sizes and pricing are derived from width/height at
      300 DPI — you don't set them by hand.
   ============================================================ */

/* ── Archives ──
   The firefly count on the landing page is exactly the length of this
   list. The first entries have folders under /images and photographs
   in them; the rest are empty slots waiting to be filled, which show
   as red fireflies you can't open.

   NOTE: an archive counts as "filled" purely by having entries below,
   not by this status field — make images/0005/ and add its
   photographs and that firefly turns amber on its own. */
const ARCHIVE_COLLECTIONS = [
  { key: '0001', name: 'Archive 0001', tagline: null, status: 'live' },
  { key: '0002', name: 'Archive 0002', tagline: null, status: 'live' },
  { key: '0003', name: 'Archive 0003', tagline: null, status: 'live' },
  { key: '0004', name: 'Archive 0004', tagline: null, status: 'live' },
  { key: '0005', name: 'Archive 0005', tagline: null, status: 'empty' },
  { key: '0006', name: 'Archive 0006', tagline: null, status: 'empty' },
  { key: '0007', name: 'Archive 0007', tagline: null, status: 'empty' },
  { key: '0008', name: 'Archive 0008', tagline: null, status: 'empty' },
  { key: '0009', name: 'Archive 0009', tagline: null, status: 'empty' },
  { key: '0010', name: 'Archive 0010', tagline: null, status: 'empty' },
  { key: '0011', name: 'Archive 0011', tagline: null, status: 'empty' },
  { key: '0012', name: 'Archive 0012', tagline: null, status: 'empty' },
  { key: '0013', name: 'Archive 0013', tagline: null, status: 'empty' },
  { key: '0014', name: 'Archive 0014', tagline: null, status: 'empty' },
  { key: '0015', name: 'Archive 0015', tagline: null, status: 'empty' },
  { key: '0016', name: 'Archive 0016', tagline: null, status: 'empty' },
  { key: '0017', name: 'Archive 0017', tagline: null, status: 'empty' },
  { key: '0018', name: 'Archive 0018', tagline: null, status: 'empty' },
  { key: '0019', name: 'Archive 0019', tagline: null, status: 'empty' },
  { key: '0020', name: 'Archive 0020', tagline: null, status: 'empty' },
  { key: '0021', name: 'Archive 0021', tagline: null, status: 'empty' },
  { key: '0022', name: 'Archive 0022', tagline: null, status: 'empty' },
  { key: '0023', name: 'Archive 0023', tagline: null, status: 'empty' },
  { key: '0024', name: 'Archive 0024', tagline: null, status: 'empty' },
  { key: '0025', name: 'Archive 0025', tagline: null, status: 'empty' },
  { key: '0026', name: 'Archive 0026', tagline: null, status: 'empty' },
  { key: '0027', name: 'Archive 0027', tagline: null, status: 'empty' },
  { key: '0028', name: 'Archive 0028', tagline: null, status: 'empty' },
  { key: '0029', name: 'Archive 0029', tagline: null, status: 'empty' },
  { key: '0030', name: 'Archive 0030', tagline: null, status: 'empty' }
];

/* ── Archive Entries ──
   Fields left as null render as "Unknown" — never invented. Width
   and height are the photograph's true pixel dimensions with EXIF
   orientation applied, which is what the print sizes are computed
   from. */
const ARCHIVE_ENTRIES = [
  {
    id: '000001',
    title: null,
    collection: '0001',
    datePhotographed: '2020-12-13',
    generalLocation: 'Phoenix, AZ',
    medium: null,
    condition: null,
    camera: 'iPhone 11',
    width: 4032,
    height: 2268,
    editionType: null,
    editionSize: null,
    image: 'images/0001/096D5BC9-16F4-451E-B5A1-B28A91F49244.jpg'
  },
  {
    id: '000002',
    title: null,
    collection: '0001',
    datePhotographed: '2020-08-01',
    generalLocation: null,
    medium: null,
    condition: null,
    camera: 'iPhone 11',
    width: 2268,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0001/IMG_6301.JPG'
  },
  {
    id: '000003',
    title: null,
    collection: '0001',
    datePhotographed: '2020-10-03',
    generalLocation: null,
    medium: null,
    condition: null,
    camera: 'iPhone 11',
    width: 4032,
    height: 2268,
    editionType: null,
    editionSize: null,
    image: 'images/0001/IMG_7531.JPG'
  },
  {
    id: '000004',
    title: null,
    collection: '0001',
    datePhotographed: null,
    generalLocation: null,
    medium: null,
    condition: null,
    camera: null,
    width: 3024,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0001/IMG_8967.JPG'
  },
  {
    id: '000005',
    title: null,
    collection: '0002',
    datePhotographed: '2026-04-30',
    generalLocation: null,
    medium: null,
    condition: null,
    camera: 'iPhone 15 Pro',
    width: 4032,
    height: 3024,
    editionType: null,
    editionSize: null,
    image: 'images/0002/IMG_8820.jpeg'
  },
  {
    id: '000006',
    title: null,
    collection: '0002',
    datePhotographed: '2026-04-30',
    generalLocation: null,
    medium: null,
    condition: null,
    camera: 'iPhone 15 Pro',
    width: 3024,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0002/IMG_8821.jpeg'
  },
  {
    id: '000007',
    title: null,
    collection: '0002',
    datePhotographed: null,
    generalLocation: null,
    medium: null,
    condition: null,
    camera: null,
    width: 4032,
    height: 3024,
    editionType: null,
    editionSize: null,
    image: 'images/0002/IMG_8838.JPG'
  },
  {
    id: '000008',
    title: null,
    collection: '0003',
    datePhotographed: null,
    generalLocation: null,
    medium: null,
    condition: null,
    camera: null,
    width: 2691,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0003/IMG_0621.JPG'
  },
  {
    id: '000009',
    title: null,
    collection: '0003',
    datePhotographed: null,
    generalLocation: null,
    medium: null,
    condition: null,
    camera: null,
    width: 2691,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0003/IMG_1667.JPG'
  },
  {
    id: '000010',
    title: null,
    collection: '0003',
    datePhotographed: null,
    generalLocation: null,
    medium: null,
    condition: null,
    camera: null,
    width: 3024,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0003/IMG_8929.JPG'
  },
  {
    id: '000011',
    title: null,
    collection: '0004',
    datePhotographed: '2021-08-12',
    generalLocation: 'Walsenburg, CO',
    medium: null,
    condition: null,
    camera: 'iPhone 12 Pro',
    width: 4032,
    height: 2268,
    editionType: null,
    editionSize: null,
    image: 'images/0004/IMG_0699.JPG'
  },
  {
    id: '000012',
    title: null,
    collection: '0004',
    datePhotographed: '2021-08-12',
    generalLocation: 'Walsenburg, CO',
    medium: null,
    condition: null,
    camera: 'iPhone 12 Pro',
    width: 4032,
    height: 2268,
    editionType: null,
    editionSize: null,
    image: 'images/0004/IMG_0701.JPG'
  },
  {
    id: '000013',
    title: null,
    collection: '0004',
    datePhotographed: null,
    generalLocation: 'Ozona, TX',
    medium: null,
    condition: null,
    camera: null,
    width: 2268,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0004/IMG_7630.JPG'
  },
  {
    id: '000014',
    title: null,
    collection: '0004',
    datePhotographed: null,
    generalLocation: 'Ozona, TX',
    medium: null,
    condition: null,
    camera: null,
    width: 2268,
    height: 4032,
    editionType: null,
    editionSize: null,
    image: 'images/0004/IMG_7636.JPG'
  },
  {
    id: '000015',
    title: null,
    collection: '0004',
    datePhotographed: null,
    generalLocation: 'Ozona, TX',
    medium: null,
    condition: null,
    camera: null,
    width: 4032,
    height: 2268,
    editionType: null,
    editionSize: null,
    image: 'images/0004/IMG_7661.JPG'
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
