# DataCrew club website

A responsive static site for the DataCrew Data & AI Club at FST Al Hoceima, with persistent dark/light themes and English, French, and Arabic translations. It uses plain HTML, CSS, and JavaScript, so it can be deployed to any static host without a build step.

## Preview locally

Open `index.html` in a browser or run a local static server from this directory, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update before launch

- Confirm the club contact email (`joindatacrew@gmail.com`) and application form before launch.
- Add verified social links and event details when available.
- The logo, transparent wordmark, and FST Al Hoceima campus photo are in `assets/`; replace those files to update the imagery.

The page has no backend or external runtime dependency. Google Fonts are loaded from their CDN; system fallbacks are defined in the stylesheet.
