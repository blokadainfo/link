import YouTubeIcon from '../assets/icons/youtube.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import ThreadsIcon from '../assets/icons/threads.svg';
import SiteIcon from '../assets/icons/generic-website.svg';
import EmailIcon from '../assets/icons/email-alt.svg';
import DonateIcon from '../assets/icons/donate.svg';

/**
 * PlatformData: Structure for a platform's button/link.
 * - href: String. The URL or mailto link to open.
 * - text: String. The label shown on the button.
 * - icon: Any. The imported SVG/icon to display.
 */
export interface PlatformData {
  href: string;
  text: string;
  icon: any;
}

export const contactPlatforms: Record<string, PlatformData> = {
  email: {
    href: 'mailto:kontakt@blokada.info',
    text: 'Email',
    icon: EmailIcon,
  },
  donate: {
    href: 'https://www.blokada.info/donacije',
    text: 'Podrži Nas',
    icon: DonateIcon,
  },
};

export const socialPlatforms: Record<string, PlatformData> = {
  website: {
    href: 'https://www.blokada.info',
    text: 'Blokada INFO',
    icon: SiteIcon,
  },
  youtube: {
    href: 'https://www.youtube.com/@blokada_info',
    text: 'YouTube',
    icon: YouTubeIcon,
  },
  instagram: {
    href: 'https://instagram.com/blokada.info',
    text: 'Instagram',
    icon: InstagramIcon,
  },
  facebook: {
    href: 'https://www.facebook.com/blokadainfo',
    text: 'Facebook',
    icon: FacebookIcon,
  },
  /*
  threads: {
    href: 'https://www.threads.com/@blokada.info',
    text: 'Threads',
    icon: ThreadsIcon,
  },
  */
};
