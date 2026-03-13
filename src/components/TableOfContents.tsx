'use client';

import { useEffect, useState } from 'react';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export default function TableOfContents() {
    const [headings, setHeadings] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Select all h2, h3, h4 elements within the article content
        const elements = Array.from(document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4')) as HTMLElement[];

        const items: TocItem[] = elements.map((elem) => {
            // Create an ID if it doesn't have one
            if (!elem.id) {
                elem.id = elem.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            }
            return {
                id: elem.id,
                text: elem.innerText,
                level: Number(elem.tagName.charAt(1))
            };
        });

        // Avoid setting state synchronously during render by using setTimeout
        setTimeout(() => {
            setHeadings(items);
        }, 0);

        // Set up Intersection Observer for active state
        const callback = (entries: IntersectionObserverEntry[]) => {
            // Find the first intersecting entry
            const intersectingEntry = entries.find(entry => entry.isIntersecting);
            if (intersectingEntry) {
                setActiveId(intersectingEntry.target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: '-100px 0px -66% 0px', // Trigger when heading is near the top of the viewport
            threshold: 1.0
        });

        elements.forEach(elem => observer.observe(elem));

        return () => observer.disconnect();
    }, []);

    if (headings.length === 0) {
        return null;
    }

    return (
        <div style={{ position: 'sticky', top: '6rem', padding: '1.5rem', backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '1rem' }}>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--text-color)', fontFamily: 'var(--font-outfit)' }}>
                Table of Contents
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {headings.map((heading) => {
                    // Calculate indentation based on heading level (h2 -> 0, h3 -> 1rem, h4 -> 2rem)
                    const marginLeft = `${(heading.level - 2) * 1}rem`;
                    const isActive = activeId === heading.id;

                    return (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            style={{
                                marginLeft,
                                fontSize: '0.875rem',
                                color: isActive ? 'var(--primary-color)' : 'var(--text-muted)',
                                fontWeight: isActive ? 600 : 400,
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                                lineHeight: 1.4,
                                display: 'block',
                                borderLeft: isActive ? '2px solid var(--primary-color)' : '2px solid transparent',
                                paddingLeft: '0.5rem',
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(heading.id);
                                if (element) {
                                    // Scroll with offset for sticky navbar
                                    const y = element.getBoundingClientRect().top + window.scrollY - 100;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                        >
                            {heading.text}
                        </a>
                    );
                })}
            </nav>
        </div>
    );
}
