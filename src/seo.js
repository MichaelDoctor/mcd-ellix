// Builds schema.org structured data (JSON-LD) from the same content the page
// shows, so Google sees matching business details, hours and prices.
// Injected into <head> at build time by scripts/prerender.mjs.
import { BUSINESS_NAME, SITE_URL, branches, booking, contact, itemOptions, menu, payments, phones, peso } from './data.js'

const ORG_ID = `${SITE_URL}#organization`
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const allPrices = menu.flatMap((cat) => cat.items.flatMap((item) => itemOptions(item).map((o) => o.price)))
const priceRange = `${peso(Math.min(...allPrices))} – ${peso(Math.max(...allPrices))}`

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-')

function address({ street, locality, region, postalCode }) {
  return {
    '@type': 'PostalAddress',
    ...(street && { streetAddress: street }),
    addressLocality: locality,
    addressRegion: region,
    ...(postalCode && { postalCode }),
    addressCountry: 'PH',
  }
}

function branchNode(b) {
  return {
    '@type': 'DaySpa',
    '@id': `${SITE_URL}#branch-${slug(b.name)}`,
    name: `${BUSINESS_NAME} – ${b.name}`,
    parentOrganization: { '@id': ORG_ID },
    url: SITE_URL,
    image: `${SITE_URL}og-image.jpg`,
    telephone: phones[0].tel,
    priceRange,
    currenciesAccepted: 'PHP',
    paymentAccepted: payments.join(', '),
    address: address(b.postal),
    description: `${b.tag}. ${b.hours.join('. ')}.`,
    ...(b.mapUrl && { hasMap: b.mapUrl }),
    ...(b.geo && { geo: { '@type': 'GeoCoordinates', latitude: b.geo.lat, longitude: b.geo.lng } }),
    ...(b.openingHours && {
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: DAYS,
        opens: b.openingHours.opens,
        closes: b.openingHours.closes,
      },
    }),
    areaServed: { '@type': 'City', name: b.homeServiceArea || b.postal.locality },
  }
}

const offerCatalog = {
  '@type': 'OfferCatalog',
  name: 'Massage and spa services',
  itemListElement: menu.map((cat) => ({
    '@type': 'OfferCatalog',
    name: cat.label,
    itemListElement: cat.items.flatMap((item) =>
      itemOptions(item).map((o) => ({
        '@type': 'Offer',
        price: o.price,
        priceCurrency: 'PHP',
        itemOffered: {
          '@type': 'Service',
          name: o.time ? `${item.name} (${o.time})` : item.name,
          ...(item.desc && { description: item.desc }),
        },
      })),
    ),
  })),
}

export function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: BUSINESS_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}icon-192.png`,
        telephone: phones[0].tel,
        sameAs: [contact.facebook],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'reservations',
          telephone: phones[0].tel,
          url: booking.messenger,
          availableLanguage: ['en', 'fil'],
        },
        hasOfferCatalog: offerCatalog,
      },
      ...branches.map(branchNode),
    ],
  }
}
