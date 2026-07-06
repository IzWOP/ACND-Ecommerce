# ACND — Ecommerce (unfinished)

A pre-launch "Coming Soon" landing page for **ACND**, a lifestyle / clothing brand
intended to sell t-shirts. Built with Create React App + AWS Amplify.

> **Status: never launched.** Only the newsletter email-capture on the home page was
> wired up. The actual store (product catalog, cart, checkout, payments) was never
> built, and the login/auth flow was abandoned half-finished. This README documents
> what exists so the project can be picked back up — or scavenged for parts — later.

---

## What actually works

- **Home / landing page** (`src/components/Home /index.jsx`) — the "Coming Soon"
  billboard with an animated email-subscribe form.
- **Newsletter signup** — the form POSTs to an API Gateway endpoint backed by a
  Lambda (`amplify/backend/function/newsletterSub`) that adds the email to a
  Mailchimp list with `status: 'pending'` (double opt-in). This is the only
  end-to-end feature.

## What is stubbed / abandoned

| Area | File(s) | State |
|---|---|---|
| Auth / login | `src/components/Login/*` | Half-built. Not routed in `App.js`. `SignUp` calls Cognito; `SignIn` only `console.log`s (real call commented out); `Confirmation.jsx` is a stub. |
| User context | `src/components/Context/UserContext.jsx` | Empty `UserState`, everything commented out. |
| Products | `src/components/products.jsx` | **Empty file.** No catalog exists. |
| Navbar | `src/components/common/Navbar/index.jsx` | Placeholder — renders `<h1>navbar</h1>`. |
| Footer | `src/components/common/Footer/index.jsx` | Empty file. |
| Cart / checkout / payments | — | **Do not exist.** Never started. |

## Architecture

```
React (CRA) SPA
  └─ Home page ──POST /subscribe──▶ API Gateway (newsletterAPI)
                                        └─▶ Lambda (newsletterSub, Express)
                                                └─▶ Mailchimp Marketing API
AWS Cognito (auth) — provisioned but unused by the live app
```

- **Frontend:** React 16, `react-router-dom` v5, `react-hook-form` v7 + `yup`,
  SCSS (`node-sass`), AOS for scroll animations, FontAwesome / react-icons.
- **Backend:** AWS Amplify — Cognito user pool (`cognito9647c212`), a REST API
  (`newsletterAPI`), and a Node/Express Lambda (`newsletterSub`).

---

## Running it locally

Requires Node (this predates the repo pinning a version — Node 14/16-era CRA 3).

```bash
yarn install
yarn start        # http://localhost:3000
```

**Amplify config is not committed** (gitignored): `src/aws-exports.js`,
`awsconfiguration.json`, and `amplify/backend/awscloudformation` are excluded. To
run the newsletter path you must re-pull the backend:

```bash
amplify pull        # regenerates src/aws-exports.js from the cloud backend
```

The Lambda reads two environment variables (set in the Amplify function config):

- `MAILCHIMP_API` — Mailchimp API key
- `LIST_ID` — target Mailchimp audience/list id

---

## Known issues / gotchas (read before reviving)

These are real bugs and liabilities found in the current code:

1. **Lambda double-sends the response** (`newsletterSub/src/app.js`) — the
   `.then`/`.catch` call `res.json()` and then line ~76 calls it again with an
   undefined value. Works by luck; rewrite as a single `try/catch`.
2. **Lambda dependency in the wrong place** — `@mailchimp/mailchimp_marketing` is
   listed under `devDependencies` in `newsletterSub/src/package.json`, so it may
   not be installed in the deployed function. Move it to `dependencies`.
3. **Hardcoded Mailchimp datacenter** — `server: 'us1'` must match your API key's
   suffix (e.g. `-us21`), or every call 404s. Derive it from the key.
4. **Wide-open CORS** — the Lambda allows `Origin: *` and `Headers: *` on an
   unauthenticated write endpoint. Lock to the real domain; add rate limiting.
5. **Home page manipulates the DOM directly** — `document.querySelector` + manual
   `classList` mutation during render instead of React state/refs. Fragile; can
   throw on first render. Also calls `useForm()` twice.
6. **Placeholder / unprofessional copy** — button labels and status messages
   ("Submit hoe", "Sorry Bro...", `value="Submitt"`) need real copy before launch.
7. **Stale, insecure dependencies** — CRA 3 / React 16 / `node-sass` 4 /
   `aws-amplify` 3 are all years out of date. Run `npm audit`; expect a migration
   (Vite + React 18/19 + `sass` + `aws-amplify` v6) to be the real cost of reviving.

---

## If reviving to actually sell t-shirts

The commerce half of this project does not exist. Rather than extend this stack,
it would likely be faster to either stand up a Shopify store or start fresh with a
Next.js + Stripe template. The reusable pieces here are the Mailchimp-via-Lambda
newsletter pattern and the landing-page form/animation UI.

---

## Original Create React App scripts

`yarn start` (dev) · `yarn build` (production build) · `yarn test` · `yarn eject`.
See the [CRA docs](https://facebook.github.io/create-react-app/docs/getting-started).
