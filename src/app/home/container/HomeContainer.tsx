import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: { title: "HomeHeaderModule" },
    homeContentModuleProps: {
      title: "HomeContentModule",
      sampleLinks: ["/empty", "/pageWithModal"],
      sampleNumbers: Array.from({ length: 100 }, (_, i) => i + 1),
    },
    homeFooterModuleProps: { title: "HomeFooterModule" },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
