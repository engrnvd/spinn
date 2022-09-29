export const defaultBlock = (data = {}) => ({
  name: 'Block name',
  color: '#2196f3',
  ...data,
})

export const defaultPage = (data = {}) => ({
  name: 'Page name',
  color: '#4caf50',
  link: '',
  isRoot: false,
  blocks: [],
  ...data,
})

export const newSitemapTemplate = () => ({
  name: 'Untitled Sitemap',
  tree: [
    defaultPage({
      name: 'Home',
      isRoot: true,
      blocks: [
        defaultBlock({ name: 'Header' }),
        defaultBlock({ name: 'Hero Section' }),
        defaultBlock({ name: 'Testimonials' }),
        defaultBlock({ name: 'Features' }),
        defaultBlock({ name: 'FAQs' }),
        defaultBlock({ name: 'Footer' }),
      ],
      children: [
        defaultPage({ name: 'Page 1', color: '#2196f3' }),
        defaultPage({ name: 'Page 2' }),
        defaultPage({ name: 'Page 3', color: '#2196f3' }),
        defaultPage({ name: 'Page 4' }),
      ],
    }),
  ]
})

