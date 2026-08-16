"use client";

import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  ExternalLink,
  Flag,
  Gavel,
  GraduationCap,
  HandCoins,
  Heart,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  ListFilter,
  LockKeyhole,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Network,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  Trophy,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionLabel } from "@/components/ui/section-label";
import { StatusPill } from "@/components/ui/status-pill";
import { Surface } from "@/components/ui/surface";
import { cn } from "@/lib/utils";

type ViewId =
  | "overview"
  | "problems"
  | "projects"
  | "elections"
  | "people"
  | "learning"
  | "notifications"
  | "moderation";
type ItemType = "problem" | "project";
type Status = "Current" | "Proposed" | "Candidate" | "Enacted" | "In implementation";

type Problem = {
  id: string;
  title: string;
  summary: string;
  domain: string;
  scope: string;
  priority: number;
  trend: string;
  metric: string;
  metricValue: string;
  metricChange: string;
  color: string;
};

type Project = {
  id: string;
  title: string;
  summary: string;
  domain: string;
  type: "Legislative" | "Executive" | "Institutional";
  scope: string;
  status: Status;
  support: number;
  oppose: number;
  budget: string;
  pledged: number;
  threshold: string;
  days: string;
  color: string;
};

const problems: Problem[] = [
  {
    id: "housing",
    title: "Housing people can afford",
    summary: "Secure, energy-efficient homes are out of reach for too many households.",
    domain: "Housing & communities",
    scope: "Country",
    priority: 84,
    trend: "+12 this month",
    metric: "Households spending > 40% on housing",
    metricValue: "18.4%",
    metricChange: "−1.2% since January",
    color: "#e9b949",
  },
  {
    id: "mental-health",
    title: "Accessible mental healthcare",
    summary: "People wait too long for support that should be available when they need it.",
    domain: "Health",
    scope: "Country",
    priority: 78,
    trend: "+8 this month",
    metric: "Median wait for first appointment",
    metricValue: "21 days",
    metricChange: "−4 days since January",
    color: "#8fd5c3",
  },
  {
    id: "nature",
    title: "Restoring living nature",
    summary: "Our land and waterways need a measurable path back to ecological health.",
    domain: "Environment",
    scope: "Country",
    priority: 72,
    trend: "+5 this month",
    metric: "Healthy habitat coverage",
    metricValue: "36.8%",
    metricChange: "+2.1% since 2022",
    color: "#a4c879",
  },
  {
    id: "mobility",
    title: "Everyday mobility without a car",
    summary: "A reliable public transport network gives people freedom and reduces emissions.",
    domain: "Transport",
    scope: "Harju County",
    priority: 65,
    trend: "+3 this month",
    metric: "Residents within 15 min of transit",
    metricValue: "67.2%",
    metricChange: "+3.5% since 2023",
    color: "#82b6e8",
  },
];

const projects: Project[] = [
  {
    id: "homes-first",
    title: "Homes First: 12,000 affordable homes",
    summary: "A public land and modular construction programme to create affordable, low-energy homes.",
    domain: "Housing & communities",
    type: "Executive",
    scope: "Country",
    status: "Proposed",
    support: 51.4,
    oppose: 42.1,
    budget: "€1.24B",
    pledged: 78,
    threshold: "Needs +0.1% net support",
    days: "8 days left to vote",
    color: "#e9b949",
  },
  {
    id: "care-guarantee",
    title: "The Mental Health Care Guarantee",
    summary: "Guarantee a first mental health appointment within 14 days for every resident.",
    domain: "Health",
    type: "Legislative",
    scope: "Country",
    status: "Proposed",
    support: 49.2,
    oppose: 47.8,
    budget: "€186M / year",
    pledged: 64,
    threshold: "Needs +0.1% net support",
    days: "12 days left to vote",
    color: "#8fd5c3",
  },
  {
    id: "peatlands",
    title: "Living peatlands restoration fund",
    summary: "Restore 25,000 hectares of peatland and create a long-term nature stewardship fund.",
    domain: "Environment",
    type: "Institutional",
    scope: "Country",
    status: "Enacted",
    support: 63.8,
    oppose: 26.2,
    budget: "€42M / year",
    pledged: 100,
    threshold: "Enacted 14 May",
    days: "In implementation",
    color: "#a4c879",
  },
  {
    id: "bus-network",
    title: "Harju all-day bus network",
    summary: "Increase frequency on the most-used routes and connect rural communities after 22:00.",
    domain: "Transport",
    type: "Executive",
    scope: "Harju County",
    status: "Candidate",
    support: 0,
    oppose: 0,
    budget: "€9.8M / year",
    pledged: 34,
    threshold: "Gathering approvals",
    days: "Put to a vote next",
    color: "#82b6e8",
  },
];

const people = [
  { id: "lumen-42", name: "Lumen 42", initials: "L4", role: "Health & wellbeing", score: 86, followers: "1,248", color: "#8fd5c3" },
  { id: "north-star", name: "North Star", initials: "NS", role: "Climate & energy", score: 91, followers: "2,904", color: "#a4c879" },
  { id: "quiet-civic", name: "Quiet Civic", initials: "QC", role: "Housing & communities", score: 78, followers: "846", color: "#e9b949" },
];

const elections = [
  { id: "digital-rights", title: "Digital Rights Ombud", type: "Single winner", status: "Voting open", date: "Closes 28 August", candidates: 6, color: "#a99be8" },
  { id: "climate-council", title: "International Climate Council", type: "Multi-winner · 3 seats", status: "Nominations open", date: "Nominate by 2 September", candidates: 14, color: "#a4c879" },
  { id: "youth-assembly", title: "Youth Assembly delegates", type: "Multi-winner · 12 seats", status: "Results published", date: "Completed 11 June", candidates: 32, color: "#82b6e8" },
];

const navItems: { id: ViewId; label: string; icon: LucideIcon; count?: number }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "problems", label: "Problems", icon: Compass },
  { id: "projects", label: "Projects", icon: Lightbulb, count: 12 },
  { id: "elections", label: "Elections", icon: Trophy },
  { id: "people", label: "People", icon: UsersRound },
  { id: "learning", label: "Learn", icon: BookOpen },
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
}

export default function VolitApp() {
  const [activeView, setActiveView] = useState<ViewId>("overview");
  const [selectedItem, setSelectedItem] = useState<{ type: ItemType; id: string } | null>(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [createType, setCreateType] = useState<ItemType>("problem");
  const [toast, setToast] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [voted, setVoted] = useState<Record<string, "for" | "against">>({});
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [priority, setPriority] = useState<Record<string, number>>({ mobility: 62 });
  const [delegated, setDelegated] = useState<string | null>("lumen-42");
  const [dismissed, setDismissed] = useState<string[]>([]);
  const [electionVoted, setElectionVoted] = useState(false);
  const [moderated, setModerated] = useState<string[]>([]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 3200);
  };

  const openItem = (type: ItemType, id: string) => {
    setSelectedItem({ type, id });
    setMobileNav(false);
  };

  const goTo = (view: ViewId) => {
    setActiveView(view);
    setSelectedItem(null);
    setMobileNav(false);
  };

  const filteredProblems = useMemo(() => problems.filter((item) => `${item.title} ${item.domain}`.toLowerCase().includes(search.toLowerCase())), [search]);
  const filteredProjects = useMemo(() => projects.filter((item) => `${item.title} ${item.domain}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <div className="volit-shell">
      <aside className={cn("sidebar", mobileNav && "sidebar-open")}>
        <div className="sidebar-top">
          <button className="brand" onClick={() => goTo("overview")} aria-label="Go to overview">
            <span className="brand-mark">V</span><span>volit</span>
          </button>
          <button className="mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={18} /></button>
          <p className="sidebar-kicker">CITIZEN GOVERNANCE</p>
          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => <button key={item.id} className={cn("nav-item", activeView === item.id && !selectedItem && "nav-item-active")} onClick={() => goTo(item.id)}><item.icon size={17} /><span>{item.label}</span>{item.count && <span className="nav-count">{item.count}</span>}</button>)}
          </nav>
          <p className="sidebar-kicker sidebar-kicker-spaced">YOUR SPACE</p>
          <nav className="main-nav">
            <button className={cn("nav-item", activeView === "notifications" && "nav-item-active")} onClick={() => goTo("notifications")}><Bell size={17} /><span>Notifications</span><span className="nav-count nav-count-highlight">4</span></button>
            <button className="nav-item" onClick={() => notify("Settings are available in the full identity-enabled app.")}><Settings2 size={17} /><span>Settings</span></button>
          </nav>
          <div className="sidebar-divider" />
          <p className="sidebar-kicker">TRUST & SAFETY</p>
          <button className={cn("nav-item", activeView === "moderation" && "nav-item-active")} onClick={() => goTo("moderation")}><ShieldCheck size={17} /><span>Moderation desk</span><span className="nav-count nav-count-alert">6</span></button>
        </div>
        <div className="sidebar-bottom">
          <button className="profile-chip" onClick={() => notify("Your profile is identified by a wallet-scoped pseudonym.")}><Avatar initials="RA" color="#a99be8" size="sm" /><span className="profile-chip-copy"><strong>River Ash</strong><small>Verified voter</small></span><MoreHorizontal size={16} /></button>
          <div className="wallet-status"><span className="wallet-dot" /><span>Wallet connected</span><LockKeyhole size={13} /></div>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileNav(true)} aria-label="Open navigation"><Menu size={21} /></button>
          <div className="breadcrumbs"><span>Estonia</span><span className="breadcrumb-slash">/</span><strong>{selectedItem ? (selectedItem.type === "problem" ? "Problem" : "Project") : navItems.find((item) => item.id === activeView)?.label ?? "Overview"}</strong></div>
          <div className="topbar-actions">
            <button className="icon-button topbar-search-button" onClick={() => document.getElementById("global-search")?.focus()} aria-label="Search"><Search size={18} /></button>
            <button className="icon-button notification-button" onClick={() => goTo("notifications")} aria-label="Notifications"><Bell size={18} /><span /></button>
            <button className="connect-button" onClick={() => setAuthOpen(true)}><WalletCards size={16} /><span>Connected</span><ChevronDown size={14} /></button>
          </div>
        </header>

        <div className="page-wrap">
          {selectedItem ? <DetailView item={selectedItem} onBack={() => setSelectedItem(null)} following={following[selectedItem.id] ?? false} onFollow={() => setFollowing((current) => ({ ...current, [selectedItem.id]: !current[selectedItem.id] }))} voted={voted[selectedItem.id]} onVote={(value) => { setVoted((current) => ({ ...current, [selectedItem.id]: value })); notify(value === "for" ? "Your vote was recorded and signed." : "Your vote against was recorded and signed."); }} priority={priority[selectedItem.id] ?? 50} onPriority={(value) => { setPriority((current) => ({ ...current, [selectedItem.id]: value })); notify("Priority updated"); }} onCreate={() => { setCreateType(selectedItem.type); setCreateOpen(true); }} onNotify={notify} /> : <>
            {activeView === "overview" && <Overview onOpen={openItem} onNavigate={goTo} onCreate={() => setCreateOpen(true)} voted={voted} />}
            {activeView === "problems" && <BrowseView type="problem" items={filteredProblems} search={search} setSearch={setSearch} onOpen={openItem} onCreate={() => { setCreateType("problem"); setCreateOpen(true); }} priority={priority} />}
            {activeView === "projects" && <BrowseView type="project" items={filteredProjects} search={search} setSearch={setSearch} onOpen={openItem} onCreate={() => { setCreateType("project"); setCreateOpen(true); }} voted={voted} />}
            {activeView === "people" && <PeopleView delegated={delegated} setDelegated={setDelegated} onNotify={notify} />}
            {activeView === "elections" && <ElectionsView voted={electionVoted} setVoted={setElectionVoted} onNotify={notify} />}
            {activeView === "learning" && <LearningView onNotify={notify} />}
            {activeView === "notifications" && <NotificationsView dismissed={dismissed} setDismissed={setDismissed} onOpen={openItem} />}
            {activeView === "moderation" && <ModerationView moderated={moderated} setModerated={setModerated} onNotify={notify} />}
          </>}
        </div>
      </main>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} onConnected={() => { setAuthOpen(false); notify("Wallet verified. Welcome back, River Ash."); }} />}
      {createOpen && <CreateModal type={createType} onClose={() => setCreateOpen(false)} onCreated={(title) => { setCreateOpen(false); notify(`${title} is now a Candidate draft.`); }} />}
      {toast && <div className="toast"><span className="toast-check"><Check size={14} /></span>{toast}</div>}
    </div>
  );
}

function Overview({ onOpen, onNavigate, onCreate, voted }: { onOpen: (type: ItemType, id: string) => void; onNavigate: (view: ViewId) => void; onCreate: () => void; voted: Record<string, "for" | "against"> }) {
  return <div className="view-stack">
    <section className="welcome-row"><div><p className="eyebrow">THURSDAY, 15 AUGUST 2026 <span className="live-dot" /> LIVE CIVIC INDEX</p><h1>Good morning, <em>River.</em></h1><p className="intro-copy">Your voice is part of a living picture of what Estonia needs next.</p></div><div className="welcome-actions"><Button variant="outline" onClick={() => onNavigate("learning")}><CircleHelp size={16} />How Volit works</Button><Button onClick={onCreate}><Plus size={16} />Start something</Button></div></section>
    <section className="hero-grid"><div className="hero-card"><div className="hero-card-glow" /><div className="hero-card-content"><div className="hero-card-top"><span className="soft-label"><Sparkles size={14} /> YOUR CIVIC PULSE</span><span className="period-label">Last 30 days <ChevronDown size={13} /></span></div><div className="pulse-value">68<span>/100</span></div><p>Participation that compounds. You&apos;re more informed and more connected than <strong>74%</strong> of active voters.</p><div className="pulse-bottom"><div className="pulse-sparkline"><span style={{ height: "32%" }} /><span style={{ height: "40%" }} /><span style={{ height: "28%" }} /><span style={{ height: "52%" }} /><span style={{ height: "46%" }} /><span style={{ height: "68%" }} /><span style={{ height: "58%" }} /><span style={{ height: "82%" }} /><span style={{ height: "72%" }} /><span style={{ height: "92%" }} /></div><span className="trend-up"><TrendingUp size={14} /> +8 pts</span></div></div></div><div className="stat-stack"><div className="stat-card"><div className="stat-icon stat-icon-gold"><Target size={17} /></div><div><span>YOUR PRIORITIES</span><strong>12 active</strong><small>3 need your attention</small></div><ArrowRight size={17} /></div><div className="stat-card"><div className="stat-icon stat-icon-purple"><Network size={17} /></div><div><span>DELEGATED WEIGHT</span><strong>2.4 votes</strong><small>to Lumen 42 · Health</small></div><ArrowRight size={17} /></div><div className="stat-card"><div className="stat-icon stat-icon-green"><BarChart3 size={17} /></div><div><span>YOUR IMPACT</span><strong>€3,800 pledged</strong><small>across 4 proposals</small></div><ArrowRight size={17} /></div></div></section>
    <div className="content-grid"><section className="primary-column"><SectionLabel action={<button className="text-button" onClick={() => onNavigate("projects")}>View all <ArrowRight size={14} /></button>}>NEEDS YOUR ATTENTION</SectionLabel><div className="attention-list"><AttentionCard project={projects[0]} onOpen={onOpen} voted={voted[projects[0].id]} /><AttentionCard project={projects[1]} onOpen={onOpen} voted={voted[projects[1].id]} /><AttentionCard project={projects[3]} onOpen={onOpen} voted={voted[projects[3].id]} /></div></section><aside className="side-column"><SectionLabel>YOUR RECENT ACTIVITY</SectionLabel><div className="activity-card"><ActivityRow icon={<ThumbsUp size={15} />} color="green" title="You supported" item="Mental Health Care Guarantee" time="Yesterday" /><ActivityRow icon={<Target size={15} />} color="gold" title="You prioritized" item="Accessible mental healthcare" time="2 days ago" /><ActivityRow icon={<HandCoins size={15} />} color="purple" title="You pledged €800 to" item="Homes First" time="4 days ago" /><ActivityRow icon={<ArrowRight size={15} />} color="blue" title="Lumen 42 voted for" item="Living peatlands fund" time="5 days ago" /><button className="activity-footer" onClick={() => onNavigate("notifications")}>See your full activity <ArrowRight size={14} /></button></div></aside></div>
    <section className="principles-strip"><div className="principle-copy"><span className="soft-label"><LockKeyhole size={14} /> BUILT FOR PUBLIC TRUST</span><h2>Every decision leaves a trail.</h2><p>Volit keeps participation open, pseudonymous, and independently verifiable. Explore the civic ledger to see how the pieces connect.</p><button className="text-button light" onClick={() => onNavigate("learning")}>Explore the principles <ArrowRight size={14} /></button></div><div className="ledger-visual"><div className="ledger-line" /><span className="ledger-node node-one" /><span className="ledger-node node-two" /><span className="ledger-node node-three" /><div className="ledger-event event-one"><Check size={13} /> vote signed <small>now</small></div><div className="ledger-event event-two"><Network size={13} /> delegation linked <small>2m</small></div><div className="ledger-event event-three"><BarChart3 size={13} /> tally recomputed <small>7m</small></div></div></section>
  </div>;
}

function AttentionCard({ project, onOpen, voted }: { project: Project; onOpen: (type: ItemType, id: string) => void; voted?: "for" | "against" }) {
  return <button className="attention-card" onClick={() => onOpen("project", project.id)}><div className="attention-card-head"><StatusPill status={project.status} /><span>{project.days}</span></div><div className="attention-card-body"><div className="project-mark" style={{ backgroundColor: project.color }}><Lightbulb size={19} /></div><div className="attention-card-copy"><h3>{project.title}</h3><p>{project.summary}</p><div className="attention-meta"><span>{project.domain}</span><span className="meta-separator">·</span><span>{project.type}</span></div></div><ArrowRight className="card-arrow" size={18} /></div><div className="attention-card-foot"><div className="mini-tally"><span>FOR <strong>{project.support}%</strong></span><ProgressBar value={project.support} color="#a4c879" /><span>AGAINST <strong>{project.oppose}%</strong></span></div><span className={cn("vote-state", voted && "vote-state-active")}>{voted ? `Voted ${voted}` : "Your vote needed"}</span></div></button>;
}

function BrowseView({ type, items, search, setSearch, onOpen, onCreate, priority, voted }: { type: ItemType; items: Problem[] | Project[]; search: string; setSearch: (value: string) => void; onOpen: (type: ItemType, id: string) => void; onCreate: () => void; priority?: Record<string, number>; voted?: Record<string, "for" | "against"> }) {
  const isProblem = type === "problem";
  return <div className="view-stack"><section className="view-heading"><div><p className="eyebrow">PUBLIC GOVERNANCE</p><h1>{isProblem ? "Problems worth solving" : "Projects in motion"}</h1><p className="intro-copy">{isProblem ? "See what people across Estonia are prioritising, with the measures that keep us honest." : "Review proposals, understand their trade-offs, and make your vote count."}</p></div><Button onClick={onCreate}><Plus size={16} />{isProblem ? "Describe a problem" : "Propose a project"}</Button></section><div className="browse-toolbar"><div className="search-field"><Search size={17} /><input id="global-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder={isProblem ? "Search problems or domains" : "Search proposals or domains"} /><kbd>⌘ K</kbd></div><div className="filter-buttons"><button className="filter-button filter-active">{isProblem ? "Current" : "Proposed"}<ChevronDown size={14} /></button><button className="filter-button"><ListFilter size={14} /> Filters <span className="filter-count">2</span></button><button className="filter-button sort-button">Sort: {isProblem ? "Highest priority" : "Closest to a tie"}<ChevronDown size={14} /></button></div></div>{isProblem ? <div className="browse-list">{(items as Problem[]).map((item, index) => <ProblemCard key={item.id} item={item} index={index} onOpen={onOpen} priority={priority?.[item.id]} />)}{items.length === 0 && <EmptyState search={search} />}</div> : <div className="browse-list">{(items as Project[]).map((item, index) => <ProjectCard key={item.id} item={item} index={index} onOpen={onOpen} voted={voted?.[item.id]} />)}{items.length === 0 && <EmptyState search={search} />}</div>}</div>;
}

function ProblemCard({ item, index, onOpen, priority }: { item: Problem; index: number; onOpen: (type: ItemType, id: string) => void; priority?: number }) {
  return <button className="browse-card" onClick={() => onOpen("problem", item.id)}><div className="list-index">0{index + 1}</div><div className="browse-card-main"><div className="browse-card-top"><StatusPill status="Current" /><span>{item.scope}</span><span className="meta-separator">·</span><span>{item.domain}</span></div><h3>{item.title}</h3><p>{item.summary}</p><div className="browse-card-meta"><span className="priority-number"><Target size={14} /> {priority ?? item.priority} priority</span><span className="trend-positive"><TrendingUp size={13} /> {item.trend}</span><span className="card-metric">{item.metric}: <strong>{item.metricValue}</strong></span></div></div><div className="priority-ring" style={{ "--ring-value": `${item.priority * 3.6}deg`, borderColor: item.color } as React.CSSProperties}><strong>{item.priority}</strong><small>/100</small></div><ArrowRight className="card-arrow" size={18} /></button>;
}

function ProjectCard({ item, index, onOpen, voted }: { item: Project; index: number; onOpen: (type: ItemType, id: string) => void; voted?: "for" | "against" }) {
  return <button className="browse-card project-browse-card" onClick={() => onOpen("project", item.id)}><div className="list-index">0{index + 1}</div><div className="browse-card-main"><div className="browse-card-top"><StatusPill status={item.status} /><span>{item.type}</span><span className="meta-separator">·</span><span>{item.scope}</span></div><h3>{item.title}</h3><p>{item.summary}</p><div className="browse-card-meta"><span className="vote-count"><ThumbsUp size={14} /> {item.status === "Proposed" ? `${item.support}% for` : item.status === "Enacted" ? "63.8% enacted" : "Candidate"}</span><span className="card-metric"><HandCoins size={13} /> {item.budget}</span><span className={cn("vote-state", voted && "vote-state-active")}>{voted ? `Voted ${voted}` : item.days}</span></div></div><div className="project-card-visual" style={{ backgroundColor: item.color }}><LineChart size={27} /><span>{item.pledged}%<small>funded</small></span></div><ArrowRight className="card-arrow" size={18} /></button>;
}

function EmptyState({ search }: { search: string }) {
  return <div className="empty-state"><Search size={21} /><h3>No matches for &quot;{search}&quot;</h3><p>Try a broader search or clear the filters.</p></div>;
}

function DetailView({ item, onBack, following, onFollow, voted, onVote, priority, onPriority, onCreate, onNotify }: { item: { type: ItemType; id: string }; onBack: () => void; following: boolean; onFollow: () => void; voted?: "for" | "against"; onVote: (value: "for" | "against") => void; priority: number; onPriority: (value: number) => void; onCreate: () => void; onNotify: (message: string) => void }) {
  const problem = item.type === "problem" ? problems.find((entry) => entry.id === item.id) : null;
  const project = item.type === "project" ? projects.find((entry) => entry.id === item.id) : null;
  if (!problem && !project) return null;
  return <div className="view-stack detail-view"><button className="back-button" onClick={onBack}><ArrowLeft size={16} />Back to {item.type === "problem" ? "problems" : "projects"}</button>{problem ? <ProblemDetail item={problem} following={following} onFollow={onFollow} priority={priority} onPriority={onPriority} onCreate={onCreate} onNotify={onNotify} /> : <ProjectDetail item={project!} following={following} onFollow={onFollow} voted={voted} onVote={onVote} onCreate={onCreate} onNotify={onNotify} />}</div>;
}

function ProblemDetail({ item, following, onFollow, priority, onPriority, onCreate, onNotify }: { item: Problem; following: boolean; onFollow: () => void; priority: number; onPriority: (value: number) => void; onCreate: () => void; onNotify: (message: string) => void }) {
  return <><section className="detail-hero"><div className="detail-hero-copy"><div className="detail-tags"><StatusPill status="Current" /><span>{item.domain}</span><span>{item.scope}</span></div><h1>{item.title}</h1><p>{item.summary} This is a shared description of the outcome people want to change, open for everyone to understand and improve.</p><div className="author-line"><Avatar initials="QC" color={item.color} size="sm" /><span>Current version by <strong>Quiet Civic</strong></span><span className="meta-separator">·</span><span>updated 3 days ago</span></div></div><div className="detail-actions"><Button variant="outline" onClick={onFollow}>{following ? <Check size={16} /> : <Heart size={16} />}{following ? "Following" : "Follow"}</Button><Button onClick={onCreate}><Plus size={16} />Improve this problem</Button></div></section><div className="detail-grid"><main className="detail-main"><SectionLabel action={<span className="version-label">Version 4 · public ledger <ExternalLink size={13} /></span>}>THE PROBLEM</SectionLabel><div className="prose-card"><p>Housing costs have risen faster than incomes for a decade. Families are forced to choose between secure housing and other essentials, while the homes we do have waste energy and lock in high costs.</p><p>We can change this by treating homes as essential infrastructure: building on public land, keeping homes affordable over time, and renovating the existing stock.</p><div className="quote-block"><Sparkles size={17} /><div><strong>What would success look like?</strong><p>Everyone can find a safe, energy-efficient home without sacrificing food, health, or participation in society.</p></div></div></div><SectionLabel action={<button className="text-button" onClick={() => onNotify("Discussion room opens in a new session for this demo.")}>Join discussion <MessageCircle size={14} /></button>}>MEASURES OF PROGRESS</SectionLabel><div className="metrics-grid"><MetricCard item={item} icon={<BarChart3 size={18} />} /><MetricCard title="Energy poverty" value="9.8%" change="−0.8%" note="Households unable to heat their home" color="#8fd5c3" icon={<TrendingUp size={18} />} /><MetricCard title="New affordable homes" value="4,280" change="+620" note="Built or renovated this year" color="#82b6e8" icon={<Landmark size={18} />} /></div><SectionLabel>VERSION HISTORY</SectionLabel><div className="timeline-card"><TimelineRow version="v4" state="Current" title="Clarified affordability definition" date="3 days ago" author="Quiet Civic" active /><TimelineRow version="v3" state="Past" title="Added energy efficiency metric" date="18 May 2026" author="Lumen 42" /><TimelineRow version="v2" state="Past" title="Separated supply and cost drivers" date="02 Apr 2026" author="North Star" /></div></main><aside className="detail-side"><div className="priority-card"><div className="side-card-heading"><span><Target size={17} /> YOUR PRIORITY</span><span className="priority-big">{priority}<small>/100</small></span></div><p>How important is solving this problem compared with other problems?</p><input type="range" min="0" max="100" value={priority} onChange={(event) => onPriority(Number(event.target.value))} style={{ accentColor: item.color }} /><div className="range-labels"><span>Not important</span><span>Critical</span></div><button className="save-range" onClick={() => onNotify(`Priority ${priority} saved to the public ledger.`)}>Save priority</button></div><div className="side-info-card"><SectionLabel>AT A GLANCE</SectionLabel><div className="info-row"><span>Total priority</span><strong>{item.priority}/100</strong></div><div className="info-row"><span>People following</span><strong>8,421</strong></div><div className="info-row"><span>Projects linked</span><strong>7</strong></div><div className="info-row"><span>Last updated</span><strong>3 days ago</strong></div><button className="full-width-button" onClick={() => onNotify("Dependency graph prepared for this problem.")}><Network size={15} />View linked projects</button></div><button className="flag-link" onClick={() => onNotify("Thanks. A moderation case was added to the public queue.")}><Flag size={14} />Flag something about this problem</button></aside></div></>;
}

function MetricCard({ item, title, value, change, note, color, icon }: { item?: Problem; title?: string; value?: string; change?: string; note?: string; color?: string; icon: React.ReactNode }) {
  const metricTitle = title ?? item?.metric ?? "Metric";
  const metricValue = value ?? item?.metricValue ?? "—";
  const metricChange = change ?? item?.metricChange ?? "—";
  return <Surface className="metric-card"><div className="metric-card-top"><span className="metric-icon" style={{ color: color ?? item?.color }}>{icon}</span><span className="metric-change">{metricChange}</span></div><strong>{metricValue}</strong><h3>{metricTitle}</h3><p>{note ?? "A transparent measure updated from public statistics"}</p><ProgressBar value={metricValue.includes("%") ? Number.parseFloat(metricValue) * 4 : 62} color={color ?? item?.color} /></Surface>;
}

function TimelineRow({ version, state, title, date, author, active }: { version: string; state: string; title: string; date: string; author: string; active?: boolean }) {
  return <div className={cn("timeline-row", active && "timeline-active")}><span className="timeline-marker">{active ? <Check size={12} /> : <Clock3 size={12} />}</span><div><div className="timeline-meta"><strong>{version}</strong><StatusPill status={state} /></div><h3>{title}</h3><p>{author} <span>·</span> {date}</p></div><MoreHorizontal size={16} /> </div>;
}

function ProjectDetail({ item, following, onFollow, voted, onVote, onCreate, onNotify }: { item: Project; following: boolean; onFollow: () => void; voted?: "for" | "against"; onVote: (value: "for" | "against") => void; onCreate: () => void; onNotify: (message: string) => void }) {
  return <><section className="detail-hero project-detail-hero"><div className="detail-hero-copy"><div className="detail-tags"><StatusPill status={item.status} /><span>{item.type}</span><span>{item.domain}</span><span>{item.scope}</span></div><h1>{item.title}</h1><p>{item.summary}</p><div className="author-line"><Avatar initials="NS" color={item.color} size="sm" /><span>Proposed by <strong>North Star</strong></span><span className="meta-separator">·</span><span>version 3</span></div></div><div className="detail-actions"><Button variant="outline" onClick={onFollow}>{following ? <Check size={16} /> : <Heart size={16} />}{following ? "Following" : "Follow"}</Button><Button variant="outline" onClick={onCreate}><Plus size={16} />Suggest an edit</Button></div></section><div className="detail-grid"><main className="detail-main"><div className="vote-banner"><div><span className="soft-label"><Gavel size={14} /> THE DECISION IN FRONT OF US</span><h2>Should Estonia make this happen?</h2><p>{item.threshold}. The vote stays open for {item.days.toLowerCase()}.</p></div><div className="tally-summary"><strong>{item.support - item.oppose > 0 ? "+" : ""}{(item.support - item.oppose).toFixed(1)}%</strong><span>net support</span></div></div><div className="vote-card"><div className="vote-card-heading"><div><SectionLabel>YOUR BALLOT</SectionLabel><p>Your voting power <strong>1.0</strong> · no active delegation in this domain</p></div>{voted && <span className="signed-badge"><Check size={13} /> Signed just now</span>}</div><div className="vote-buttons"><button className={cn("ballot-button ballot-for", voted === "for" && "ballot-selected")} onClick={() => onVote("for")}><ThumbsUp size={18} /><span>Vote in favour</span><small>{voted === "for" ? "Your current vote" : "I support this proposal"}</small></button><button className={cn("ballot-button ballot-against", voted === "against" && "ballot-selected")} onClick={() => onVote("against")}><ThumbsDown size={18} /><span>Vote against</span><small>{voted === "against" ? "Your current vote" : "I do not support this proposal"}</small></button></div>{voted && <p className="ballot-note"><LockKeyhole size={13} /> You can change your vote until the proposal is enacted, rejected, or expires.</p>}</div><SectionLabel action={<button className="text-button" onClick={() => onNotify("Prediction market editor opened.")}>Make a prediction <ArrowRight size={14} /></button>}>PREDICTED EFFECT</SectionLabel><div className="prediction-card"><div className="prediction-card-copy"><div className="prediction-icon"><LineChart size={18} /></div><div><h3>Households spending over 40% on housing</h3><p>What will this metric be in 2030?</p></div></div><div className="prediction-values"><div><span>IF ENACTED</span><strong>11.2%</strong><small>−7.2 pts</small></div><div><span>IF NOT ENACTED</span><strong>19.8%</strong><small>+1.4 pts</small></div></div><div className="prediction-foot"><span>Based on 624 weighted predictions</span><span className="prediction-confidence"><span style={{ width: "72%" }} />72% confidence gap</span></div></div><SectionLabel action={<button className="text-button" onClick={() => onNotify("Dependency graph opened.")}>View all dependencies <Network size={14} /></button>}>PREREQUISITES</SectionLabel><div className="dependency-card"><div className="dependency-item"><span className="dependency-check"><Check size={12} /></span><div><strong>Public land inventory</strong><small>Enacted · completed</small></div><ArrowRight size={15} /></div><div className="dependency-connector" /><div className="dependency-item"><span className="dependency-check dependency-pending"><Clock3 size={12} /></span><div><strong>Construction standards update</strong><small>In implementation · 68%</small></div><ArrowRight size={15} /></div></div><SectionLabel action={<button className="text-button" onClick={() => onNotify("Review composer opened.")}>Write a review <Plus size={14} /></button>}>REVIEWS <span className="section-count">18</span></SectionLabel><div className="review-card"><div className="review-top"><div className="review-author"><Avatar initials="L4" color="#8fd5c3" size="sm" /><div><strong>Lumen 42</strong><small>Support · 2 days ago</small></div></div><MoreHorizontal size={17} /></div><p>“The public land mechanism is the strongest part of this proposal. I support it, provided the affordability covenant survives changes in government.”</p><div className="review-actions"><button onClick={() => onNotify("Review reaction recorded.")}><ThumbsUp size={14} /> 42</button><button onClick={() => onNotify("Review reaction recorded.")}><ThumbsDown size={14} /> 6</button><span className="review-consensus"><Sparkles size={13} /> bridges opposing views</span></div></div></main><aside className="detail-side"><div className="tally-card"><SectionLabel>LIVE TALLY</SectionLabel><div className="tally-numbers"><div><strong>{item.support}%</strong><span>in favour</span></div><div><strong>{item.oppose}%</strong><span>against</span></div></div><div className="split-bar"><span style={{ width: `${item.support}%` }} /><span style={{ width: `${item.oppose}%` }} /></div><div className="tally-foot"><span>of 1,024,881 eligible voters</span><span>updated 3 min ago</span></div></div><div className="funding-card"><div className="funding-heading"><span><HandCoins size={17} /> FUNDING GOAL</span><strong>{item.budget}</strong></div><ProgressBar value={item.pledged} color={item.color} /><div className="funding-meta"><span>{item.pledged}% pledged</span><span>€{formatMoney(1240000000 * (item.pledged / 100))} committed</span></div><button className="full-width-button" onClick={() => onNotify("Funding pledge panel opened.")}><HandCoins size={15} />Pledge funding</button></div><div className="side-info-card"><SectionLabel>TRANSPARENT RULES</SectionLabel><div className="info-row"><span>Enactment rule</span><strong>+0.1% net</strong></div><div className="info-row"><span>Voting closes</span><strong>23 Aug 2026</strong></div><div className="info-row"><span>Legal review</span><strong className="green-text">Complete</strong></div><div className="info-row"><span>Public ledger</span><strong><ExternalLink size={13} /> Open</strong></div></div><button className="flag-link" onClick={() => onNotify("Thanks. A moderation case was added to the public queue.")}><Flag size={14} />Flag this proposal</button></aside></div></>;
}

function PeopleView({ delegated, setDelegated, onNotify }: { delegated: string | null; setDelegated: (id: string | null) => void; onNotify: (message: string) => void }) {
  const [search, setSearch] = useState("");
  const filtered = people.filter((person) => `${person.name} ${person.role}`.toLowerCase().includes(search.toLowerCase()));
  return <div className="view-stack"><section className="view-heading"><div><p className="eyebrow">LIQUID REPRESENTATION</p><h1>People you can trust</h1><p className="intro-copy">Explore public activity and delegate your vote where someone&apos;s judgement matches yours.</p></div></section><div className="delegation-callout"><div className="delegation-callout-icon"><Network size={21} /></div><div><span className="soft-label">YOUR ACTIVE DELEGATION</span><h3>{delegated ? "2.4 votes follow Lumen 42" : "You are voting directly"}</h3><p>{delegated ? "Health & wellbeing · until 31 December 2026" : "Delegate part of your voting power to someone you trust."}</p></div><button className="text-button" onClick={() => { setDelegated(null); onNotify("Delegation retracted. You will vote directly in Health."); }}>{delegated ? "Retract delegation" : "Learn about delegation"}</button></div><div className="browse-toolbar people-toolbar"><div className="search-field"><Search size={17} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search a pseudonym" /></div><button className="filter-button"><ListFilter size={14} /> Most active <ChevronDown size={14} /></button></div><div className="people-grid">{filtered.map((person) => <div className="person-card" key={person.id}><div className="person-card-top"><Avatar initials={person.initials} color={person.color} size="lg" /><button className="icon-button" onClick={() => onNotify("Profile link copied to clipboard.")} aria-label={`More about ${person.name}`}><MoreHorizontal size={17} /></button></div><h3>{person.name}</h3><p>{person.role}</p><div className="person-stats"><span><strong>{person.score}</strong><small>domain accuracy</small></span><span><strong>{person.followers}</strong><small>followers</small></span></div><div className="person-card-actions"><button className="outline-small" onClick={() => onNotify(`${person.name}'s public profile opened.`)}>View profile</button><button className={cn("delegate-button", delegated === person.id && "delegate-active")} onClick={() => { setDelegated(delegated === person.id ? null : person.id); onNotify(delegated === person.id ? "Delegation retracted." : `Your Health delegation now follows ${person.name}.`); }}>{delegated === person.id ? <Check size={14} /> : <Network size={14} />}{delegated === person.id ? "Delegated" : "Delegate"}</button></div></div>)}</div><section className="delegation-explainer"><div><span className="soft-label"><Network size={14} /> LIQUID DEMOCRACY, MADE VISIBLE</span><h2>Delegate when you trust someone. Vote yourself when you care.</h2></div><div className="explainer-steps"><div><span>01</span><strong>Choose a person</strong><p>See their public activity and accuracy by domain.</p></div><div><span>02</span><strong>Set a scope</strong><p>Delegate all issues or just one area of life.</p></div><div><span>03</span><strong>Stay in control</strong><p>Your own vote always overrides delegation.</p></div></div></section></div>;
}

function ElectionsView({ voted, setVoted, onNotify }: { voted: boolean; setVoted: (value: boolean) => void; onNotify: (message: string) => void }) {
  const [selected, setSelected] = useState("digital-rights");
  const election = elections.find((item) => item.id === selected) ?? elections[0];
  return <div className="view-stack"><section className="view-heading"><div><p className="eyebrow">ELECTORAL MOMENTS</p><h1>Choose who represents us</h1><p className="intro-copy">Elections are one tool in the civic toolkit — transparent, time-bound, and open to every eligible voter.</p></div><Button onClick={() => onNotify("Only election managers can create elections in this demo.")}><Plus size={16} />Create an election</Button></section><div className="election-layout"><div className="election-list"><SectionLabel>ALL ELECTIONS <span className="section-count">3</span></SectionLabel>{elections.map((item) => <button className={cn("election-list-item", selected === item.id && "election-list-item-active")} key={item.id} onClick={() => setSelected(item.id)}><span className="election-color" style={{ backgroundColor: item.color }} /><div><StatusPill status={item.status} /><h3>{item.title}</h3><p>{item.type} · {item.date}</p></div><ArrowRight size={16} /></button>)}</div><div className="election-detail"><div className="election-detail-header"><div><StatusPill status={election.status} /><h2>{election.title}</h2><p>{election.type} · STAR voting · {election.candidates} candidates</p></div><button className="icon-button" onClick={() => onNotify("Election link copied.")}><ExternalLink size={17} /></button></div><div className="election-method"><div className="method-icon"><Trophy size={18} /></div><div><span className="soft-label">HOW THIS WORKS</span><h3>Rate every candidate from 0 to 10</h3><p>STAR voting finds the two highest-scoring candidates, then your ballot picks your preferred finalist.</p></div></div>{election.id === "digital-rights" && <div className="candidate-list"><SectionLabel action={<span>6 candidates · your ballot is private</span>}>YOUR BALLOT</SectionLabel>{["Moss River", "Lumen 42", "Open Horizon", "Quiet Civic"].map((candidate, index) => <div className="candidate-row" key={candidate}><Avatar initials={candidate.split(" ").map((part) => part[0]).join("")} color={["#a99be8", "#8fd5c3", "#e9b949", "#82b6e8"][index]} size="sm" /><div><strong>{candidate}</strong><small>{["Accessibility advocate", "Public interest technologist", "Digital rights researcher", "Community mediator"][index]}</small></div><div className="star-rating">{[1, 2, 3, 4, 5].map((star) => <button key={star} className={cn("star-button", ((index === 1 && star < 5) || (index !== 1 && star < 4)) && "star-selected")} onClick={() => onNotify(`${candidate} rated ${star * 2}/10.`)} aria-label={`Rate ${candidate} ${star * 2} out of 10`}><span>★</span></button>)}</div></div>)}<button className={cn("submit-ballot", voted && "submit-ballot-done")} onClick={() => { setVoted(true); onNotify("Your STAR ballot was sealed and signed."); }}>{voted ? <><Check size={16} />Ballot submitted</> : <>Submit sealed ballot <ArrowRight size={16} /></>}</button></div>}{election.id !== "digital-rights" && <div className="election-placeholder"><UsersRound size={24} /><h3>{election.candidates} candidates are currently listed</h3><p>Open nominations and candidate profiles are public. The voting ballot will appear when the voting period begins.</p><button className="text-button" onClick={() => onNotify("Candidate list opened.")}>Browse candidates <ArrowRight size={14} /></button></div>}</div></div></div>;
}

function LearningView({ onNotify }: { onNotify: (message: string) => void }) {
  const lessons = [{ icon: Network, color: "#a99be8", title: "Liquid democracy in 7 minutes", description: "How delegation gives you more choice without asking you to follow every issue.", time: "7 min", progress: 72 }, { icon: Gavel, color: "#e9b949", title: "How a project becomes law", description: "Follow a proposal from a shared problem to a public, auditable decision.", time: "11 min", progress: 0 }, { icon: BarChart3, color: "#8fd5c3", title: "Reading a civic metric", description: "A guide to stocks, flows, predictions, and the difference between movement and progress.", time: "9 min", progress: 0 }];
  return <div className="view-stack"><section className="view-heading"><div><p className="eyebrow">OPEN CIVICS SCHOOL</p><h1>Understand before you decide</h1><p className="intro-copy">A free learning resource for the ideas, evidence, and trade-offs behind public decisions.</p></div><Button variant="outline" onClick={() => onNotify("Learning streak: 4 days. Keep going!")}><GraduationCap size={16} />Your learning path</Button></section><section className="learning-hero"><div><span className="soft-label"><Sparkles size={14} /> CONTINUE LEARNING</span><h2>What does “informed” mean in a democracy?</h2><p>Before we vote, we can make room for uncertainty, ask better questions, and understand the causal links that matter.</p><button className="light-action" onClick={() => onNotify("Lesson started. Your progress is saved locally.")}>Continue lesson <ArrowRight size={15} /></button></div><div className="learning-orbit"><div className="orbit-core"><BookOpen size={24} /><span>4 / 7</span></div><span className="orbit-dot orbit-dot-one" /><span className="orbit-dot orbit-dot-two" /><span className="orbit-dot orbit-dot-three" /></div></section><SectionLabel action={<button className="text-button" onClick={() => onNotify("All learning resources opened.")}>Browse all <ArrowRight size={14} /></button>}>START HERE</SectionLabel><div className="lesson-grid">{lessons.map((lesson) => <div className="lesson-card" key={lesson.title}><div className="lesson-icon" style={{ backgroundColor: lesson.color }}><lesson.icon size={19} /></div><span className="lesson-time"><Clock3 size={13} />{lesson.time}</span><h3>{lesson.title}</h3><p>{lesson.description}</p><div className="lesson-progress"><ProgressBar value={lesson.progress} color={lesson.color} /><span>{lesson.progress ? `${lesson.progress}% complete` : "Not started"}</span></div></div>)}</div><div className="learning-note"><Bot size={20} /><div><strong>Learning dialogues appear when you make your first contribution.</strong><p>They are designed to clarify terms and causal relationships, never to tell you what to think.</p></div><button className="icon-button" onClick={() => onNotify("You can pause educational dialogues at any time.")}><CircleHelp size={17} /></button></div></div>;
}

function NotificationsView({ dismissed, setDismissed, onOpen }: { dismissed: string[]; setDismissed: (value: string[]) => void; onOpen: (type: ItemType, id: string) => void }) {
  const notifications = [{ id: "n1", icon: Gavel, color: "gold", title: "A proposal is close to a decision", body: "Homes First is within 0.1% of its enactment threshold.", time: "12 min ago", action: () => onOpen("project", "homes-first") }, { id: "n2", icon: Network, color: "purple", title: "Lumen 42 updated their delegation scope", body: "Your Health delegation is still active until 31 December 2026.", time: "2 hours ago", action: () => undefined }, { id: "n3", icon: MessageCircle, color: "green", title: "New review on your followed project", body: "A legal review was published for the Mental Health Care Guarantee.", time: "Yesterday", action: () => onOpen("project", "care-guarantee") }, { id: "n4", icon: Target, color: "blue", title: "Your priority was counted", body: "Your priority for Accessible mental healthcare is now part of the aggregate.", time: "2 days ago", action: () => onOpen("problem", "mental-health") }, { id: "n5", icon: Check, color: "green", title: "Living peatlands fund entered implementation", body: "The project passed its funding and support conditions.", time: "5 days ago", action: () => onOpen("project", "peatlands") }];
  const visible = notifications.filter((notification) => !dismissed.includes(notification.id));
  return <div className="view-stack"><section className="view-heading"><div><p className="eyebrow">STAY IN THE LOOP</p><h1>Your notifications</h1><p className="intro-copy">The things you follow, the votes that need you, and the decisions that changed.</p></div><button className="text-button" onClick={() => setDismissed(notifications.map((item) => item.id))}>Mark all as read <Check size={14} /></button></section><div className="notification-tabs"><button className="notification-tab notification-tab-active">All <span>4</span></button><button className="notification-tab">Mentions</button><button className="notification-tab">Following</button><button className="notification-tab">Settings <Settings2 size={14} /></button></div><div className="notification-list">{visible.map((notification) => <div className="notification-row" key={notification.id}><div className={cn("notification-icon", `notification-${notification.color}`)}><notification.icon size={17} /></div><button className="notification-copy" onClick={notification.action}><div><strong>{notification.title}</strong><span className="notification-time">{notification.time}</span></div><p>{notification.body}</p></button><button className="dismiss-button" onClick={() => setDismissed([...dismissed, notification.id])} aria-label="Dismiss notification"><X size={15} /></button></div>)}{visible.length === 0 && <div className="empty-state"><Check size={22} /><h3>You&apos;re all caught up</h3><p>New civic moments will appear here.</p></div>}</div></div>;
}

function ModerationView({ moderated, setModerated, onNotify }: { moderated: string[]; setModerated: (value: string[]) => void; onNotify: (message: string) => void }) {
  const cases = [{ id: "case-1", type: "Project version", title: "A shorter work week for everyone", reason: "Reported as misleading statistics", reports: 8, risk: "Medium", author: "Common Ground", time: "18 min ago" }, { id: "case-2", type: "Review", title: "Mental Health Care Guarantee", reason: "Reported as personal attack", reports: 3, risk: "Low", author: "Blue Lark", time: "1 hour ago" }, { id: "case-3", type: "Problem version", title: "The silent cost of commuting", reason: "Reported as duplicate content", reports: 2, risk: "Low", author: "Riga Reader", time: "3 hours ago" }];
  const open = cases.filter((item) => !moderated.includes(item.id));
  return <div className="view-stack"><section className="view-heading"><div><p className="eyebrow">TRUST & SAFETY · MODERATOR VIEW</p><h1>Moderation desk</h1><p className="intro-copy">Review reports with context, record decisions, and keep the public record visible where possible.</p></div><div className="moderation-health"><span className="health-dot" />Queue healthy <strong>6 open</strong></div></section><div className="moderation-banner"><ShieldCheck size={20} /><div><strong>Moderation is a public accountability role.</strong><p>Decisions are recorded with a reason, author notification, and an appeal path.</p></div><button className="text-button" onClick={() => onNotify("Moderation policy opened in the public ledger.")}>Read policy <ExternalLink size={14} /></button></div><div className="moderation-table"><div className="moderation-table-head"><span>FLAGGED CONTENT</span><span>RISK SIGNAL</span><span>REPORTS</span><span>ASSIGNED</span><span /></div>{open.map((item) => <div className="moderation-row" key={item.id}><div className="moderation-item"><div className="moderation-item-icon"><Flag size={16} /></div><div><span>{item.type} · {item.time}</span><h3>{item.title}</h3><p>{item.reason} · by {item.author}</p></div></div><span className={cn("risk-pill", item.risk === "Medium" && "risk-medium")}>{item.risk}</span><strong>{item.reports}</strong><span className="assigned">Unassigned</span><button className="review-case" onClick={() => { setModerated([...moderated, item.id]); onNotify(`Case resolved: ${item.title} remains visible.`); }}>Review <ArrowRight size={14} /></button></div>)}{open.length === 0 && <div className="empty-state"><Check size={22} /><h3>The queue is clear</h3><p>All flagged content has been reviewed.</p></div>}</div></div>;
}

function AuthModal({ onClose, onConnected }: { onClose: () => void; onConnected: () => void }) {
  const [step, setStep] = useState<"intro" | "wallet">("intro");
  return <div className="modal-backdrop" onClick={onClose}><div className="modal-card auth-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button>{step === "intro" ? <><div className="modal-symbol"><WalletCards size={22} /></div><p className="eyebrow">PRIVATE BY DESIGN</p><h2>Connect your identity wallet</h2><p>Volit uses a wallet-scoped pseudonym to verify eligibility without asking you to reveal your civil identity.</p><div className="auth-promise"><div><ShieldCheck size={16} /><span>Citizenship verified privately</span></div><div><LockKeyhole size={16} /><span>One person, one active account</span></div><div><BarChart3 size={16} /><span>Every action is independently auditable</span></div></div><Button className="modal-primary" onClick={() => setStep("wallet")}><WalletCards size={16} />Request credentials</Button><button className="modal-secondary" onClick={onClose}>Continue in public mode</button></> : <><div className="wallet-animation"><div className="wallet-orbit" /><WalletCards size={28} /></div><p className="eyebrow">WAITING FOR YOUR WALLET</p><h2>Approve the request</h2><p>Your wallet will share only the claims needed for this session: eligibility, age threshold, and a stable Volit pseudonym.</p><div className="wallet-request"><span className="wallet-request-dot" /><div><strong>volit.gov.ee</strong><small>Request sent securely · expires in 02:41</small></div></div><Button className="modal-primary" onClick={onConnected}><Check size={16} />Simulate wallet approval</Button><button className="modal-secondary" onClick={() => setStep("intro")}><ArrowLeft size={14} />Back</button></>}</div></div>;
}

function CreateModal({ type, onClose, onCreated }: { type: ItemType; onClose: () => void; onCreated: (title: string) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [domain, setDomain] = useState(type === "problem" ? "Housing & communities" : "Health");
  const [step, setStep] = useState(1);
  const canContinue = title.trim().length > 5 && description.trim().length > 20;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal-card create-modal" onClick={(event) => event.stopPropagation()}><div className="create-modal-head"><div><p className="eyebrow">NEW {type.toUpperCase()}</p><h2>{step === 1 ? `Describe a ${type}` : "Make it measurable"}</h2></div><button className="modal-close" onClick={onClose} aria-label="Close"><X size={18} /></button></div><div className="stepper"><span className="step-active">01</span><i /><span className={step === 2 ? "step-active" : ""}>02</span><i /><span>03</span><small>Draft · Details · Commit</small></div>{step === 1 ? <div className="form-stack"><label>Title<input value={title} onChange={(event) => setTitle(event.target.value)} placeholder={type === "problem" ? "What should we solve together?" : "What should we make happen?"} autoFocus /></label><label>Public description<textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe the situation clearly. What would a person need to understand to form their own view?" rows={5} /></label><div className="form-hint"><Sparkles size={15} /><span>Write for the whole country. Your first version will be public, signed, and open to improvement.</span></div><div className="modal-form-actions"><button className="modal-secondary" onClick={onClose}>Cancel</button><Button disabled={!canContinue} onClick={() => setStep(2)}>Continue <ArrowRight size={15} /></Button></div></div> : <div className="form-stack"><label>Responsible domain<select value={domain} onChange={(event) => setDomain(event.target.value)}><option>Housing & communities</option><option>Health</option><option>Environment</option><option>Transport</option><option>Education</option></select></label><label>Scope<select defaultValue="Country"><option>Country</option><option>Harju County</option><option>Tallinn</option><option>Community</option></select></label><div className="metric-builder"><div className="metric-builder-head"><span>Measures of progress</span><button className="text-button"><Plus size={14} />Add metric</button></div><div className="metric-builder-row"><BarChart3 size={16} /><span>{type === "problem" ? "Choose a measurable outcome" : "Targeted metric for this project"}</span><ChevronDown size={15} /></div></div><div className="commit-check"><Check size={15} /><div><strong>Ready for a first commit?</strong><p>We&apos;ll validate the draft and publish it as Candidate. You can collaborate on future versions.</p></div></div><div className="modal-form-actions"><button className="modal-secondary" onClick={() => setStep(1)}><ArrowLeft size={14} />Back</button><Button onClick={() => onCreated(title)}><LockKeyhole size={15} />Commit public draft</Button></div></div>}</div></div>;
}

function ActivityRow({ icon, color, title, item, time }: { icon: React.ReactNode; color: string; title: string; item: string; time: string }) {
  return <div className="activity-row"><span className={cn("activity-icon", `activity-${color}`)}>{icon}</span><div><p>{title} <strong>{item}</strong></p><small>{time}</small></div></div>;
}
