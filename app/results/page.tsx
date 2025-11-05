import Card from "@/components/Card";

export default function Page() {
  const items = [
    { id: "R-778", playbook: "Ransomware Response", date: "2025-10-29", score: 82 },
    { id: "R-777", playbook: "BEC Response", date: "2025-10-15", score: 79 },
  ];
  return (
    <div className="space-y-8">
      <header>
        <div className="h2">Results</div>
        <p className="p mt-2">Consolidated outcomes of assessment runs.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((it) => (
          <Card key={it.id} title={it.playbook}>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-sm text-iris-gray600">{it.id}</div>
                <div className="text-sm mt-1">{it.date}</div>
              </div>
              <div className="text-4xl font-medium">{it.score}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
