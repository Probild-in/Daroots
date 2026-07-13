import { useState } from 'react'

/* Draggable image comparison. `leftImg` is revealed on the left as you drag
   the handle; `rightImg` sits underneath and shows on the right. */
export default function BeforeAfter({ leftImg, rightImg, leftLabel = '', rightLabel = '', alt = '' }) {
  const [pos, setPos] = useState(50)

  return (
    <div className="ba" style={{ '--pos': `${pos}%` }}>
      <img className="ba__img" src={rightImg} alt={alt ? `${alt} — ${rightLabel.toLowerCase()}` : rightLabel} draggable="false" />
      <div className="ba__after">
        <img className="ba__img" src={leftImg} alt={alt ? `${alt} — ${leftLabel.toLowerCase()}` : leftLabel} draggable="false" />
      </div>

      <span className="ba__tag ba__tag--l">{leftLabel}</span>
      <span className="ba__tag ba__tag--r">{rightLabel}</span>

      <div className="ba__line" aria-hidden="true">
        <span className="ba__handle">
          <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l-4 6 4 6M15 6l4 6-4 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </div>

      <input
        className="ba__range"
        type="range"
        min="0"
        max="100"
        value={pos}
        onChange={(e) => setPos(+e.target.value)}
        aria-label={`Drag to compare ${leftLabel} and ${rightLabel}`}
      />
    </div>
  )
}
