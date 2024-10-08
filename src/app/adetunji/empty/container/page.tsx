import React from "react";
import EmptyTemplate from "../Template/EmptyTemplate";

export default function EmptyContainer() {
  return <EmptyTemplate />;
}

export function useContentInfo() {
  const title =
    "I created four pages (home, pageWithForm, pageWithModal and empty)";
  const desc1 =
    "Each Page containing the container, modules, template, atom, and Component folder";
  const desc2 =
    "I also tried to enhance the business logic, by introducing hooks in order to remove prop drilling of the business logic from the container folder";

  return {
    title,
    desc1,
    desc2,
  };
}
