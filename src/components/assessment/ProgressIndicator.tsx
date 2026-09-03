import { Progress } from "@/components/ui/progress";

export function ProgressIndicator({ current, total }: { current: number; total: number }) {
  return <div className="space-y-2"><div className="flex justify-between text-xs font-medium text-muted-foreground"><span>Your check-in</span><span>{current} of {total}</span></div><Progress value={(current / total) * 100} aria-label={`${current} of ${total} questions complete`} /></div>;
}