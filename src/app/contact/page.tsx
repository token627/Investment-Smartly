import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with TradeSmartly for premium market insights.',
    alternates: {
        canonical: '/contact',
    }
};

export default function Contact() {
    return (
        <main className="main-content">
            <div className="radiant-bg" />
            <div className="container" style={{ maxWidth: '600px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    Get in <span className="gradient-text">Touch</span>
                </h1>
                <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-muted)' }}>
                    Have a question about our analysis? Want to write for us? We&apos;d love to hear from you.
                </p>
                <ContactForm />
            </div>
        </main>
    );
}
