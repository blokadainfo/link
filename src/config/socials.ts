/**
 * PlatformData: Structure for a platform's button/link.
 * - href: String. The URL or mailto link to open.
 * - text: String. The label shown on the button.
 * - icon: SVG filename without extension. Falls back to generic-website.svg
 *   when the requested icon does not exist.
 * - render: Optional boolean. Set to false to keep a
 *   redirect page without showing a button on the homepage.
 */
export interface PlatformData {
  href: string;
  text: string;
  icon: string;
  render?: boolean;
}

export const contactPlatforms: Record<string, PlatformData> = {
  email: {
    href: 'mailto:kontakt@blokada.info',
    text: 'Email',
    icon: 'email-alt',
  },
};

export const donatePlatforms: Record<string, PlatformData> = {
  donate: {
    href: 'https://www.blokada.info/donacije',
    text: 'Donirajte',
    icon: 'donate',
  },
};

export const socialPlatforms: Record<string, PlatformData> = {
  website: {
    href: 'https://www.blokada.info',
    text: 'Blokada INFO',
    icon: 'generic-website',
  },
  youtube: {
    href: 'https://www.youtube.com/@blokada_info',
    text: 'YouTube',
    icon: 'youtube',
  },
  instagram: {
    href: 'https://instagram.com/blokada.info',
    text: 'Instagram',
    icon: 'instagram',
  },
  facebook: {
    href: 'https://www.facebook.com/blokadainfo',
    text: 'Facebook',
    icon: 'facebook',
  },
  twitter: {
    href: 'https://x.com/blokada_info',
    text: 'Twitter / X',
    icon: 'x',
  },
  threads: {
    href: 'https://www.threads.com/@blokada.info',
    text: 'Threads',
    icon: 'threads',
  },
  github: {
    href: 'https://github.com/blokadainfo',
    text: 'GitHub',
    icon: 'github',
    render: false,
  },
};
