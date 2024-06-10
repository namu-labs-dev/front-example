export const PageWithModalDescriptionModule = () => {
  return (
    <div className="flex flex-col gap-5">
      <b className="text-lg">Modal Components</b>
      {/* 
        다양한 상황에서 사용하기 위해 Ant Design의 Modal 컴포넌트가 아닌 커스텀 모달 컴포넌트를 만들어 사용합니다
        만들어진 컴포넌트를 재사용하거나 보강하여 사용하면 됩니다

        translate above description to English and make markdown
       */}
      <p className="whitespace-pre-wrap">
        {`To use in various situations, create a custom modal component instead of the Ant Design Modal component.\nYou can reuse the created component or enhance it for use.`}
      </p>
    </div>
  );
};
