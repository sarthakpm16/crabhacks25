"use client";

import { useState } from "react";
import { copy } from "./copy";
import { AnimatedCounter } from "./components/AnimatedCounter";
import { SponsorMarquee } from "./components/SponsorMarquee";
import { 
  Globe, Smartphone, Brain, Zap, Cloud, Link,
  Pizza, Gift, Trophy, Users, DollarSign, Clock,
  GraduationCap, Coffee, BookOpen, MapPin
} from "lucide-react";

const iconMap: Record<string, any> = {
  globe: Globe,
  smartphone: Smartphone,
  brain: Brain,
  zap: Zap,
  cloud: Cloud,
  link: Link,
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scheduleByDay = {
    friday: copy.schedule.filter(item => item.day === "friday"),
    saturday: copy.schedule.filter(item => item.day === "saturday"),
    sunday: copy.schedule.filter(item => item.day === "sunday"),
  };

  return (
    <div className="min-h-screen">
      <header className="crab-header">
        <nav className="crab-nav">
          <div className="crab-container">
            <div className="crab-nav-content">
              <h2 className="crab-logo">crabhacks</h2>
              <div className="crab-nav-links">
                <a href="#about" className="crab-nav-link">about</a>
                <a href="#schedule" className="crab-nav-link">schedule</a>
                <a href="#faq" className="crab-nav-link">faq</a>
                <a href="#register" className="crab-nav-link crab-nav-link-cta">
                  register
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="crab-hero">
          <div className="crab-container">
            <div className="crab-hero-content">
              <div className="crab-hero-badge">
                {copy.event.tagline}
              </div>
              <h1 className="crab-title">
                {copy.event.name} {copy.event.year}
              </h1>
              <p className="crab-tagline">{copy.event.description}</p>
              
              <div className="crab-hero-info">
                <div className="crab-hero-info-item">
                  <MapPin className="crab-hero-info-icon" size={20} />
                  <div className="crab-hero-info-label">when</div>
                  <div className="crab-hero-info-value">
                    {copy.dates.start === copy.dates.end
                      ? copy.dates.start
                      : `${copy.dates.start} – ${copy.dates.end}`}
                  </div>
                </div>
                <div className="crab-hero-info-item">
                  <MapPin className="crab-hero-info-icon" size={20} />
                  <div className="crab-hero-info-label">where</div>
                  <div className="crab-hero-info-value">{copy.location.venue}</div>
                </div>
                <div className="crab-hero-info-item">
                  <Clock className="crab-hero-info-icon" size={20} />
                  <div className="crab-hero-info-label">format</div>
                  <div className="crab-hero-info-value">{copy.dates.duration}</div>
                </div>
              </div>

              <div className="crab-hero-cta">
                <a href="https://luma.com/gkia37vs" target="_blank" rel="noopener noreferrer" className="crab-button crab-button-primary crab-button-large">
                  {copy.cta.primary}
                </a>
                <a href="#about" className="crab-button crab-button-secondary">
                  {copy.cta.learnMore}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="crab-stats">
          <div className="crab-container">
            <div className="crab-stats-grid">
              <div className="crab-stat-card">
                <div className="crab-stat-number">
                  50–100
                </div>
                <div className="crab-stat-label">participants</div>
                <div className="crab-stat-desc">high school students from across the dmv</div>
              </div>
              <div className="crab-stat-card">
                <div className="crab-stat-number">
                  $7.5k+
                </div>
                <div className="crab-stat-label">raised</div>
                <div className="crab-stat-desc">raised to power the event</div>
              </div>
              <div className="crab-stat-card">
                <div className="crab-stat-number">
                  <AnimatedCounter end={copy.stats.sponsors} suffix="+" />
                </div>
                <div className="crab-stat-label">sponsors</div>
                <div className="crab-stat-desc">supporting the next generation of builders</div>
              </div>
              <div className="crab-stat-card">
                <div className="crab-stat-number">
                  $<AnimatedCounter end={copy.stats.prizes} />
                </div>
                <div className="crab-stat-label">in prizes</div>
                <div className="crab-stat-desc">across multiple categories and tracks</div>
              </div>
            </div>
          </div>
        </section>

        <section className="crab-highlights">
          <div className="crab-container">
            <h2 className="crab-section-title">what you get</h2>
            <div className="crab-highlights-grid">
              <div className="crab-highlight-card">
                <Pizza className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.food}</h3>
                <p className="crab-highlight-desc">breakfast, lunch, dinner, and snacks throughout the day</p>
              </div>
              <div className="crab-highlight-card">
                <Gift className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.swag}</h3>
                <p className="crab-highlight-desc">t-shirts, stickers, and more from our sponsors</p>
              </div>
              <div className="crab-highlight-card">
                <Trophy className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.prizes}</h3>
                <p className="crab-highlight-desc">win cash prizes, gift cards, and tech gear</p>
              </div>
              <div className="crab-highlight-card">
                <Users className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.teamSize}</h3>
                <p className="crab-highlight-desc">form teams of 2–4 people</p>
              </div>
              <div className="crab-highlight-card">
                <DollarSign className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.free}</h3>
                <p className="crab-highlight-desc">no registration fees, no hidden costs</p>
              </div>
              <div className="crab-highlight-card">
                <Clock className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.format}</h3>
                <p className="crab-highlight-desc">all day sunday</p>
              </div>
              <div className="crab-highlight-card">
                <BookOpen className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.workshops}</h3>
                <p className="crab-highlight-desc">learn web dev, ai, mobile apps, and more</p>
              </div>
              <div className="crab-highlight-card">
                <GraduationCap className="crab-highlight-icon" size={40} />
                <h3 className="crab-highlight-title">{copy.info.mentors}</h3>
                <p className="crab-highlight-desc">get help from industry professionals</p>
              </div>
            </div>
          </div>
        </section>

        <section className="crab-tracks">
          <div className="crab-container">
            <h2 className="crab-section-title">build projects in:</h2>
            <div className="crab-tracks-grid">
              {copy.tracks.map((track, index) => {
                const IconComponent = iconMap[track.icon];
                return (
                  <div key={index} className="crab-track-card">
                    {IconComponent && <IconComponent className="crab-track-icon" size={32} />}
                    <h3 className="crab-track-name">{track.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="schedule" className="crab-schedule">
          <div className="crab-container">
            <h2 className="crab-section-title">schedule</h2>
            <div className="crab-timeline">
              <div className="crab-timeline-line"></div>
              <div className="crab-timeline-day">
                <h3 className="crab-timeline-day-title">sunday</h3>
                <div className="crab-timeline-events">
                  {scheduleByDay.sunday.map((item, index) => (
                    <div key={index} className="crab-timeline-item">
                      <div className="crab-timeline-time">{item.time.replace("sunday ", "")}</div>
                      <div className="crab-timeline-content">
                        <div className="crab-timeline-dot"></div>
                        <div className="crab-timeline-event">{item.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="crab-about">
          <div className="crab-container">
            <div className="crab-about-content">
              <h2 className="crab-section-title">about</h2>
              <p className="crab-about-text">{copy.event.longDescription}</p>
              <p className="crab-about-text">
                crabhacks includes elements of both tech and entrepreneurship, making it a unique hackathon incorporating startup ideologies.
              </p>
              <p className="crab-about-text">
                {copy.location.directions}
              </p>
              <div className="crab-about-cta">
                <a href="https://luma.com/gkia37vs" target="_blank" rel="noopener noreferrer" className="crab-button crab-button-primary">
                  {copy.cta.primary}
                </a>
                <a href="#" className="crab-button crab-button-outline">
                  {copy.cta.tertiary}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="crab-sponsors">
          <div className="crab-container">
            <h2 className="crab-section-title">our sponsors</h2>
            <SponsorMarquee />
            <p className="crab-about-text" style={{ marginTop: 16 }}>
              we offer four sponsorship tiers: {copy.sponsorship.tiers.join(", ")}. for more info look at the prospectus below.
            </p>
            <div className="crab-about-cta" style={{ marginTop: 12 }}>
              <a
                href={`mailto:${copy.sponsorship.email}`}
                className="crab-button crab-button-primary"
              >
                become a sponsor
              </a>
              <a
                href={copy.sponsorship.prospectusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crab-button crab-button-outline"
              >
                view prospectus
              </a>
            </div>

            {/* sponsor logos grouped by tier */}
            <div style={{ marginTop: 24 }}>
              {copy.sponsorship.tiers.map((tier, tierIndex) => {
                const tierSponsors = copy.sponsors.filter((s) => s.tier === tier);
                if (tierSponsors.length === 0) return null;

                // size and layout scale by tier rank (tier 1 is largest)
                const logoMaxHeight =
                  tierIndex === 0 ? 100 : tierIndex === 1 ? 88 : tierIndex === 2 ? 82 : 74;
                const logoMaxWidth =
                  tierIndex === 0 ? 320 : tierIndex === 1 ? 290 : tierIndex === 2 ? 260 : 230;
                let gridTemplateColumns =
                  tierIndex === 0
                    ? "repeat(auto-fit, minmax(260px, 1fr))"
                    : tierIndex === 1
                    ? "repeat(auto-fit, minmax(220px, 1fr))"
                    : "repeat(auto-fit, minmax(200px, 1fr))";
                let gridGap = tierIndex === 0 ? 20 : tierIndex === 1 ? 18 : 10;
                // bring pairs closer together in silver (typeos + indersoft) and bronze (sarah's + yri)
                if (tierIndex === 2) {
                  gridTemplateColumns = "repeat(2, auto)";
                  gridGap = 8;
                } else if (tierIndex === 3 && tierSponsors.length <= 2) {
                  gridTemplateColumns = "repeat(2, auto)";
                  gridGap = 8;
                }

                return (
                  <div key={tier} style={{ marginTop: 16 }}>
                    <p className="crab-about-text" style={{ marginBottom: 8 }}>{`tier ${tierIndex + 1}`}</p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns,
                        gap: gridGap,
                        alignItems: "center",
                      }}
                    >
                      {tierSponsors.map((s, idx) => {
                        const logo = (s as any).logo as string | undefined;
                        const url = (s as any).url as string | undefined;
                        const name = (s.name || "").toLowerCase();

                        // per-sponsor size nudges
                        let itemMaxHeight = logoMaxHeight;
                        let itemMaxWidth = logoMaxWidth;
                        if (name.includes("indersoft")) {
                          itemMaxHeight += 40;
                          itemMaxWidth += 140;
                        } else if (name.includes("crackd")) {
                          itemMaxHeight += 20;
                          itemMaxWidth += 80;
                        } else if (name.includes("yubico")) {
                          itemMaxHeight -= 6;
                          itemMaxWidth -= 20;
                        } else if (name.includes("sarah")) {
                          itemMaxHeight += 10;
                          itemMaxWidth += 32;
                        } else if (name.includes("yri")) {
                          itemMaxHeight += 10;
                          itemMaxWidth += 32;
                        }

                        const content = logo ? (
                          <img
                            src={logo}
                            alt={s.name}
                            style={{ maxHeight: itemMaxHeight, maxWidth: itemMaxWidth, objectFit: "contain", margin: "0 auto" }}
                          />
                        ) : (
                          <span>{s.name}</span>
                        );
                        return (
                          <div
                            key={`${tier}-${idx}`}
                            style={{
                              textAlign: "center",
                              padding: "4px 0",
                              justifySelf: (tierIndex === 2 || tierIndex === 3) ? "center" : "stretch",
                            }}
                          >
                            {url ? (
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
              {copy.sponsors.filter((s) => !copy.sponsorship.tiers.includes(s.tier)).length > 0 && (
                <div style={{ marginTop: 16 }}>
                  <p className="crab-about-text" style={{ marginBottom: 8 }}>other</p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: 18,
                      alignItems: "center",
                    }}
                  >
                    {copy.sponsors
                      .filter((s) => !copy.sponsorship.tiers.includes(s.tier))
                      .map((s, idx) => {
                        const logo = (s as any).logo as string | undefined;
                        const url = (s as any).url as string | undefined;
                        const content = logo ? (
                          <img
                            src={logo}
                            alt={s.name}
                            style={{ maxHeight: 72, maxWidth: 220, objectFit: "contain", margin: "0 auto" }}
                          />
                        ) : (
                          <span>{s.name}</span>
                        );
                        return (
                          <div key={`other-${idx}`} style={{ textAlign: "center", padding: "4px 0" }}>
                            {url ? (
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                {content}
                              </a>
                            ) : (
                              content
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="crab-faq">
          <div className="crab-container">
            <h2 className="crab-section-title">frequently asked questions</h2>
            <div className="crab-faq-list">
              {copy.faq.map((item, index) => (
                <div key={index} className="crab-faq-item">
                  <button
                    className="crab-faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span>{item.question}</span>
                    <span className="crab-faq-icon">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="crab-faq-answer">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="register" className="crab-register">
          <div className="crab-container">
            <div className="crab-register-content">
              <h2 className="crab-register-title">ready to hack?</h2>
              <p className="crab-register-text">
                applications close {copy.dates.registrationDeadline}. spots are limited, so don't wait.
              </p>
              <div className="crab-register-cta">
                <a href="https://luma.com/gkia37vs" target="_blank" rel="noopener noreferrer" className="crab-button crab-button-primary crab-button-large">
                  {copy.cta.primary}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="crab-footer">
        <div className="crab-container">
          <div className="crab-footer-content">
            <p className="crab-footer-text">
              questions? reach out at team@crabhacks.org
            </p>
            <p className="crab-footer-text crab-footer-small">
              made with 🦀 for the dmv
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}