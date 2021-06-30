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

  // Test heap
  (window.heap = window.heap || []),
    (heap.load = function (e, t) {
      (window.heap.appid = e), (window.heap.config = t = t || {});
      var r = document.createElement("script");
      (r.type = "text/javascript"),
        (r.async = !0),
        (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
      var a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(r, a);
      for (
        var n = function (e) {
            return function () {
              heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
          },
          p = [
            "addEventProperties",
            "addUserProperties",
            "clearEventProperties",
            "identify",
            "resetIdentity",
            "removeEventProperty",
            "setEventProperties",
            "track",
            "unsetEventProperty",
          ],
          o = 0;
        o < p.length;
        o++
      )
        heap[p[o]] = n(p[o]);
    });
  heap.load("515629820");

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
