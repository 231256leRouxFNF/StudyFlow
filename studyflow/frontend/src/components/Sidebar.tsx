import { Link, useLocation } from "react-router";
import { Home, Upload, FileText, Settings, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ to, icon, label, active }: SidebarItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
        active
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar() {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    { to: "/app", icon: <Home size={20} />, label: "Dashboard" },
    { to: "/app/upload", icon: <Upload size={20} />, label: "Upload" },
    { to: "/app/documents", icon: <FileText size={20} />, label: "Documents" },
    { to: "/app/settings", icon: <Settings size={20} />, label: "Settings" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl text-sidebar-foreground">StudyFlow</h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => (
          <SidebarItem
            key={item.to}
            {...item}
            active={location.pathname === item.to}
          />
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-3">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        )}

        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center text-sidebar-accent-foreground">
            <span>S</span>
          </div>
          <div>
            <p className="text-sm text-sidebar-foreground">Student</p>
            <p className="text-xs text-muted-foreground">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
