# Website plan: proposal for approval

Written 2026-11-03. Nothing here is built yet: `concepts/` holds mockups and is never published (only `public/` is).

## What the site has to do

1. Say what Sidefolk is in one line, before any scrolling.
2. Show the companion: it is what makes Sidefolk different from every other reminder or notes app.
3. Earn trust. It runs on your Mac, connects to your AI and can act on your files, so people need to see that it asks first and what leaves their Mac.
4. Lead to one action. Today that is the test build, and after the 0.1.0 release it becomes the download.

Who it's for, in order: Mac users who want a calmer way to keep notes and reminders; people working with Claude Code or Codex, likely the launch audience; writers and reviewers looking for the facts.

## What similar Mac app sites do

From the structure of raycast.com, culturedcode.com/things and cleanshot.com, 2026-11-03:

| Pattern | Seen on | For Sidefolk |
|---|---|---|
| One action, repeated at the end | All three | Use it: "Try the test build" |
| Static pictures and video, no live demo | All three | A live page is a real chance to stand out: concept A |
| Press quotes, ratings, logos | All three | Leave out: there are none yet, and none will be invented |
| Pricing on its own page or section | CleanShot, Things | Leave out until the founder decides on price |
| A newsletter signup | All three | Leave out: it would need a mail service, against "no tracking" |

## The pages

| Page | Purpose | Shown as |
|---|---|---|
| Home | The whole story, one action | Concept D, the mix of A and B the founder asked for |
| Test build (Download after 0.1.0) | Get it, and what to expect | Template |
| Privacy | What leaves the Mac; a privacy policy is a launch requirement | Template |
| Companions | The characters | After approval |
| Extensions | The whole gallery, Sideflow, and writing your own | After approval |
| For agents | MCP, hooks, `sidefolk run` | After approval |
| Release notes | What changed | After approval |
| Press | Facts and images for writers | After approval |

Support needs an address first (CHECKLIST row 18). Languages: English first, because the app's ten languages would multiply every page; Arabic needs right-to-left, so the layouts use logical (start/end) spacing from the start.

## How it would be built

- Plain HTML and CSS in `public/`, with a small amount of JavaScript for concept A's behaviours. No framework and no build step, as the repository already works.
- No analytics, trackers or outside fonts on the real site: fonts are hosted here. The site must match the app's "no tracking" promise.
- Light and dark by system setting; Reduce Motion respected; phone width with no sideways scroll.
- Text contrast measured on every page (4.5:1, 3:1 for large text), as `concepts/shoot.mjs` does now.
- Card wording matches the app's own strings, checked against its code; two ("Saved to Groceries › Tasks", "Tomorrow 09:00") still need confirming in the running app before they ship.

## Keeping it up to date

The references were checked by date on 2026-11-03, because several in the repository are out of date:

| Reference | State | Use |
|---|---|---|
| App code on `main` a9325036, and `README.md` | Current | Words and facts |
| `team/themes-two` a3654da3: colours, Mochi, logos | Newest, but not merged or tried by the founder | Colours and art in the concepts |
| Helper folks' art (2026-10-31) | Current; no session is changing the characters | Used |
| Companion portraits, `sidefolk-addons` `origin/main` | Current | Used |
| Extension words and icons, `sidefolk-addons` `origin/main` manifests | Current | Used |
| Sideflow, `sidefolk-addons` `team/sideflow` | Built but not merged or published | Shown as available by the founder's decision (2026-11-03), ahead of its release; its builder is drawn to match its screens |
| `docs/launch/screenshots` (2026-10-27) | Out of date | Not used |
| `docs/screenshots` (2026-11-01) | About to go out of date | Not used |
| `docs/launch/LANDING-PAGE.md` | Outline is useful; some counts are behind the app | Structure only, every fact rechecked |
| The sandbox folders | Founder said not to use | Not opened |

The theme redesign will change Home, Today and the sidebar. So cards are drawn in HTML to match the app rather than pasted as screenshots, and real app screenshots are taken only after that theme lands.

## Decisions needed from the founder

1. Whether concept D is the direction to build.
2. Whether the first button may say "Try the test build" before 0.1.0 is released.
3. Later, before launch: price, who publishes (name in the footer), support address, the bundle ID against this domain, and the similar AI companion the domain research found.

## Founder decisions on the build (2026-11-03)

- The first screen has a generated scene, light and dark, and each state has its own generated pose. The poses show a state's mood; the app's Mochi doesn't use a laptop or a book.
- The header is navy on every page with the reversed logo: the logo's turquoise only reads on a dark surface.
- Home's extensions are the founder's picks: Sideflow, Clipboard, Miraya, Your Mac and Playtime. Sideflow carries no "not out yet" label, because it ships soon. The rest are named in one line and listed on the Extensions page.
- Every companion in the gallery is shown. A switch sets light or dark, and it starts on the browser's setting.
- Art placed over anything is generated transparent, never cut out, and checked on harsh backgrounds with the `codex-imagegen` skill's `check_transparent.py`, looking at the sheet. The app's older helper-folk cutouts failed this and were replaced here.
- Text over the scene is measured against the real pixels at five window sizes, because the page audit can't check text on an image.
