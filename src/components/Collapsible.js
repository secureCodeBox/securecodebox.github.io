import React, { Fragment } from "react";
import Collapsible from "react-collapsible";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function CollapsibleWrapper({ trigger, children, ...props }) {
  const triggerComponent = (
    <Fragment>
      {trigger}
      <IoIosArrowDown className="arrow-down" />
      <IoIosArrowForward className="arrow-up" />
    </Fragment>
  );
  return (
    <Collapsible trigger={triggerComponent} {...props}>
      {children}
    </Collapsible>
  );
}
