"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:mfouzanaamir@gmail.com"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    mfouzanaamir@gmail.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+15512608984"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    (551) 260-8984
                  </a>
                </div>
              </div> */}

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <a
                    href="https://github.com/mohd-fouzan-aamiri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    github.com/mohd-fouzan-aamiri
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/mohdfouzan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-blue-600 transition-colors"
                  >
                    linkedin.com/in/mohdfouzan
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {submitSuccess && (
                  <p className="text-green-600 text-center mt-2">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

