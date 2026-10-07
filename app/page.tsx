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

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-mesh" />

      <header className="mx-auto max-w-7xl px-6 pb-8 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-bold text-slate-950">
              N
            </div>
            <div>
              <div className="text-lg font-semibold">NovaFlow</div>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#workflow" className="hover:text-white">Workflow</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#customers" className="hover:text-white">Customers</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:text-white md:block">
              Log in
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
              Book demo
            </button>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              AI operating system for modern teams
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Turn AI into your most productive team member.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-300">
              NovaFlow connects your tools, data, and decisions into one intelligent workflow engine so your team moves faster with less friction.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]">
                Start free trial
              </button>
              <button className="rounded-full border border-white/15 bg-slate-900/70 px-6 py-3 font-semibold text-white transition hover:border-white/25 hover:bg-slate-800/80">
                Watch preview
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> No credit card required</span>
              <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Cancel anytime</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-indigo-500/20 via-cyan-400/15 to-fuchsia-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-indigo-950/50">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                    live
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                    <div className="mb-2 text-xs uppercase tracking-[0.2em] text-cyan-200">AI command</div>
                    <div className="text-lg font-medium text-white">"Prioritize churn-risk accounts and draft outreach for sales + CS."</div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Pipeline</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm"><span className="text-slate-400">High intent</span><span className="font-medium text-emerald-400">18</span></div>
                        <div className="flex items-center justify-between text-sm"><span className="text-slate-400">At risk</span><span className="font-medium text-amber-400">9</span></div>
                        <div className="flex items-center justify-between text-sm"><span className="text-slate-400">Renewals</span><span className="font-medium text-cyan-400">24</span></div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                      <div className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Task flow</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-slate-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> CRM sync complete</div>
                        <div className="flex items-center gap-2 text-slate-200"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Email drafted</div>
                        <div className="flex items-center gap-2 text-slate-200"><span className="h-2 w-2 rounded-full bg-indigo-400" /> Slack update sent</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
                      <span>Automation score</span>
                      <span className="text-emerald-400">+31.2%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-center text-sm uppercase tracking-[0.3em] text-slate-400">Trusted by teams at</div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-lg font-semibold text-slate-300 md:grid-cols-6">
            {partners.map((partner) => (
              <div key={partner} className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-3">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-indigo-300">Why teams switch</div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">AI that works with your workflow, not around it.</h2>
          </div>
          <p className="max-w-lg text-slate-300">
            From customer ops to product planning, NovaFlow gives every team a shared intelligence layer to act faster and with more context.
          </p>
        </div>

        <div id="features" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-indigo-400/40 hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                {feature.tag}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <div className="mb-10 text-center">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">Built for speed</div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">From data to action in four steps</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 font-bold text-slate-950">
                  0{index + 1}
                </div>
                <p className="text-lg font-medium text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.25em] text-emerald-300">Performance</div>
            <h2 className="text-4xl font-bold tracking-tight text-white">Measure the work that matters.</h2>
            <p className="text-slate-300">
              Get a real-time view of conversion lift, workflow completion, team efficiency, and customer impact with dashboards built for action.
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Automations activated</span>
                  <span className="font-medium text-white">1,240</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                  <span>Operational efficiency</span>
                  <span className="font-medium text-white">+74%</span>
                </div>
                <div className="h-2.5 rounded-full bg-slate-800">
                  <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-900/50">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Revenue impact</div>
                <div className="mt-1 text-3xl font-bold text-white">$2.8M</div>
              </div>
              <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                +18.4% MoM
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[60, 72, 88].map((value, idx) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">{['Leads', 'Pipeline', 'Close'][idx]}</div>
                  <div className="mb-4 flex h-24 items-end">
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-indigo-500 to-cyan-400"
                      style={{ height: `${value}%` }}
                    />
                  </div>
                  <div className="text-2xl font-bold text-white">{value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <div className="text-sm uppercase tracking-[0.25em] text-indigo-300">Pricing</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Simple pricing for every stage.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] border p-6 ${
                plan.highlighted
                  ? 'border-indigo-400/50 bg-gradient-to-b from-indigo-600/20 to-slate-900 shadow-glow'
                  : 'border-white/10 bg-slate-900/60'
              }`}
            >
              <div className="mb-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="pb-1 text-slate-400">/month</span>}
                </div>
                <p className="mt-4 text-slate-300">{plan.description}</p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-200">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs text-emerald-300">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`mt-8 w-full rounded-full px-5 py-3 font-semibold ${plan.highlighted ? 'bg-white text-slate-900' : 'border border-white/15 bg-slate-950 text-white hover:border-white/25'}`}>
                {plan.name === 'Enterprise' ? 'Talk to sales' : 'Get started'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="customers" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <div className="text-sm uppercase tracking-[0.25em] text-cyan-300">Customers</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Teams are shipping more with less effort.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6">
              <div className="mb-4 text-3xl text-indigo-300">“</div>
              <p className="text-lg text-slate-200">{item.quote}</p>
              <div className="mt-8 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{item.author}</div>
                <div className="text-sm text-slate-400">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-12 text-center">
          <div className="text-sm uppercase tracking-[0.25em] text-indigo-300">FAQ</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Questions, answered.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <div className="text-lg font-semibold text-white">{faq.question}</div>
              <p className="mt-2 text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-indigo-500/30 bg-gradient-to-r from-indigo-600/25 via-cyan-500/15 to-slate-900 p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-indigo-200">Ready to deploy?</div>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">Build your AI operating system today.</h2>
            </div>
            <div className="flex gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200">Start free</button>
              <button className="rounded-full border border-white/20 bg-slate-950/60 px-6 py-3 font-semibold text-white transition hover:border-white/35 hover:bg-slate-900">Talk to sales</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-16 text-slate-400">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-bold text-slate-950">
              N
            </div>
            <div className="font-medium text-white">NovaFlow</div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>

          <div className="text-sm">© 2026 NovaFlow</div>
        </div>
      </footer>
    </main>
  );
}
