import { cssVar } from './misc'

export const newSitemapBlock = (data = {}) => ({
  name: 'Block name',
  color: cssVar('--info'),
  ...data,
})

export const newSitemapPage = (data = {}) => ({
  name: 'Page name',
  color: cssVar('--primary'),
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
        newSitemapPage({ color: cssVar('--info') }),
        newSitemapPage(),
        newSitemapPage({ color: cssVar('--info') }),
        newSitemapPage(),
      ],
    }),
  ]
})

