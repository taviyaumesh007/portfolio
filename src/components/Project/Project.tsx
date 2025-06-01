import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  const projects = [
    {
      title: "Zero Heroes",
      role: "React Developer",
      description:
        "Utilized Artificial Intelligence (AI) to develop innovative solutions for stopping pollution and creating a sustainable environment.",
      tech: ["React.js", "WordPress", "Bootstrap", "Redux"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "eFone",
      role: "Junior React Developer",
      description:
        "A web app used for chat and call functionalities, developed with a modern tech stack for real-time communication.",
      tech: ["React", "Material-UI", "Socket.IO", "JavaScript", "Redux Toolkit"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "Breaking Bad Character",
      role: "Developer",
      description: "Built an app to display all Breaking Bad characters using React.",
      tech: ["HTML", "CSS", "JavaScript", "React.js"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "Counter App",
      role: "Developer",
      description: "Created a simple counter application using JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "Reddit Clone",
      role: "Developer",
      description: "Developed a simple Reddit homepage clone using basic web technologies.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "Netflix Clone",
      role: "Developer",
      description: "Built a Netflix homepage clone with focus on UI using HTML, CSS, and JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "YouTube Clone",
      role: "Developer",
      description: "Created a clone of the YouTube homepage.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
    {
      title: "Password Generator",
      role: "Developer",
      description: "Developed a random password generator using JavaScript.",
      tech: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/taviyaumesh007",
      liveLink: null,
    },
  ];
const workExperience = [
  {
    company: "Hexylon Analytics",
    role: "Senior React.js Developer",
    duration: "Dec 2024",
    project: "ERP System",
    responsibilities: [
      "Developed scalable UI components using React.js and Tailwind CSS.",
      "Integrated REST APIs across Inventory, HR, Sales, and Finance modules.",
      "Implemented complex form validations with Yup.",
      "Used Redux/Context API for optimized state management.",
      "Managed user roles with conditional rendering and access controls.",
      "Collaborated with backend teams for smooth API communication.",
    ],
    keyLearnings: [
      "Mastered enterprise-level frontend architecture.",
      "Strengthened debugging and performance optimization skills.",
      "Improved understanding of clean code, documentation, and modular development.",
    ],
    additionalContributions: [
      "Developed autonomous agents using Agentic AI with Node.js.",
      "Automated internal tasks through agent-based architecture.",
      "Set up Dockerized environments and CI/CD pipelines with GitHub Actions.",
    ],
  },
  {
    company: "Goldenmace IT Solutions",
    role: "Senior React.js Developer",
    duration: "March 2024 - Nov 2024",
    responsibilities: [
      "Built interactive UI using React.js for eco-awareness platforms.",
      "Managed dynamic content using WordPress CMS.",
      "Promoted eco-friendly practices through tech-integrated design.",
    ],
  },
  {
    company: "Celloip Technology",
    role: "Junior Web Developer",
    duration: "January 2023 - February 2024",
    project: "eFone",
    techStack: ["HTML", "CSS", "JavaScript", "React.js", "Material-UI", "Redux Toolkit", "Socket.IO"],
    responsibilities: [
      "Developed features for a chat and call web app using React.js and real-time communication with Socket.IO.",
      "Collaborated with a team to maintain and improve application performance and user experience.",
    ],
  },
  {
    company: "BVM Infotech",
    role: "Web Development Training",
    duration: "July 2022 - December 2022",
    responsibilities: [
      "Gained foundational skills in frontend and backend web technologies.",
      "Worked on building responsive web applications and gained practical experience in front-end development.",
    ],
  },
];

  

  return (
    <>
    
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation key={index} animateIn="flipInX">
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="GitHub Link" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Live Site Link" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
      </Container>
      <Container id="experience">
      <h2>Work History</h2>
      <div className="experience">
        {workExperience.map((job, index) => (
          <ScrollAnimation key={index} animateIn="fadeInUp">
            <div className="job">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="job-info">
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                  <span>{job.duration}</span>
                </div>
              </header>
              <div className="body">
                <h4>Responsibilities:</h4>
                <ul>
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
                {job.techStack && (
                  <>
                    <h4>Tech Stack:</h4>
                    <ul className="tech-list">
                      {job.techStack.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>

      </>

  );
}