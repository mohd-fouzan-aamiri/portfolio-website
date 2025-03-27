import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const skills = [
    {
      category: "Threat Intelligence & Incident Response",
      items: [
        "SIEM (Splunk, ELK Stack)",
        "Threat Hunting",
        "Log Analysis",
        "Incident Response",
        "Digital Forensics",
        "OSINT",
        "Trend Detection",
      ],
    },
    {
      category: "Network & Endpoint Security",
      items: [
        "Firewalls (Palo Alto, Cisco ASA)",
        "IDS/IPS",
        "VPN",
        "EDR/XDR",
        "TCP/IP",
        "Zero Trust Architecture",
        "Microsegmentation",
      ],
    },
    {
      category: "Vulnerability Management & Penetration Testing",
      items: ["Ethical Hacking", "Adversary Emulation", "Risk Management", "Threat Modeling", "Malware Analysis"],
    },
    {
      category: "Cloud Security & IAM",
      items: [
        "AWS IAM",
        "GCP Security",
        "Azure Security Center",
        "Privileged Access Management",
        "Multi-Factor Authentication",
      ],
    },
    {
      category: "Security Automation & Scripting",
      items: ["Python", "PowerShell", "Bash", "SQL", "Java", "C++", "Infrastructure as Code", "Security Automation"],
    },
    {
      category: "Compliance & Risk Management",
      items: ["NIST", "ISO 27001", "SOC 2", "GDPR", "HIPAA", "PCI-DSS", "Security Audits"],
    },
  ]

  const education = [
    {
      institution: "Pace University, Seidenberg School of Computer Science and Information Systems",
      location: "New York, NY",
      degree: "Master of Science (MS) in Cybersecurity",
      date: "Expected May 2025",
      courses: [
        "Information Security Policy & Management (GRC)",
        "Network Engineering/Security & Defense",
        "Ethical Hacking and Penetration testing",
        "Malware Analysis and Reverse Engineering",
        "Cyber Threat Intelligence Analysis & Modelling",
        "Digital & Mobile Forensics",
        "Automating Information security with Python & PowerShell",
        "Data Centers",
      ],
    },
    {
      institution: "Visvesvaraya Technological University",
      location: "Bangalore, KA",
      degree: "Bachelor of Engineering (BE) in Computer Engineering",
      date: "July 2022",
      courses: [
        "Computer Network & Security",
        "Cryptography",
        "Operating Systems",
        "Data Communications",
        "Software Engineering",
        "Unix Programming",
        "Artificial Intelligence & Machine Learning",
        "Data Structures",
        "Software Architecture & Design Patterns",
      ],
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="mb-2">
                      <h4 className="text-xl font-medium">{edu.institution}</h4>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.date}</p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <Badge key={i} className="bg-blue-600 hover:bg-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Networking Essentials (Cisco)</Badge>
                <Badge variant="secondary">Microsoft Azure IAM</Badge>
                <Badge variant="secondary">CompTia A+</Badge>
                <Badge variant="secondary">Security+ (In Progress)</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

