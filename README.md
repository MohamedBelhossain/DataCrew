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

## Security

- The page uses a restrictive Content Security Policy and a `no-referrer` policy. Scripts and images are limited to this site; Google Fonts is the only permitted external asset source.
- The Google Form is an external service. Form submissions and the data collected there are managed by Google, not by this static site.
- Configure security response headers on the production host: `Content-Security-Policy` with `frame-ancestors 'none'`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, and `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- Enable `Strict-Transport-Security` only after the site is served exclusively over HTTPS. HTTP response headers must be configured with the hosting provider; a static HTML page cannot set all of them.
