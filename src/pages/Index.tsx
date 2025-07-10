import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FaGithub, 
  FaLinkedin, 
  FaReddit, 
  FaEnvelope, 
  FaExternalLinkAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa";
import { 
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";
import tata from '../../img/tata.jpg';

const Index = () => {
  const techStack = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500", level: "Expert" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", level: "Expert" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: "Expert" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", level: "Advanced" },
    { name: "React.js", icon: FaReact, color: "text-cyan-400", level: "Expert" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: "Advanced" },
    { name: "Express", icon: SiExpress, color: "text-gray-300", level: "Advanced" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600", level: "Intermediate" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", level: "Intermediate" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white", level: "Begginer" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", level: "Expert" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600", level: "Advanced" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500", level: "Intermediate" },
    { name: "AWS", icon: FaAws, color: "text-orange-400", level: "Intermediate" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive full-stack e-commerce solution featuring user authentication, payment integration with Stripe, advanced product filtering, shopping cart functionality, and an intuitive admin dashboard for inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      status: "Live",
      complexity: "Advanced"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, drag-and-drop functionality, deadline tracking, and comprehensive project analytics dashboard.",
      tech: ["TypeScript", "React", "PostgreSQL", "Socket.io", "Redis"],
      status: "In Development",
      complexity: "Advanced"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, automated reporting, scheduled posting, engagement metrics, and multi-platform integration for comprehensive social media management.",
      tech: ["Next.js", "Tailwind CSS", "Python", "FastAPI", "Chart.js"],
      status: "Live",
      complexity: "Expert"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, group chats, emoji reactions, message encryption, and cross-platform compatibility for seamless communication.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
      status: "Live",
      complexity: "Advanced"
    },
    {
      title: "AI-Powered Content Generator",
      description: "Intelligent content generation platform using machine learning algorithms to create SEO-optimized articles, social media posts, and marketing copy with customizable tone and style settings.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma", "Vercel"],
      status: "Beta",
      complexity: "Expert"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Comprehensive crypto portfolio tracker with real-time price updates, profit/loss calculations, market analysis, price alerts, and detailed historical performance charts.",
      tech: ["React", "Redux", "CoinGecko API", "Chart.js", "LocalStorage"],
      status: "Live",
      complexity: "Intermediate"
    }
  ];

  const achievements = [
    { title: "50+ Projects", description: "Successfully delivered diverse web applications", icon: "🚀" },
    { title: "98% Client Satisfaction", description: "Consistently exceeding client expectations", icon: "⭐" },
    { title: "5+ Years Experience", description: "Continuous learning and growth in tech", icon: "📈" },
    { title: "Open Source Contributor", description: "Active contributor to developer community", icon: "🌟" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="relative z-10 text-center space-y-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-secondary p-1 animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                {/* Replaced 'A' with image */}
                <img src={tata} alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-orbitron font-black bg-gradient-primary bg-clip-text text-transparent animate-float tracking-wider">
              AKRAM MAHMUD ABDI
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Passionate Full Stack Developer
            </p>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Creating innovative digital solutions with modern technologies
            </p>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/akramtata" className="text-3xl text-primary hover:text-accent transition-colors hover:scale-110 transform duration-300">
              <FaGithub />
            </a>
            <a href="#" className="text-3xl text-primary hover:text-accent transition-colors hover:scale-110 transform duration-300">
              <FaLinkedin />
            </a>
            <a href="https://www.reddit.com/user/Delicious_Cost_1981/" className="text-3xl text-primary hover:text-accent transition-colors hover:scale-110 transform duration-300">
              <FaReddit />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 shadow-glow animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl bg-gradient-secondary bg-clip-text text-transparent">
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a passionate Full Stack Developer with a deep love for creating innovative digital solutions. 
                With expertise in both frontend and backend technologies, I enjoy building applications that not only 
                look great but also provide exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in software development has equipped me with a diverse skill set spanning modern JavaScript 
                frameworks, server-side technologies, and database management. I thrive on solving complex problems 
                and turning ideas into reality through clean, efficient code.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and 
                continuously learning to stay at the forefront of web development trends.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card 
                  key={tech.name} 
                  className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-2 animate-tech-float bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <CardContent className="p-4 text-center space-y-3">
                    <div className="relative">
                      <IconComponent className={`text-4xl mx-auto ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full blur-lg transition-opacity duration-300"></div>
                    </div>
                    <h3 className="font-exo font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                    <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                      {tech.level}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-orbitron font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              Achievements & Stats
            </h2>
            <p className="text-lg text-muted-foreground">
              Milestones that define my journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-accent transform hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm text-center"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-exo font-bold text-primary group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Some of my recent work
            </p>
          </div>
          
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-primary flex-1">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-col gap-2 ml-2">
                      <Badge 
                        variant={project.status === "Live" ? "default" : project.status === "Beta" ? "secondary" : "outline"}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                        {project.complexity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30 text-primary hover:bg-primary/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 group">
                    <FaExternalLinkAlt className="mr-2 text-sm group-hover:scale-110 transition-transform" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-8">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in working together or just want to say hello?
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:bg-gradient-secondary text-primary-foreground font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-glow-secondary transition-all duration-300"
          >
            <FaEnvelope className="mr-2" />
            Get In Touch
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-primary/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2024 Akram Mahmud Abdi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <FaGithub className="text-xl" />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="text-primary hover:text-accent transition-colors">
              <FaReddit className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;