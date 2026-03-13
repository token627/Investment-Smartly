'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard';
import { posts, categories } from '@/data/posts';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory ? post.category === activeCategory : true;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="main-content">
      <div className="radiant-bg" />
      <div className="container">
        {/* Hero Section */}
        <div style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ marginBottom: '1.5rem' }}>
            Invest <span className="gradient-text">Smartly</span>, Grow Consistently
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Stay ahead of the curve with our premium insights, deep-dive analysis, and real-time updates on global financial markets.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          <input
            type="text"
            placeholder="Search articles, insights, or analysis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input glass"
            style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '9999px', fontSize: '1rem', textAlign: 'center', backgroundColor: 'rgba(30, 41, 59, 0.5)' }}
          />
        </div>

        {/* Categories Filter */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <button
            className={`category-pill ${activeCategory === null ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All Updates
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-pill ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
            No posts found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
