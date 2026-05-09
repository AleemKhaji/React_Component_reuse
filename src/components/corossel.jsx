import { useRef, useState } from "react";
import "./corossel.scss";
import ProfileCard from "./card";

const profiles = [
  {
    id: 1,
    name: "Anjali Sharma",
    role: "Frontend Engineer",
    senior: true,
    skills: "Angular Developer",
    description: "Working as front developer with 5+ years of experience",
  },
  { id: 2, name: "Sharma", role: "Frontend Engineer", senior: false },
  { id: 3, name: "Anjali", role: "Frontend Engineer", senior: true },
  { id: 4, name: "Neha", role: "Frontend Engineer", senior: true },
  {
    id: 5,
    name: "Ravi",
    role: "Frontend Engineer",
    senior: true,
    description: "Senior Tech Lead with 20 years in Banking Domain",
  },
];

const CARDS_VISIBLE = 3; // how many cards show at once
const CARD_WIDTH = 260; // must match .carousel-card width in SCSS
const GAP = 16; // must match gap in SCSS

export default function Carousel() {
  const trackRef = useRef(null); // ref to the scrolling div
  const [index, setIndex] = useState(0); // current first visible card

  const maxIndex = profiles.length - CARDS_VISIBLE; // 5 - 3 = 2

  function scrollTo(newIndex) {
    // clamp — never go below 0 or above maxIndex
    const clamped = Math.max(0, Math.min(newIndex, maxIndex));
    setIndex(clamped);

    // move the track by (cardWidth + gap) * steps
    const offset = clamped * (CARD_WIDTH + GAP);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }

  return (
    <div className="carousel">
      <div className="carousel__window">
        <div className="carousel__track" ref={trackRef}>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              id={profile.id}
              name={profile.name}
              role={profile.role}
              senior={profile.senior}
              skills={profile.skills}
              description={profile.description}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="carousel__controls">
        <button onClick={() => scrollTo(index - 1)} disabled={index === 0}>
          ←
        </button>

        {/* dot indicators */}
        <div className="carousel__dots">
          {profiles.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "dot--active" : ""}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>

        <button
          onClick={() => scrollTo(index + 1)}
          disabled={index === maxIndex}
        >
          →
        </button>
      </div>
    </div>
  );
}
