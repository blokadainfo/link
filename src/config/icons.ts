import FallbackIcon from '../assets/icons/generic-website.svg';

export type SvgIcon = typeof FallbackIcon;

const icons = import.meta.glob('../assets/icons/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, SvgIcon>;

export function resolveIcon(icon: string): SvgIcon {
  return icons[`../assets/icons/${icon}.svg`] ?? FallbackIcon;
}
