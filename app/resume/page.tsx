"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-4xl mx-auto p-8 print:p-0">
        {/* Print-only button */}
        <div className="fixed top-4 right-4 print:hidden z-50 flex gap-2">
          <Button onClick={() => window.print()} className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>

        {/* Resume Content */}
        <div className="print:py-0 py-16">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">MOHAMMED FOUZAN AAMIRI</h1>
            <p className="text-gray-700">
              mfouzanaamir@gmail.com | (551) 260-8984 |
              <a href="https://github.com/mohd-fouzan-aamiri" className="text-blue-600 hover:underline">
                {" "}
                GitHub
              </a>{" "}
              |
              <a href="https://www.linkedin.com/in/mohdfouzan/" className="text-blue-600 hover:underline">
                {" "}
                LinkedIn
              </a>
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">EDUCATION</h2>
            <div className="mb-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">
                    Pace University, Seidenberg School of Computer Science and Information Systems
                  </h3>
                  <p>Master of Science (MS) in Cybersecurity</p>
                </div>
                <div className="text-right">
                  <p>New York, NY</p>
                  <p>05/2025</p>
                </div>
              </div>
              <p className="text-sm mt-1">
                <span className="font-semibold">Relevant Coursework:</span> Information Security Policy & Management
                (GRC), Network Engineering/Security & Defense, Ethical Hacking and Penetration testing, Malware Analysis
                and Reverse Engineering, Cyber Threat Intelligence Analysis & Modelling, Digital & Mobile Forensics,
                Automating Information security with Python & PowerShell, Data Centers
              </p>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">Visvesvaraya Technological University</h3>
                  <p>Bachelor of Engineering (BE) in Computer Engineering</p>
                </div>
                <div className="text-right">
                  <p>Bangalore, KA</p>
                  <p>07/2022</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">SKILLS</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Data Analysis & Security Intelligence:</span> Log Analysis, Trend
                Detection, Anomaly Identification, Incident Response, Threat Intelligence, SIEM (Splunk, ELK Stack),
                Data-driven Decision Making, Digital Forensics, OSINT (Maltego, Shodan, MXToolbox),
              </li>
              <li>
                <span className="font-semibold">Programming & Automation:</span> Python, C++, Java, PowerShell, Shell
                Scripting, SQL, Ansible, CloudFormation, Terraform, Python for Security Automation
              </li>
              <li>
                <span className="font-semibold">Security Tools & Platforms:</span> SIEM (Splunk), EDR (CrowdStrike,
                Microsoft Defender), SOAR, Wireshark, Nessus, Terraform, Windows & Linux Forensics, IDA Pro, FTK,
                Procmon, Procdot, UFED, OSINT Tools
              </li>
              <li>
                <span className="font-semibold">Networking & Cloud Security:</span> Palo Alto Firewall, Cisco ASA, VPN,
                DNS, EIGRP, BGP, OSPF, IDS/IPS, TLS/SSL, Wireless Security, Zero Trust Architecture (ZTA),
                Microsegmentation, AWS IAM, GCP Security, Azure Security Center
              </li>
              <li>
                <span className="font-semibold">Cybersecurity & Fraud Prevention:</span> Malware Analysis, Ransomware
                Reverse Engineering, Adversary Emulation (Atomic Red Team), Risk Management, Threat Modeling (MITRE
                ATT&CK, Diamond Model, Cyber Kill Chain), Intrusion Detection/Prevention, IAM, ISO 27001, NIST
                Framework, Phishing Detection & Analysis
              </li>
              <li>
                <span className="font-semibold">Cryptography & Secure Communications:</span> PKI (Public Key
                Infrastructure), TLS Certificate Management, OpenSSL, Self-Signed Certificates, Cryptographic Protocols
              </li>
              <li>
                <span className="font-semibold">Certifications:</span> Networking Essentials (Cisco), Microsoft Azure
                IAM, CompTia A+, Security+ (InProgress)
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">EXPERIENCE</h2>

            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Cybersecurity Graduate Researcher</h3>
                <p>09/2023–05/2025</p>
              </div>
              <div className="flex justify-between">
                <p className="italic">Pace University</p>
                <p>New York, NY</p>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Developed security automation scripts using Python & PowerShell, including network scanning (Nmap),
                  forensic data extraction, and automated threat detection.
                </li>
                <li>
                  Led open-source intelligence (OSINT) research on STV Incorporated, conducting domain reconnaissance,
                  DNS analysis, and security risk assessment.
                </li>
                <li>
                  Designed a Public Key Infrastructure (PKI) solution for document encryption using self-signed
                  certificates and tested cross-platform decryption.
                </li>
                <li>
                  Investigated TCP session hijacking and SYN flooding attacks, replicating the Mitnick Attack in a
                  controlled environment and proposing defensive strategies.
                </li>
                <li>
                  Analyzed mobile forensics data (Android & iOS), including file system extraction, encrypted artifacts,
                  and call detail record (CDR) analysis.
                </li>
                <li>
                  Wrote detailed technical reports and case studies, providing actionable insights for threat
                  intelligence, incident response, and forensic investigations.
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-bold">Associate Customer Care Engineer</h3>
                <p>02/2023 - 08/2023</p>
              </div>
              <div className="flex justify-between">
                <p className="italic">Smartbear</p>
                <p>Bangalore, KA</p>
              </div>
              <ul className="list-disc pl-5 mt-2">
                <li>
                  Analyzed customer-reported technical issues and anomalies, identifying patterns and trends in software
                  performance.
                </li>
                <li>
                  Worked with large datasets from logs to detect error trends and resolve customer issues, improving
                  resolution time by 50%.
                </li>
                <li>
                  Collaborated with engineering teams to identify security vulnerabilities and software abuse cases,
                  contributing to a 15% improvement in product reliability.
                </li>
                <li>
                  Assisted in network security assessments, ensuring proper configurations and compliance with industry
                  standards.
                </li>
                <li>
                  Provided data-driven insights for improving fraud detection and abuse mitigation strategies in
                  software products.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">PROJECTS</h2>

            <div className="mb-3">
              <h3 className="font-bold">
                Implementation of Public Key Infrastructure for Document Security
                <a
                  href="https://github.com/mohd-fouzan-aamiri/Implementing-PKI-for-Document-Security"
                  className="text-blue-600 hover:underline text-sm ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (GitHub)
                </a>
              </h3>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Designed and deployed a Public Key Infrastructure (PKI) using a self-signed certificate on Windows
                  Server to encrypt and secure sensitive documents for Wonderville Town Hall.
                </li>
                <li>
                  Ensured cross-platform compatibility by enabling secure decryption on Windows and Ubuntu, preventing
                  unauthorized access to confidential files.
                </li>
                <li>
                  Tested encryption mechanisms in a cyber range environment, simulating real-world attacks and
                  validating security resilience.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h3 className="font-bold">
                Advanced Ransomware Analysis & Reverse Engineering
                <a
                  href="https://github.com/mohd-fouzan-aamiri/Sepsis-Ransomware-Analysis"
                  className="text-blue-600 hover:underline text-sm ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (GitHub)
                </a>
              </h3>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Conducted static & dynamic malware analysis on Sepsis Ransomware, utilizing PE View, PE Studio, IDA
                  Pro, Procmon, Procdot, and Wireshark to reverse-engineer encryption techniques and identify Indicators
                  of Compromise (IOCs).
                </li>
                <li>
                  Dissected AES-128 CBC encryption methods, registry modifications, and persistence techniques,
                  formulating defensive countermeasures against future ransomware threats.
                </li>
                <li>
                  Provided detailed forensic documentation to support threat intelligence and incident response teams.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h3 className="font-bold">
                Open-Source Intelligence (OSINT) Threat Assessment
                <a
                  href="https://github.com/mohd-fouzan-aamiri/OSINT-Project"
                  className="text-blue-600 hover:underline text-sm ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (GitHub)
                </a>
              </h3>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Conducted a comprehensive OSINT investigation using Shodan, Maltego, MXToolbox, and WHOIS lookups to
                  map attack surfaces, employee exposure, and digital footprints of an organization.
                </li>
                <li>
                  Assessed security risks related to DNS misconfigurations, email spoofing, and data breaches, providing
                  actionable recommendations for mitigating cyber threats.
                </li>
                <li>
                  Demonstrated real-world intelligence gathering techniques to aid threat detection, investigations, and
                  security decision-making.
                </li>
              </ul>
            </div>

            <div className="mb-3">
              <h3 className="font-bold">
                Recreation & Defense Analysis of the Mitnick Attack (TCP Session Hijacking)
                <a
                  href="https://github.com/mohd-fouzan-aamiri/Mitnick-Attack"
                  className="text-blue-600 hover:underline text-sm ml-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (GitHub)
                </a>
              </h3>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Simulated Mitnick's TCP session hijacking attack in a controlled lab, showcasing vulnerabilities in
                  TCP protocol and sequence number prediction.
                </li>
                <li>
                  Executed a SYN flooding attack to demonstrate denial-of-service effects, reinforcing the importance of
                  rate limiting, SYN cookies, and intrusion detection systems (IDS/IPS).
                </li>
                <li>
                  Delivered technical insights and security hardening strategies to strengthen enterprise network
                  defenses against similar real-world attacks.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">ONGOING PROJECTS</h2>

            <div className="mb-3">
              <h3 className="font-bold">Phishing Detection Using Machine Learning (Capstone Project)</h3>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Developing a phishing detection system using datasets (PhishTank, OpenPhish, Enron, SpamAssassin) and
                  machine learning models (Logistic Regression, Random Forest, XGBoost, Deep Learning).
                </li>
                <li>
                  Building a Chrome extension integrated with a Flask API to provide real-time phishing alerts for
                  users.
                </li>
                <li>
                  Deploying the model on cloud platforms (AWS, Azure, or GCP) or as a Streamlit Web App, ensuring
                  scalability and usability.
                </li>
                <li>
                  Conducting rigorous testing and validation of phishing detection accuracy across different domains and
                  attack patterns.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Automated Penetration Testing & Vulnerability Assessment Tool</h3>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Developing a prompt-driven security assessment tool that integrates network scanning, vulnerability
                  detection, and penetration testing in an AI-powered interface.
                </li>
                <li>
                  Enhancing the tool to identify vulnerabilities, automate reconnaissance, and execute security tests
                  using Metasploit, Nmap, Hydra, and JohnTheRipper.
                </li>
                <li>
                  Implementing natural language prompts to allow users to request security tasks conversationally,
                  improving usability for security analysts and red teams.
                </li>
                <li>
                  Structuring the tool for future integrations with SIEM systems, enabling automated alerting and
                  reporting on detected vulnerabilities.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

