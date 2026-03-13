import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return posts.map(post => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = posts.find(p => p.id === resolvedParams.id);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: `https://www.tradesmartly.in/post/${post.id}`,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.imageUrl,
                    width: 800,
                    height: 600,
                    alt: post.title,
                }
            ]
        },
        alternates: {
            canonical: `/post/${post.id}`
        }
    };
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post = posts.find(p => p.id === resolvedParams.id);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.imageUrl,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "TradeSmartly",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.tradesmartly.in/logo.png"
            }
        },
        "datePublished": post.date,
        "description": post.excerpt
    };

    return (
        <main className="main-content">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="radiant-bg" style={{ height: '400px', opacity: 0.5 }} />
            <div className="container" style={{ maxWidth: '1440px' }}>
                <Link
                    href="/"
                    style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--primary-color)', fontSize: '0.875rem', fontWeight: 500 }}
                >
                    &larr; Back to all posts
                </Link>

                <div style={{ marginBottom: '2rem', maxWidth: '800px' }}>
                    <span className="category-pill" style={{ marginBottom: '1rem' }}>{post.category}</span>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{post.title}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        <span>By <strong style={{ color: 'var(--text-color)' }}>{post.author}</strong></span>
                        <span>&bull;</span>
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>

                <div style={{ width: '100%', height: '450px', backgroundImage: `url(${post.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '1rem', marginBottom: '3rem', border: '1px solid var(--card-border)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}></div>

                <div className="grid grid-cols-1 lg:grid-cols-4" style={{ gap: '3rem', alignItems: 'start' }}>
                    {/* Main Content Area */}
                    <div className="card lg:col-span-3 article-content" style={{ padding: '3rem', backgroundColor: 'var(--glass-bg)', backdropFilter: 'blur(12px)' }}>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-color)', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 500 }}>
                            {post.excerpt}
                        </p>
                        <div
                            className="article-html-content"
                            style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.125rem' }}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>

                    {/* Sidebar Area */}
                    <div style={{ position: 'relative' }}>
                        <TableOfContents />
                    </div>
                </div>
            </div>
        </main>
    );
}
