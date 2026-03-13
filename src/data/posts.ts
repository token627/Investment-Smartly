export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    author: string;
    imageUrl: string;
}

export const categories = ["Analysis", "Crypto", "Tech", "Earnings", "Global"];

export const posts: Post[] = [
    {
        id: "1",
        title: "Navigating the New Bull Market: What to Expect",
        excerpt: "The recent surge in tech stocks has investors wondering if this is a sustainable rally or just a bear market trap.",
        content: "Full content here...",
        category: "Analysis",
        date: "2024-03-12",
        author: "Token Mallick",
        imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "2",
        title: "Crypto Rebound: Bitcoin's Push to ATH",
        excerpt: "Institutional flows and spot ETF approvals continue to drive crypto momentum.",
        content: "Full content here...",
        category: "Crypto",
        date: "2024-03-10",
        author: "Token Mallick",
        imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "3",
        title: "AI Boom fuels Semiconductor Earnings Surge",
        excerpt: "Major chip manufacturers report record-breaking revenues as AI adoption accelerates across all sectors.",
        content: "Full content here...",
        category: "Tech",
        date: "2024-03-08",
        author: "Token Mallick",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        title: "Understanding Inflation's Impact on Tech Valuations",
        excerpt: "How rising interest rates and persistent inflation are reshaping the technology sector's fundamentals.",
        content: "Full content here...",
        category: "Analysis",
        date: "2024-03-05",
        author: "Token Mallick",
        imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "5",
        title: "Q1 Earnings Season Preview: What to Watch",
        excerpt: "A comprehensive guide to the most anticipated earnings reports coming up this quarter.",
        content: "Full content here...",
        category: "Earnings",
        date: "2024-03-01",
        author: "Token Mallick",
        imageUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        title: "Global Supply Chain Reorganization",
        excerpt: "Companies are increasingly moving away from centralized manufacturing to more resilient distributed networks.",
        content: "Full content here...",
        category: "Global",
        date: "2024-02-28",
        author: "Token Mallick",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    }
];
