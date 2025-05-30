import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Configure Inter font for body/primary text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Ensures text is visible while font loads
  weight: ['300', '400', '500', '600', '700'], // Specify weights used in the project
  variable: '--font-inter', // Expose as CSS variable for Tailwind
});

// Configure Poppins font for headings/secondary text
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'], // Specify weights used for headings
  variable: '--font-poppins', // Expose as CSS variable for Tailwind
});

export const metadata = {
  title: 'hueneu Studio | Where stories find their aesthetic.',
  description: 'hueneu is a quiet but bold graphic design studio. Designs that whisper loud stories. We craft story-first, intentional, and evocative brand identities, packaging, and creative projects.',
  keywords: ['hueneu', 'graphic design', 'branding', 'packaging', 'social media', 'stationery', 'coffee table books', 'creative projects', 'design studio', 'story-first design', 'evocative design'],
  authors: [{ name: 'hueneu Studio' }],
  // Open Graph / Facebook
  openGraph: {
    title: 'hueneu Studio | Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories. Discover how hueneu crafts intentional brand experiences.',
    // url: 'https://www.hueneu.com', // TODO: Replace with actual URL after deployment
    siteName: 'hueneu Studio',
    // images: [ // TODO: Add a specific OG image to /public e.g., /og-image.jpg (1200x630)
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'hueneu Studio - Evocative Designs',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'hueneu Studio | Where stories find their aesthetic.',
    description: 'Designs that whisper loud stories. Discover how hueneu crafts intentional brand experiences.',
    // images: ['/twitter-image.jpg'], // TODO: Add a specific Twitter image to /public e.g., /twitter-image.jpg
    // creator: '@hueneu_', // TODO: Add studio\'s Twitter handle if available
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    // maximumScale: 1, // Consider if zoom should be disabled
  },
  // Favicons and theme colors (ensure corresponding assets are in /public)
  icons: {
    icon: '/favicon.ico', // /public/favicon.ico
    shortcut: '/favicon-16x16.png', // /public/favicon-16x16.png
    apple: '/apple-touch-icon.png', // /public/apple-touch-icon.png
    // other: [
    //   { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    //   { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2C3E50' }, // Updated color to new primary, ensure SVG matches or remove if not used
    // ],
  },
  // manifest: '/site.webmanifest', // /public/site.webmanifest for PWA features
  themeColor: '#FFFFFF', // Matches new --neutral-bg-hex
  msapplicationTileColor: '#2C3E50', // Matches new --hueneu-primary-hex
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      {/* 
        The <head /> element is managed by Next.js and populated from the metadata object.
        Custom <link> or <meta> tags not covered by the metadata API can be added here if necessary.
        The `inter.variable` and `poppins.variable` classes make these fonts available as CSS variables (--font-inter, --font-poppins).
        Ensure your tailwind.config.js is set up to use these variables for `fontFamily.sans` and `fontFamily.heading` for optimal integration:
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
          heading: ['var(--font-poppins)', 'sans-serif'],
        }
        If not, Tailwind will still attempt to use 'Inter' and 'Poppins' by name, and `next/font` ensures they are loaded.
        Global font styles are applied in globals.css (e.g., body uses font-sans).
      */}
      <body>
        {children}
      </body>
    </html>
  );
}
