import { ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { AvatarGroup } from "../components/data-display";
import { Mark } from "../components/mark";
import { Accordion } from "../components/overlay";
import { Tabs } from "../components/navigation";
import { Pill } from "../components/pill";
import { Footer } from "../blocks/footer";
import { useI18n } from "../i18n";

export function Landing() {
  const { t } = useI18n();
  return (
    <div>
      {/* Split hero */}
      <section className="mesh relative overflow-hidden">
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Pill variant="glass" className="mb-6">● {t.hero.eyebrow}</Pill>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {t.hero.titleA} <Mark>{t.hero.titleMark}</Mark>{t.hero.titleB}
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">{t.hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">
                {t.hero.primary} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </Button>
              <Button size="lg" variant="glass">{t.hero.secondary}</Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <AvatarGroup names={["Maya Chen", "Jordan Lee", "Sara Park", "Diego Ruiz"]} />
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{t.hero.stat}</p>
            </div>
          </div>

          {/* Glass dashboard preview */}
          <Card className="overflow-hidden p-0 text-start shadow-[var(--shadow-glass)]">
            <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-brand-400" />
              <span className="h-3 w-3 rounded-full bg-brand-200" />
              <span className="h-3 w-3 rounded-full bg-muted" />
            </div>
            <div className="grid gap-3 p-6 sm:grid-cols-3">
              {["MRR", "Users", "Churn"].map((k, i) => (
                <div key={k} className="rounded-[var(--radius)] border border-border/60 bg-card/60 p-4">
                  <div className="font-mono text-[10px] uppercase text-muted-foreground">{k}</div>
                  <div className="mt-1 h-6 w-20 rounded bg-foreground/80" />
                  <div className={`mt-2 h-2 w-12 rounded ${i === 2 ? "bg-rose-400" : "bg-success"}`} />
                </div>
              ))}
              <div className="rounded-[var(--radius)] border border-border/60 bg-card/60 p-4 sm:col-span-3">
                <div className="flex items-end gap-1.5">
                  {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-accent" style={{ height: h }} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Logo strip */}
      <section className="border-y border-border">
        <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.logosLabel}</span>
          {t.logos.map((logo) => (
            <span key={logo} className="font-display text-lg font-bold text-muted-foreground/70">{logo}</span>
          ))}
        </Container>
      </section>

      {/* Feature tabs */}
      <section>
        <Container className="py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.features.heading} <Mark>{t.features.headingMark}</Mark>
            </h2>
            <p className="mt-3 text-muted-foreground">{t.features.sub}</p>
          </div>
          <Tabs tabs={t.features.items.slice(0, 3).map((f) => f.title)}>
            {(active) => {
              const f = t.features.items[active];
              return (
                <div className="grid gap-6 rounded-[var(--radius-lg)] border border-border bg-card p-8 lg:grid-cols-[1fr_1.2fr]">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{f.title}</h3>
                    <p className="mt-3 text-muted-foreground">{f.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {t.features.items.slice(3).map((x) => (
                        <Pill key={x.title} variant="soft">{x.title}</Pill>
                      ))}
                    </div>
                  </div>
                  <div className="mesh grid place-items-center rounded-[var(--radius)] border border-border/60 p-10">
                    <div className="font-display text-6xl font-bold text-primary">{String(active + 1).padStart(2, "0")}</div>
                  </div>
                </div>
              );
            }}
          </Tabs>
        </Container>
      </section>

      {/* Dark metrics band */}
      <section className="py-10">
        <Container>
          <div className="mesh rounded-[var(--radius-lg)] bg-ink p-10 text-ink-foreground sm:p-14">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {t.metrics.heading} <Mark>{t.metrics.headingMark}</Mark>
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {t.metrics.items.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-4xl font-bold text-brand-400 sm:text-5xl">{m.value}</div>
                  <p className="mt-1 text-sm text-ink-foreground/70">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <Container>
          <div className="mb-10 max-w-xl">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.bento.heading} <Mark>{t.bento.headingMark}</Mark>
            </h2>
            <p className="mt-3 text-muted-foreground">{t.bento.sub}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {t.bento.items.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[var(--radius)] border border-border bg-card p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">◆</span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <Container className="max-w-3xl">
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.faq.heading} <Mark>{t.faq.headingMark}</Mark>
          </h2>
          <Accordion items={t.faq.items.map((f) => ({ q: f.q, a: f.a }))} />
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <Card className="mesh p-12 text-center sm:p-20">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
              {t.cta.heading} <Mark>{t.cta.headingMark}</Mark>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t.cta.body}</p>
            <div className="mt-8 flex justify-center">
              <Button size="lg">
                {t.cta.button} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </Button>
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{t.cta.note}</p>
          </Card>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
