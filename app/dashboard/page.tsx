import Link from 'next/link';
import { SiteShell } from '../../components/site-shell';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Great for small teams getting their first AI workflows live.',
    features: ['2 AI agents', 'Unlimited chat', '5 integrations', 'Basic analytics'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$99',
    description: 'For scaling teams automating operations across departments.',
    features: ['Unlimited agents', 'Advanced automation', 'Custom guardrails', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Private deployment and tailored controls for larger organizations.',
    features: ['Private deployment', 'SSO & SCIM', 'Custom model tuning', 'Dedicated success team'],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <main className="page-shell inner-page">
        <section className="page-hero compact">
          <div className="section-kicker blue">Pricing</div>
          <h1>Flexible plans built for teams at every stage.</h1>
          <p>Choose a plan that fits your team today and scale as your AI operations expand.</p>
        </section>

        <section className="pricing-grid full-width">
          {plans.map((plan) => (
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
        </section>
      </main>
    </SiteShell>
  );
}
