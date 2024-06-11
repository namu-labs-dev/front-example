export const PageWithToastDescriptionModule = () => {
  return (
    <div className="flex flex-col gap-5">
      <b className="text-lg">Toast Components</b>
      {/* 
      Ant Design의 message 컴포넌트의 커스터마이징의 한계점으로 인해 사용하는 컴포넌트입니다.
      추가적인 Toast view가 필요한 경우 views/toast 폴더에 커스텀 Toast View 컴포넌트를 생성하여 사용합니다.

      translate above description to English and make markdown
     */}
      <span className="whitespace-pre-wrap">
        {`Ant Design's message component has limitations in customization, so we use this component.\nIf you need additional Toast views, create a custom Toast View component in the views/toast folder and use it.`}
      </span>
    </div>
  );
};
