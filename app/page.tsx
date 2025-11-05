import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import RadarChart from "@/components/charts/RadarChart";
import LineChart from "@/components/charts/LineChart";

export default function Page() {
  const readinessScore = 84;

  const recent = [
    { id: "A-1042", date: "2025-10-29", playbook: "Ransomware Response", owner: "J. Patel", score: 82 },
    { id: "A-1041", date: "2025-10-15", playbook: "BEC Response", owner: "M. Chen", score: 79 },
    { id: "A-1040", date: "2025-10-01", playbook: "Phishing Triage", owner: "S. Ali", score: 88 },
    { id: "A-1039", date: "2025-09-17", playbook: "Endpoint Compromise", owner: "R. Gomez", score: 74 },
  ];

  const phaseLabels = ["Prepare", "Identify", "Contain", "Eradicate", "Recover", "Lessons"];
  const phaseValues = [78, 86, 81, 72, 88, 76];

  const trendLabels = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
  const trendValues = [72, 74, 77, 79, 80, 82, 84];

  return (
    <div className="space-y-10">
      <header className="flex items-end justify-between">
        <div>
          <div className="h2">Dashboard</div>
          <p className="p mt-2 max-w-2xl">AI-powered insights for incident response readiness. Minimal, precise, effective.</p>
        </div>
        <button className="button-primary">New Assessment</button>
      </header>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Overall Readiness">
          <div className="flex items-baseline">
            <div className="text-6xl font-medium tabular-nums">{readinessScore}</div>
            <div className="ml-2 text-iris-gray600">/ 100</div>
          </div>
          <div className="mt-4 text-xs text-iris-gray600">Updated today at 09:20</div>
        </Card>
        <Card title="Assessments This Month">
          <div className="text-4xl font-medium tabular-nums">12</div>
          <div className="mt-4 text-xs text-iris-gray600">Across 6 playbooks</div>
        </Card>
        <Card title="Average SLA Adherence">
          <div className="text-4xl font-medium tabular-nums">92%</div>
          <div className="mt-4 text-xs text-iris-gray600">Mean across last 10 runs</div>
        </Card>
        <Card title="Open Recommendations">
          <div className="text-4xl font-medium tabular-nums">18</div>
          <div className="mt-4 text-xs text-iris-gray600">5 critical ? 7 high ? 6 medium</div>
        </Card>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card title="Recent Assessment Runs" right={<button className="text-xs text-iris-blue">View all</button>}>
          <DataTable
            columns={[
              { header: "Run ID", accessor: (r: any) => r.id },
              { header: "Date", accessor: (r: any) => r.date },
              { header: "Playbook", accessor: (r: any) => r.playbook },
              { header: "Owner", accessor: (r: any) => r.owner },
              { header: "Score", accessor: (r: any) => <span className="tabular-nums">{r.score}</span>, align: "right" },
            ]}
            data={recent}
          />
        </Card>
        <Card title="Phase-wise Performance">
          <div className="h-72">
            <RadarChart labels={phaseLabels} values={phaseValues} />
          </div>
        </Card>
        <Card title="Improvement Trend (6 months)">
          <div className="h-72">
            <LineChart labels={trendLabels} values={trendValues} />
          </div>
        </Card>
      </section>
    </div>
  );
}
