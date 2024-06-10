export const PageWithModalDescriptionModule = () => {
  return (
    <div className="flex flex-col gap-5">
      <b className="text-lg">Modal Components</b>
      {/* 
        다양한 상황에서 사용하기 위해 Ant Design의 Modal 컴포넌트가 아닌 커스텀 모달 컴포넌트를 만들어 사용합니다
        만들어진 컴포넌트를 재사용하거나 보강하여 사용하면 됩니다

        - SnapshotModal: Modal 내부에 들어가는 요소들이 정적이거나 반복되는 경우 사용하는 모달, views/modal 폴더에 사전 지정하여 사용
        - Modal: 동적인 상태처리가 필요한 경우 사용하는 컴포넌트, 각 페이지 내부에서 정의하여 사용

        위 두 가지 상황에서 사용할 수 있도록 컴포넌트를 분리해두었으니
        컴포넌트를 보강하는 경우, 앞서 설명한 원칙이 위배되지 않는 선에서 진행해주세요

        translate above description to English and make markdown
       */}
      <p className="whitespace-pre-wrap">
        {`To use in various situations, create a custom modal component instead of the Ant Design Modal component.\nYou can reuse the created component or enhance it for use.`}
      </p>

      <div className="flex flex-row justify-between gap-5">
        <div>
          <b>SnapshotModal</b>
          <p>
            {`Use when the elements inside the modal are static or repetitive, and predefine in the views/modal folder for use.`}
          </p>
        </div>

        <div>
          <b>Modal</b>
          <p>
            {`Use when dynamic state processing is required, define within each page for use.`}
          </p>
        </div>
      </div>
    </div>
  );
};
