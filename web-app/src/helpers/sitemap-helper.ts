export const newSitemapBlock = (data = {}) => ({
  name: 'Block name',
  color: '#45a8e1',
  ...data,
})

export const newSitemapPage = (data = {}) => ({
  name: 'Page name',
  color: '#70cc8f',
  link: '',
  isRoot: false,
  blocks: [],
  ...data,
})

export const newSitemapTemplate = () => ({
  name: 'Untitled Sitemap',
  pages: [
    newSitemapPage({
      name: 'Home',
      isRoot: true,
      blocks: [
        newSitemapBlock({ name: 'Header' }),
        newSitemapBlock({ name: 'Hero Section' }),
        newSitemapBlock({ name: 'Testimonials' }),
        newSitemapBlock({ name: 'Features' }),
        newSitemapBlock({ name: 'FAQs' }),
        newSitemapBlock({ name: 'Footer' }),
      ],
      children: [
        newSitemapPage({ color: '#45a8e1' }),
        newSitemapPage(),
        newSitemapPage({ color: '#45a8e1' }),
        newSitemapPage(),
      ],
    }),
  ]
})

