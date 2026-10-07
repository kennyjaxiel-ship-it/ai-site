import Link from 'next/link';
import { SiteShell } from '../components/site-shell';

const docs = [
  {
    title: 'Getting started',
    description: 'Learn how to create teams, connect data sources, and deploy your first workflow.',
  },
  {
    title: 'AI agents',
    description: 'Configure models, routing logic, approvals, memory, and tool-use patterns for each agent.',
  },
  {
    title: 'Integrations',
    description: 'Connect Slack, HubSpot, Notion, Salesforce, Stripe, and internal APIs without custom middleware.',
  },
  {
    title: 'Security',
    description: 'Review permissions, data governance, audit trails, and enterprise controls for production use.',
  },
];

const quickstart = [
  'Create an AI workspace and invite your team.',
  'Connect data sources and the tools you already use.',
  'Launch an agent with approval rules and a success metric.',
  'Monitor automation health and optimize with live analytics.',
];

export default function DocsPage() {
  return (
    <SiteShell>
      <main className="page-shell inner-page">
        <section className="page-hero compact">
          <div className="section-kicker blue">Documentation</div>
          <h1>Everything your team needs to launch faster.</h1>
          <p>Guides, architecture notes, and practical examples to help your team deploy AI workflows with confidence.</p>
        </section>

        <section className="doc-grid">
          {docs.map((doc) => (
            <article key={doc.title} className="doc-card">
              <div className="feature-tag">Guide</div>
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
              <Link href="/docs" className="inline-link">Read guide →</Link>
            </article>
          ))}
        </section>

        <section className="section-block workflow-block">
          <div className="section-header split">
            <div>
              <div className="section-kicker cyan">Quickstart</div>
              <h2>Go from blank workspace to live automation.</h2>
            </div>
          </div>

          <div className="quickstart-list">
            {quickstart.map((item, idx) => (
              <div key={item} className="quickstart-item">
                <span>{idx + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
