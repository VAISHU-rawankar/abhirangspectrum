import '../src/styles/land.css';
import '../src/styles/home.css';
import '../src/styles/final-cta.css';
import '../src/styles/form.css';
import '../src/styles/mobile-menu-fix.css';
import '../src/index.css';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import WhatsAppButton from '../src/components/WhatsAppButton';

export const metadata = {
  title: 'Abhirang Spectrum | Graphology, Astrology, Numerology, Vastu & Reiki',
  description: 'Transform your life with Abhirang Spectrum — expert holistic coaching. Specializing in Graphology, Vedic Astrology, Numerology, Vastu Shastra, and Quantum Reiki healing. Book your consultation today.',
  keywords: 'life coach, graphology, astrology, numerology, vastu shastra, reiki healing, handwriting analysis, vedic astrology, personal growth, spiritual healing, name correction, vastu audit'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
