import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';

import Head from '../components/head';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  const { edges } = data.allContentfulBlogPost;

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog Page</h1>
      <ol className={blogStyles.posts}>
        {edges.map(edge => {
          const { title, publishedDate, slug } = edge.node;
          return (
            <li key={slug} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
