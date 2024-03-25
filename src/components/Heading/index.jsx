import React from "react";

const sizes = {
  s: "text-xs font-semibold",
  md: "text-[13px] font-semibold",
  xs: "text-[11px] font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
