import React from 'react';

interface ChairIllustrationProps {
  type: 'classic' | 'comfort' | 'compact' | 'hero' | 'factory';
  view?: 'unfolded' | 'folded';
  className?: string;
  showDimensions?: boolean;
}

export const ChairIllustration: React.FC<ChairIllustrationProps> = ({
  type,
  view = 'unfolded',
  className = 'w-full h-auto',
  showDimensions = false,
}) => {
  if (type === 'hero') {
    return (
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Nexlivo ergonomic folding chair engineering line-art and silhouette"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0" y1="0" x2="600" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#103D2E" />
            <stop offset="1" stopColor="#1A5E47" />
          </linearGradient>
          <linearGradient id="limeGlow" x1="150" y1="100" x2="450" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B5F45A" stopOpacity="0.4" />
            <stop offset="1" stopColor="#21885B" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Studio backdrop platform */}
        <rect width="600" height="500" rx="24" fill="url(#heroGradient)" />
        <circle cx="480" cy="120" r="180" fill="url(#limeGlow)" />
        <ellipse cx="300" cy="440" rx="200" ry="24" fill="#0A261D" opacity="0.6" />

        {/* Engineering grid lines */}
        <line x1="80" y1="440" x2="520" y2="440" stroke="#21885B" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        <line x1="300" y1="40" x2="300" y2="460" stroke="#21885B" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

        {/* Chair Shadow */}
        <ellipse cx="300" cy="430" rx="140" ry="18" fill="#05140F" opacity="0.8" />

        {/* Rear Legs & Cross Bracing */}
        <path d="M220 425 L290 190" stroke="#21885B" strokeWidth="10" strokeLinecap="round" />
        <path d="M380 425 L310 190" stroke="#16593E" strokeWidth="10" strokeLinecap="round" />
        <path d="M245 350 L355 350" stroke="#21885B" strokeWidth="7" strokeLinecap="round" />

        {/* Front Legs */}
        <path d="M210 425 L320 120" stroke="#F5F7F4" strokeWidth="12" strokeLinecap="round" />
        <path d="M390 425 L280 120" stroke="#D6E5DE" strokeWidth="12" strokeLinecap="round" />
        <path d="M230 380 L370 380" stroke="#D6E5DE" strokeWidth="7" strokeLinecap="round" />

        {/* Hinge Pivot Joints */}
        <circle cx="280" cy="245" r="9" fill="#B5F45A" stroke="#103D2E" strokeWidth="3" />
        <circle cx="320" cy="245" r="9" fill="#B5F45A" stroke="#103D2E" strokeWidth="3" />

        {/* Seat Pan */}
        <path
          d="M195 240 C195 228 208 220 225 220 L375 220 C392 220 405 228 405 240 L395 260 C395 272 382 280 365 280 L235 280 C218 280 205 272 205 260 Z"
          fill="#F5F7F4"
          stroke="#103D2E"
          strokeWidth="3"
        />
        {/* Seat cushion accent */}
        <path
          d="M215 235 C215 228 225 225 240 225 L360 225 C375 225 385 228 385 235 L378 250 C378 257 368 262 353 262 L247 262 C232 262 222 257 222 250 Z"
          fill="#D6E5DE"
          opacity="0.7"
        />

        {/* Backrest Ergonomic Curve */}
        <path
          d="M260 90 C260 82 272 75 300 75 C328 75 340 82 340 90 L345 155 C345 165 332 170 300 170 C268 170 255 165 255 155 Z"
          fill="#B5F45A"
        />
        <path
          d="M272 105 C272 100 282 96 300 96 C318 96 328 100 328 105 L328 140 C328 145 318 148 300 148 C282 148 272 145 272 140 Z"
          fill="#103D2E"
        />

        {/* Non-marking floor glide feet */}
        <rect x="202" y="420" width="16" height="8" rx="3" fill="#B5F45A" />
        <rect x="382" y="420" width="16" height="8" rx="3" fill="#B5F45A" />
        <rect x="214" y="420" width="14" height="6" rx="2" fill="#8CA89C" />
        <rect x="372" y="420" width="14" height="6" rx="2" fill="#8CA89C" />

        {/* Innovation callout badge */}
        <g transform="translate(40, 60)">
          <rect width="180" height="60" rx="12" fill="#0A261D" stroke="#21885B" strokeWidth="1.5" />
          <circle cx="28" cy="30" r="14" fill="#B5F45A" />
          <path d="M22 30 L26 34 L34 24" stroke="#103D2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="52" y="27" fill="#F5F7F4" fontSize="12" fontWeight="700" fontFamily="sans-serif">Ultra-Flat Fold</text>
          <text x="52" y="44" fill="#D6E5DE" fontSize="10" fontFamily="sans-serif">Sub-45mm Stowing</text>
        </g>

        <g transform="translate(380, 360)">
          <rect width="180" height="60" rx="12" fill="#0A261D" stroke="#21885B" strokeWidth="1.5" />
          <circle cx="28" cy="30" r="14" fill="#21885B" />
          <path d="M24 30 L32 30 M28 26 L28 34" stroke="#F5F7F4" strokeWidth="2" strokeLinecap="round" />
          <text x="52" y="27" fill="#F5F7F4" fontSize="12" fontWeight="700" fontFamily="sans-serif">Zero Toxic Glue</text>
          <text x="52" y="44" fill="#B5F45A" fontSize="10" fontFamily="sans-serif">100% Recyclable DfD</text>
        </g>
      </svg>
    );
  }

  if (type === 'factory') {
    return (
      <svg
        viewBox="0 0 600 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label="Planned 5-stage manufacturing flow diagram"
      >
        <rect width="600" height="360" rx="20" fill="#103D2E" />
        {/* Flow Line */}
        <path d="M60 180 L540 180" stroke="#21885B" strokeWidth="3" strokeDasharray="6 6" />
        
        {/* Station 1 */}
        <g transform="translate(60, 130)">
          <rect x="-35" y="-35" width="70" height="70" rx="16" fill="#F5F7F4" stroke="#B5F45A" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#103D2E" fontSize="18" fontWeight="800">01</text>
          <text x="0" y="60" textAnchor="middle" fill="#F5F7F4" fontSize="12" fontWeight="600">Alloy Audit</text>
          <text x="0" y="78" textAnchor="middle" fill="#D6E5DE" fontSize="10">Mill Verified</text>
        </g>

        {/* Station 2 */}
        <g transform="translate(180, 130)">
          <rect x="-35" y="-35" width="70" height="70" rx="16" fill="#F5F7F4" stroke="#21885B" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#103D2E" fontSize="18" fontWeight="800">02</text>
          <text x="0" y="60" textAnchor="middle" fill="#F5F7F4" fontSize="12" fontWeight="600">CNC Profile</text>
          <text x="0" y="78" textAnchor="middle" fill="#D6E5DE" fontSize="10">±0.2mm Bending</text>
        </g>

        {/* Station 3 */}
        <g transform="translate(300, 130)">
          <rect x="-35" y="-35" width="70" height="70" rx="16" fill="#F5F7F4" stroke="#21885B" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#103D2E" fontSize="18" fontWeight="800">03</text>
          <text x="0" y="60" textAnchor="middle" fill="#F5F7F4" fontSize="12" fontWeight="600">Powder Coat</text>
          <text x="0" y="78" textAnchor="middle" fill="#D6E5DE" fontSize="10">Zero VOC Heat-Cured</text>
        </g>

        {/* Station 4 */}
        <g transform="translate(420, 130)">
          <rect x="-35" y="-35" width="70" height="70" rx="16" fill="#F5F7F4" stroke="#21885B" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#103D2E" fontSize="18" fontWeight="800">04</text>
          <text x="0" y="60" textAnchor="middle" fill="#F5F7F4" fontSize="12" fontWeight="600">Fasten Cell</text>
          <text x="0" y="78" textAnchor="middle" fill="#D6E5DE" fontSize="10">Torque Inspected</text>
        </g>

        {/* Station 5 */}
        <g transform="translate(540, 130)">
          <rect x="-35" y="-35" width="70" height="70" rx="16" fill="#B5F45A" stroke="#103D2E" strokeWidth="3" />
          <text x="0" y="5" textAnchor="middle" fill="#103D2E" fontSize="18" fontWeight="800">05</text>
          <text x="0" y="60" textAnchor="middle" fill="#F5F7F4" fontSize="12" fontWeight="600">Eco-Pack & QC</text>
          <text x="0" y="78" textAnchor="middle" fill="#B5F45A" fontSize="10">100% Recycled Box</text>
        </g>

        <rect x="140" y="270" width="320" height="42" rx="8" fill="#0A261D" stroke="#21885B" strokeWidth="1" />
        <text x="300" y="296" textAnchor="middle" fill="#D6E5DE" fontSize="11" fontWeight="500">
          * Planned engineering workflow staged for pilot facility commissioning
        </text>
      </svg>
    );
  }

  // Model-specific illustrations
  const isFolded = view === 'folded';

  return (
    <div className="relative rounded-2xl bg-white border border-forest/10 p-6 flex flex-col items-center shadow-xs overflow-hidden">
      {/* Concept Badge */}
      <div className="w-full flex items-center justify-between mb-4">
        <span className="text-[11px] font-semibold tracking-wider uppercase text-forest/70 bg-greygreen-light px-2.5 py-1 rounded-md">
          {type.toUpperCase()} CONCEPT MODEL
        </span>
        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
          isFolded ? 'bg-lime text-forest' : 'bg-brand/10 text-brand'
        }`}>
          {isFolded ? 'Folded View (~4cm profile)' : 'Deploys In 2 Seconds'}
        </span>
      </div>

      <svg
        viewBox="0 0 400 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        role="img"
        aria-label={`${type} folding chair concept in ${view} mode`}
      >
        <defs>
          <linearGradient id={`grad-${type}`} x1="0" y1="0" x2="400" y2="360" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F7F4" />
            <stop offset="1" stopColor="#EAF2EE" />
          </linearGradient>
        </defs>

        <rect width="400" height="360" rx="16" fill={`url(#grad-${type})`} />
        {/* Floor Line */}
        <ellipse cx="200" cy="315" rx="130" ry="14" fill="#D6E5DE" opacity="0.6" />

        {isFolded ? (
          /* Folded Architecture (Ultra-slim flat pack) */
          <g transform="translate(140, 30)">
            {/* Hanging Bracket Hole */}
            <circle cx="60" cy="30" r="8" fill="#103D2E" />
            <circle cx="60" cy="30" r="4" fill="#F5F7F4" />

            {/* Flat Outer Frame */}
            <rect x="30" y="20" width="60" height="260" rx="8" fill="#103D2E" stroke="#21885B" strokeWidth="2" />
            {/* Folded Seat Inside Frame */}
            <rect x="38" y="70" width="44" height="130" rx="4" fill={type === 'comfort' ? '#21885B' : '#B5F45A'} />
            {/* Concentric Slim Profile */}
            <rect x="42" y="210" width="36" height="60" rx="3" fill="#D6E5DE" />

            {/* Slim thickness dimension indicator */}
            <line x1="105" y1="50" x2="105" y2="250" stroke="#21885B" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="115" y="155" fill="#103D2E" fontSize="12" fontWeight="700">
              {type === 'compact' ? '32 mm' : type === 'comfort' ? '65 mm' : '45 mm'}
            </text>
            <text x="115" y="170" fill="#4B5A52" fontSize="9">FLAT DEPTH</text>
          </g>
        ) : (
          /* Unfolded Active Sitting State */
          <g>
            {/* Legs */}
            <line x1="140" y1="310" x2="195" y2="150" stroke="#103D2E" strokeWidth="9" strokeLinecap="round" />
            <line x1="260" y1="310" x2="205" y2="150" stroke="#103D2E" strokeWidth="9" strokeLinecap="round" />
            <line x1="165" y1="260" x2="235" y2="260" stroke="#21885B" strokeWidth="5" strokeLinecap="round" />

            {/* Pivot Joints */}
            <circle cx="195" cy="180" r="7" fill="#B5F45A" stroke="#103D2E" strokeWidth="2" />
            <circle cx="205" cy="180" r="7" fill="#B5F45A" stroke="#103D2E" strokeWidth="2" />

            {/* Seat Pan */}
            {type === 'classic' && (
              <path
                d="M130 180 C130 170 145 165 200 165 C255 165 270 170 270 180 L260 205 C260 215 245 220 200 220 C155 220 140 215 140 205 Z"
                fill="#21885B"
                stroke="#103D2E"
                strokeWidth="2"
              />
            )}
            {type === 'comfort' && (
              <path
                d="M125 175 C125 160 145 155 200 155 C255 155 275 160 275 175 L265 215 C265 225 245 230 200 230 C155 230 135 225 135 215 Z"
                fill="#103D2E"
                stroke="#B5F45A"
                strokeWidth="2.5"
              />
            )}
            {type === 'compact' && (
              <path
                d="M140 185 C140 175 155 170 200 170 C245 170 260 175 260 185 L252 205 C252 215 240 218 200 218 C160 218 148 215 148 205 Z"
                fill="#D6E5DE"
                stroke="#103D2E"
                strokeWidth="2"
              />
            )}

            {/* Backrest Structure */}
            <path d="M165 165 L180 80" stroke="#103D2E" strokeWidth="7" strokeLinecap="round" />
            <path d="M235 165 L220 80" stroke="#103D2E" strokeWidth="7" strokeLinecap="round" />

            {/* Backrest Cushion/Slat */}
            <rect
              x="170"
              y="60"
              width="60"
              height="55"
              rx="8"
              fill={type === 'comfort' ? '#B5F45A' : type === 'compact' ? '#21885B' : '#103D2E'}
            />
            {type === 'comfort' && (
              <path d="M185 85 L215 85 M185 95 L215 95" stroke="#103D2E" strokeWidth="2" strokeLinecap="round" />
            )}

            {/* Floor Glides */}
            <rect x="132" y="306" width="16" height="8" rx="2" fill="#B5F45A" />
            <rect x="252" y="306" width="16" height="8" rx="2" fill="#B5F45A" />
          </g>
        )}
      </svg>

      {showDimensions && (
        <div className="w-full mt-3 pt-3 border-t border-greygreen/50 flex justify-between text-[11px] text-forest/80">
          <span>Target Load: <strong>{type === 'comfort' ? '150 kg' : type === 'compact' ? '120 kg' : '136 kg'}</strong></span>
          <span>Target Weight: <strong>{type === 'comfort' ? '4.8 kg' : type === 'compact' ? '3.1 kg' : '4.0 kg'}</strong></span>
        </div>
      )}

      <p className="text-[10px] text-forest/50 mt-2 text-center">
        * Architectural CAD representation of proposed {type} concept
      </p>
    </div>
  );
};
