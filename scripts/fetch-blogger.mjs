import fs from 'fs';
import path from 'path';

const BLOG_URL = 'https://www.investmentsmartly.com/feeds/posts/default?alt=json&max-results=50';
const OUT_FILE = path.join(process.cwd(), 'src/data/posts.ts');

async function main() {
    try {
        const res = await fetch(BLOG_URL);
        const data = await res.json();

        if (!data.feed || !data.feed.entry) {
            console.log('No entries found');
            return;
        }

        const categoriesSet = new Set();
        const posts = data.feed.entry.map(entry => {
            // Extract ID from tag:blogger.com,1999:blog-123.post-456
            const idParts = entry.id.$t.split('-');
            const id = idParts[idParts.length - 1];

            const title = entry.title.$t;
            let rawContent = entry.content ? entry.content.$t : '';

            // Basic Excerpt generation (strip HTML)
            let excerpt = rawContent.replace(/<[^>]+>/g, '').trim().substring(0, 150);
            if (excerpt.length === 150) excerpt += '...';

            let category = "Uncategorized";
            if (entry.category && entry.category.length > 0) {
                category = entry.category[0].term;
                categoriesSet.add(category);
            }

            const date = entry.published.$t.split('T')[0];
            const author = "Token Mallick";

            let imageUrl = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800";

            // Extract high res image from thumbnail
            if (entry.media$thumbnail && entry.media$thumbnail.url) {
                // usually looks like .../s72-w640-h426-c/... replace with /s1600/ or /w800/
                imageUrl = entry.media$thumbnail.url.replace(/\/s\d+(-[a-z0-9-]+)*\//, '/s800/');
            } else {
                // try extracting from content
                const match = rawContent.match(/<img[^>]+src="([^">]+)"/);
                if (match) imageUrl = match[1];
            }

            return {
                id,
                title,
                excerpt,
                content: rawContent,
                category,
                date,
                author,
                imageUrl
            };
        });

        // We can also extract all unique categories for the filters
        const allCategories = Array.from(categoriesSet).slice(0, 6);

        const tsContent = `export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    author: string;
    imageUrl: string;
}

export const categories = ${JSON.stringify(allCategories, null, 4)};

export const posts: Post[] = ${JSON.stringify(posts, null, 4)};
`;

        fs.writeFileSync(OUT_FILE, tsContent);
        console.log(`Successfully pulled ${posts.length} posts and updated src/data/posts.ts`);

    } catch (e) {
        console.error('Error fetching blog posts:', e);
    }
}

main();
