import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Wrench, ShieldCheck, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logoImage from "@assets/image_1777309298437.png";

const services = [
  "Water heater installation & replacement",
  "Water softener installation",
  "Faucet installation & repair",
  "Toilet installation & repair",
  "Shower & tub installation",
  "Sink installation",
  "Washing machine hookup",
  "New construction rough-in",
  "Drain cleaning & leak detection",
  "Heating system service",
  "General plumbing repair",
];

const reviews = [
  {
    name: "Herb W.",
    text: "Super knowledgeable about our entire house even though he hadn't been here for 5+ years. Very honest and quick working, explained every step of his diagnosis. Great to work with!",
  },
  {
    name: "Jessica S.",
    text: "Went with Robert based on numerous recommendations from local Facebook community pages. He was responsive, texted when he was on his way, showed up within the time window he gave me, and fixed our issue.",
  },
  {
    name: "Anna M.",
    text: "I've used this company three times over the last couple years. They are very easy to work with, come out quickly, get the repairs done, clean up after, and the price is fair. Highly recommend!",
  },
  {
    name: "Richard D.",
    text: "Rheyler plumbing and heating installed all the new plumbing, water heater, shower, sink faucets, and toilet for our new addition. Very professional, responsive and did a great job.",
  },
  {
    name: "Edie T.",
    text: "Responsiveness was amazing. Same day service. Job was priced reasonably and completed in a timely fashion. Very knowledgeable. Will definitely be using him again.",
  },
  {
    name: "Charles E.",
    text: "Great, prompt service. Friendly and professional. Competitive, transparent, honest prices.",
  }
];

export function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message received!",
        description: "Thanks — please also call (443) 834-4195 for fastest response.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-3">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-md bg-foreground p-1.5 flex items-center justify-center shadow-sm">
              <img src={logoImage} alt="RHEyler Plumbing and Heating LLC logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl leading-none text-foreground tracking-tight">RHEyler</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mt-1">Plumbing &amp; Heating LLC</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo("services")} className="hover:text-secondary transition-colors">Services</button>
            <button onClick={() => scrollTo("reviews")} className="hover:text-secondary transition-colors">Reviews</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-secondary transition-colors">Contact</button>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+14438344195" className="hidden sm:flex items-center gap-2 font-display font-bold text-primary hover:text-primary/80 transition-colors text-lg">
              <Phone className="w-5 h-5" />
              (443) 834-4195
            </a>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold shadow-md">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Get Service</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0">
            <img 
              src="/hero-bg.png" 
              alt="Plumbing tools on pipes" 
              className="w-full h-full object-cover opacity-20 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="text-amber-100 border-amber-100/40 bg-white/10 mb-6 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  Carroll County, MD & Surrounding Areas
                </Badge>
                <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 leading-[1.1]">
                  Honest work.<br/>
                  <span className="text-amber-100">Fair prices.</span><br/>
                  Prompt service.
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
                  Owner-operated plumbing & heating by Robert Eyler. When you call, you get the owner. When we set a time, we show up.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="xl" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white shadow-xl shadow-secondary/20">
                    <a href="tel:+14438344195">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (443) 834-4195
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" className="h-14 px-8 text-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border-primary-foreground/20 backdrop-blur-sm" onClick={() => scrollTo("services")}>
                    See Our Services
                  </Button>
                </div>
                
                <div className="mt-12 flex items-center gap-6 text-sm font-medium text-primary-foreground/80">
                  <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-amber-100" /> Licensed & Insured</div>
                  <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-amber-100" /> Prompt Arrival</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">The local plumber neighbors recommend.</h2>
              <p className="text-lg text-muted-foreground">We skip the corporate sales pitch and go straight to solving your problem with honesty and expertise.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md bg-card/50">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">Owner-Operated</h3>
                  <p className="text-muted-foreground leading-relaxed">You deal directly with Rob Eyler. No dispatchers, no middlemen, just expert service from the owner.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-card/50">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">Great Communication</h3>
                  <p className="text-muted-foreground leading-relaxed">We text when we're on our way and show up when we say we will. Your time is valuable.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-card/50">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">Honest Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">Competitive, transparent prices. We diagnose the issue and explain the fix before we start working.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <h2 className="text-4xl font-display font-bold mb-6">Our Services</h2>
                <p className="text-lg text-muted-foreground mb-8">From minor repairs to major installations, we handle all residential plumbing and heating needs with precision and care.</p>
                
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-lg mb-8 hidden lg:block">
                  <img src="/water-heater.png" alt="Water heater installation" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {services.map((service, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-background rounded-xl shadow-sm border border-border/40 hover:border-secondary/50 transition-colors"
                    >
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                      <span className="font-medium text-foreground">{service}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 p-8 bg-primary text-primary-foreground rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                  <div>
                    <h4 className="text-xl font-display font-bold mb-2">Need something else?</h4>
                    <p className="text-primary-foreground/80">Call us to discuss your specific plumbing or heating needs.</p>
                  </div>
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white shrink-0 w-full sm:w-auto">
                    <a href="tel:+14438344195">Call to Discuss</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Real Customer Reviews</Badge>
              <h2 className="text-4xl font-display font-bold mb-4">Trusted by neighbors across Carroll County</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <Card key={i} className="bg-muted/20 border-border/50 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4 text-primary">
                      {[1,2,3,4,5].map(star => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-6 flex-1">"{review.text}"</p>
                    <div className="font-semibold text-foreground font-display">— {review.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">Get in touch</h2>
                <p className="text-lg text-primary-foreground/80 mb-10 max-w-md">
                  We're ready to help with your plumbing and heating needs. Call us directly for the fastest response, or send a message below.
                </p>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70 font-medium mb-1">Call Us</div>
                      <a href="tel:+14438344195" className="text-2xl font-display font-bold hover:text-amber-100 transition-colors">(443) 834-4195</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/70 font-medium mb-1">Service Area</div>
                      <div className="text-lg font-medium leading-tight">
                        Carroll County, MD & Surrounding Areas<br/>
                        <span className="text-base font-normal text-primary-foreground/80">Taneytown, Westminster, Hampstead, Manchester, New Windsor, Union Bridge</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl h-[300px] border-4 border-primary-foreground/10">
                  <iframe 
                    src="https://www.google.com/maps?q=410+Clover+Ct,+Taneytown,+MD+21787&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              <div className="bg-background rounded-3xl p-8 md:p-12 shadow-2xl text-foreground">
                <h3 className="text-2xl font-display font-bold mb-6">Request Service</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" required placeholder="John Doe" className="bg-muted/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <Input id="phone" type="tel" required placeholder="(555) 555-5555" className="bg-muted/50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-muted/50" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Needed</label>
                    <Select required>
                      <SelectTrigger className="bg-muted/50">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s, i) => (
                          <SelectItem key={i} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
                    <Textarea id="message" required placeholder="Describe your plumbing or heating issue..." className="min-h-[120px] bg-muted/50" />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    For fastest response, especially for emergencies, please call <a href="tel:+14438344195" className="font-semibold underline text-primary">(443) 834-4195</a> directly.
                  </p>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border/40 text-center md:text-left">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display font-bold text-xl mb-1">RHEyler Plumbing and Heating, LLC</div>
              <div className="text-muted-foreground text-sm">Owner: Robert Eyler • Licensed & Insured</div>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <div>410 Clover Ct, Taneytown, MD 21787</div>
              <div>&copy; {new Date().getFullYear()} All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 left-0 right-0 p-4 md:hidden z-50 pointer-events-none flex justify-center">
        <Button asChild size="lg" className="h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white shadow-2xl rounded-full pointer-events-auto">
          <a href="tel:+14438344195">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </Button>
      </div>

    </div>
  );
}
