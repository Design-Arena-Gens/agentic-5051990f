import Card from "@/components/Card";
import DataTable from "@/components/DataTable";
import Link from "next/link";

const assessments = [
  { id: "A-1042", date: "2025-10-29", playbook: "Ransomware Response", status: "Complete", owner: "J. Patel" },
  { id: "A-1041", date: "2025-10-15", playbook: "BEC Response", status: "Complete", owner: "M. Chen" },
  { id: "A-1040", date: "2025-10-01", playbook: "Phishing Triage", status: "In Progress", owner: "S. Ali" },
];

export default function Page() {
  return (
    <div className="space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <div className="h2">Assessments</div>
          <p className="p mt-2">Schedule and execute assessments across your playbooks.</p>
        </div>
        <Link href="/assessments/execute" className="button-primary">Run Assessment</Link>
      </header>

      <Card title="Recent">
        <DataTable
          columns={[
            { header: "Run ID", accessor: (r: any) => r.id },
            { header: "Date", accessor: (r: any) => r.date },
            { header: "Playbook", accessor: (r: any) => r.playbook },
            { header: "Owner", accessor: (r: any) => r.owner },
            { header: "Status", accessor: (r: any) => r.status, align: "right" },
          ]}
          data={assessments}
        />
      </Card>
    </div>
  );
}
