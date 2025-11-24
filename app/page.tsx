// app/mylo/page.tsx
"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function MyloPage() {
  return (
    <div className="min-h-screen bg-[#05030A] text-slate-50">
      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-8 sm:pt-24 lg:px-0">
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
              Mylo · AI copilot
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Your calm AI copilot for everyday work.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-200/85 sm:text-base">
              Mylo helps you draft, summarize, plan, and follow through—without
              the chaos of juggling five different tools and tabs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-full bg-violet-400 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-violet-400/40 transition hover:bg-violet-300">
                Try Mylo for free
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-50/90 hover:bg-slate-900">
                Watch 60-second demo
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              No credit card required · Founders, PMs, creators, and operators.
            </p>
          </div>

          {/* Chat / bubble visual */}
          <motion.div
            className="relative hidden min-h-[260px] md:block"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-3xl" />
            <div className="relative h-64 w-full max-w-sm rounded-3xl border border-violet-500/40 bg-gradient-to-br from-[#0B0616] via-[#090316] to-[#05030A] p-5 shadow-[0_22px_60px_rgba(46,16,101,0.75)]">
              <div className="flex items-center justify-between">
                <span className="h-2 w-10 rounded-full bg-violet-300/70" />
                <span className="h-2 w-16 rounded-full bg-slate-700" />
              </div>
              <div className="mt-5 space-y-3 text-xs">
                <Bubble author="You" alignment="left">
                  Help me break down a product launch for next month.
                </Bubble>
                 <div className="mt-4 h-8 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-400">
                <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-violet-300" />{" "}
                Mylo is thinking in the background…
              </div>
                <Bubble author="Mylo" alignment="right" accent>
                  Got it. Here’s a simple plan: goals → channels → timeline →
                  owners. Want me to draft the checklist?
                </Bubble>
              </div>
             
            </div>
          </motion.div>
        </motion.section>

        {/* WHO IT'S FOR */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Built for people who actually do the work.
          </h2>
          <p className="max-w-2xl text-sm text-slate-200/80 sm:text-base">
            Founders, PMs, creators, operators—anyone whose day is a mix of
            writing, planning, and making decisions.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-100">
            {["Founders", "PMs", "Creators", "Operators", "Leads"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-900/80 px-3 py-1 ring-1 ring-slate-700/70"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        {/* FEATURES */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ask in plain language. Get helpful output.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="No prompt gymnastics"
              body="Type what you mean. Mylo turns fuzzy ideas into structured tasks, drafts, or plans."
            />
            <FeatureCard
              title="Drafts that sound like you"
              body="Tune Mylo to your tone so emails, posts, and docs feel on-brand, not robotic."
            />
            <FeatureCard
              title="Memory for what matters"
              body="Keep context across sessions for ongoing projects instead of repeating yourself."
            />
          </div>
        </motion.section>

        {/* SEE IT IN ACTION */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            See Mylo in action.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <DemoCard
              title="Launch planning"
              body="Turn a fuzzy launch idea into a structured plan with owners and dates."
            />
            <DemoCard
              title="Email drafting"
              body="Draft outreach emails that match your tone, with clear CTAs and follow-ups."
            />
            <DemoCard
              title="Meeting summaries"
              body="Drop in notes and get clean summaries plus decisions, risks, and next steps."
            />
          </div>
        </motion.section>

        {/* PRICING */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Simple, predictable pricing.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard
              name="Free"
              detail="Try Mylo with limited credits."
              price="$0"
            />
            <PricingCard
              name="Pro"
              detail="For individuals who live in their inbox and docs."
              price="$19/mo"
              highlighted
            />
            <PricingCard
              name="Team"
              detail="For teams who want shared context."
              price="$49/mo"
            />
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-violet-500/40 bg-gradient-to-r from-[#1a102d] via-[#130b22] to-[#05030A] p-8 text-center shadow-[0_18px_50px_rgba(46,16,101,0.75)]"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready for an AI copilot that feels calm, not chaotic?
          </h2>
          <p className="mt-3 text-sm text-slate-200/85 sm:text-base">
            Start a free trial and see how much easier your writing, planning,
            and follow-through can feel with Mylo in the loop.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-full bg-violet-400 px-6 py-3 text-sm font-medium text-slate-950 shadow-md shadow-violet-400/40 transition hover:bg-violet-300">
              Try Mylo for free
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-50/90 hover:bg-[#130b22]">
              Watch the product demo
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

function Bubble({
  author,
  alignment,
  accent,
  children,
}: {
  author: string;
  alignment: "left" | "right";
  accent?: boolean;
  children: React.ReactNode;
}) {
  const isRight = alignment === "right";
  return (
    <div
      className={`flex ${isRight ? "justify-end" : "justify-start"} text-[11px]`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-3 py-2 ${
          accent
            ? "bg-violet-500/30 text-slate-50"
            : "bg-slate-900/80 text-slate-200"
        }`}
      >
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          {author}
        </p>
        <p>{children}</p>
      </div>
    </div>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
      <p className="mt-2 text-xs text-slate-200/85 sm:text-sm">{body}</p>
    </div>
  );
}

function DemoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
      <p className="mt-2 text-xs text-slate-200/85 sm:text-sm">{body}</p>
    </div>
  );
}

function PricingCard({
  name,
  detail,
  price,
  highlighted,
}: {
  name: string;
  detail: string;
  price: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border bg-slate-950/70 p-5 ${
        highlighted
          ? "border-violet-400/60 shadow-[0_18px_40px_rgba(139,92,246,0.4)]"
          : "border-slate-800"
      }`}
    >
      <h3 className="text-sm font-semibold sm:text-base">{name}</h3>
      <p className="mt-1 text-xs text-slate-300">{detail}</p>
      <p className="mt-4 text-lg font-semibold text-violet-300">{price}</p>
      <p className="mt-2 text-[11px] text-slate-400">
        Cancel anytime. Usage-based limits apply on higher tiers.
      </p>
    </div>
  );
}