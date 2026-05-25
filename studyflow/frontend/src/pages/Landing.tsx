import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { BookOpen, FileText, Brain, Zap, Moon, Sun } from "lucide-react";
import { Card } from "../components/Card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Landing() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl text-foreground">StudyFlow</h1>
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <Link to="/sign-in">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link to="/sign-up">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl mb-6 text-foreground">
            Your AI-Powered Study Assistant
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Upload your PDFs, get instant summaries, and organize your study materials
            in one beautiful dashboard. StudyFlow makes learning more efficient.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/sign-up">
              <Button size="lg">Start Studying Free</Button>
            </Link>
            <Button variant="outline" size="lg">Watch Demo</Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4 text-secondary">
              <FileText size={24} />
            </div>
            <h3 className="mb-2">Upload PDFs</h3>
            <p className="text-sm text-muted-foreground">
              Drag and drop your study materials instantly
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4 text-secondary">
              <Brain size={24} />
            </div>
            <h3 className="mb-2">AI Summaries</h3>
            <p className="text-sm text-muted-foreground">
              Get smart summaries of your documents
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4 text-secondary">
              <BookOpen size={24} />
            </div>
            <h3 className="mb-2">Organize Notes</h3>
            <p className="text-sm text-muted-foreground">
              Keep all your study materials in one place
            </p>
          </Card>

          <Card className="text-center">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4 text-secondary">
              <Zap size={24} />
            </div>
            <h3 className="mb-2">Study Faster</h3>
            <p className="text-sm text-muted-foreground">
              Save hours with intelligent study tools
            </p>
          </Card>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <Card padding="lg" className="text-center bg-primary text-primary-foreground border-0">
          <h2 className="text-3xl mb-4">Ready to transform your study workflow?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of students studying smarter with StudyFlow
          </p>
          <Link to="/sign-up">
            <Button variant="secondary" size="lg">
              Get Started Now
            </Button>
          </Link>
        </Card>
      </section>

      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 StudyFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
