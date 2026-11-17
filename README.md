# Premium Personal Portfolio

A single-page, responsive personal portfolio built with HTML5, Tailwind CSS (CDN), and vanilla JavaScript.

## Run locally

Just open `index.html` in any modern browser, or serve with a basic static server:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000

## Customize

All personal data lives in `js/script.js` inside the `CONFIG`, `STATS`, `SKILLS`, `EXPERIENCE`, `PROJECTS`, `SERVICES`, and `ACHIEVEMENTS` objects. Update those values and the page updates automatically.

- **Name / brand**: `CONFIG.name`, `CONFIG.initials`
- **Social links**: `CONFIG.social`
- **Email**: `CONFIG.email`
- **Projects**: edit `PROJECTS` array (image paths, links, categories)
- **Images**: replace files in `assets/images/` (profile.svg, project-*.svg) with your own photos (jpg/png). Update paths in PROJECTS if needed.
- **Colors / spacing**: tweak `css/styles.css` and Tailwind classes.

## Notes

- Contact form supports a backend endpoint. Set `CONFIG.formEndpoint` (and `CONFIG.formAccessKey` for Web3Forms) in `js/script.js`:
  - **Formspree (recommended, Google-Forms-like dashboard):** create a form at https://formspree.io → copy the endpoint URL (https://formspree.io/f/xxxx) → paste into `CONFIG.formEndpoint`. Submissions arrive in your inbox AND in the Formspree dashboard.
  - **Web3Forms (free, unlimited):** get an access key at https://web3forms.com → set `CONFIG.formEndpoint = "https://api.web3forms.com/submit"` and `CONFIG.formAccessKey = "your-key"`.
  - Leave `formEndpoint` empty to fall back to opening the visitor's email client (mailto).
## Deploy to Vercel (with working contact form)
1. Push this folder to a Git repo and import it in Vercel (Framework Preset: "Other").
2. The contact form uses Web3Forms. Set in `js/script.js`:
   - `CONFIG.formEndpoint = "https://api.web3forms.com/submit"`
   - `CONFIG.formAccessKey = "your-access-key"` (get one free at https://web3forms.com)
3. Redeploy. Submissions are emailed to the address registered with Web3Forms.

- Respects `prefers-reduced-motion`.
- No build step required.
