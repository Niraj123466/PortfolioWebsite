const SectionDivider = ({ flip = false }: { flip?: boolean }) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className="w-full h-12 sm:h-16"
    >
      <path
        d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z"
        fill="hsl(var(--background))"
      />
    </svg>
  </div>
);

export default SectionDivider;
