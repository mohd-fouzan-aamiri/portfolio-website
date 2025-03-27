import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Mohammed Fouzan Aamiri</h3>
            <p className="text-muted-foreground mt-2">Cybersecurity Professional</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/mohd-fouzan-aamiri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohdfouzan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mfouzanaamir@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Mohammed Fouzan Aamiri. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

