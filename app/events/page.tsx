import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowLeft, Filter } from "lucide-react"
import { ExternalLink } from "lucide-react"

export default function EventsPage() {
  // Sample events data - in a real app, this would come from a database or API
  const events = [
    {
      id: 1,
      title: "Women in Tech Panel Discussion",
      date: "2023-11-15",
      time: "5:00 PM - 7:00 PM",
      location: "Engineering Building, Room 302",
      description:
        "Join us for an inspiring panel discussion featuring successful women in various tech fields sharing their experiences and insights.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Panel",
    },
    {
      id: 2,
      title: "Technical Workshop: Introduction to Machine Learning",
      date: "2023-11-22",
      time: "4:00 PM - 6:00 PM",
      location: "Computer Science Lab, Room 105",
      description:
        "A hands-on workshop introducing the basics of machine learning with practical examples and exercises.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Workshop",
    },
    {
      id: 3,
      title: "Career Development: Resume Building",
      date: "2023-12-01",
      time: "3:30 PM - 5:00 PM",
      location: "Student Center, Conference Room B",
      description:
        "Learn how to craft an effective engineering resume that stands out to recruiters and highlights your skills and experiences.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Career",
    },
    {
      id: 4,
      title: "Industry Visit: Local Tech Company",
      date: "2023-12-08",
      time: "2:00 PM - 5:00 PM",
      location: "Meeting at Engineering Building Entrance",
      description:
        "Visit a leading local tech company to see real-world engineering applications and network with professionals.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Field Trip",
    },
    {
      id: 5,
      title: "End of Semester Social",
      date: "2023-12-15",
      time: "6:00 PM - 8:00 PM",
      location: "Student Center, Main Hall",
      description:
        "Join us to celebrate the end of the semester with food, games, and networking with fellow WIE members.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Social",
    },
    {
      id: 6,
      title: "Leadership Workshop",
      date: "2024-01-20",
      time: "4:00 PM - 6:00 PM",
      location: "Engineering Building, Room 302",
      description:
        "Develop essential leadership skills that will help you succeed in your engineering career and beyond.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Workshop",
    },
  ]

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
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
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
                    <Button className="w-full">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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

