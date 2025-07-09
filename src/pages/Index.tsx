import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaLinkedin, FaReddit, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  const techStack = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React.js", 
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Next.js",
    "Tailwind CSS", "Git", "Docker", "AWS"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tech: ["TypeScript", "React", "PostgreSQL", "Socket.io"]
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and automated reporting.",
      tech: ["Next.js", "Tailwind CSS", "Python", "FastAPI"]
    }
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
                A
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-float">
              Akram Mahmud Abdi
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Passionate Full Stack Developer
            </p>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Creating innovative digital solutions with modern technologies
            </p>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="#" className="text-3xl text-primary hover:text-accent transition-colors hover:scale-110 transform duration-300">
              <FaGithub />
            </a>
            <a href="#" className="text-3xl text-primary hover:text-accent transition-colors hover:scale-110 transform duration-300">
              <FaLinkedin />
            </a>
            <a href="#" className="text-3xl text-primary hover:text-accent transition-colors hover:scale-110 transform duration-300">
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
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            {techStack.map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-lg py-2 px-4 bg-gradient-primary text-primary-foreground border-primary/30 hover:scale-105 transition-transform duration-300 shadow-glow-secondary"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {tech}
              </Badge>
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
                className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-2 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center justify-between">
                    {project.title}
                    <FaExternalLinkAlt className="text-sm text-accent" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-accent/50 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10">
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