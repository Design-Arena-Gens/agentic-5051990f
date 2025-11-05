import Card from "@/components/Card";
import DataTable from "@/components/DataTable";

const playbooks = [
  { name: "Ransomware Response", version: "v2.3", uploaded: "2025-10-10", status: "complete" },
  { name: "BEC Response", version: "v1.9", uploaded: "2025-09-29", status: "partial" },
  { name: "Phishing Triage", version: "v3.1", uploaded: "2025-08-15", status: "incomplete" },
  { name: "Endpoint Compromise", version: "v1.4", uploaded: "2025-07-02", status: "complete" },
];

function Status({ status }: { status: "complete" | "partial" | "incomplete" }) {
  const symbol = status === "complete" ? "?" : status === "partial" ? "?" : "?";
  return <span className="text-iris-gray800">{symbol}</span>;
}

export default function Page() {
  return (
    <div className="space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <div className="h2">Playbooks</div>
          <p className="p mt-2">Manage your incident response playbooks with clear versioning.</p>
        </div>
        <button className="button-primary">Upload Playbook</button>
      </header>

      <Card title="Documents">
        <DataTable
          columns={[
            { header: "Name", accessor: (r: any) => r.name },
            { header: "Version", accessor: (r: any) => r.version },
            { header: "Uploaded", accessor: (r: any) => r.uploaded },
            { header: "Status", accessor: (r: any) => <Status status={r.status} />, align: "center", width: "80px" },
          ]}
          data={playbooks}
        />
      </Card>
    </div>
  );
}
