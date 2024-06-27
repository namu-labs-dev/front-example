import { useRouter } from "next/navigation";
import { useState } from "react";
import { TestPage2Template } from "~/components/Templates/TestPage2/TestPage2Template";

export const TestPage2Container = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<any>({});

  const testPage2TemplateProps: React.ComponentProps<
    typeof TestPage2Template
  > = {
    testPage2HeaderModuleProps: {
      title: "Vote",
      bg: "white",
      // onClickLeftIcon: () => router.back(),
    },
    testPage2FormModuleProps: {
      setFormData,
    },
  };

  return <TestPage2Template {...testPage2TemplateProps} />;
};
