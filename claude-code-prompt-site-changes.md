# Claude Code Prompt: Brooke's Lessons — Site Changes

## Context

This is an existing Astro + Tailwind CSS project for an online music lesson business (brookeslessons.com). I need you to make the following changes across the site. The project uses the structure outlined in the original build prompt — Astro pages, components, content collections, etc.

## Changes Required

### 1. Remove the Blog Entirely

- Delete `src/pages/blog/` directory (both `index.astro` and `[...slug].astro`)
- Delete `src/content/blog/` directory and any example posts
- Delete the blog content collection definition from `src/content/config.ts` (or remove the file entirely if blog was the only collection)
- Delete `src/layouts/BlogPost.astro`
- Remove the "Blog" link from the navigation in `Header.astro`
- Remove the "Blog" link from the mobile menu
- Remove the "Blog" link from `Footer.astro`
- Remove any internal links pointing to `/blog` from other pages (homepage, about, taylor swift course, etc.)
- Update the `pageSEO` object in `src/data/siteConfig.ts` to remove the `blog` entry
- If there's a "Blog" entry in the sitemap config, remove it

### 2. Remove the Policies Page

- Delete `src/pages/policies.astro`
- Remove the "Policies" link from the navigation in `Header.astro`
- Remove the "Policies" link from the mobile menu
- Remove the "Policies" link from `Footer.astro`
- Remove any internal links pointing to `/policies` from other pages
- Update the `pageSEO` object in `src/data/siteConfig.ts` to remove the `policies` entry

### 3. Simplify All Forms — Name + Email Only, New CTA

Find every form on the site (the registration form on the homepage, the contact/register page, and any other forms). Make these changes to ALL of them:

**Remove all form fields EXCEPT:**
- First Name (required)
- Last Name (required)  
- Email (required)

**Remove these fields entirely:**
- Address
- Phone
- Student's Age
- Lesson Type (select)
- Skill Level
- Guitar Type & Brand
- Favorite Music / Song
- Parent/Guardian Name
- Preferred Day/Time
- How Did You Hear About Me
- Comments / Preferred Pronouns

**Change the submit button text** from "Submit Registration →" to **"Claim Your Free Lesson →"**

**Update the form section heading and description.** Instead of "Lesson Registration" / "Fill out the form below and I'll get back to you to schedule your first lesson":
- Heading: **"Claim Your Free Lesson"**
- Description: **"Enter your name and email below to book your free first lesson. I'll reach out within 24 hours to get you started!"**

The form should remain a simple HTML form (not wired up to a backend yet — same as current behavior). Keep the same visual styling — just fewer fields.

### 4. Update the About Page CTA

The About page currently has a CTA button or link that directs to the contact/register page. Update it:

- Button text should say **"Claim Your Free Lesson →"**
- It should still link to the contact/register page (`/book` or `/contact` — wherever the form lives)
- If there are multiple CTAs on the about page, update all of them to use this same text

### 5. Replace About Page Image with Real Photo

On the About page, there is currently a placeholder image (either a stock photo or a gray placeholder box). Replace it:

- Set the image source to `/images/brooke.jpg`
- Set the alt text to `"Brooke — online guitar, voice, and ukulele teacher"`
- The image file will be placed manually in `public/images/brooke.jpg` later — for now, just make sure the path is correct in the code
- Keep the existing image styling (rounded corners, aspect ratio, etc.)
- If using Astro's `<Image>` component from `astro:assets`, switch to a standard `<img>` tag for this image since it will be in the `public/` directory rather than imported as an asset

### 6. Update the Homepage Hero CTA

The homepage has a primary CTA button (currently says "Start Lessons →" or similar). Update it:

- Primary button text: **"Claim Your Free Lesson →"** (links to the form/contact page)
- Keep the secondary button ("Meet Brooke" → About page) as-is

### 7. Update the Homepage Form Section

The homepage has a registration form section near the bottom. Apply the same form simplification from step 3:

- Name + Email only
- "Claim Your Free Lesson →" button
- Updated heading and description text

### 8. Consistency Check

After making all changes, verify:
- No broken links pointing to `/blog` or `/policies` anywhere in the site
- No references to "registration" in form contexts — use "free lesson" language instead
- Navigation is clean with no empty gaps where removed items were
- Footer links are updated and balanced (no orphaned sections)
- The form on the homepage and the form on the contact page should be identical in fields and CTA text

## What NOT to Change

- Do not modify the Taylor Swift Course page
- Do not modify the Gift Certificates page
- Do not modify the Listen page
- Do not change the pricing section
- Do not change the testimonials section
- Do not change the site's visual design, colors, fonts, or layout
- Do not add any new pages or features
- Do not modify the SEO component, JSON-LD structured data, or meta tags (except removing blog/policies references)
