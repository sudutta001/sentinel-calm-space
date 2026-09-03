import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, BookOpen, CalendarDays, MessageCircleHeart } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/button";
import { WellbeingTrend } from "@/components/wellbeing/WellbeingTrend";
import { describePattern } from "@/lib/sentinel/mock-service";
import { wellbeingQuery } from "@/lib/sentinel/queries";

export const Route = createFileRoute("/wellbeing")({
  loader: ({ context }) => context.queryClient.ensureQueryData(wellbeingQuery),
  head: () => ({ meta: [
    { title: "My wellbeing history — SENTINEL" },
    { name: "description", content: "Explore your self-reported wellbeing patterns over time, privately." },
    { property: "og:title", content: "My wellbeing history — SENTINEL" },
    { property: "og:description", content: "Explore your self-reported wellbeing patterns over time, privately." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: WellbeingRoute,
});

function WellbeingRoute() {
  const { data } = useSuspenseQuery(wellbeingQuery);
  const latest = data[data.length - 1];
  return <AppShell><div className="space-y-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald">My wellbeing</p><h1 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Your story over time.</h1><p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">A view of what you’ve chosen to record — not a judgement on how you’re doing.</p></div><Button asChild variant="outline"><a href="/dashboard"><ArrowLeft aria-hidden="true" />Back to dashboard</a></Button></div><WellbeingTrend data={data} /><div className="grid gap-4 md:grid-cols-2"><Insight icon={MessageCircleHeart} title="A gentle read" body={describePattern(data)} /><Insight icon={BookOpen} title="Your latest week" body={`You checked in this week with a steadiness signal of ${latest?.balance ?? "—"}. You can add context any time.`} /></div><div className="flex items-center gap-2 text-xs text-muted-foreground"><CalendarDays aria-hidden="true" className="size-4 text-emerald" />Eight synthetic weeks shown in this demo build</div></div></AppShell>;
}

function Insight({ icon: Icon, title, body }: { icon: typeof MessageCircleHeart; title: string; body: string }) {
  return <section className="rounded-3xl border border-border bg-card p-6 shadow-soft"><span className="flex size-10 items-center justify-center rounded-2xl bg-mint text-primary"><Icon aria-hidden="true" className="size-5" /></span><h2 className="mt-5 font-semibold text-foreground">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></section>;
}