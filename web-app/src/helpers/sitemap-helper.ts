export const defaultBlock = (data = {}) => ({
  name: 'Block name',
  color: '#45a8e1',
  ...data,
})

export const defaultPage = (data = {}) => ({
  name: 'Page name',
  color: '#70cc8f',
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
        defaultPage({ name: 'Page 1', color: '#45a8e1' }),
        defaultPage({ name: 'Page 2' }),
        defaultPage({ name: 'Page 3', color: '#45a8e1' }),
        defaultPage({ name: 'Page 4' }),
      ],
    }),
  ]
})

