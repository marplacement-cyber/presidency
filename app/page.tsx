"use client";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";

import { ProgramSearch } from "./components/ProgramSearch";
import { RankingsStatsSection } from "./components/RankingsStatsSection";
import { BangaloreSection } from "./components/bangalore-section";
import CampusLife from "./components/campus-life";
import { ProgrammesSection } from "./components/ProgramsSection";
import { PlacementsSection } from "./components/PlacementsSection";
import { AccreditationSection } from "./components/accreditation-section";
import { LifeAtPresidency } from "./components/InfrastructureSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { MasterPlanSection } from "./components/MasterPlanSection";

import { EventsActivitiesSection } from "./components/ProgramSection";
import { UpcomingEvents } from "./components/FeaturesSection";
import { CommunitySection } from "./components/CommunitySection";
import { WhyPresidency } from "./components/why-presidency";
import { AlumniTestimonials } from "./components/AlumniTestimonials";
import { ThoughtLeadersSection } from "./components/ThoughtLeadersSection";
import { TestimonialsSection } from "./components/testimonials-section";
import { AdmissionSection } from "./components/AdmissionSection";
import { CTASection } from "./components/CTASection";
import { ScholarshipsSection } from "./components/ScholarshipsSection";
import { RankingAccreditationSection } from "./components/RankingAccreditationSection";
import { ApplicationProcess } from "./components/application-process";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Banner */}
      <HeroSection />

      {/* Program Finder */}
      <ProgramSearch />
      <WhyPresidency />
      {/* Rankings + Stats */}
      {/* <RankingsStatsSection />
      <ScholarshipsSection />
      <RankingAccreditationSection /> */}
      {/* Programs Overview */}
      <ProgrammesSection />
      <CampusLife />
      <BangaloreSection />
      {/* Campus Facilities */}
      {/* <AmenitiesSection /> */}
      <AccreditationSection />
      <TestimonialsSection />
      <ApplicationProcess />
      {/* Campus Master Plan */}
      {/* <MasterPlanSection /> */}

      {/* Campus Infrastructure */}
      {/* <LifeAtPresidency /> */}
      {/* Student Life */}
      {/* <EventsActivitiesSection /> */}
      {/* Placement & Careers */}
      {/* <PlacementsSection /> */}

      {/* Events */}
      {/* <UpcomingEvents /> */}

      {/* Community & Clubs */}
      {/* <CommunitySection /> */}

      {/* Alumni Stories */}
      {/* <AlumniTestimonials /> */}

      {/* Faculty & Thought Leaders */}
      {/* <ThoughtLeadersSection /> */}

      {/* Admissions */}
      {/* <AdmissionSection /> */}

      {/* Final Call to Action */}
      <FinalCTA />
      {/* <CTASection /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
