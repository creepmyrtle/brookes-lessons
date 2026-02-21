export interface Testimonial {
  stars: number;
  text: string;
  author: string;
  source: string;
}

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    text: "Taking guitar lessons from Brooke is one of the nicest things I've done for myself in a long time. The entire experience was positive. And — I learned to play guitar!!! I highly recommend her to anyone at any age!",
    author: "Happy Student",
    source: "via Lessons.com",
  },
  {
    stars: 5,
    text: "Brooke makes learning so fun and easy. She's incredibly patient and really listens to what you want to learn. My daughter looks forward to her lesson every single week.",
    author: "Parent of Student",
    source: "Guitar Student",
  },
  {
    stars: 5,
    text: "I love that Brooke focuses on songs right away instead of boring theory. Within a few weeks I was playing songs I actually wanted to play. Best decision I've made!",
    author: "Adult Beginner",
    source: "Guitar & Voice Student",
  },
];
