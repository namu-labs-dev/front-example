import { EmptyTemplate } from "~/components/Templates/Empty/EmptyTemplate";

export const EmptyContainer = () => {

  const emptyTemplateProps: React.ComponentProps<typeof EmptyTemplate> = {
    emptyFirstModuleProps: { title: "EmptyFirstModule" },
  emptySecontModuleProps: { title: "EmptySecontModule" },
  emptyThirdModuleProps: { title: "EmptyThirdModule" },
  };

  return <EmptyTemplate {...emptyTemplateProps} />;
};
