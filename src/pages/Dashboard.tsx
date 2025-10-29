import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, AlertCircle, Clock, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Active Hires",
    value: "24",
    change: "+12%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Overdue Tasks",
    value: "8",
    change: "-3 from yesterday",
    icon: AlertCircle,
    trend: "down"
  },
  {
    title: "Avg. Completion Time",
    value: "4.2 days",
    change: "0.3 days faster",
    icon: Clock,
    trend: "up"
  },
  {
    title: "Completion Rate",
    value: "94%",
    change: "+2%",
    icon: TrendingUp,
    trend: "up"
  }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor onboarding progress and team metrics
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {metric.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Sarah Chen", action: "completed onboarding", time: "2 hours ago" },
                  { name: "Mike Rodriguez", action: "started Day 1 tasks", time: "4 hours ago" },
                  { name: "Emma Watson", action: "submitted documents", time: "5 hours ago" },
                  { name: "James Smith", action: "scheduled first meeting", time: "1 day ago" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      {activity.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.name}</p>
                      <p className="text-muted-foreground">{activity.action}</p>
                    </div>
                    <span className="text-muted-foreground text-xs">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "First Day Review", employee: "Sarah Chen", date: "Today" },
                  { title: "Week 1 Check-in", employee: "Mike Rodriguez", date: "Tomorrow" },
                  { title: "30-Day Review", employee: "Emma Watson", date: "In 3 days" },
                  { title: "Equipment Setup", employee: "James Smith", date: "In 5 days" }
                ].map((milestone, i) => (
                  <div key={i} className="flex items-start justify-between text-sm">
                    <div>
                      <p className="font-medium">{milestone.title}</p>
                      <p className="text-muted-foreground">{milestone.employee}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{milestone.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
