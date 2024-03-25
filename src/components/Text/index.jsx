import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-base font-normal",
  s: "text-[13px] font-normal",
  "2xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xl: "text-[17px] font-normal",
  md: "text-[15px] font-normal",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-700 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
