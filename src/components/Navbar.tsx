import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-outfit)', letterSpacing: '-0.02em' }}>
                    Trade<span className="gradient-text">Smartly</span>
                </Link>
                <nav style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/" style={{ fontWeight: 500 }}>Home</Link>
                    <Link href="/about" style={{ fontWeight: 500 }}>About</Link>
                    <Link href="/contact" style={{ fontWeight: 500 }}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}
