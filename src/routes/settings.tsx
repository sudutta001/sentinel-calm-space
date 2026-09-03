import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — SENTINEL" },
      { name: "description", content: "Adjust your SENTINEL preferences, notifications, and check-in cadence." },
      { property: "og:title", content: "Settings — SENTINEL" },
      { property: "og:description", content: "Adjust your SENTINEL preferences, notifications, and check-in cadence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsRoute,
});

function SettingsRoute() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-mint text-primary shadow-soft">
            <Settings aria-hidden="true" className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald">Settings</p>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Tune your experience</h1>
          </div>
        </div>
        <p className="max-w-2xl leading-relaxed text-muted-foreground">
          Change how often SENTINEL nudges you, what you share, and how the app looks. Settings are saved to your
          account.
        </p>
        <section className="rounded-3xl border border-border bg-card p-8 shadow-soft">
          <p className="text-sm text-muted-foreground">Settings are coming soon.</p>
        </section>
      </div>
    </AppShell>
  );
}
