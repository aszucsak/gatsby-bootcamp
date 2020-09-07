import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Homepage</h1>
      <h3>This is me. I am a web developer from Hungary.</h3>
      <Link to="/contact">Contact page</Link>
    </Layout>
  );
}
