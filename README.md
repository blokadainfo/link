# Links, links, links!

[![Link Check](https://github.com/studentinovisad/binfo-link/actions/workflows/lychee-link-check.yml/badge.svg)](https://github.com/studentinovisad/binfo-link/actions/workflows/lychee-link-check.yml)

Want to show off your links? We've got you covered! ❤️

Live demo at: [link.blokada.info](https://link.blokada.info)

## Link Setup

1. To add a new link:
   - For a **social network**, add it to the `socialPlatforms` object in [`socials.ts`](/src/config/socials.ts).
   - For a **contact link** (e.g. email), add it to the `contactPlatforms` object in [`socials.ts`](/src/config/socials.ts).
   - For a **donation type** (e.g. donation instructions, platforms etc.), add it to the `donatePlatforms` object in [`socials.ts`](/src/config/socials.ts).

2. (Optional) To customize the button’s appearance for a specific platform, add or update its brand color in the `<style>` section of [`Button.astro`](/src/components/link/Button.astro).

Congrats, you're done! 🎉

## Page Customization

You can easily fork and customize this page, the entire thing is quite simple really. There's not much to change.

Check out the [`site.ts`](/src/config/site.ts) config file, where all the recommended customizable properties are clearly listed. You don't have to touch the components themselves at all.

## License

Code in this repo is under the [Beerware license](LICENSE). 🍻
