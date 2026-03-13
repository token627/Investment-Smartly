'use client';

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

                <form className="card" style={{ padding: '2rem' }} onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! We will get back to you shortly."); }}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-input" placeholder="John Doe" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" id="subject" className="form-input" placeholder="How can we help?" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" className="form-input" rows={5} placeholder="Your message here..." required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}
