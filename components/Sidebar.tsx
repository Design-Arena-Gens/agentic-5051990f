"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/assessments", label: "Assessments" },
  { href: "/results", label: "Results" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/reports", label: "Reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r border-iris-gray200 bg-white" style={{ width: 280 }}>
      <div className="flex h-screen flex-col justify-between">
        <div>
          <div className="px-6 pt-8 pb-6 border-b border-iris-gray200">
            <Link href="/" className="block">
              <div className="text-xs uppercase tracking-widest text-iris-gray600 mb-2">Organization</div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium">IRIS Labs</div>
                <div className="text-iris-blue text-xs">Switch</div>
              </div>
            </Link>
          </div>

          <nav className="px-3 py-6 space-y-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className={clsx(
                  "block px-3 py-2 text-sm",
                  active ? "text-black" : "text-iris-gray600 hover:text-black"
                )}>
                  <span className="mr-3 inline-block align-middle">{active ? "?" : "?"}</span>
                  <span className="align-middle">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-6 py-6 border-t border-iris-gray200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Alex Rivera</div>
              <div className="text-xs text-iris-gray600">alex@iris.example</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-iris-gray200" />
          </div>
        </div>
      </div>
    </aside>
  );
}
