import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, GitBranch, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-semibold">Integrify</h1>
          <Link to="/auth">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Streamline Your
            <span className="block text-primary mt-2">Employee Onboarding</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Integrify automates HR workflows with AI-powered onboarding playbooks, 
            saving time and ensuring every new hire has a great first experience.
          </p>
          <Link to="/auth">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </section>

        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Manage Employees</h3>
                <p className="text-muted-foreground">
                  Track progress and manage your entire team from one dashboard
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <GitBranch className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Custom Workflows</h3>
                <p className="text-muted-foreground">
                  Build tailored onboarding flows for every role and department
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">Analytics & Insights</h3>
                <p className="text-muted-foreground">
                  Monitor performance and optimize your onboarding program
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 Integrify. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
