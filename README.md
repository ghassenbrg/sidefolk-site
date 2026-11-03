# Sidefolk website

The website for [Sidefolk](https://github.com/ghassenbrg/sidefolk), at getsidefolk.com: Home, Extensions, Privacy and
the test build. It is plain HTML and CSS, with no JavaScript, no trackers and nothing loaded from other services.

- `public/` is what gets published, exactly as it is. There is no build step.
- Every push to `main` deploys through `.github/workflows/deploy.yml`.
- The custom domain is set in this repository's Settings › Pages, so there is no `CNAME` file.

The site lives apart from the app because the app's snapshot build number is the commit count of its `main`, so site
commits there would change it. Colours and images come from the app's repository: `docs/DESIGN.md` and
`Resources/Brand/exports/`.

`docs/PLAN.md` has the plan and the dated references behind it. `concepts/` holds local mock-ups and source art, and is
not kept in git.

Nothing shown here may claim more than the app does today. Until 0.1.0 is released there is no download button, only a
link to the test builds on GitHub Releases.

Copyright (c) 2026 Ghassen Bargougui. All rights reserved.
