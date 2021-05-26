import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  function parseAccentText(text) {
    const accented = new Set();
    const parsed = [];
    let temp = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char == "<") {
        parsed.push(temp);
        temp = "";
      } else if (char == ">") {
        parsed.push(temp);
        accented.add(temp);
        temp = "";
      } else {
        temp += char;
      }
    }
    if (temp != "") {
      parsed.push(temp);
    }
    parsed.forEach((text, i) => {
      if (accented.has(text)) {
        parsed[i] = <span className="text--accented">{text}</span>;
      }
    });
    return parsed;
  }
  const image1 = `url(${post.frontmatter.images[0]})`;
  const image2 = `url(${post.frontmatter.images[1]})`;

  return (
    <Layout
      location={location}
      title={siteTitle}
      template="projects"
      themeColor1={post.frontmatter.colors[0]}
      themeColor2={post.frontmatter.colors[1]}
      themeAccent={post.frontmatter.colors[2]}
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
              <p className="project__subtitle">{post.frontmatter.title}</p>
              <h2 className="project__tagline">
                {parseAccentText(post.frontmatter.tagline)}
              </h2>
              {/* <h1 itemProp="headline">{post.frontmatter.title}</h1> */}
              <p className="hero-content__tags">
                {post.frontmatter.tags.join(", ")}
              </p>
              <p className="hero-content__date">{post.frontmatter.date}</p>
            </div>
            <div className="hero-image">
              <div
                className="hero-image-bg splash-image"
                style={{
                  backgroundImage: image1,
                }}
              ></div>
            </div>
          </div>
        </header>
        <section className="overview-wrapper">
          <div className="overview">
            <div className="overview__heading">
              <p className="project__subtitle">Overview</p>
              <h2 className="project__tagline">
                {post.frontmatter.overview_title.map((line) => (
                  <div>{parseAccentText(line)}</div>
                ))}
              </h2>
            </div>
            <div className="overview__body">
              <p className="project__p">{post.frontmatter.overview}</p>
            </div>
          </div>
        </section>
        <section className="splash-image-wrapper">
          <div
            className="splash-image"
            style={{
              backgroundImage: image2,
            }}
          ></div>
        </section>

        {post.html.trim() !== "" ? (
          <div className="blog-post global-wrapper">
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          </div>
        ) : null}

        {/* <footer className="project-post-bio">
          <Bio />
        </footer> */}
      </article>
      <nav className="project-post-nav">
        <ul className="project-post-nav-list">
          <li className="project-post-nav__item project-post-nav__item-left">
            {previous && (
              <Link
                className="project-post-nav-link"
                to={previous.fields.slug}
                rel="prev"
              >
                <p className="project-post-nav__tag">Previous project</p>
                <div>{previous.frontmatter.title}</div>
              </Link>
            )}
          </li>
          <li className="project-post-nav__item project-post-nav__item-right">
            {next && (
              <Link
                className="project-post-nav-link"
                to={next.fields.slug}
                rel="next"
              >
                <p className="project-post-nav__tag">Next project</p>
                <div>{next.frontmatter.title}</div>
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
        subtitle
        tagline
        tags
        overview_title
        overview
        colors
        images
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
