import { cssVar } from './misc'

export const newSitemapPage = () => ({
  name: 'Page name',
  color: cssVar('--primary'),
  link: '',
  is_root: true,
  blocks: [],
})

export const newSitemap = () => ({
  name: 'Untitled Sitemap',
  pages: [
    {
      name: 'Home',
      color: cssVar('--primary'),
      link: '',
      is_root: true,
      blocks: [],
      children: [
        newSitemapPage(),
        newSitemapPage(),
        newSitemapPage(),
      ],
    }
  ]
})

