import Hero from '../components/Hero';
// import TwoStep from '../components/TwoStep';
import ExplainTemporal from '../components/ExplainTemporal';
import UseCases from '../components/UseCases';
import CaseStudies from '../components/CaseStudies';
import JoinUs from '../components/JoinUs';
import TemporalVs from '../components/TemporalVs';
import FinalQuote from '../components/FinalQuote';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io Home</title>
      </Head>
      <Hero />
      {/* <TwoStep /> */}
      <ExplainTemporal />
      <UseCases />
      <CaseStudies />
      <JoinUs />
      <TemporalVs />
      <FinalQuote />
      <Footer />
    </div>
  );
}
