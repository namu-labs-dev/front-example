import { type footerProps } from "~/components/Modules/TestPage1/TestPage1FooterModule";
import SVGAtom from "../SVGAtom/SVGAtom";

export const FooterAtom = (props: footerProps) => {
  return (
    <div className='flex h-full items-center bg-[#262626]'>
      {Array.isArray(props.tabs) &&
        props.tabs.map((tab, index) => (
          <button
            onClick={() => props.changeTab(index)}
            key={index}
            className={`${props.currentTab === index ? "border-t-2 border-[#00EC97] text-white" : "text-[#8C8C8C]"} flex h-full w-full items-center justify-center active:text-white`}
          >
            <SVGAtom iconName={tab} width={24} height={24} />
          </button>
        ))}
    </div>
  );
};
