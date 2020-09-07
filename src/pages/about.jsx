import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import Head from '../components/head';

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About Page</h1>
    <p>I am me.</p>
    <p>
      Want to work with me? <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
);

export default AboutPage;
