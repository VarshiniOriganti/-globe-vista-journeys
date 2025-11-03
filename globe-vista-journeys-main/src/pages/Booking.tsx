import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Plane, ArrowRight } from "lucide-react";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-secondary to-accent py-20 text-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Plane size={16} />
              <span className="text-sm font-medium">Book Your Journey</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Start Your Adventure
            </h1>
            <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto">
              Fill out the form below and our travel experts will create a personalized itinerary for you.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
                <form className="space-y-8">
                  {/* Personal Info */}
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                      </div>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                      Trip Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination *</Label>
                        <Select>
                          <SelectTrigger id="destination">
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="santorini">Santorini, Greece</SelectItem>
                            <SelectItem value="japan">Kyoto, Japan</SelectItem>
                            <SelectItem value="alps">Swiss Alps</SelectItem>
                            <SelectItem value="maldives">Maldives</SelectItem>
                            <SelectItem value="safari">African Safari</SelectItem>
                            <SelectItem value="iceland">Iceland</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="packageType">Package Type *</Label>
                        <Select>
                          <SelectTrigger id="packageType">
                            <SelectValue placeholder="Select package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                            <SelectItem value="cultural">Cultural</SelectItem>
                            <SelectItem value="beach">Beach & Islands</SelectItem>
                            <SelectItem value="safari">Wildlife & Safari</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="departureDate">Departure Date *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                          <Input id="departureDate" type="date" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="travelers">Number of Travelers *</Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                          <Input id="travelers" type="number" min="1" placeholder="2" className="pl-10" required />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                      Additional Information
                    </h2>
                    <div className="space-y-2">
                      <Label htmlFor="message">Special Requests or Questions</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about any special requirements, dietary restrictions, or questions you have..."
                        rows={5}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button type="submit" size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-14 group">
                      Request Quote
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
                    </Button>
                    <Button type="button" size="lg" variant="outline" className="flex-1 h-14">
                      Save for Later
                    </Button>
                  </div>

                  <p className="text-muted-foreground text-sm text-center">
                    By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
