"use client";

import SnapshotModal from "~/components/Atoms/Modal/SnapshotModal";
import { RootStyleRegistry } from "./RootStyleRegistry";
import SnapshotDrawerAtom from "~/components/Atoms/DrawerAtom/SnapshotDrawerAtom";
import { SnapshotToastAtom } from "~/components/Atoms/ToastAtom/SnapshotToastAtom";

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
      <SnapshotDrawerAtom />
      <SnapshotModal />
      <SnapshotToastAtom />
    </>
  );
}
