"use client";

import SnapshotModal from "~/components/Atoms/Modal/SnapshotModal";
import { RootStyleRegistry } from "./RootStyleRegistry";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="m-auto h-screen max-w-[500px] overflow-auto bg-white">
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </div>
      <SnapshotModal />
    </>
  );
}
