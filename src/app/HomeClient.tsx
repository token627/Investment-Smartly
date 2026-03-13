'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { posts, categories } from '@/data/posts';

export default function HomeClient() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const POSTS_PER_PAGE = 12;

    const filteredPosts = posts.filter(post => {
        const matchesCategory = activeCategory ? post.category === activeCategory : true;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const currentPosts = filteredPosts.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handleCategoryChange = (category: string | null) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    return (
        <main className="main-content">
            <div className="radiant-bg" />
            <div className="container">
                {/* Hero Section */}
                <div style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        Invest <span className="gradient-text">Smartly</span>, Grow Consistently
                    </h1>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
                        Stay ahead of the curve with our premium insights, deep-dive analysis, and real-time updates on global financial markets.
                    </h2>
                </div>

                {/* Search Bar */}
                <div style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    <input
                        type="text"
                        placeholder="Search articles, insights, or analysis..."
                        value={searchQuery}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="form-input glass"
                        style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '9999px', fontSize: '1rem', textAlign: 'center', backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
                    />
                </div>

                {/* Categories Filter */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                    <button
                        className={`category-pill ${activeCategory === null ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(null)}
                    >
                        All Updates
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-pill ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {currentPosts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                        <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.5rem', borderRadius: '9999px', border: '1px solid var(--glass-border)' }}>
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: 'transparent',
                                    color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-color)',
                                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.2s',
                                    opacity: currentPage === 1 ? 0.5 : 1
                                }}
                                aria-label="Previous Page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '50%',
                                        border: 'none',
                                        background: currentPage === page ? 'var(--primary-color)' : 'transparent',
                                        color: currentPage === page ? 'white' : 'var(--text-color)',
                                        fontWeight: currentPage === page ? 600 : 400,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: currentPage === page ? '0 4px 10px rgba(59, 130, 246, 0.4)' : 'none'
                                    }}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: 'transparent',
                                    color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-color)',
                                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.2s',
                                    opacity: currentPage === totalPages ? 0.5 : 1
                                }}
                                aria-label="Next Page"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                            </button>
                        </div>
                    </div>
                )}

                {filteredPosts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
                        No posts found in this category.
                    </div>
                )}
            </div>
        </main>
    );
}
