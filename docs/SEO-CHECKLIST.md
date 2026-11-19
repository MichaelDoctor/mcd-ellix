# SEO & local search checklist

The website code already handles the technical side: prerendered HTML, title and description, business details for Google (structured data), `robots.txt`, `sitemap.xml`, link-preview image and fast-loading images.

Showing up for **"massage near me"** and on **Google Maps** depends mostly on the steps below. Use the **same details everywhere**:

| | |
|---|---|
| Business name | MCD Ellix Massage and Spa |
| Phone | 0995-4600743 |
| Website | https://mcdellixmassageandspa.com |
| Calaca | 002 Igualdad St., Poblacion 1, Calaca City, Batangas 4212 · Open every day 1:00 PM – 12:00 AM |
| Tuy | Inside Lourdes Resort and Restaurant, Brgy. Luntal, Tuy, Batangas 4214 · By appointment |
| Tagaytay | Tagaytay City (address not shown) · By appointment |

---

## 1. Google Search Console (do first — about 15 minutes)
1. Go to **search.google.com/search-console** → **Add property** → choose **Domain** → enter `mcdellixmassageandspa.com`.
2. Google shows a **TXT record**. In Namecheap: **Domain List → Manage → Advanced DNS → Add New Record** → Type **TXT Record**, Host **@**, Value = the code → ✓ save. Click **Verify** in Google (retry after 10–30 min if needed).
3. Left menu **Sitemaps** → enter `sitemap.xml` → **Submit**.
4. Top search bar (URL Inspection) → paste `https://mcdellixmassageandspa.com/` → **Request indexing**.
5. Then go to **bing.com/webmasters** → sign in → **Import from Google Search Console** (covers Bing and Yahoo).

## 2. Google Business Profile — one per branch (biggest impact)
Go to **business.google.com** → **Add business**. Repeat for each branch.

- **Name:** `MCD Ellix Massage and Spa` exactly — don't add words like "Best Massage Calaca" (against Google's rules; can get the listing suspended).
- **Category:** primary **Massage spa**; add **Day spa** and **Massage therapist**.
- **Phone / website:** as in the table above.

Per branch:
- **Calaca** — "Do you want to add a location customers can visit?" → **Yes**, enter the address. Hours: every day 1:00 PM – 12:00 AM. Also add **service areas → Calaca** for home service.
- **Tuy** — **Yes**, address inside Lourdes Resort and Restaurant. In the description, say "By appointment only — please call ahead."
- **Tagaytay** — choose **No** to a customer location (hides the address), then set **service area → Tagaytay City**. Description: "By appointment only."

Then on each profile:
- **Verify** (video or postcard — follow Google's prompt; listings don't show until verified).
- **Services:** add each service with its price (copy from the website).
- **Photos:** storefront, rooms, logo. Add new photos every month or two.
- **Attributes:** "Accepts GCash"/payment options, "Appointment required" where it applies.
- After verification, open the map pin, copy its **latitude/longitude**, and send them to whoever maintains the site — they go into `branches[].geo` in `src/data.js`.

## 3. Reviews (ongoing)
- In each Business Profile, click **Ask for reviews** to get the review link.
- Print it as a **QR code** at the counter ("Enjoyed your massage? Leave us a review").
- Ask happy clients personally; **reply to every review**, good or bad.

## 4. Facebook page
- **About:** website `https://mcdellixmassageandspa.com`, same phone format, addresses and hours as above.
- Add the website link to posts about promos and new services.

## 5. Other listings (same details everywhere)
- **Apple Business Connect** (businessconnect.apple.com) — Apple Maps on iPhones.
- **Bing Places** (bingplaces.com) — can import from Google Business Profile.
- **Waze** — add/confirm the Calaca location.
- Ask **Lourdes Resort and Restaurant** to mention the spa (and link the website) on their Facebook page.

## 6. Monthly check (10 minutes)
- Search Console → **Performance**: see which searches show the site; if people search a service name you don't use on the site, add it to `src/data.js`.
- Business Profile → **Performance**: calls, direction requests, searches.
- Keep hours, prices and phone identical on the website, Google, Facebook and other listings whenever something changes.
