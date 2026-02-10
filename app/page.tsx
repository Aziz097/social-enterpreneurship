import Hero from '@/components/sections/Hero';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import FrameworkCircle from '@/components/sections/FrameworkCircle';
import ContentPreview from '@/components/sections/ContentPreview';
import ReadinessQuiz from '@/components/sections/ReadinessQuiz';
import AuthorBio from '@/components/sections/AuthorBio';
import FinalCTA from '@/components/sections/FinalCTA';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <FrameworkCircle />
      <ReadinessQuiz />
      <ContentPreview />
      <AuthorBio />
      <FinalCTA />
    </>
  );
}
