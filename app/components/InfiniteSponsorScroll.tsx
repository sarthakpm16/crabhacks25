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

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-evenly",
        rowGap: "1.5rem",
        columnGap: "2rem",
        width: "100%",
      }}
    >
      {sponsors.map((sponsor, index) => {
        const logo = (sponsor as any).logo as string | undefined;
        const url = (sponsor as any).url as string | undefined;
        const name = (sponsor.name || "").toLowerCase();

        let itemMaxHeight = logoMaxHeight;
        let itemMaxWidth = logoMaxWidth;
        if (name.includes("indersoft")) {
          itemMaxHeight += 80;
          itemMaxWidth += 220;
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

        let textFontSize = 18;
        if (name.includes("parv")) {
          textFontSize = tierIndex === 0 ? 40 : tierIndex === 1 ? 36 : tierIndex === 2 ? 32 : 28;
        }

        const content = logo ? (
          <img
            src={logo}
            alt={sponsor.name}
            style={{ maxHeight: itemMaxHeight, maxWidth: itemMaxWidth, objectFit: "contain", margin: "0 auto" }}
          />
        ) : (
          <span style={{ fontSize: textFontSize, fontWeight: 700 }}>{sponsor.name}</span>
        );

        return (
          <div key={`${sponsor.name}-${index}`}>
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
  );
}

