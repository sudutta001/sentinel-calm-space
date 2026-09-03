import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { PrivacyBadge } from "@/components/privacy/PrivacyBadge";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Your wellbeing. Your privacy. Your choice.
          </p>
          <PrivacyBadge tone="demo">Demo build · synthetic data</PrivacyBadge>
        </div>

        <nav aria-label="Product" className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">SENTINEL</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/dashboard" className="hover:text-foreground">
                Personal dashboard
              </Link>
            </li>
            <li>
              <Link to="/checkin" className="hover:text-foreground">
                Weekly check-in
              </Link>
            </li>
            <li>
              <Link to="/wellbeing" className="hover:text-foreground">
                My wellbeing
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Trust" className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">Trust</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-foreground">
                Privacy Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" hash="data-usage" className="hover:text-foreground">
                Data usage
              </Link>
            </li>
            <li>
              <Link to="/privacy" hash="support" className="hover:text-foreground">
                Support
              </Link>
            </li>
            <li>
              <Link to="/" hash="about" className="hover:text-foreground">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
        SENTINEL · Stress Evaluation &amp; Notification Through Integrated Longitudinal Analysis ·
        Welfare, not surveillance.
      </div>
    </footer>
  );
}
