"use client";

import { copy } from "../copy";

export function SponsorMarquee() {
  const doubledSponsors = [...copy.sponsors, ...copy.sponsors];

  return (
    <div className="crab-marquee-wrapper">
      <div className="crab-marquee">
        {doubledSponsors.map((sponsor, index) => (
          <div key={index} className="crab-marquee-item">
            {sponsor.name}
          </div>
        ))}
      </div>
    </div>
  );
}

