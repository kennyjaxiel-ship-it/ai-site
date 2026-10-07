import Link from 'next/link';
import { SiteShell } from '../../components/site-shell';

const posts = [
  {
    title: 'The AI operating layer every modern team needs',
    summary: 'Why workflow orchestration is replacing generic chat tools in GTM and support teams.',
    date: 'Sep 14, 2026',
  },
  {
    title: 'How to design safe AI agents for production',
    summary: 'A practical framework for guardrails, human approvals, and measurable outcomes.',
    date: 'Aug 29, 2026',
  },
  {
    title: 'What a real AI-powered customer experience looks like',
    summary: 'Learn the patterns behind personalization, speed, and trust in customer service automation.',
    date: 'Aug 10, 2026',
  },
];

export default function BlogPage() {
  return (
    <SiteShell>
      <main className="page-shell inner-page">
        <section className="page-hero compact">
          <div className="section-kicker blue">Insights</div>
          <h1>AI strategy and execution for growing teams.</h1>
          <p>Fresh ideas on implementing AI without sacrificing quality, trust, or business outcomes.</p>
        </section>

        <section className="blog-grid">
          {posts.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="meta-line">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link href="/blog" className="inline-link">Read article →</Link>
            </article>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
