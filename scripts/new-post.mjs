// Usage: npm run new -- "My post title" [post|thought|experiment]
import { writeFileSync, existsSync } from 'node:fs';

const [title, kind = 'post'] = process.argv.slice(2);
if (!title) {
  console.error('Usage: npm run new -- "My post title" [post|thought|experiment]');
  process.exit(1);
}
const slug = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const file = `src/content/blog/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}
const date = new Date().toISOString().slice(0, 10);
writeFileSync(
  file,
  `---\ntitle: ${JSON.stringify(title)}\ndescription: ""\ndate: ${date}\nkind: ${kind}\ntags: []\ndraft: true\n---\n\nStart writing here.\n`,
);
console.log(`Created ${file} (draft: set draft to false to publish)`);
