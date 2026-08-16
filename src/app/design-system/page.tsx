import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Heart, LockKeyhole, Sparkles } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionLabel } from "@/components/ui/section-label";
import { StatusPill } from "@/components/ui/status-pill";
import { Surface } from "@/components/ui/surface";

const colorTokens = [
  { name: "paper", token: "--paper", value: "Page background" },
  { name: "surface", token: "--surface", value: "Cards and panels" },
  { name: "navy", token: "--navy", value: "Primary brand" },
  { name: "navy-soft", token: "--navy-soft", value: "Brand supporting tone" },
  { name: "gold", token: "--gold", value: "Warm emphasis" },
  { name: "green", token: "--green", value: "Positive state" },
  { name: "purple", token: "--purple", value: "Alternate accent" },
  { name: "blue", token: "--blue", value: "Information accent" },
  { name: "line", token: "--line", value: "Borders and dividers" },
];

export default function DesignSystemPage() {
  return (
    <main className="design-system-shell">
      <header className="design-system-header">
        <div>
          <Link className="design-back-link" href="/">
            <ArrowLeft size={15} /> Back to Volit
          </Link>
          <p className="eyebrow">VOLIT UI FOUNDATION</p>
          <h1>One visual language for civic work.</h1>
          <p className="design-system-intro">
            Reuse these tokens, primitives, and layout patterns when building
            new views. This page is a reference, not a separate product area.
          </p>
        </div>
        <div className="design-system-note">
          <LockKeyhole size={17} />
          <span>Public, calm, and traceable by default.</span>
        </div>
      </header>

      <section className="design-system-section" aria-labelledby="color-tokens-heading">
        <SectionLabel as="h2" id="color-tokens-heading">COLOR TOKENS</SectionLabel>
        <div className="design-token-grid">
          {colorTokens.map((color) => (
            <div className="design-token" key={color.token}>
              <span className="design-token-swatch" style={{ background: `var(${color.token})` }} />
              <strong>{color.name}</strong>
              <code>{color.token}</code>
              <small>{color.value}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="design-system-section" aria-labelledby="type-actions-heading">
        <SectionLabel as="h2" id="type-actions-heading">TYPE AND ACTIONS</SectionLabel>
        <div className="design-system-grid design-system-grid-wide">
          <Surface className="design-type-card">
            <p className="eyebrow">SECTION EYEBROW</p>
            <h2>Decisions become clearer when the interface gets quieter.</h2>
            <p>Use the existing hierarchy for civic content, context, and action.</p>
            <div className="design-button-row">
              <Button><Sparkles size={15} />Primary action</Button>
              <Button variant="outline"><Heart size={15} />Secondary action</Button>
              <button className="text-button">Text action <ArrowRight size={14} /></button>
            </div>
          </Surface>
          <Surface tone="brand" className="design-brand-card">
            <span className="soft-label"><LockKeyhole size={14} /> TRUST SURFACE</span>
            <h2>Every important action leaves a trail.</h2>
            <p>Use the dark brand surface for orientation, principles, and high-confidence summaries.</p>
            <Button variant="secondary">Explore the ledger</Button>
          </Surface>
        </div>
      </section>

      <section className="design-system-section" aria-labelledby="primitives-heading">
        <SectionLabel as="h2" id="primitives-heading">REUSABLE PRIMITIVES</SectionLabel>
        <div className="design-system-grid">
          <Surface className="design-example-card">
            <SectionLabel as="h3" action={<span className="version-label">Updated just now</span>}>STATUS</SectionLabel>
            <div className="design-status-row">
              <StatusPill status="Current" />
              <StatusPill status="Proposed" />
              <StatusPill status="Enacted" />
              <StatusPill status="Candidate" />
            </div>
            <div className="design-avatar-row">
              <Avatar initials="RA" color="var(--purple)" size="sm" label="Rook Atlas" />
              <Avatar initials="L4" color="var(--green)" label="Lumen 42" />
              <Avatar initials="NS" color="var(--gold)" size="lg" label="North Star" />
              <span>Stable pseudonymous identity, never civil identity.</span>
            </div>
          </Surface>
          <Surface className="design-example-card">
            <SectionLabel as="h3" action={<span className="version-label">78% pledged</span>}>PROGRESS</SectionLabel>
            <h4>Homes First programme</h4>
            <p>Reusable progress treatment for funding, implementation, and measurable outcomes.</p>
            <ProgressBar value={78} label="Homes First programme funding progress" />
            <div className="design-progress-meta"><span>€968M committed</span><strong>€1.24B goal</strong></div>
          </Surface>
        </div>
      </section>

      <section className="design-system-section" aria-labelledby="radius-layout-heading">
        <SectionLabel as="h2" id="radius-layout-heading">RADIUS AND LAYOUT</SectionLabel>
        <Surface className="design-radius-card">
          <div className="design-radius-row">
            <div className="design-radius-sample design-radius-control"><code>--radius</code><small>controls</small></div>
            <div className="design-radius-sample design-radius-card-size"><code>card</code><small>cards and panels</small></div>
            <div className="design-radius-sample design-radius-hero"><code>hero</code><small>large surfaces</small></div>
            <div className="design-radius-sample design-radius-pill"><Check size={15} /><small>pills and states</small></div>
          </div>
          <p className="design-system-rule"><strong>Rule:</strong> use the existing radius and layout classes before adding a new visual value.</p>
        </Surface>
      </section>
    </main>
  );
}
