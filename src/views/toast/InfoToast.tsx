export const InfoToast = ({ message }: { message: string }) => {
  return (
    <div className="flex w-full rounded-md bg-slate-50 p-5 shadow-md">
      <p className="whitespace-pre-wrap text-[14px] leading-[18px]">
        {message}
      </p>
    </div>
  );
};
