export default function sitemap() {
  const baseUrl = 'https://abhirangspectrum.com';

  const staticRoutes = [
    '',
    '/about',
    '/anhad-naad',
    '/astrology',
    '/blog',
    '/contact',
    '/graphology',
    '/numerology',
    '/privacy-policy',
    '/quantum-reiki',
    '/refund-policy',
    '/services',
    '/terms-of-service',
    '/vastu-shastra',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const blogSlugs = [
    'graphology-personality-examples',
    'graphology-slanted-meaning',
    'graphology-signature-analysis',
    'graphology-improve-change-personality',
    'astrology-read-birth-chart',
    'astrology-why-bad-luck',
    'astrology-most-powerful-zodiac',
    'astrology-planets-affect-life',
    'numerology-calculate-life-path',
    'numerology-lucky-number',
    'numerology-name-correction',
    'numerology-meaning-1-to-9',
    'graphology-traits',
    'astrology-planets',
    'numerology-destiny',
  ];

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
