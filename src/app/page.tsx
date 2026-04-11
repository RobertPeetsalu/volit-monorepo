export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top,_#f6f0df,_transparent_35%),linear-gradient(135deg,_#f8f4ea_0%,_#ebe1cb_42%,_#d0c2a0_100%)] px-6 py-12 text-stone-950">
      <div className="absolute inset-y-0 right-[-10%] hidden w-[38rem] rounded-full bg-[radial-gradient(circle,_rgba(98,61,29,0.22),_transparent_62%)] blur-3xl md:block" />
      <section className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-stone-900/10 bg-white/55 px-3 py-1 text-sm tracking-[0.22em] text-stone-700 uppercase shadow-sm backdrop-blur">
            Volit
          </div>
          <div className="space-y-5">
            <p className="max-w-xl text-sm leading-6 text-stone-700 sm:text-base">
              An open source governance platform for continuous liquid
              democracy.
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-none tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Citizens propose, deliberate, delegate, and decide in public.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
              This bootstrap marks the start of Volit&apos;s implementation on
              Next.js, Vercel, Convex, and shadcn/ui. The application will
              evolve into a secure civic system for proposals, review,
              budgeting, and voting.
            </p>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-stone-900/10 bg-white/75 p-6 shadow-[0_24px_80px_rgba(65,45,22,0.15)] backdrop-blur">
          <div className="space-y-5">
            <p className="text-xs font-medium tracking-[0.24em] text-stone-500 uppercase">
              Bootstrap Status
            </p>
            <div className="space-y-3 text-sm text-stone-700">
              <div className="flex items-center justify-between border-b border-stone-900/10 pb-3">
                <span>Frontend</span>
                <span className="font-medium text-stone-950">Next.js 16</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-900/10 pb-3">
                <span>Backend</span>
                <span className="font-medium text-stone-950">Convex wired</span>
              </div>
              <div className="flex items-center justify-between border-b border-stone-900/10 pb-3">
                <span>UI</span>
                <span className="font-medium text-stone-950">shadcn Vega</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Crypto</span>
                <span className="font-medium text-stone-950">
                  Ed25519 toolchain
                </span>
              </div>
            </div>
            <p className="rounded-2xl bg-stone-950 px-4 py-3 text-sm leading-6 text-stone-100">
              Next step: connect a real Convex deployment and start defining
              the first user-facing use case.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
