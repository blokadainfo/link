import { describe, expect, test } from 'vitest';
import { contactPlatforms, socialPlatforms } from '../src/config/socials';

function isValidUrl(url: string) {
  const re = /^(https?:\/\/[^\s]+|mailto:[^\s]+)$/;
  return re.test(url);
}

describe('Config Link Tests', () => {
  const allPlatforms = [
    ...Object.values(contactPlatforms),
    ...Object.values(socialPlatforms),
  ];

  test('There is at least one link present in the config', () => {
    expect(allPlatforms.length).toBeGreaterThan(0);
  });

  test('All URLs are valid and non-empty', () => {
    for (const platform of allPlatforms) {
      expect(typeof platform.href).toBe('string');
      expect(platform.href.trim()).not.toBe('');
      expect(isValidUrl(platform.href)).toBe(true);
    }
  });

  test('No duplicate links exist', () => {
    const hrefs = allPlatforms.map((p) => p.href.toLowerCase());
    const uniqueHrefs = new Set(hrefs);
    expect(hrefs.length).toBe(uniqueHrefs.size);
  });
});
