# Links, links, links!

Want to show off your links? We've got you covered! ❤️

Live demo at: [link.blokada.info](https://link.blokada.info)

## Link Setup

1. Add a link to [`socials.ts`](/src/config/socials.ts);
2. If needed, extend [`Button.astro`](/src/components/link/Button.astro) with the platform type you need;
3. Include the wanted button in the button list located in [`Foreground.astro`](/src/components/Foreground.astro).

Congrats, you're done! 🎉

## Page Customization

You can easily fork and customize this page, the entire thing is quite simple really. There's not much to change.

Check out the [`site.ts`](/src/config/site.ts) config file, where all the recommended customizable properties are clearly listed.

The first `<svg>` you’ll stumble upon in [`Background.astro`](/src/components/Background.astro) is the logo displayed in the upper-left corner of the webpage. You can delete it or replace it with something else.

## License

Code in this repo is under the [Beerware license](LICENSE). 🍻
