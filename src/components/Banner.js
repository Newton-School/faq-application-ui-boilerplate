import React, { useState } from "react";

import "../styles/styles.css";

export default function Banner({ children, ...restProps }) {
  return (
    <div className="Container" {...restProps}>
      <div className="Inner">{children}</div>
    </div>
  );
}
Banner.Header = function BannerHeader({ children, ...restProps }) {
  return (
    <div className="Header" {...restProps}>
      {" "}
      {children}
    </div>
  );
};

Banner.Entity = function BannerEntity({ children, ...restProps }) {
  return (
    <div className="Entity" {...restProps}>
      {children}
    </div>
  );
};
Banner.Question = function BannerHeader({ children, ...restProps }) {
  return (
    <div className="Question" {...restProps}>
      {children}
    </div>
  );
};
Banner.Text = function BannerText({ children, ...restProps }) {
  return (
    <div className="Text" {...restProps}>
      {children}
    </div>
  );
};
