import fs from 'fs';
import process_markdown from '../utils/_process_markdown.js';
import marked from 'marked';

export default function() {
  return fs
    .readdirSync('content/blog')
    .map(slug => {

      const markdown = fs.readFileSync(`content/blog/${slug}/index.md`, 'utf-8');

      const { content, metadata } = process_markdown(markdown);

      const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
      metadata.dateString = date.toDateString();

			const renderer = new marked.Renderer();

      const html = marked(
        content.replace(/^\t+/gm, match => match.split('\t').join('  ')) || '',
        {
          renderer,
        },
      );

      return {
        html,
        metadata,
        slug: slug,
      };
    })
    .sort((a, b) => {
      return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
    });
}
