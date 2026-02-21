# Claude Code Prompt: Brooke's Lessons — SEO Implementation

## Context

I'm building a website for a friend's online music lesson business using Astro + Tailwind CSS, hosted on Vercel. The site is called "Brooke's Lessons" (brookeslessons.com). Brooke teaches private online guitar, voice, and ukulele lessons, plus a Taylor Swift guitar course. She's based in DFW Texas but teaches students anywhere in the US since all lessons are online.

I have an existing HTML mockup of the site design that should be used as the visual reference. The mockup is a single-file HTML page with all the styles inline — it needs to be converted into a proper Astro project structure.

## What I Need You To Do

### 1. Scaffold the Astro Project

Initialize a new Astro project with Tailwind CSS and TypeScript. Use the following structure:

```
brookes-lessons/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   ├── about.astro              # About Brooke
│   │   ├── taylor-swift-course.astro # Taylor Swift guitar course
│   │   ├── book.astro               # Registration / contact form
│   │   ├── reviews.astro            # Testimonials
│   │   ├── gift-certificates.astro  # Gift cards via Square
│   │   ├── policies.astro           # Lesson policies
│   │   ├── listen.astro             # Audio/video embeds
│   │   ├── blog/
│   │   │   ├── index.astro          # Blog listing
│   │   │   └── [...slug].astro      # Individual blog posts
│   │   ├── 404.astro                # Custom 404 page
│   │   └── sitemap.xml.ts           # Dynamic sitemap (or use @astrojs/sitemap)
│   ├── layouts/
│   │   ├── Base.astro               # Main layout with <head>, nav, footer
│   │   └── BlogPost.astro           # Blog post layout
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── PricingCards.astro
│   │   ├── TestimonialCard.astro
│   │   ├── InstrumentCard.astro
│   │   ├── TaylorSwiftBanner.astro
│   │   ├── RegistrationForm.astro   # The lesson registration form
│   │   ├── SEO.astro                # Reusable SEO head component
│   │   └── JsonLd.astro             # Structured data component
│   ├── content/
│   │   ├── config.ts                # Astro content collection config
│   │   └── blog/                    # Markdown blog posts go here
│   │       └── .gitkeep
│   ├── data/
│   │   ├── pricing.ts               # Pricing data (easy for Brooke to update)
│   │   ├── testimonials.ts          # Testimonial data
│   │   └── siteConfig.ts            # Site-wide config (name, URL, description, social links)
│   └── styles/
│       └── global.css               # Tailwind directives + custom brand tokens
├── public/
│   ├── images/                      # Optimized images
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### 2. Implement the SEO Component (`src/components/SEO.astro`)

Create a reusable `<SEO>` component that every page imports into its `<head>`. It should accept these props:

```typescript
interface Props {
  title: string;
  description: string;
  canonical?: string;         // canonical URL for the page
  ogImage?: string;           // Open Graph image path
  ogType?: string;            // "website" | "article" | etc.
  noindex?: boolean;          // for pages that shouldn't be indexed
  article?: {                 // for blog posts
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}
```

The component should render:
- `<title>` tag with the format `{pageTitle} | Brooke's Lessons` (homepage just uses the site title)
- `<meta name="description">` with the page description
- `<link rel="canonical">` pointing to the canonical URL
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`
- Twitter card tags: `twitter:card` (summary_large_image), `twitter:title`, `twitter:description`, `twitter:image`
- `<meta name="robots">` if noindex is true
- Article-specific Open Graph tags when the `article` prop is provided
- `<meta name="viewport">` and charset
- Favicon link
- Preconnect hints for Google Fonts and any external resources

### 3. Implement Structured Data (`src/components/JsonLd.astro`)

Create a component that renders `<script type="application/ld+json">` blocks. Build the following schemas:

#### Homepage — MusicSchool + LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": ["MusicSchool", "LocalBusiness"],
  "name": "Brooke's Lessons",
  "description": "Private online guitar, voice, and ukulele lessons for all ages. Learn to play songs from your very first lesson.",
  "url": "https://www.brookeslessons.com",
  "telephone": "",
  "email": "",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": ["Guitar Lessons", "Voice Lessons", "Ukulele Lessons"],
  "priceRange": "$30-$65 per lesson",
  "founder": {
    "@type": "Person",
    "name": "Brooke",
    "jobTitle": "Music Teacher"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Music Lesson Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "4 × 30 Minute Lessons",
        "price": "140.00",
        "priceCurrency": "USD",
        "description": "Four 30-minute private online lessons per month"
      },
      {
        "@type": "Offer",
        "name": "8 × 30 Minute Lessons",
        "price": "240.00",
        "priceCurrency": "USD",
        "description": "Eight 30-minute private online lessons per month"
      },
      {
        "@type": "Offer",
        "name": "4 × 60 Minute Lessons",
        "price": "260.00",
        "priceCurrency": "USD",
        "description": "Four 60-minute private online lessons per month"
      }
    ]
  }
}
```

#### Taylor Swift Course Page — Course schema

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Taylor Swift Guitar Course",
  "description": "Learn to play Taylor Swift songs on guitar. Beginner-friendly private online course covering every era — from Fearless to Midnights.",
  "provider": {
    "@type": "MusicSchool",
    "name": "Brooke's Lessons",
    "url": "https://www.brookeslessons.com"
  },
  "educationalLevel": "Beginner",
  "teaches": ["Guitar chords", "Strumming patterns", "Singing while playing", "Capo usage"],
  "availableLanguage": "English",
  "deliveryMode": "online",
  "coursePrerequisites": "No prior experience required — just a guitar and a love of Taylor's music"
}
```

#### Blog Posts — Article schema (dynamic, in BlogPost.astro layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{ post title }}",
  "description": "{{ post description }}",
  "author": {
    "@type": "Person",
    "name": "Brooke"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brooke's Lessons"
  },
  "datePublished": "{{ publish date }}",
  "dateModified": "{{ modified date }}",
  "mainEntityOfPage": "{{ canonical URL }}"
}
```

### 4. Page-Specific SEO — Titles and Meta Descriptions

Use these exact titles and descriptions for each page. Pass them to the `<SEO>` component:

```typescript
// src/data/siteConfig.ts

export const siteConfig = {
  name: "Brooke's Lessons",
  url: "https://www.brookeslessons.com",
  description: "Private online guitar, voice & ukulele lessons for all ages. Learn to play songs from your first lesson.",
};

export const pageSEO = {
  home: {
    title: "Online Guitar, Voice & Ukulele Lessons for All Ages",
    description: "Private online music lessons with 18+ years of teaching experience. Learn to play songs from your very first lesson. Guitar, voice, and ukulele for kids 7+ and adults. Serving students across the US.",
  },
  about: {
    title: "About Brooke — Online Guitar & Voice Teacher, 18+ Years Experience",
    description: "Meet Brooke — a DFW-based music teacher with 18+ years of experience teaching guitar, voice, ukulele, and songwriting. Associates in Music from Christ for the Nations. Songs-first teaching philosophy.",
  },
  taylorSwift: {
    title: "Taylor Swift Guitar Course — Learn Her Songs Step by Step",
    description: "Learn to play Taylor Swift songs on guitar with private online lessons. Beginner-friendly course covering every era — chords, strumming patterns, and sing-along instruction. All ages welcome.",
  },
  book: {
    title: "Book a Lesson — Start Your Musical Journey Today",
    description: "Sign up for private online guitar, voice, or ukulele lessons with Brooke. Flexible scheduling, monthly billing, all ages welcome. Fill out the registration form to get started.",
  },
  reviews: {
    title: "Student Reviews — What My Students Say About Their Lessons",
    description: "Read reviews from Brooke's guitar, voice, and ukulele students. See why students of all ages love learning music with a songs-first approach.",
  },
  giftCertificates: {
    title: "Gift Certificates — Give the Gift of Music Lessons",
    description: "Digital gift certificates for private online music lessons. 1 month of guitar, voice, or ukulele lessons — only $130. Delivered via email within 48 hours.",
  },
  policies: {
    title: "Lesson Policies — Scheduling, Billing & Cancellations",
    description: "Brooke's Lessons studio policies including scheduling, monthly billing, cancellation policy, and what you need for online lessons.",
  },
  listen: {
    title: "Listen — Hear Brooke Play Guitar & Sing",
    description: "Listen to performances and covers by Brooke. Guitar, voice, and original music from a teacher who's been performing for over 7 years.",
  },
  blog: {
    title: "Blog — Guitar Tips, Song Tutorials & Music Lesson Advice",
    description: "Tips for beginner guitarists, Taylor Swift song tutorials, practice advice, and music lesson insights from an experienced online guitar teacher.",
  },
};
```

### 5. Technical SEO Setup

#### robots.txt (`public/robots.txt`)
```
User-agent: *
Allow: /

Sitemap: https://www.brookeslessons.com/sitemap-index.xml
```

#### Sitemap
Install and configure `@astrojs/sitemap`:
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.brookeslessons.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
```

#### Image Optimization
Use Astro's built-in `<Image>` component from `astro:assets` for all images. This automatically:
- Converts to WebP format
- Generates responsive srcset sizes
- Lazy loads below-the-fold images
- Sets proper width/height to prevent layout shift

For every image, provide a descriptive `alt` attribute. Examples:
- Hero image: `alt="Brooke teaching an online guitar lesson"`
- About photo: `alt="Brooke smiling while holding an acoustic guitar"`
- Generic guitar image: `alt="Close-up of hands playing acoustic guitar chords"`

#### Performance
- Preconnect to Google Fonts in the `<head>`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  ```
- Use `loading="lazy"` on below-fold images (Astro's Image component handles this)
- Inline critical CSS (Astro does this by default)
- Set appropriate Cache-Control headers via Vercel config if needed

### 6. Heading Structure

Make sure every page follows proper heading hierarchy. Here's the structure for each:

**Homepage:**
- H1: "Learn to play songs, not just scales."
- H2: "Find Your Sound" (instruments section)
- H3: "Guitar Lessons" / "Voice Lessons" / "Ukulele Lessons"
- H2: "Simple, Transparent Pricing"
- H2: "Taylor Swift Guitar Course" (banner)
- H2: "What My Students Say"
- H2: "Lesson Registration"

**About:**
- H1: "About Brooke"
- H2: "My Teaching Philosophy"

**Taylor Swift Course:**
- H1: "Taylor Swift Guitar Course"
- H2: "What You'll Learn"
- H2: "Who It's For"
- H2: "How It Works"

**Blog listing:**
- H1: "Blog — Guitar Tips & Song Tutorials"
- H2: (each post title)

**Blog posts:**
- H1: (post title)
- H2/H3: (subheadings within the post)

### 7. Internal Linking

Build these cross-links into the page content naturally:

- Homepage → Taylor Swift Course (via the banner CTA)
- Homepage → About (via "Meet Brooke" button)
- Homepage → Book/Register (via "Start Lessons" CTAs)
- Homepage → Reviews (if adding a "see all reviews" link)
- About → Book/Register (CTA at bottom of bio)
- About → Taylor Swift Course (mention in bio)
- Taylor Swift Course → Book/Register (CTA to sign up)
- Taylor Swift Course → Blog (link to related posts when they exist)
- Blog posts → Book/Register (CTA at end of every post)
- Blog posts → Taylor Swift Course (where relevant)
- Blog posts → other related blog posts
- Policies → Book/Register
- Gift Certificates → Book/Register (for recipients)

### 8. Blog Content Collection Setup

Configure Astro content collections for the blog:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

Create one example blog post as a template Brooke can follow:

```markdown
---
title: "5 Easy Taylor Swift Songs Every Beginner Guitarist Should Learn"
description: "Just getting started on guitar? These five Taylor Swift songs use simple chords and are perfect for absolute beginners. Start strumming along today."
publishDate: 2026-02-20
tags: ["taylor swift", "beginner", "guitar", "songs"]
---

<!-- Blog post content would go here -->
<!-- This is a placeholder — Brooke will write the actual content -->

Want to learn these songs with one-on-one guidance? [Book a lesson](/book) and we'll work through them together!
```

### 9. Favicon and Open Graph Image

- Create a simple favicon.svg using the site's coral accent color, perhaps a music note or stylized "B"
- Create a default OG image (1200×630px) that shows "Brooke's Lessons — Online Guitar, Voice & Ukulele" with the brand colors. This is what appears when the site URL is shared on social media or in iMessage. Place it at `public/images/og-default.jpg`.

### 10. 404 Page

Create a custom 404.astro that:
- Uses the site layout (nav + footer)
- Has a friendly message like "Looks like this page hit a wrong note!"
- Links back to the homepage and the booking page
- Has proper SEO tags with `noindex: true`

## Design Reference

The visual design should match the existing HTML mockup. Key brand tokens:

```css
/* Brand colors */
--coral: #e06b54;
--coral-hover: #c85a44;
--text: #2c2420;
--text-body: #4a3f38;
--text-dim: #7a6e64;
--bg: #faf8f5;
--bg-warm: #f5f0ea;
--surface: #ffffff;
--border: #e8e0d6;
--sage: #6a8f6e;
--gold: #c4943a;

/* Typography */
Display font: Lora (serif) — for headings
Body font: Outfit (sans-serif) — for body text
Mono font: JetBrains Mono — for labels/badges

/* Border radius */
Cards: 16px
Buttons: 100px (pill shape)
Small elements: 10px
```

## Important Notes

- Do NOT add any features beyond what's in the existing mockup. This is a 1:1 conversion from the HTML mockup to a proper Astro project, plus SEO infrastructure.
- Every page must use the `<SEO>` component with its specific title and description.
- Every page must include the appropriate JSON-LD structured data.
- The registration form should be functional HTML (action can be a placeholder — we'll wire it up later).
- Use Astro's content collections for blog posts so Brooke can add new posts as Markdown files.
- All data that Brooke might want to update (pricing, testimonials, site config) should live in the `src/data/` directory as simple TypeScript files with exported constants.
- Prioritize Core Web Vitals: no layout shift, fast LCP, minimal JS.
