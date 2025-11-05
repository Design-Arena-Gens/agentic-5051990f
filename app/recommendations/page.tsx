import Card from "@/components/Card";

const recs = [
  { severity: "Critical", text: "Automate credential revocation workflow within 24h of detection." },
  { severity: "High", text: "Add tabletop exercise for cloud incident triage quarterly." },
  { severity: "Medium", text: "Standardize evidence collection checklist across teams." },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <header>
        <div className="h2">Recommendations</div>
        <p className="p mt-2">Prioritized, actionable improvements to raise readiness.</p>
      </header>

      <Card title="Open Items">
        <ul className="divide-y divide-iris-gray200">
          {recs.map((r, idx) => (
            <li key={idx} className="py-4 flex items-start justify-between">
              <div className="max-w-3xl text-sm">{r.text}</div>
              <div className="text-xs uppercase tracking-wider text-iris-gray600">{r.severity}</div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
