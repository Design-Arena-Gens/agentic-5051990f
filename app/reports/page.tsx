import Card from "@/components/Card";

export default function Page() {
  return (
    <div className="space-y-8">
      <header>
        <div className="h2">Reports</div>
        <p className="p mt-2">Export clean, professional reports for stakeholders.</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {["Executive Summary", "Quarterly Trends", "Control Coverage"].map((name) => (
          <Card key={name} title={name}>
            <div className="text-sm text-iris-gray700">Generate as PDF</div>
            <div className="mt-4">
              <button className="button-primary">Generate</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
