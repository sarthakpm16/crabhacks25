"use client";

interface Sponsor {
  name: string;
  tier: string;
  url?: string;
  logo?: string;
}

interface InfiniteSponsorScrollProps {
  sponsors: Sponsor[];
  tierIndex: number;
}

export function InfiniteSponsorScroll({ sponsors, tierIndex }: InfiniteSponsorScrollProps) {
  const logoMaxHeight = tierIndex === 0 ? 100 : tierIndex === 1 ? 88 : tierIndex === 2 ? 82 : 74;
  const logoMaxWidth = tierIndex === 0 ? 320 : tierIndex === 1 ? 290 : tierIndex === 2 ? 260 : 230;
  const scrollDuration = tierIndex === 0 ? 60 : tierIndex === 1 ? 50 : tierIndex === 2 ? 45 : 40;

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="crab-infinite-scroll-wrapper">
      <div className="crab-infinite-scroll-track" style={{ animationDuration: `${scrollDuration}s` }}>
        <div className="crab-infinite-scroll-content">
          {duplicatedSponsors.map((sponsor, index) => {
            const logo = (sponsor as any).logo as string | undefined;
            const url = (sponsor as any).url as string | undefined;
            const name = (sponsor.name || "").toLowerCase();

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
                alt={sponsor.name}
                style={{ maxHeight: itemMaxHeight, maxWidth: itemMaxWidth, objectFit: "contain", margin: "0 auto" }}
              />
            ) : (
              <span>{sponsor.name}</span>
            );

            return (
              <div key={`${sponsor.name}-${index}`} className="crab-infinite-scroll-item">
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
        <div className="crab-infinite-scroll-content" aria-hidden="true">
          {duplicatedSponsors.map((sponsor, index) => {
            const logo = (sponsor as any).logo as string | undefined;
            const url = (sponsor as any).url as string | undefined;
            const name = (sponsor.name || "").toLowerCase();

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
                alt={sponsor.name}
                style={{ maxHeight: itemMaxHeight, maxWidth: itemMaxWidth, objectFit: "contain", margin: "0 auto" }}
              />
            ) : (
              <span>{sponsor.name}</span>
            );

            return (
              <div key={`${sponsor.name}-${index}-dup`} className="crab-infinite-scroll-item">
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
    </div>
  );
}

