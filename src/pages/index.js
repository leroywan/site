import React from "react";
import { Link, graphql } from "gatsby";
import Fade from "react-reveal/Fade";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Leroy's Projects."
        description="I am a web developer/designer and I love building things. Click in to take a peek at some of my projects!"
      />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          if (post.frontmatter.blog !== "projects") {
            return null;
          }
          const title = post.frontmatter.title || post.fields.slug;
          const imageUrl = `url(${post.frontmatter.images[0]})`;
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <Link to={post.fields.slug} itemProp="url">
                  <Fade bottom duration={800} distance="15px">
                    <div
                      className="post-list-image"
                      style={{ backgroundImage: imageUrl }}
                    ></div>
                  </Fade>
                </Link>
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">
                        <Fade cascade bottom duration={600} distance="10px">
                          {title}
                        </Fade>
                      </span>
                    </Link>
                  </h2>
                  <Fade bottom duration={600} distance="10px">
                    {post.frontmatter.tags.map((item, i) => (
                      <small className="project-tags" key={`${i}-${item}`}>
                        {item}
                      </small>
                    ))}
                  </Fade>
                </header>
                <section>
                  <Fade bottom duration={600} distance="10px">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.excerpt || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <div style={{ textAlign: "right" }}>
                      <Link to={post.fields.slug}>
                        <small>continue reading →</small>
                      </Link>
                    </div>
                  </Fade>
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___post_order], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          excerpt
          images
          tags
          blog
        }
      }
    }
  }
`;
