// Site content lives here so copy can be edited without touching layout.
// Source: "services and prices" menu card and "main" booking poster.

export const TAGLINE = 'Your spa where you can relax and release your stresses.'
export const MOTTO = ['Relax', 'Rejuvenate', 'Restore']

export const phones = [
  { display: '0995-4600743', tel: '+639954600743' },
]

// Branch list is near the bottom of this file.
// No online booking yet — "Book" buttons call the main number.
export const BOOKING_URL = `tel:${phones[0].tel}`

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#signature', label: 'Signature' },
  { href: '#contact', label: 'Contact' },
]

// Service descriptions (from the owner).
const HILOT = 'Deep tissue massage that releases muscle spasms, knots and trapped tension.'
const VENTOSA =
  'Traditional suction therapy using warm glass cups to draw out trapped muscle spasms, boost blood circulation and lift away deep muscle tension.'
const HOT_STONE =
  'Smooth, heated basalt stones placed on key points and glided over the body to melt away deep tension and soothe tired muscles.'
const SWEDISH =
  'A classic, gentle full-body massage using long gliding strokes and light-to-medium kneading to melt away stress and boost relaxation.'
const SHIATSU =
  'A soothing blend of warm oil and Japanese acupressure, using rhythmic thumb and palm pressure to release deep tension and restore balance.'
const EAR_CANDLING =
  'A soothing holistic treatment using a warm, hollow beeswax cone to promote deep relaxation and ease head and sinus tension.'

// Add-ons for the MCD All-In Signature Massage.
export const addOns = [
  { name: 'Ventosa', desc: VENTOSA },
  { name: 'Hot Stone', desc: HOT_STONE },
  { name: 'Ear Candling', desc: EAR_CANDLING },
]

export const menu = [
  {
    id: 'massage',
    label: 'Massage',
    items: [
      { name: 'MCD All-In Signature Massage', time: '1 hr', price: 1000, note: 'Choose Ventosa, Hot Stone or Ear Candling' },
      { name: 'Massage with Body Scrub & Salting', time: '1.5 hr', price: 2000 },
      { name: 'Massage with Body Stretching', time: '1.5 hr', price: 800 },
      { name: 'Swedish Massage', time: '1 hr', price: 500, desc: SWEDISH },
      { name: 'Swedish Massage', time: '1.5 hr', price: 750, desc: SWEDISH },
      { name: 'Oil Shiatsu Massage', time: '1 hr', price: 700, desc: SHIATSU },
      { name: 'Filipino Style / Hilot', time: '1 hr', price: 600, desc: HILOT },
      { name: 'Filipino Style / Hilot', time: '1.5 hr', price: 900, desc: HILOT },
      { name: 'Foot Massage', time: '30 min', price: 300 },
      { name: 'Head Massage', time: '30 min', price: 300 },
      { name: 'Hand Massage', time: '30 min', price: 300 },
    ],
  },
  {
    id: 'body',
    label: 'Body Treatments',
    items: [
      { name: 'Body Scrub', time: 'Up to 30 min', price: 700 },
      { name: 'Body Wash', time: 'Up to 30 min', price: 700 },
      { name: 'Body Salting', time: 'Up to 30 min', price: 700 },
      { name: 'Ear Candling', time: 'Up to 30 min', price: 200, desc: EAR_CANDLING },
      { name: 'Foot Spa with Reflex', time: 'Up to 30 min', price: 800 },
    ],
  },
  {
    id: 'packages',
    label: 'Packages',
    items: [
      { name: 'Massage with Ventosa', time: '1.5 hr', price: 800, desc: VENTOSA },
      { name: 'Massage with Body Scrub', time: '1.5 hr', price: 1100 },
    ],
  },
]

export const peso = (n) => `₱${n.toLocaleString('en-PH')}`

export const benefits = [
  {
    title: 'Release built-up stress',
    body: 'Slow, skilled massage helps your body switch off from the rush of the day so your mind can quiet down too.',
  },
  {
    title: 'Ease aches & tight muscles',
    body: 'From Shiatsu pressure points to traditional Hilot, our therapists work out knots, stiffness and tired feet.',
  },
  {
    title: 'Take care of yourself',
    body: 'Live a healthy life and make time for you — leave feeling lighter, rested and renewed.',
  },
]

const mapsLink = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

export const branches = [
  {
    name: 'Calaca',
    tag: 'Main branch · Walk-ins welcome',
    featured: true,
    address: ['002 Igualdad St., Poblacion 1', 'Calaca City, Batangas'],
    hours: ['Open every day · 1:00 PM – 12:00 AM', 'Earlier than 1 PM? Call for an appointment'],
    mapUrl: mapsLink('002 Igualdad St., Poblacion 1, Calaca City, Batangas'),
  },
  {
    name: 'Tuy',
    tag: 'By appointment only',
    address: ['Inside Lourdes Resort and Restaurant', 'Brgy. Luntal, Tuy, Batangas'],
    hours: ['Call ahead to book your session'],
    mapUrl: mapsLink('Lourdes Resort and Restaurant, Luntal, Tuy, Batangas'),
  },
  {
    name: 'Tagaytay',
    tag: 'By appointment only',
    address: ['Tagaytay City'],
    hours: ['Call to book and get directions'],
    mapUrl: null,
  },
]

export const contact = {
  facebook: 'https://www.facebook.com/profile.php?id=100089505370077',
}

export const visitOptions = ['Walk-ins at Calaca', 'By appointment', 'Home service']
export const payments = ['Cash', 'GCash']
export const homeService = {
  area: 'Available for home service within Calaca areas.',
  fee: 'Transportation fees vary depending on your location.',
}
