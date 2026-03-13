import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export function generateStaticParams() {
    return posts.map(post => ({ id: post.id }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const post = posts.find(p => p.id === resolvedParams.id);

    if (!post) {
        notFound();
    }

    return (
        <main className="main-content">
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
                        <div style={{ lineHeight: 1.8, color: 'var(--text-muted)', fontSize: '1.125rem' }}>
                            <h2 style={{ color: 'var(--text-color)', marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.75rem' }}>Introduction to Market Dynamics</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                The current landscape of the market presents unique challenges and opportunities. As investors navigate through these turbulent times, understanding the underlying mechanics becomes increasingly important. {post.content}
                            </p>

                            <h3 style={{ color: 'var(--text-color)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Analyzing Historical Volatility</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Historical data suggests that periods of high volatility often precede significant directional moves. By analyzing volume profiles and institutional order flow, one can start to see a clearer picture emerging from the noise.
                            </p>

                            <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>Volume Profile Indicators</h4>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Volume Profile displays trading activity over a specified time period at specified price levels. The study plots a histogram on the chart meant to reveal dominant and/or significant price levels based on volume. Exactly understanding this requires tracking Value Area and Point of Control (POC).
                            </p>

                            <h4 style={{ color: 'var(--text-color)', marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.25rem' }}>Institutional Order Flow</h4>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Smart money leaves footprints. Utilizing Level 2 data and dark pool prints can identify where whales are accumulating under the radar.
                            </p>

                            <h2 style={{ color: 'var(--text-color)', marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.75rem' }}>Macroeconomic Factors</h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Technical analysis alone cannot explain every market movement. We must zoom out and assess the broader macroeconomic environment.
                            </p>

                            <h3 style={{ color: 'var(--text-color)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Interest Rates &amp; Inflation</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Central bank policies remain the ultimate driver of liquidity. As the &quot;risk-free&quot; rate fluccuates, it instantly forces a repricing of risk assets across equities and crypto.
                            </p>

                            <div style={{ margin: '3rem 0', padding: '1.5rem', borderLeft: '4px solid var(--primary-color)', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderRadius: '0 0.5rem 0.5rem 0' }}>
                                <p style={{ fontStyle: 'italic', fontSize: '1.25rem', color: 'var(--text-color)', margin: 0 }}>
                                    &quot;The markets are a mechanism for transferring wealth from the impatient to the patient.&quot;
                                </p>
                            </div>

                            <h2 style={{ color: 'var(--text-color)', marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.75rem' }}>The Road Ahead</h2>
                            <p>
                                Looking forward, key levels to watch include previous resistance turning into support. The macroeconomic backdrop, including interest rate decisions and geopolitical events, will likely act as the primary catalysts for the foreseeable future. Risk management remains paramount.
                            </p>
                        </div>
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
