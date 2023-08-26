import React from "react";
import Content from "@theme-original/AnnouncementBar/Content";

export default function ContentWrapper(props) {
  return (
    <div className="flex w-full items-center">
      <Content {...props} />
    </div>
  );
}
