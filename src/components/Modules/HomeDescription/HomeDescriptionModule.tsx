export const HomeDescriptionModule = () => {
  return (
    <div className="flex flex-col gap-2 text-[16px]">
      {/* 
        우리가 해외 개발자에게 원하는 최소 능력
          1. 우리의 페이지 구성 규칙을 이해하고, 이 규칙을 따라 요청 페이지를 제작하는 것
          2. 페이지 내부의 구성 요소들 중 변동성이 있는 요소 혹은 비즈니스 로직이 들어가는 요소를 Container에서 핸들링 할 수 있게 하는 것
          3. 각 코드파일 별 convention을 지키는 것
          4. Sample Link를 통해 보여준 기초 컴포넌트들을 이해하고 사용할 수 있는 것
        우리가 해외 개발자에게 원하는 최대 능력
          1. 우리의 페이지 구성 규칙의 미흡함을 발견하고, 이를 개선하여 결과물에 반영하는 것(이 경우 주석을 통한 설명을 작성해야 함)
          2. Sample 코드에서 제공하는 기초 컴포넌트의 미흡함을 발견하고, 이를 개선하여 결과물에 반영하는 것(이 경우 주석을 통한 설명을 작성해야 함)
        예시 페이지들의 역할 간단 설명 
          1. Empty: 페이지 구성 규칙 및 기초 layout을 확인할 수 있는 페이지
          2. PageWithModal: 기초 컴포넌트인 Modal 컴포넌트의 사용법을 확인할 수 있는 페이지
          3. PageWithForm: 기초 컴포넌트인 Form 컴포넌트의 사용법을 확인할 수 있는 페이지
        
          translate korean description to English and make markdown
        */}
      <p className="flex flex-col gap-1 text-[14px]">
        <b>Simple explanation of the roles of sample pages</b>
        <ol className="list-outside list-decimal pl-7">
          <li>
            Empty: A page where you can check the page configuration rules and
            basic layout
          </li>
          <li>
            PageWithModal: A page where you can check how to use the basic
            component, Modal component
          </li>
          <li>
            PageWithForm: A page where you can check how to use the basic
            component, Form component
          </li>
        </ol>
      </p>

      <p className="flex flex-col gap-1 text-[14px]">
        <b>Minimum ability we want from developers</b>
        <ol className="list-outside list-decimal pl-7">
          <li>
            Understanding our page configuration rules and creating a requested
            page following these rules
          </li>
          <li>
            Handling volatile elements or elements containing business logic in
            the *Container.tsx file
          </li>
          <li>Following the convention for each code file</li>
          <li>
            Understanding and using basic components shown through the Sample
            Link
          </li>
        </ol>
      </p>

      <p className="flex flex-col gap-1 text-[14px]">
        <b>Maximum ability we want from developers</b>
        <ol className="list-outside list-decimal pl-7">
          <li>
            Finding the inadequacies of our page configuration rules and
            improving them to reflect the results (In this case, you must write
            an explanation through comments)
          </li>
          <li>
            Finding the inadequacies of the basic components provided in the
            Sample code and improving them to reflect the results (In this case,
            you must write an explanation through comments)
          </li>
        </ol>
      </p>
    </div>
  );
};
