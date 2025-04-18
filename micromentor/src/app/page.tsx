import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Teachers from '@/components/home/Teachers';
import Download from '@/components/home/Download';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Teachers />
      <Download />
    </Layout>
  );
}