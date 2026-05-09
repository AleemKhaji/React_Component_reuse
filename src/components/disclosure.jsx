import "./disclosure.scss";

export default function Disclosure({
  message,
  title,
  type = "info", // default value — info | warning | error
}) {
  return (
    <div className={`disclosure disclosure--${type}`}>
      {title && <strong className="disclosure__title">{title}</strong>}
      <p className="disclosure__message">{message}</p>
    </div>
  );
}
