import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout
      location={location}
      title={siteTitle}
      template="projects"
      themeColor={post.frontmatter.theme}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="project-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="hero-container">
          <div className="hero">
            <div className="hero-content">
              <p className="project__subtitle">Web Development</p>
              <h2 className="project__tagline">
                an overhauled look for a new line-up of products
              </h2>
              {/* <h1 itemProp="headline">{post.frontmatter.title}</h1> */}
              <p className="hero-content__tags">
                Design, Development, UX, QA, Integration
              </p>
              <p className="hero-content__date">{post.frontmatter.date}</p>
            </div>
            <div className="hero-image">
              <div className="hero-image-spacer"></div>
              <div className="hero-image-bg"></div>
            </div>
          </div>
        </header>
        <section className="overview-wrapper">
          <div className="overview">
            <div className="overview__heading">
              <p className="project__subtitle">Overview</p>
              <h2 className="project__tagline">
                new line-up.<br></br>new design.
              </h2>
            </div>
            <div className="overview__body">
              <p className="project__p">
                Coachella is a notorious cacophony of performances, selfies,
                installations, and general madness — and yet we went on location
                to get people’s attention. In anticipation of Childish Gambino’s
                new adidas shoe line and forthcoming performance, we sent
                invites to be the first to wear the shoes via AirDrop. What
                happened next, no one saw coming.
              </p>
            </div>
          </div>
        </section>
        <section className="splash-image-wrapper">
          <div className="splash-image"></div>
        </section>
        <section className="project-results-wrapper">
          <div className="project-results">
            <p className="project__subtitle">Results</p>
            <p className="project__tagline">91% faster site speed</p>
            <p className="project__tagline">A brand new payment portal</p>
            <p className="project__tagline">A much prettier website</p>
          </div>
        </section>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ProjectPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        theme
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
