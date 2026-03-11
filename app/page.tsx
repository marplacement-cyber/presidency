"use client";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";

import { ProgramSearch } from "./components/ProgramSearch";
import { RankingsStatsSection } from "./components/RankingsStatsSection";

import { ProgramsMasonrySection } from "./components/ProgramsSection";
import { PlacementsSection } from "./components/PlacementsSection";

import { LifeAtPresidency } from "./components/InfrastructureSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { MasterPlanSection } from "./components/MasterPlanSection";

import { EventsActivitiesSection } from "./components/ProgramSection";
import { UpcomingEvents } from "./components/FeaturesSection";
import { CommunitySection } from "./components/CommunitySection";

import { AlumniTestimonials } from "./components/AlumniTestimonials";
import { ThoughtLeadersSection } from "./components/ThoughtLeadersSection";

import { AdmissionSection } from "./components/AdmissionSection";
import { CTASection } from "./components/CTASection";

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

      {/* Rankings + Stats */}
      <RankingsStatsSection />

      {/* Programs Overview */}
      <ProgramsMasonrySection />

      {/* Campus Facilities */}
      <AmenitiesSection />
      {/* Campus Master Plan */}
      <MasterPlanSection />

      {/* Campus Infrastructure */}
      <LifeAtPresidency />
      {/* Student Life */}
      <EventsActivitiesSection />
      {/* Placement & Careers */}
      <PlacementsSection />

      {/* Events */}
      <UpcomingEvents />

      {/* Community & Clubs */}
      <CommunitySection />

      {/* Alumni Stories */}
      <AlumniTestimonials />

      {/* Faculty & Thought Leaders */}
      <ThoughtLeadersSection />

      {/* Admissions */}
      <AdmissionSection />

      {/* Final Call to Action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
