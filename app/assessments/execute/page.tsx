"use client";
import { useState } from "react";
import Card from "@/components/Card";

const steps = [
  { key: "scope", label: "Define Scope" },
  { key: "inputs", label: "Provide Inputs" },
  { key: "run", label: "Execute" },
  { key: "review", label: "Review" },
];

export default function Page() {
  const [active, setActive] = useState(0);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");

  function start() {
    setStatus("running");
    setTimeout(() => {
      setStatus("done");
      setActive(3);
    }, 1600);
  }

  return (
    <div className="space-y-8">
      <header className="flex items-end justify-between">
        <div>
          <div className="h2">Execute Assessment</div>
          <p className="p mt-2">A minimal, guided interface for running assessments.</p>
        </div>
      </header>

      <Card>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <ol className="space-y-3">
              {steps.map((s, i) => (
                <li key={s.key}>
                  <button onClick={() => setActive(i)} className={`flex w-full items-center justify-between px-3 py-2 border ${i === active ? "border-black" : "border-iris-gray200"}`}>
                    <span className="text-sm">{s.label}</span>
                    <span className="text-xs text-iris-gray600">{i + 1}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <div className="col-span-12 lg:col-span-9">
            {active === 0 && (
              <div className="space-y-6">
                <div>
                  <div className="h3">Scope</div>
                  <p className="p mt-2">Choose playbook and parameters for this run.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-iris-gray600 mb-2">Playbook</label>
                    <select className="w-full border border-iris-gray300 px-3 py-2 text-sm bg-white">
                      <option>Ransomware Response</option>
                      <option>BEC Response</option>
                      <option>Phishing Triage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-iris-gray600 mb-2">Mode</label>
                    <select className="w-full border border-iris-gray300 px-3 py-2 text-sm bg-white">
                      <option>Quick</option>
                      <option>Comprehensive</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button className="button-primary" onClick={() => setActive(1)}>Continue</button>
                </div>
              </div>
            )}

            {active === 1 && (
              <div className="space-y-6">
                <div className="h3">Inputs</div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-iris-gray600 mb-2">Notes</label>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border border-iris-gray300 px-3 py-2 text-sm h-32" placeholder="Relevant context..." />
                </div>
                <div>
                  <button className="button-primary" onClick={() => setActive(2)}>Continue</button>
                </div>
              </div>
            )}

            {active === 2 && (
              <div className="space-y-6">
                <div className="h3">Execute</div>
                <p className="p">Run the assessment. This may take a minute.</p>
                <div>
                  <button className="button-primary" onClick={start} disabled={status !== "idle"}>{status === "running" ? "Running..." : "Start Run"}</button>
                </div>
              </div>
            )}

            {active === 3 && (
              <div className="space-y-6">
                <div className="h3">Review</div>
                <p className="p">Assessment complete. Summary will appear here.</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border border-iris-gray200 p-4">
                    <div className="text-xs uppercase tracking-wider text-iris-gray600">Score</div>
                    <div className="text-3xl font-medium mt-2">83</div>
                  </div>
                  <div className="border border-iris-gray200 p-4">
                    <div className="text-xs uppercase tracking-wider text-iris-gray600">Strengths</div>
                    <div className="mt-2 text-sm">Containment ? Recovery</div>
                  </div>
                  <div className="border border-iris-gray200 p-4">
                    <div className="text-xs uppercase tracking-wider text-iris-gray600">Gaps</div>
                    <div className="mt-2 text-sm">Preparation ? Eradication</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
