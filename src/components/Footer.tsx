import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ borderTop: '1px solid var(--card-border)', padding: '3rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-outfit)' }}>
                    Trade<span className="gradient-text">Smartly</span>
                </div>
                <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)' }}>
                    <Link href="/" style={{ transition: 'color 0.2s' }}>Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact</Link>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
                    &copy; {new Date().getFullYear()} TradeSmartly.in. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
