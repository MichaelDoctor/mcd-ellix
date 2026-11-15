// Site content lives here so copy can be edited without touching layout.
// Source: "services and prices" menu card and "main" booking poster.

export const TAGLINE = 'Your spa where you can relax and release your stresses.'
export const MOTTO = ['Relax', 'Rejuvenate', 'Restore']

export const phones = [
  { display: '0995-460-0743', tel: '+639954600743' },
  { display: '0906-065-1241', tel: '+639060651241' },
]

// No online booking yet — "Book" buttons call the main number.
export const BOOKING_URL = `tel:${phones[0].tel}`

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#signature', label: 'Signature' },
  { href: '#contact', label: 'Contact' },
]

export const menu = [
  {
    id: 'massage',
    label: 'Massage',
    items: [
      { name: 'MCD All-In Signature Massage', time: '1 hr', price: 1000, note: 'Choose Ventosa, Hot Stone or Ear Candling' },
      { name: 'Massage with Body Scrub & Salting', time: '', price: 2000 },
      { name: 'Massage with Body Stretching', time: '', price: 800 },
      { name: 'Swedish Massage', time: '1 hr', price: 500 },
      { name: 'Swedish Massage', time: '1.5 hr', price: 750 },
      { name: 'Shiatsu Massage', time: '1 hr', price: 700 },
      { name: 'Filipino Style / Hilot', time: '1 hr', price: 600 },
      { name: 'Filipino Style / Hilot', time: '1.5 hr', price: 900 },
      { name: 'Foot Massage', time: '30 min', price: 300 },
      { name: 'Head Massage', time: '30 min', price: 300 },
      { name: 'Hand Massage', time: '30 min', price: 300 },
    ],
  },
  {
    id: 'body',
    label: 'Body Treatments',
    items: [
      { name: 'Body Scrub', time: '', price: 700 },
      { name: 'Body Wash', time: '', price: 700 },
      { name: 'Body Salting', time: '', price: 700 },
      { name: 'Earwax Candling', time: '', price: 200 },
      { name: 'Foot Spa with Reflex', time: '', price: 800 },
    ],
  },
  {
    id: 'packages',
    label: 'Packages',
    items: [
      { name: 'MCD Ellix Signature Massage', time: '', price: 1000 },
      { name: 'Massage with Ventosa', time: '', price: 800 },
      { name: 'Massage with Body Scrub', time: '', price: 1100 },
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

// Placeholder reviews — replace with real client quotes before launch.
export const testimonials = [
  {
    quote:
      'Sample review — replace with a real client quote. I walked in carrying months of tension in my shoulders and walked out feeling like myself again.',
    name: 'Client name',
  },
  {
    quote:
      'Sample review — replace with a real client quote. The signature massage with hot stone was the deepest rest I have had in years.',
    name: 'Client name',
  },
  {
    quote:
      'Sample review — replace with a real client quote. Warm, welcoming staff and a calm, cozy room. Already planning my next visit.',
    name: 'Client name',
  },
]

export const contact = {
  address: ['LINDA by MCD Ellix Massage and Spa', '[Street address]', '[City, Province]'],
  hours: ['[Opening days]', '[Opening hours]', 'Call to confirm availability'],
  facebook: '#', // add your Facebook page URL
}
