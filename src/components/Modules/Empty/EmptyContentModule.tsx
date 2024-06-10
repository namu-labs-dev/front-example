import { EmptyContentAtom } from "~/components/Atoms/EmptyContentAtom/EmptyContentAtom";
import { EmptyContentComponent } from "~/components/Components/EmptyContentComponent/EmptyContentComponent";

type Props = {
  moduleProps: string;
  componentProps: React.ComponentProps<typeof EmptyContentComponent>;
  atomProps: React.ComponentProps<typeof EmptyContentAtom>;
};

export const EmptyContentModule = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1>{props.moduleProps}</h1>
      <EmptyContentComponent {...props.componentProps} />
      <EmptyContentAtom {...props.atomProps} />
    </div>
  );
};
