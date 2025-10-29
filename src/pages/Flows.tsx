import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const flows = [
  { id: 1, name: "Engineering Onboarding", tasks: 24, duration: "2 weeks", status: "active", users: 12 },
  { id: 2, name: "Sales Rep Onboarding", tasks: 18, duration: "10 days", status: "active", users: 8 },
  { id: 3, name: "Manager Onboarding", tasks: 32, duration: "3 weeks", status: "active", users: 5 },
  { id: 4, name: "Intern Program", tasks: 15, duration: "1 week", status: "template", users: 0 },
];

export default function Flows() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Onboarding Flows</h1>
            <p className="text-muted-foreground mt-1">
              Create and manage onboarding playbooks
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Flow
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {flows.map((flow) => (
            <Link key={flow.id} to={`/dashboard/flows/${flow.id}/edit`}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{flow.name}</CardTitle>
                    <Badge variant={flow.status === "active" ? "default" : "secondary"}>
                      {flow.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tasks</span>
                      <span className="font-medium">{flow.tasks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{flow.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Users</span>
                      <span className="font-medium">{flow.users}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
