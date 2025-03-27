import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Cybersecurity Graduate Researcher",
      company: "Pace University",
      location: "New York, NY",
      period: "September 2023 - May 2025",
      responsibilities: [
        "Developed security automation scripts using Python & PowerShell, including network scanning (Nmap), forensic data extraction, and automated threat detection.",
        "Led open-source intelligence (OSINT) research on STV Incorporated, conducting domain reconnaissance, DNS analysis, and security risk assessment.",
        "Designed a Public Key Infrastructure (PKI) solution for document encryption using self-signed certificates and tested cross-platform decryption.",
        "Investigated TCP session hijacking and SYN flooding attacks, replicating the Mitnick Attack in a controlled environment and proposing defensive strategies.",
        "Analyzed mobile forensics data (Android & iOS), including file system extraction, encrypted artifacts, and call detail record (CDR) analysis.",
        "Wrote detailed technical reports and case studies, providing actionable insights for threat intelligence, incident response, and forensic investigations.",
      ],
    },
    {
      title: "Cybersecurity Case Study Participant",
      company: "2024 ISACA NYM Cybersecurity Case Study Competition",
      location: "Remote",
      period: "January 2024 - May 2024",
      responsibilities: [
        "Conducted an in-depth analysis of the SolarWinds cyberattack, a significant security breach that impacted multiple organizations globally.",
        "Conducted extensive examination of the SolarWinds attack, identifying critical vulnerabilities and security gaps within the compromised supply chain.",
        "Designed a comprehensive security framework emphasizing proactive threat detection, vulnerability mitigation, and robust incident response to prevent similar future breaches.",
        "Worked closely with team members in an industry-competitive setting, exchanging insights and implementing security best practices based on real-world cybersecurity scenarios.",
        "Received recognition for teamwork and analytical skills, and actively engaged with industry mentors, cybersecurity experts, and peers, gaining valuable insights into real-world threat mitigation strategies.",
      ],
    },
    {
      title: "Associate Customer Care Engineer",
      company: "Smartbear",
      location: "Bangalore, KA",
      period: "February 2023 - August 2023",
      responsibilities: [
        "Analyzed customer-reported technical issues and anomalies, identifying patterns and trends in software performance.",
        "Worked with large datasets from logs to detect error trends and resolve customer issues, improving resolution time by 50%.",
        "Collaborated with engineering teams to identify security vulnerabilities and software abuse cases, contributing to a 15% improvement in product reliability.",
        "Assisted in network security assessments, ensuring proper configurations and compliance with industry standards.",
        "Provided data-driven insights for improving fraud detection and abuse mitigation strategies in software products.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Cnetric Global Inc.",
      location: "Bengaluru, India",
      period: "August 2022 - October 2022",
      responsibilities: [
        "Assisted in deploying enterprise software solutions on cloud platforms, improving efficiency and scalability.",
        "Utilized industry-standard tools such as Postman for API testing and Node.js for backend development, leading to a 30% reduction in response time for server requests.",
        "Developed and optimized server-side logic using Node.js, ensuring faster execution times and improved data processing.",
        "Worked within an Agile development environment, collaborating with cross-functional teams to meet project deadlines and deliver high-performance software solutions.",
      ],
    },
    {
      title: "Machine Learning & AI Intern",
      company: "Quant Masters",
      location: "India",
      period: "August 2021 - September 2021",
      responsibilities: [
        "Led and executed a Sentiment Analysis Project on Amazon Reviews, earning a Certificate of Excellence for dedication and contributions.",
        "Collected and cleaned large datasets of Amazon customer reviews, transforming raw data into a structured format suitable for analysis.",
        "Utilized Scikit-learn and TensorFlow to develop and train sentiment analysis models, accurately classifying customer reviews as positive, neutral, or negative.",
        "Experimented with different machine learning algorithms, optimizing hyperparameters to improve model accuracy and efficiency.",
        "Employed Matplotlib and Seaborn to generate insightful data visualizations, presenting findings on customer sentiment trends effectively.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} | {exp.location}
                    </CardDescription>
                  </div>
                  <CardDescription className="text-sm md:text-right">{exp.period}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

