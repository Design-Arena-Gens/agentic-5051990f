import { ReactNode } from "react";

export default function Card({ title, children, right }: { title?: string; children: ReactNode; right?: ReactNode }) {
  return (
    <section className="card">
      {title && (
        <header className="flex items-center justify-between border-b border-iris-gray200 px-5 py-4">
          <h3 className="text-xs uppercase tracking-wider text-iris-gray600">{title}</h3>
          {right}
        </header>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}
