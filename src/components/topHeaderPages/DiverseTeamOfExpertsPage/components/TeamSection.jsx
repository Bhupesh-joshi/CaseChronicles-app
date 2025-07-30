import TeamMemberCard from "./TeamMemberCard";

const teamData = [
  {
    photo: "https://media.gettyimages.com/id/1992829721/photo/portrait-of-a-happy-teacher-smiling-at-the-university.jpg?s=612x612&w=0&k=20&c=60plI6OSg9zgyMZr1HZH0QdSlGoQw6eiR_uPVZ0_NHE=",
    name: "Dr. Maya Sharma",
    role: "Education Specialist",
    country: "India",
    tags: ["Education", "Curriculum", "Policy"],
    linkedin: "https://linkedin.com/in/mayasharma",
    bio: "Dr. Maya has worked on national education reform projects for over 10 years..."
  },
  {
    photo: "https://media.gettyimages.com/id/1465887169/photo/portrait-of-a-teacher.jpg?s=612x612&w=0&k=20&c=zcAHOoKayf9UTQoNuvd2HX4um3AuXhU5Bf8h79YhVEo=",
    name: "Mr. Alex Thompson",
    role: "Medical Expert",
    country: "USA",
    tags: ["Healthcare", "Community Health", "Workshops"],
    linkedin: "https://linkedin.com/in/alexthompson",
    bio: "Alex has led rural health camps and telemedicine projects across North America."
  },
  {
    photo: "https://media.gettyimages.com/id/2150354561/photo/portrait-of-a-female-professor-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=l9Mok6SPetjWPR3pLOpyv3W5f9lItziOJEsLSv1cE5E=",
    name: "Ms. Andria Johnson",
    role: "Outreach Coordinator",
    country: "Pakistan",
    tags: ["Field Work", "NGO Collaboration", "Awareness"],
    linkedin: "https://linkedin.com/in/aishakhan",
    bio: "Aisha brings over 8 years of experience coordinating outreach for non-profits in South Asia."
  },
];


const TeamSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {teamData.map((member, idx) => (
        <TeamMemberCard key={idx} member={member} />
      ))}
    </div>
  );
};

export default TeamSection;
