import { SiteShell } from '../../components/site-shell';

const jobs = [
  { name: 'Customer support triage', status: 'Running', progress: 82 },
  { name: 'Pipeline opportunity scoring', status: 'Queued', progress: 44 },
  { name: 'Churn risk outreach', status: 'Live', progress: 96 },
];

const team = [
  { label: 'Resolved tickets', value: '1,248' },
  { label: 'Saved time', value: '482 hrs' },
  { label: 'Conversion lift', value: '+18.4%' },
];

export default function DashboardPage() {
  return (
    <SiteShell>
      <main className="page-shell inner-page dashboard-page">
        <section className="page-hero compact">
          <div className="section-kicker blue">Workspace</div>
          <h1>AI operations dashboard</h1>
          <p>Track automations, performance, and human approvals across your org.</p>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-panel large">
            <div className="head-row">
              <h3>Automation overview</h3>
              <span className="gain-pill">+12.6% this week</span>
            </div>

            <div className="chart-lines">
              <div className="line one" />
              <div className="line two" />
            </div>
          </div>

          <div className="dashboard-panel">
            <h3>Team impact</h3>
            <div className="stat-stack">
              {team.map((item) => (
                <div key={item.label} className="mini-stat">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-panel full-width">
            <h3>AI workflows</h3>
            <div className="job-list">
              {jobs.map((job) => (
                <div key={job.name} className="job-row">
                  <div>
                    <strong>{job.name}</strong>
                    <small>{job.status}</small>
                  </div>
                  <div className="job-progress">
                    <div style={{ width: `${job.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
