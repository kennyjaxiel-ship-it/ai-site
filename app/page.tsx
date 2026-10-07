import Link from 'next/link';
import { SiteShell } from '../components/site-shell';

const stats = [
  { value: '4.8x', label: 'faster execution' },
  { value: '92%', label: 'workflow automation' },
  { value: '24/7', label: 'AI coverage' },
  { value: '1.2M+', label: 'tasks completed' },
];

const partners = ['OpenAI', 'Notion', 'Stripe', 'Slack', 'HubSpot', 'Shopify'];

const features = [
  {
    title: 'Autonomous agents',
    description: 'Deploy AI agents that research, plan, and act across sales, support, operations, and product.',
    tag: 'Agentic workflows',
  },
  {
    title: 'Smart knowledge sync',
    description: 'Connect docs, tickets, CRM data, and team notes to keep every response grounded in real context.',
    tag: 'Context engine',
  },
  {
    title: 'Live execution engine',
    description: 'Trigger actions in your tools instantly with confidence checks, approvals, and safe rollback logic.',
    tag: 'Safe automation',
  },
  {
    title: 'Predictive analytics',
    description: 'Surface insights from customer behavior, workflow bottlenecks, and revenue opportunities automatically.',
    tag: 'Insights',
  },
  {
    title: 'Team collaboration',
    description: 'Build shared copilots, review prompts, and keep cross-functional teams aligned in one workspace.',
    tag: 'Collaboration',
  },
  {
    title: 'Enterprise security',
    description: 'SOC 2-ready controls, role-based access, model governance, and audit trails for every interaction.',
    tag: 'Governance',
  },
];

const workflowSteps = [
  'Connect your tools and datasets',
  'Define the workflows and guardrails',
  'Deploy AI agents with approvals',
  'Track wins with live performance dashboards',
];

const pricing = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For small teams launching AI workflows',
    features: ['2 AI agents', 'Unlimited chat', '5 integrations', 'Basic analytics'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'For scaling teams automating real operations',
    features: ['Unlimited agents', 'Advanced automation', 'Custom guardrails', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For security-conscious organizations',
    features: ['Private deployment', 'SSO & SCIM', 'Custom model tuning', 'Dedicated success team'],
    highlighted: false,
  },
];

const testimonials = [
  {
    quote:
      'NovaFlow helped us cut support resolution time by 44% while keeping the customer experience personal and trustworthy.',
    author: 'Maya Chen',
    role: 'VP, Customer Experience @ Northstar',
  },
  {
    quote:
      'We replaced three fragmented systems with one AI operating layer. The team adopted it in days, not months.',
    author: 'Daniel Ortiz',
    role: 'COO @ Relay Labs',
  },
  {
    quote:
      'The platform gave our GTM team a real-time plan, not just a chatbot. It turns data into decisions.',
    author: 'Aisha Patel',
    role: 'Revenue Lead @ Harrow',
  },
];

const faqs = [
  {
    question: 'How quickly can we launch?',
    answer: 'Most teams go live in under two weeks with guided onboarding, prebuilt workflows, and model-safe templates.',
  },
  {
    question: 'Does it work with our existing stack?',
    answer: 'Yes. NovaFlow connects to the tools your team already uses, including CRM, support, messaging, documentation, and data warehouses.',
  },
  {
    question: 'Is the AI secure and compliant?',
    answer: 'We support enterprise controls like RBAC, audit trails, access policies, and private deployment options.',
  },
  {
    question: 'Can we customize behaviors?',
    answer: 'Absolutely. You can tune prompts, approval gates, routing logic, and agent tasks to match your operational needs.',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main className="page-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="pulse-dot" />
              AI operating system for modern teams
            </div>

            <h1>Turn AI into your most productive team member.</h1>

            <p className="lead">
              NovaFlow connects your tools, data, and decisions into one intelligent workflow engine so your team moves faster with less friction.
            </p>

            <div className="cta-row">
              <Link href="/pricing" className="primary-button">
                Start free trial
              </Link>
              <Link href="/docs" className="secondary-button">
                Explore docs
              </Link>
            </div>

            <div className="meta-row">
              <span>• No credit card required</span>
              <span>• Cancel anytime</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="dashboard-card">
              <div className="browser-bar">
                <span />
                <span />
                <span />
                <div className="live-pill">live</div>
              </div>

              <div className="command-box">
                <div className="label">AI command</div>
                <div className="command-text">
                  “Prioritize churn-risk accounts and draft outreach for sales + CS.”
                </div>
              </div>

              <div className="mini-grid">
                <div className="panel">
                  <div className="label">Pipeline</div>
                  <div className="metric-row"><span>High intent</span><strong>18</strong></div>
                  <div className="metric-row"><span>At risk</span><strong>9</strong></div>
                  <div className="metric-row"><span>Renewals</span><strong>24</strong></div>
                </div>

                <div className="panel">
                  <div className="label">Task flow</div>
                  <div className="flow-list">
                    <span><i className="green" />CRM sync complete</span>
                    <span><i className="blue" />Email drafted</span>
                    <span><i className="purple" />Slack update sent</span>
                  </div>
                </div>
              </div>

              <div className="panel score-panel">
                <div className="score-head">
                  <span>Automation score</span>
                  <strong>+31.2%</strong>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-band">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="logo-band">
          <div className="section-kicker">Trusted by teams at</div>
          <div className="logo-grid">
            {partners.map((partner) => (
              <div key={partner}>{partner}</div>
            ))}
          </div>
        </section>

        <section className="section-block">
          <div className="section-header split">
            <div>
              <div className="section-kicker blue">Why teams switch</div>
              <h2>AI that works with your workflow, not around it.</h2>
            </div>
            <p>
              From customer ops to product planning, NovaFlow gives every team a shared intelligence layer to act faster and with more context.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-tag">{feature.tag}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block workflow-block">
          <div className="section-header center">
            <div className="section-kicker cyan">Built for speed</div>
            <h2>From data to action in four steps</h2>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((step, index) => (
              <div key={step} className="workflow-card">
                <div className="step-badge">0{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block analytics-block">
          <div className="analytics-copy">
            <div className="section-kicker green">Performance</div>
            <h2>Measure the work that matters.</h2>
            <p>
              Get a real-time view of conversion lift, workflow completion, team efficiency, and customer impact with dashboards built for action.
            </p>
            <div className="progress-stack">
              <div className="progress-card">
                <div className="progress-row">
                  <span>Automations activated</span>
                  <strong>1,240</strong>
                </div>
                <div className="bar"><div style={{ width: '86%' }} /></div>
              </div>
              <div className="progress-card">
                <div className="progress-row">
                  <span>Operational efficiency</span>
                  <strong>+74%</strong>
                </div>
                <div className="bar"><div style={{ width: '74%' }} /></div>
              </div>
            </div>
          </div>

          <div className="chart-panel">
            <div className="chart-head">
              <div>
                <span className="tiny-label">Revenue impact</span>
                <h3>$2.8M</h3>
              </div>
              <div className="gain-pill">+18.4% MoM</div>
            </div>

            <div className="chart-grid">
              {[60, 72, 88].map((value, idx) => (
                <div key={value} className="chart-item">
                  <div className="tiny-label">{['Leads', 'Pipeline', 'Close'][idx]}</div>
                  <div className="bar-column-wrap">
                    <div className="bar-column" style={{ height: `${value}%` }} />
                  </div>
                  <strong>{value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block pricing-block">
          <div className="section-header center">
            <div className="section-kicker blue">Pricing</div>
            <h2>Simple pricing for every stage.</h2>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.highlighted ? 'featured' : ''}`}>
                <div className="plan-top">
                  <h3>{plan.name}</h3>
                  {plan.highlighted && <span className="popular-tag">Most popular</span>}
                </div>

                <div className="price-line">
                  <span>{plan.price}</span>
                  {plan.price !== 'Custom' && <small>/month</small>}
                </div>
                <p>{plan.description}</p>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}><span>✓</span>{feature}</li>
                  ))}
                </ul>

                <Link href="/pricing" className={`plan-button ${plan.highlighted ? 'light' : ''}`}>
                  {plan.name === 'Enterprise' ? 'Talk to sales' : 'Get started'}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block customers-block">
          <div className="section-header center">
            <div className="section-kicker cyan">Customers</div>
            <h2>Teams are shipping more with less effort.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.author} className="testimonial-card">
                <div className="quote-mark">“</div>
                <p>{item.quote}</p>
                <div className="author-box">
                  <div>{item.author}</div>
                  <small>{item.role}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block faq-block">
          <div className="section-header center">
            <div className="section-kicker blue">FAQ</div>
            <h2>Questions, answered.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-panel">
          <div>
            <div className="section-kicker">Ready to deploy?</div>
            <h2>Build your AI operating system today.</h2>
          </div>
          <div className="cta-actions">
            <Link href="/pricing" className="primary-button">Start free</Link>
            <Link href="/docs" className="secondary-button">Talk to sales</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
