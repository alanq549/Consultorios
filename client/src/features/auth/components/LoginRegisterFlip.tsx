import { useEffect, useRef, useState } from "react";
import "@/styles/features/auth/LoginRegisterFlip.css"
interface Props {
  front: React.ReactNode;
  back: React.ReactNode;
  flipped: boolean;
}

export default function LoginRegisterFlip({ front, back, flipped }: Props) {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const frontEl = frontRef.current;
    const backEl = backRef.current;

    if (frontEl && backEl) {
      if (flipped) {
        setHeight(backEl.offsetHeight);
      } else {
        setHeight(frontEl.offsetHeight);
      }
    }
  }, [front, back, flipped]);

  return (
<div className="absolute h-auto inset-0 bg-gradient-to-r from-teal-500 to-cyan-500">
  <div className="w-full max-w-md mx-auto rounded-lg flip-card">
    <div
      className="flip-card-inner"
      style={{
        height, // altura dinámica
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      <div ref={frontRef} className="flip-card-front">
        {front}
      </div>
      <div ref={backRef} className="flip-card-back">
        {back}
      </div>
    </div>
  </div>
</div>


  );
}
