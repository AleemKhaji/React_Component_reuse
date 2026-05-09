// import './cardgrid.scss'
// import ProfileCard from './card';

// export default function Cardgrid() {
//   return (
//     <>
//     <div className="app">
//           <ProfileCard
//               name="Anjali Sharma"
//               role="Frontend Engineer"
//               senior={true}
//               skills="Angular Developer"
//               Description="working as front developer with more than 5 years of experience" />
//           <ProfileCard
//               name="Sharma"
//               role="Frontend Engineer"
//               senior={false} />
//           <ProfileCard
//               name="Anjali"
//               role="Frontend Engineer"
//               senior={true} />
//           <ProfileCard
//               name="Neha"
//               role="Frontend Engineer"
//               senior={true} />
//           <ProfileCard
//               name="Ravi"
//               role="Frontend Engineer"
//               senior={true}
//               Description='Senior Tech Lead with 20 year of experience in Banking Domain' />
//       </div>
//       <div className="app2">

//               <ProfileCard
//                   name="Anjali Sharma"
//                   role="Frontend Engineer"
//                   senior={true}
//                   skills="Angular Developer"
//                   Description="working as front developer with more than 5 years of experience"
//                   />

//               <ProfileCard
//                   name="Sharma"
//                   role="Frontend Engineer"
//                   senior={false} />
//               <ProfileCard
//                   name="Anjali"
//                   role="Frontend Engineer"
//                   senior={true} />
//               <ProfileCard
//                   name="Neha"
//                   role="Frontend Engineer"
//                   senior={true} />
//               <ProfileCard
//                   name="Ravi"
//                   role="Frontend Engineer"
//                   senior={true}
//                   Description='Senior Tech Lead with 20 year of experience in Banking Domain' />
//           </div>
//           </>
//   );
// }

import "./cardgrid.scss";
import ProfileCard from "./card";

// const profiles = [
//   { id: 1, name: 'Anjali Sharma', role: 'Frontend Engineer', senior: true,
//     skills: 'Angular Developer',
//     description: 'Working as front developer with 5+ years of experience' },
//   { id: 2, name: 'Sharma',  role: 'Frontend Engineer', senior: false },
//   { id: 3, name: 'Anjali',  role: 'Frontend Engineer', senior: true },
//   { id: 4, name: 'Neha',    role: 'Frontend Engineer', senior: true },
//   { id: 5, name: 'Ravi',    role: 'Frontend Engineer', senior: true,
//     description: 'Senior Tech Lead with 20 years of experience in Banking Domain' },
// ];

export default function Cardgrid({ profiles = [] }) {
  return (
    <div className="app">
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
  );
}
