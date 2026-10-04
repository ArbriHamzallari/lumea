/** Minimal line icons (1.5px stroke), always decorative — labels carry meaning. */

type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
  viewBox: "0 0 24 24",
};

export const IconPhone = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M5 3.5h3l1.5 4-2 1.3a11 11 0 0 0 7.7 7.7l1.3-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconWhatsApp = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 20l1.2-3.6A8.3 8.3 0 1 1 8 19.1L4 20Z" />
    <path d="M9.2 8.6c.2-.5.6-.6 1-.5l.6 1.5c.1.3 0 .5-.2.7l-.4.4a5.6 5.6 0 0 0 2.9 2.9l.4-.4c.2-.2.4-.3.7-.2l1.5.6c.2.4 0 .9-.5 1.1-.7.4-1.6.4-2.5 0a8 8 0 0 1-3.6-3.6c-.4-.9-.4-1.8.1-2.5Z" />
  </svg>
);

export const IconPin = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const IconClock = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconArrow = ({ className = "size-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconArrowLeft = ({ className = "size-4" }: P) => (
  <svg {...base} className={className}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const IconExternal = ({ className = "size-3.5" }: P) => (
  <svg {...base} className={className}>
    <path d="M14 5h5v5M19 5l-8 8M18 14v5H5V6h5" />
  </svg>
);

export const IconMenu = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const IconClose = ({ className = "size-6" }: P) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconDirections = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 3 21 12l-9 9-9-9 9-9Z" />
    <path d="M9.5 13.5v-2a1 1 0 0 1 1-1h4M13 8.5l2 2-2 2" />
  </svg>
);

export const IconInstagram = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const IconPlay = ({ className = "size-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
  </svg>
);
