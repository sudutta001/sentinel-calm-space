import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { CheckInCard } from "@/components/checkin/CheckInCard";

export const Route = createFileRoute("/checkin")({
  head: () => ({ meta: [
    { title: "Weekly check-in — SENTINEL" },
    { name: "description", content: "Take a short, voluntary moment to reflect on your week with SENTINEL." },
    { property: "og:title", content: "Weekly check-in — SENTINEL" },
    { property: "og:description", content: "Take a short, voluntary moment to reflect on your week with SENTINEL." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CheckInRoute,
});

function CheckInRoute() {
  return <AppShell><div className="mb-8 space-y-2"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald">Weekly check-in</p><h1 className="text-3xl font-bold text-foreground sm:text-4xl">How has your week felt?</h1><p className="max-w-xl leading-relaxed text-muted-foreground">There are no right answers. Choose the response that feels closest, and skip anything you don’t want to add.</p></div><CheckInCard /></AppShell>;
}