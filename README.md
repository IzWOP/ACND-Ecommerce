# ACND — Ecommerce (unfinished)

A multi-page storefront for **ACND**, a lifestyle / clothing brand intended to sell
t-shirts. Built with Create React App + AWS Amplify.

> **Status: never launched, but further along than a landing page.** The site has a
> full navbar/footer/layout shell, a marketing home page, a working newsletter
> signup, and a **products page that renders a real catalog fetched from an AWS
> AppSync GraphQL API**. What was never built: a **cart, checkout, or payment flow**,
> and the sign-in half of auth was left stubbed. This README documents what exists so
> the project can be picked back up — or scavenged for parts — later.
>
> _(History note: `master` used to be the stalest branch; the fuller `products-graph`
> work has now been merged in, so `master` reflects the latest state.)_

---

## What works

- **Site shell** — `App.js` routes `/`, `/products`, `/auth/login`, `/auth/signup`,
  all wrapped in a shared `Layout` (navbar + footer) with AOS scroll animations.
- **Navbar** — separate desktop (`Navbar/NavDesk`) and mobile (`Navbar/NavMobile`)
  components.
- **Home** (`src/components/Home /index.jsx`) — marketing landing (hero + feature
  sections). The newsletter form no longer lives here — see Footer.
- **Newsletter signup** (`common/Footer/Subscribe`) — posts to an API Gateway
  endpoint backed by a Lambda (`amplify/backend/function/newsletterSub`) that adds
  the email to a Mailchimp list with `status: 'pending'` (double opt-in).
- **Products catalog** (`src/components/Products`) — fetches products from the
  AppSync GraphQL API via `API.graphql(listProducts)` and renders product cards
  (image, name, categories, description, price). Needs seeded data to show anything.

## What is stubbed / missing

| Area | File(s) | State |
|---|---|---|
| Sign-in | `src/components/Auth/Login/index.jsx` | Form + validation exist, but `onSubmit` only `console.log`s — the `Auth.signIn` call is commented out. |
| Sign-up | `src/components/Auth/SignUp/index.jsx` | Calls Cognito `Auth.signUp`; confirmation (`Auth/Login/Confirmation.jsx`) and forgot-password are stubs. |
| User context | `src/components/Context/UserContext.jsx` | Mostly commented out; not driving the app. |
| Cart / checkout / payments | — | **Do not exist.** Never started — this is the main gap for actually selling. |

## Architecture

```
React (CRA) SPA
  ├─ Products page ──▶ AWS AppSync (GraphQL API: acndProducts, Product @model)
  │                        └─▶ DynamoDB
  ├─ Footer/Subscribe ──POST /subscribe──▶ API Gateway (newsletterAPI)
  │                                            └─▶ Lambda (newsletterSub, Express)
  │                                                    └─▶ Mailchimp Marketing API
  └─ Auth ──▶ AWS Cognito (cognito9647c212) — sign-up wired, sign-in stubbed
```

`Product` GraphQL model (`amplify/backend/api/acndProducts/schema.graphql`):

```graphql
type Product @model @auth(rules: [{ allow: public }]) {
  id: ID!
  categories: [String]!
  price: Float!
  name: String!
  image: String!
  description: String!
  currentInventory: Int!
}
```

- **Frontend:** React 16, `react-router-dom` v5, `react-hook-form` v7 + `yup`,
  SCSS (`node-sass`), AOS for scroll animations, FontAwesome / react-icons.
- **Backend:** AWS Amplify — AppSync GraphQL API (`acndProducts`), Cognito user pool
  (`cognito9647c212`), a REST API (`newsletterAPI`), and a Node/Express Lambda
  (`newsletterSub`).

---

## Running it locally

Requires Node (this predates the repo pinning a version — Node 14/16-era CRA 3).

```bash
yarn install
yarn start        # http://localhost:3000
```

**Amplify config is not committed** (gitignored): `src/aws-exports.js`,
`awsconfiguration.json`, and `amplify/backend/awscloudformation` are excluded. To
run the GraphQL/newsletter/auth paths you must re-pull the backend:

```bash
amplify pull        # regenerates src/aws-exports.js from the cloud backend
```

The products page will render empty until the `Product` table has data — seed a few
rows via the Amplify/AppSync console or the generated `createProduct` mutation.

The newsletter Lambda reads two environment variables (set in the Amplify function
config):

- `MAILCHIMP_API` — Mailchimp API key
- `LIST_ID` — target Mailchimp audience/list id

---

## Known issues / gotchas (read before reviving)

Real bugs and liabilities found in the current code:

1. **Lambda double-sends the response** (`newsletterSub/src/app.js`) — the
   `.then`/`.catch` call `res.json()` and then a later line calls it again with an
   undefined value. Works by luck; rewrite as a single `try/catch`.
2. **Lambda dependency in the wrong place** — `@mailchimp/mailchimp_marketing` is
   under `devDependencies` in `newsletterSub/src/package.json`, so it may not be
   installed in the deployed function. Move it to `dependencies`.
3. **Hardcoded Mailchimp datacenter** — `server: 'us1'` must match your API key's
   suffix (e.g. `-us21`), or every call 404s. Derive it from the key.
4. **Wide-open CORS** — the Lambda allows `Origin: *` and `Headers: *` on an
   unauthenticated write endpoint. Lock to the real domain; add rate limiting.
5. **Public GraphQL API** — the `Product` model is `@auth(allow: public)` (API-key
   auth). Fine for a public catalog read, but the same key allows public
   create/update/delete mutations — lock down write access before going live.
6. **DOM manipulated directly in components** — `document.querySelector` + manual
   `classList` mutation for the subscribe animation instead of React state/refs.
   Fragile; can throw on first render.
7. **Placeholder / unprofessional copy** — button labels and body text
   ("Submit hoe", "products, mate", "Sorry Bro...") need real copy before launch.
8. **Stale, insecure dependencies** — CRA 3 / React 16 / `node-sass` 4 /
   `aws-amplify` 3 are all years out of date. Run `npm audit`; expect a migration
   (Vite + React 18/19 + `sass` + `aws-amplify` v6) to be the real cost of reviving.

---

## If reviving to actually sell t-shirts

The catalog and backend datastore exist, but the **purchase flow does not** — no
cart, checkout, or payments. Extending this stack means adding those, modernizing
the dependencies (see #8), and locking down the public GraphQL/CORS surfaces. Given
the age of the stack, standing up a Shopify store or a fresh Next.js + Stripe project
may still be faster; the reusable pieces here are the AppSync product model, the
Mailchimp-via-Lambda newsletter, and the navbar/footer/layout UI.

---

## Original Create React App scripts

`yarn start` (dev) · `yarn build` (production build) · `yarn test` · `yarn eject`.
See the [CRA docs](https://facebook.github.io/create-react-app/docs/getting-started).
