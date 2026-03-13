import Link from 'next/link';
import { Post } from '@/data/posts';

export default function BlogCard({ post }: { post: Post }) {
    return (
        <Link href={`/post/${post.id}`} className="card">
            <div style={{ position: 'relative', height: '200px', backgroundImage: `url(${post.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <span className="category-pill">{post.category}</span>
                </div>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
        </Link>
    );
}
