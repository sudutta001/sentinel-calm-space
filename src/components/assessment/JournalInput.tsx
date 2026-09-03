import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function JournalInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return <div className="space-y-3"><div className="flex items-baseline justify-between gap-3"><Label htmlFor="reflection" className="text-base font-semibold text-foreground">Anything you want to remember?</Label><span className="text-xs text-muted-foreground">Optional</span></div><Textarea id="reflection" value={value} onChange={(event) => onChange(event.target.value)} placeholder="A moment, a feeling, or a little context…" maxLength={600} className="min-h-32 resize-none rounded-2xl bg-background" /><p className="text-xs text-muted-foreground">This note is for your personal history.</p></div>;
}