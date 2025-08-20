import YouTubeIcon from '../assets/icons/youtube.svg';
import FacebookIcon from '../assets/icons/facebook.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import ThreadsIcon from '../assets/icons/threads.svg';
import SiteIcon from '../assets/icons/generic-website.svg';
import EmailIcon from '../assets/icons/email.svg';

export interface PlatformData {
  href: string;
  text: string;
  icon: any;
}

export const socialPlatforms: Record<string, PlatformData> = {
  email: {
    href: 'mailto:kontakt@blokada.info',
    text: 'Email',
    icon: EmailIcon,
  },
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
    href: 'https://www.facebook.com/profile.php?id=61574500512561' /* URL NEEDS TO BE CHANGED */,
    text: 'Facebook',
    icon: FacebookIcon,
  },
  threads: {
    href: 'https://www.threads.com/@blokada.info',
    text: 'Threads',
    icon: ThreadsIcon,
  },
};
