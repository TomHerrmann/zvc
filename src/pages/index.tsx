import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Upcoming from '../components/Upcoming';

export default function IndexPage() {
  return (
    <Layout>
      <Hero />
      <Upcoming />
    </Layout>
  );
}
