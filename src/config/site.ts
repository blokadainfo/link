/**
 * siteMeta: General metadata for the site.
 * - title: String. The main title of the site.
 * - favicon: String. Path to the favicon image.
 * - description: String. A brief description of the site, used for SEO and OpenGraph.
 * - locale: String. The primary language/locale of the site (e.g., 'en', 'sr').
 */
export const siteMeta = {
  title: 'Blokada INFO | Vizitka',
  favicon: '/favicon.svg',
  description:
    'Digitalna vizit karta redakcije Blokada INFO – svi naši linkovi, društvene mreže i kontakti na jednom mestu.',
  locale: 'sr',
};

/**
 * siteLook: Controls the appearance of site branding, popup text, and section headings.
 * - logo: Boolean. Set to true to show the logo in the header, false to hide it.
 * - logoSrc: String. If provided, uses this image/SVG path for the logo instead of the default SVG.
 * - popUpTxt: String. Text for the popup when sharing the site's URL.
 * - socialsHeading: String. Heading for the social section. If empty, the heading is not rendered.
 * - contactHeading: String. Heading for the contact section. If empty, the heading is not rendered.
 */
export const siteLook = {
  logo: true,
  logoSrc: '', // e.g. '/favicon.svg'
  popUpTxt: 'Kopiran URL',
  socialsHeading: 'Tu smo da budemo svetlo u medijskom mraku.',
  contactHeading: 'Cenimo vaša mišljenja, slobodno nas kontaktirajte.',
  donateHeading: 'Ako želite da podržite naš rad, možete donirati:',
};
