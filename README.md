# DataCrew club website

A responsive, static landing page for the DataCrew Data & AI Club at FST Al Hoceima. It uses plain HTML, CSS, and JavaScript, so it can be deployed to any static host (GitHub Pages, Netlify, Cloudflare Pages, or an Nginx web root) without a build step.

## Preview locally

Open `index.html` in a browser or run a local static server from this directory, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update before launch

- Replace the sample email address (`datacrew.fst@gmail.com`) with the club's confirmed contact.
- Add verified social links and event details when available.
- The poster, logo, cropped transparent wordmark, and FST Al Hoceima campus photo are in `assets/`; replace the corresponding files there to update the imagery.

The page has no backend or external runtime dependency. Google Fonts are loaded from their CDN; system fallbacks are defined in the stylesheet.
