'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Mail, ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="IEEE WIE Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">IEEE WIE</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/#team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/events" className="text-sm font-medium hover:text-primary">
              Events
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="hidden md:flex bg-transparent">
              <Link href="/#contact">Join Us</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/events">Upcoming Events</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-950/30 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    IEEE Women in Engineering SB- Budge Budge Institute of technology
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Empowering women in engineering, technology, and sciences through education, networking, and
                    leadership development.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/#about">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/events">
                      View Events
                      <Calendar className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="IEEE WIE Members"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  <Users className="mr-1 h-3 w-3" />
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Vision</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  IEEE WIE is dedicated to promoting women engineers and scientists, and inspiring girls around the
                  world to follow their academic interests in a career in engineering and science.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="IEEE WIE Event"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Community Building</h3>
                      <p className="text-muted-foreground">
                        Creating a supportive network for women in engineering and technology fields.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Professional Development</h3>
                      <p className="text-muted-foreground">
                        Providing opportunities for skill enhancement and career growth.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Outreach & Advocacy</h3>
                      <p className="text-muted-foreground">
                        Inspiring the next generation of women engineers through mentorship and educational programs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold text-center mb-8">Gallery</h3>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/ieee-wie-event-.jpg?key=f1iym&height=250&width=250&query=IEEE+WIE+event+${item}`}
                      width={250}
                      height={250}
                      alt={`Gallery image ${item}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300 aspect-square"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  <Users className="mr-1 h-3 w-3" />
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Leadership</h2>
              </div>
            </div>
            {/* Compact Team Section */}
            <div className="mx-auto grid max-w-7xl gap-4 py-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  name: "Shreeja Dey",
                  role: "Chairperson",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Dipsita Kundu",
                  role: "Vice Chair",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Ankita Biswas",
                  role: "Secretary",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Anasuya Roy",
                  role: "Treasurer",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Lopa Pathak",
                  role: "Events Coordinator",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Tithi Bose",
                  role: "Webmaster",
                  image: "/placeholder.svg?height=300&width=300",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="object-cover transition-all hover:scale-105 h-full w-full"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="text-sm font-bold truncate">{member.name}</h3>
                    <p className="text-xs text-primary mb-2">{member.role}</p>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Linkedin className="h-3 w-3" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Github className="h-3 w-3" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Mail className="h-3 w-3" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    <Mail className="mr-1 h-3 w-3" />
                    Get in Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions or want to join our chapter? Reach out to us and we'll get back to you soon.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-muted-foreground">wieexample@university.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Meetings</h3>
                      <p className="text-sm text-muted-foreground">
                        Every year, Room 302
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Social Media</h3>
                      <div className="mt-1 flex gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-transparent">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-transparent">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-transparent">
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <input
                      id="first-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <input
                      id="last-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter the subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=30&width=30"
              alt="IEEE WIE Logo"
              width={30}
              height={30}
              className="rounded-md"
            />
            <span className="text-lg font-semibold">IEEE WIE</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} IEEE Women in Engineering Student Chapter Budge Budge Institute of technology. All rights reserved.
            Made with love by Tithi
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
