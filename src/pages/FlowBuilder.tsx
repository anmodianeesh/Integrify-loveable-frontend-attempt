import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, GripVertical } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const tasks = [
  { id: 1, title: "Complete profile setup", type: "form", day: 1 },
  { id: 2, title: "Watch welcome video", type: "video", day: 1 },
  { id: 3, title: "Review company handbook", type: "document", day: 1 },
  { id: 4, title: "Meet with manager", type: "meeting", day: 2 },
  { id: 5, title: "Complete security training", type: "quiz", day: 3 },
];

export default function FlowBuilder() {
  const { id } = useParams();

  return (
    <DashboardLayout>
      <div className="p-8 space-y-6">
        <Link to="/dashboard/flows">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Flows
          </Button>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <Input
              defaultValue="Engineering Onboarding"
              className="text-3xl font-bold border-none p-0 h-auto focus-visible:ring-0"
            />
            <p className="text-muted-foreground mt-1">
              24 tasks • 2 weeks duration
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Preview</Button>
            <Button>Save Changes</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-3">
            {tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />
                    <div className="flex-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">Day {task.day}</p>
                    </div>
                    <Badge variant="secondary">{task.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Flow Settings</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge>Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Tasks</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">2 weeks</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
