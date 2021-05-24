import React from "react";
import { Link } from "gatsby";

const Layout = ({
  location,
  title,
  template,
  themeColor,
  themeAccent,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  const wrapperClass = template
    ? `global-wrapper global-wrapper--${template}`
    : "global-wrapper";

  return (
    <div
      style={{
        "--color-theme-bg": themeColor,
        "--color-theme-accent": themeAccent,
      }}
      className={wrapperClass}
      data-is-root-path={isRootPath}
    >
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
