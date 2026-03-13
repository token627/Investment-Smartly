import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about our mission to democratize financial intelligence.',
    alternates: {
        canonical: '/about',
    }
};

export default function About() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TradeSmartly",
        "url": "https://www.tradesmartly.in",
        "logo": "https://www.tradesmartly.in/logo.png"
    };

    return (
        <main className="main-content">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="radiant-bg" />
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    About <span className="gradient-text">Us</span>
                </h1>

                <div className="card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-outfit)' }}>Our Mission at TradeSmartly</h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        At <strong>TradeSmartly.in</strong>, we believe that building wealth shouldn&apos;t be reserved for Wall Street insiders and institutional giants. Our mission is to democratize financial intelligence by providing comprehensive, actionable, and unbiased market analysis to the everyday investor.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Whether you are a seasoned trader analyzing micro-cap volatility or a long-term investor looking for stable dividend growth, the sheer volume of financial data available today can be overwhelming. We cut through the noise. We synthesize macroeconomic trends, technical patterns, and fundamental valuations into clear, digestible insights that you can use to make smarter decisions.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Our name, <em>TradeSmartly</em>, reflects our core ethos: we prioritize rational, data-driven strategies over emotional reactions to market hysteria.
                    </p>
                </div>

                <div className="card" style={{ padding: '2.5rem', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-outfit)' }}>Our Story & Philosophy</h2>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Founded in 2024 by a coalition of former portfolio managers, data scientists, and financial technologists, TradeSmartly was born out of frustration. We saw a stark divide between the sophisticated tools available to hedge funds and the sensationalist news fed to retail investors.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        We adhere to three main pillars of financial philosophy:
                    </p>
                    <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1rem', marginTop: '1.5rem', fontSize: '1.05rem' }}>
                        <li><strong style={{ color: 'var(--text-color)' }}>Education First:</strong> We don&apos;t just tell you what is happening; we explain why it&apos;s happening and how it impacts your portfolio.</li>
                        <li><strong style={{ color: 'var(--text-color)' }}>Risk Management:</strong> Protecting capital is just as important as growing it. We emphasize risk-adjusted returns and proper portfolio allocation in all our research.</li>
                        <li><strong style={{ color: 'var(--text-color)' }}>Long-Term Perspective:</strong> While we cover short-term catalysts, our overarching goal is to help you build resilient, compounding wealth for decades to come.</li>
                    </ul>
                </div>

                <div className="card" style={{ padding: '2.5rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-outfit)' }}>Why Choose TradeSmartly?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Expert Analysis</h3>
                            <p style={{ fontSize: '0.95rem' }}>Our team brings decades of combined firsthand experience from high-frequency trading desks and asset management firms directly to your inbox.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Data-Driven Methodology</h3>
                            <p style={{ fontSize: '0.95rem' }}>Every article, forecast, and thesis is backed by rigorous quantitative research, statistical models, and real-world macroeconomic metrics.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Unbiased Perspective</h3>
                            <p style={{ fontSize: '0.95rem' }}>We operate independently. We do not accept payment for stock promotions, ensuring our analysis remains entirely objective and aligned with your success.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>Comprehensive Coverage</h3>
                            <p style={{ fontSize: '0.95rem' }}>The modern portfolio is diverse. We cover everything from traditional large-cap equities and fixed income to the rapidly evolving sectors of crypto and AI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
