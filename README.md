# Monish P N — Portfolio

Personal portfolio for Monish P N, a backend software engineer specializing in Go microservices, asynchronous processing, cloud integrations, and production reliability.

## Development

```bash
npm install
npm run dev

```

Open `http://localhost:3000`.

## Updating portfolio content

Edit [`data/portfolio.json`](data/portfolio.json). It contains all frequently
changed content in one place:

- profile details, photo path, and resume link
- social links
- introduction and skills
- experience entries
- project entries
- achievements

To add an item, copy one complete object inside the relevant JSON array, add a
comma between objects, and update its values. Put replacement images in
`public/` and set `profile.photo` to a path such as `/new-photo.jpeg`.

## Validation

```bash
npm run build
npm run lint
```

## Hosting

This is a standard Next.js project and can be deployed to any provider that
supports Node.js applications. The usual production commands are:

```bash
npm run build
npm run start
```

Set the provider's build command to `npm run build`. Keep `app/`, `data/`,
`public/`, `package.json`, `package-lock.json`, and the project configuration
files in the repository. Generated folders such as `.next/` and `node_modules/`
must not be committed.

Copy `.env.example` to `.env.local` for local overrides. On the hosting
provider, set `NEXT_PUBLIC_SITE_URL` to the final site origin so social-preview
image URLs resolve correctly.
