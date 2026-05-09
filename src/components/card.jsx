import './card.scss'             

export default function ProfileCard({ name, role, senior,discription,skills }) {
  return (
    <div className="profile-card" tabIndex={1}>  
      <p>{name}</p>
      <p>{role}</p>
      {senior && <span className="badge">Senior</span>}
      <p>{skills}</p>
      <p>{discription}</p>
    </div>
  );
}