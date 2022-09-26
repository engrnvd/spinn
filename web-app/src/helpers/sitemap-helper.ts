import { cssVar } from './misc'

export const newSitemapBlock = (data = {}) => ({
  name: 'Block name',
  color: cssVar('--secondary'),
  ...data,
})

export const newSitemapPage = (data = {}) => ({
  name: 'Page name',
  color: cssVar('--primary'),
  link: '',
  is_root: false,
  blocks: [],
  ...data,
})

export const newSitemapTemplate = () => ({
  name: 'Untitled Sitemap',
  pages: [
    newSitemapPage({
      name: 'Home',
      is_root: true,
      blocks: [
        newSitemapBlock({ name: 'Header' }),
        newSitemapBlock({ name: 'Hero Section' }),
        newSitemapBlock({ name: 'Testimonials' }),
        newSitemapBlock({ name: 'Features' }),
        newSitemapBlock({ name: 'FAQs' }),
        newSitemapBlock({ name: 'Footer' }),
      ],
      children: [
        newSitemapPage(),
        newSitemapPage(),
        newSitemapPage(),
      ],
    }),
  ]
})

