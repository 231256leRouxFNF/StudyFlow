import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-background">
        <Outlet />
      </main>
    </div>
  );
}
