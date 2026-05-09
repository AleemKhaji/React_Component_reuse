import './button.scss'

export default function Button({
  children,                   // button label — any JSX
  variant = 'primary',        // primary | secondary | danger | ghost
  size    = 'md',             // sm | md | lg
  disabled = false,
  loading  = false,
  onClick,                     // passed in from parent
  type = 'button',            // button | submit | reset
  className = '',             // allow extra classes from outside
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}  // loading also disables clicks
    >
      {loading && <span className="btn__spinner" />}
      {children}
    </button>
  )
}