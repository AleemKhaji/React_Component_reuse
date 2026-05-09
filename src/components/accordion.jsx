import './accordion.scss'

export default function Accordion({
  title,
  children,
  isOpen,      
  onToggle    
}) {
  return (
    <div className="accordion__item">
      <button
        className="accordion__btn"
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className={`accordion__chevron ${isOpen ? 'open' : ''}`}>
          {isOpen ? "-":"+"}
        </span>
      </button>

      {isOpen && (
        <div className="accordion__body">
          {children}
        </div>
      )}
    </div>
  )
}