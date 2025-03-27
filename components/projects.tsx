import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const completedProjects = [
    {
      title: "Implementation of Public Key Infrastructure for Document Security",
      description: [
        "Designed and deployed a Public Key Infrastructure (PKI) using a self-signed certificate on Windows Server to encrypt and secure sensitive documents for Wonderville Town Hall.",
        "Ensured cross-platform compatibility by enabling secure decryption on Windows and Ubuntu, preventing unauthorized access to confidential files.",
        "Tested encryption mechanisms in a cyber range environment, simulating real-world attacks and validating security resilience.",
      ],
      link: "https://github.com/mohd-fouzan-aamiri/Implementing-PKI-for-Document-Security",
      tags: ["PKI", "Encryption", "Windows Server", "Ubuntu", "Security"],
    },
    {
      title: "Advanced Ransomware Analysis & Reverse Engineering",
      description: [
        "Conducted static & dynamic malware analysis on Sepsis Ransomware, utilizing PE View, PE Studio, IDA Pro, Procmon, Procdot, and Wireshark to reverse-engineer encryption techniques and identify Indicators of Compromise (IOCs).",
        "Dissected AES-128 CBC encryption methods, registry modifications, and persistence techniques, formulating defensive countermeasures against future ransomware threats.",
        "Provided detailed forensic documentation to support threat intelligence and incident response teams.",
      ],
      link: "https://github.com/mohd-fouzan-aamiri/Sepsis-Ransomware-Analysis",
      tags: ["Malware Analysis", "Reverse Engineering", "IDA Pro", "Wireshark", "Forensics"],
    },
    {
      title: "Open-Source Intelligence (OSINT) Threat Assessment",
      description: [
        "Conducted a comprehensive OSINT investigation using Shodan, Maltego, MXToolbox, and WHOIS lookups to map attack surfaces, employee exposure, and digital footprints of an organization.",
        "Assessed security risks related to DNS misconfigurations, email spoofing, and data breaches, providing actionable recommendations for mitigating cyber threats.",
        "Demonstrated real-world intelligence gathering techniques to aid threat detection, investigations, and security decision-making.",
      ],
      link: "https://github.com/mohd-fouzan-aamiri/OSINT-Project",
      tags: ["OSINT", "Threat Intelligence", "Shodan", "Maltego", "Risk Assessment"],
    },
    {
      title: "Recreation & Defense Analysis of the Mitnick Attack (TCP Session Hijacking)",
      description: [
        "Simulated Mitnick's TCP session hijacking attack in a controlled lab, showcasing vulnerabilities in TCP protocol and sequence number prediction.",
        "Executed a SYN flooding attack to demonstrate denial-of-service effects, reinforcing the importance of rate limiting, SYN cookies, and intrusion detection systems (IDS/IPS).",
        "Delivered technical insights and security hardening strategies to strengthen enterprise network defenses against similar real-world attacks.",
      ],
      link: "https://github.com/mohd-fouzan-aamiri/Mitnick-Attack",
      tags: ["TCP/IP", "Session Hijacking", "Network Security", "DoS", "IDS/IPS"],
    },
  ]

  const ongoingProjects = [
    {
      title: "Phishing Detection Using Machine Learning (Capstone Project)",
      description: [
        "Developing a phishing detection system using datasets (PhishTank, OpenPhish, Enron, SpamAssassin) and machine learning models (Logistic Regression, Random Forest, XGBoost, Deep Learning).",
        "Building a Chrome extension integrated with a Flask API to provide real-time phishing alerts for users.",
        "Deploying the model on cloud platforms (AWS, Azure, or GCP) or as a Streamlit Web App, ensuring scalability and usability.",
        "Conducting rigorous testing and validation of phishing detection accuracy across different domains and attack patterns.",
      ],
      status: "Capstone Project",
      tags: ["Machine Learning", "Phishing Detection", "Chrome Extension", "Flask", "API"],
    },
    {
      title: "Automated Penetration Testing & Vulnerability Assessment Tool",
      description: [
        "Developing a prompt-driven security assessment tool that integrates network scanning, vulnerability detection, and penetration testing in an AI-powered interface.",
        "Enhancing the tool to identify vulnerabilities, automate reconnaissance, and execute security tests using Metasploit, Nmap, Hydra, and JohnTheRipper.",
        "Implementing natural language prompts to allow users to request security tasks conversationally, improving usability for security analysts and red teams.",
        "Structuring the tool for future integrations with SIEM systems, enabling automated alerting and reporting on detected vulnerabilities.",
      ],
      status: "In Development",
      tags: ["Penetration Testing", "Automation", "AI", "Metasploit", "Nmap"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Completed Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i} className="text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm" className="flex items-center gap-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">Ongoing Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <Card key={index} className="flex flex-col h-full border-blue-600/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.title}</CardTitle>
                    <Badge className="bg-blue-600">{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {project.description.map((point, i) => (
                      <li key={i} className="text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

