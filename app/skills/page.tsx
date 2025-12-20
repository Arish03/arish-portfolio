"use client";

import PageWrapper from "@/components/PageWrapper";
import PageHeader from "@/components/PageHeader";

const skills = [
  {
    title: "💻Frontend & Web Development",
    items: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Framer Motion",
      "Modern Web Development",
      "Responsive UI",
      "Component-Based Architecture",

    ],
  },
  {
    title: "⚙️Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Python (Basics)",
    ],
  },
  {
    title: "📦Databases",
    items: [
      "MongoDB",
      "SQL",
      "SQLite",
    ],
  },
  {
    title: "🎨 UI/UX & Product Design",
    items: [
      "UI/UX Design",
      "User-Centered Design",
      "Interactive Interfaces",
      "Design Systems",
    ],
  },
  {
    title: "⚙️ Automation & Tools",
    items: [
      "n8n Automation",
      "Workflow Automation",
      "API Integration",
      "Low-Code Automation",
    ],
  },
  {
    title: "☁️ Cloud & IoT",
    items: [
      "Azure IoT",
      "MQTT Dashboards",
      "Real-Time Data Visualization",
      "Cloud-to-Device Communication",
    ],
  },
  {
    title: "📊 Digital Marketing Basics",
    items: [
      "Landing Page Optimization",
      "Performance Tracking",
      "User Engagement Strategies",
    ],
  },
  {
    title: "🛠️ DevOps & Version Control",
    items: [
      "Git & GitHub", 
      "CI/CD Basics",
    ],
  },    
  {
    title: "🧠 Data Visualization & Analysis",
    items: [
      "Power BI",
      "Data Visualization ",
      "Dashboard Reporting",
    ]
  },
  {
    title: "Authentication & Security",
    items: [
      "JWT Authentication",
      "OAuth Basics",
      "Firebase Auth",
    ],
  },
  {
    title: "🧰 Other Tools & Technologies",
    items: [
      "Figma",
      "VS Code",
      "Postman",
      "Docker",
      "Linux (Basics)",
      "Agile Methodologies",
      ],
  }
];

export default function SkillsPage() {
  return (
    <PageWrapper>
      {/* Centered Header */}
      <PageHeader
        label="Skills"
        title="Technologies & Tools I work with"
        description="A frontend-first skill set used to design, build, and ship modern web applications."
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
        {skills.map((group) => (
          <div key={group.title} className="card">
            <h2 className="text-lg font-semibold">
              {group.title}
            </h2>

            <ul className="mt-4 space-y-2 text-muted-foreground">
              {group.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
