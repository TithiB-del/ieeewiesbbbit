"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowLeft, Filter, X } from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function EventsPage() {
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null)

  // Sample events data - in a real app, this would come from a database or API which is non functional in this case hehe, events are for example now only
  const events = [
    {
      id: 1,
      title: "BBIT-WIE Students' Forum Inauguration Ceremony & Distinguished Lecture on Brain Computer Interfacing: A Machine Learning Approach",
      date: "2024-11-25",
      time: "1:00 PM - 2:30 PM",
      location: "Seminar Hall, BBIT",
      description:
        "In order to empower students specially woman ,to make them self-sufficient by enhancing practical skills and to bridge up the gap between theoretical and practical knowledge, the Department of ECE, Budge Budge Institute of Technology Kolkata collaborated with IEEE-WIE (IEEE Women in Engineering)- the department of ECE,BBIT in collaboration with IEEE-MTTS and WIE Chapter has planned to open an affinity group by Prof.Dr. Sheli Sinha Chaudhuri,R-10, WIE Chair and Prof. Dr. Sudipta Chattopadhyay, IEEE WIE committee member and Dr. Pratyusha Rakshit IEEE WIE Kolkata Section. IEEE-WIE has been inaugurated at ECE Department, Budge Budge Institute of Technology on 25th November,2024 at 1 p.m. followed by a Distinguished Lecture on \"Brain Computer Interfacing\" by Prof. (Dr.) Sudipta Chattopadhyay, Jadavpur University. The WIE Students' Chapter of BBIT has been set up with 5 student members from ECE dept. with active involvement of departmental faculty members. The WIE Centre, Kolkata region provided support and co-ordination in the establishment of the chapter. In order to inaugural the IEEE-WIE (Women in Group. the Department of ECE, BBIT Engineering),the purpose of IEEE-WIE is to give a platform for the student members to exchange ideas by organizing/participating in technical programs, activities and other technical events. They would get the benefit for technical visits / practical training/project work in R&D laboratories/ industries that increases their spirit of self-reliance and professionalism.",
      image: "/pics/event01.png?height=300&width=500",
      additionalImages: [
        "/pics/event01.png?height=400&width=600",
        "/pics/event02.png?height=400&width=600",
      ],
      category: "Panel",
    },
    {
      id: 2,
      title: "Workshop on Modern Tools for RF and Microwave Antenna Design & Analysis",
      date: "2025-03-21",
      time: "9:30 AM - 3:30 PM",
      location: "Seminar Hall & AC314",
      description:
        "A hands-on workshop introducing the basics of Modern Tools for RF and Microwave Antenna Design & Analysis.",
      image: "/pics/event02.png?height=300&width=500",
      additionalImages: [
        "/pics/event02.png?height=400&width=600",
      ],
      category: "Workshop",
    },
    {
      id: 3,
      title: "IEEE MTT-S Online Distinguished Microwave Lecture on 100-300 GHz Wireless: Transistors, ICs, systems",
      date: "2025-04-09",
      time: "7:30 PM - 8:30 PM",
      location: "Gmeet",
      description:
        "Online Distinguished Microwave Lecture on 100-300 GHz wireless: Transistors, ICs, systems to be held on 9th April 2025, from 7:30 pm to 8:30 pm.",
      image: "/pics/event03.png?height=300&width=500",
      additionalImages: [
        "/pics/event03.png?height=400&width=600",
      ],
      category: "Workshop",
    },
    {
      id: 4,
      title: "Synopsys lab visit",
      date: "2023-12-08",
      time: "2:00 PM - 5:00 PM",
      location: "Meeting at Engineering Building Entrance",
      description:
        "One Day Lab Visit to Antenna-Microwave and IC Design Lab in Jadavpur University was ORGANIZED BY Department of ECE-BBIT in collaboration with IEEE MTT-S, IEEE WIE & ISF BBIT chapter BUDGE BUDGE INSTITUTE OF TECHNOLOGY on 19th November 2024. Total 34 students had visited on that day accompanied with Prof. Deepak Kumar Nayak and Astt. Prof. Mr. Debarghya Roy of Dept. of ECE, BBIT Kolkata. Students got a lecturer from Dr. Sayan Chatterjee, ETCE Department, Jadavpur University regarding semiconductor solutions for Automation field. Students got oppurtunitiy to see how Ics are manufactured in real time starting from design program to final IC product. Students were also permitted to visit Antenna design lab where they learnt how to design and testing real time antennas and they were explained about different Instruments available in the Lab. Students were also encouraged to do one month crash practical course in Jadavpur University, about VLSI IC design which will help them to build there carrier and future MOU with the University was discussed.",
      image: "/pics/event04.png?height=300&width=500",
      additionalImages: [
        "/pics/event04.png?height=400&width=600",
      ],
      category: "Field Trip",
    },
    {
      id: 5,
      title: "The Semiconductor Renaissance Driving the Future of Technology & Poster Competition",
      date: "2025-04-10",
      time: "1:00 PM - 3:00 PM",
      location: "AC314",
      description:
        "Celebrating Womens day",
      image: "/pics/event05.png?height=300&width=500",
      additionalImages: [
        "/pics/event05.png?height=400&width=600",
      ],
      category: "Panel",
    },
    {
      id: 6,
      title: "Election of officers",
      date: "2024-01-20",
      time: "4:00 PM - 6:00 PM",
      location: "online",
      description:
        "election",
      image: "/pics/event06.png?height=300&width=500",
      additionalImages: [
        "/pics/event06.png?height=400&width=600",
      ],
      category: "Election",
    },
  ]

  const expandedEvent = events.find(e => e.id === expandedEventId)

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
            <Link href="/events" className="text-sm font-medium text-primary">
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
        {/* Events Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-950/30 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events & Activities</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover our upcoming events, workshops, and networking opportunities designed to empower and connect
                  women in engineering.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild variant="outline">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
                <Button>
                  <Filter className="mr-2 h-4 w-4" />
                  Filter Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Listing */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={500}
                      height={300}
                      className="object-cover transition-all hover:scale-105 h-full w-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
                      {event.category}
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4 text-primary" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4 text-primary" />
                        {event.location}
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full" onClick={() => setExpandedEventId(event.id)}>
                      See Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {expandedEvent && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto w-full">
              {/* Modal Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b bg-background">
                <h2 className="text-2xl font-bold">{expandedEvent.title}</h2>
                <button
                  onClick={() => setExpandedEventId(null)}
                  className="rounded-lg p-2 hover:bg-muted transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Event Details */}
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    {expandedEvent.category}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Date</p>
                        <p className="text-muted-foreground">
                          {new Date(expandedEvent.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Time</p>
                        <p className="text-muted-foreground">{expandedEvent.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">{expandedEvent.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Images Gallery */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Event Images</h3>
                  <div className="grid gap-4">
                    {expandedEvent.additionalImages?.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${expandedEvent.title} - Image ${idx + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Event Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap leading-relaxed">
                    {expandedEvent.description}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button className="flex-1">Register Now</Button>
                  <Button variant="outline" className="flex-1" onClick={() => setExpandedEventId(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Want to propose an event?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have an idea for a workshop, speaker, or activity? We'd love to hear from you!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/#contact">Submit Event Proposal</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#contact">Contact Event Coordinator</Link>
                </Button>
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
            &copy; {new Date().getFullYear()} IEEE Women in Engineering Student Chapter. All rights reserved. 
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
