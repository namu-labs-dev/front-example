export const InfoToast = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full  bg-[#F0F5FF] p-5 ">
      <p className="whitespace-pre-wrap text-[17.58px] leading-[28.57px] ">
        <span className="font-bold text-[#2F54EB] ">10 FAO </span>
        {message}
      </p>
    </div>
  );
};
