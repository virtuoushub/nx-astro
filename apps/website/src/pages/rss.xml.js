import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('../blog-posts/**/*.md');
const posts = Object.values(postImportResult);

export const get = () => rss({
    title: `Leosvel's blog`,
    stylesheet: true,
    description: 'My blog with articles about web development and programming in general.',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.frontmatter.slug,
      title: post.frontmatter.title,
      link: `/blog/${post.frontmatter.slug}`,
      pubDate: post.frontmatter.pubDate,
    }))
  });