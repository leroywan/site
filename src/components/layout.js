import React from "react";
import { Link } from "gatsby";

const Layout = ({
  location,
  title,
  template,
  themeColor1,
  themeColor2,
  themeAccent,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const [menuOpen, setMenuOpen] = React.useState(false);
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        {/* <div className={`menu ${menuOpen ? " menu--open" : null}`}>
          <p>Home</p>
        </div>
        <div
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <div className="hamburger-top"></div>
          <div className="hamburger-mid"></div>
          <div className="hamburger-btm"></div>
        </div> */}
      </>
    );
  }

  const wrapperClass = template
    ? `global-wrapper global-wrapper--${template}`
    : "global-wrapper";

  return (
    <div
      style={{
        "--color-theme-bg-1": themeColor1,
        "--color-theme-bg-2": themeColor2,
        "--color-theme-accent": themeAccent,
      }}
      className={wrapperClass}
      data-is-root-path={isRootPath}
    >
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  );
};

export default Layout;
