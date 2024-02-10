
export function ReportingBoxElement({
    question,
    answer,
  }: {
    question?: string;
    answer?: string;
  }) {
    return (
      <div className="flex  gap-2">
        <div className="w-[60%]  text-end bg-[#F5F9F6] py-2 text-sm">{question}</div>
        <div className="py-2 text-sm">{answer}</div>
      </div>
    );
  }
  
  export function ReportBox({
    heading,
    children,
    subHeading,
  }: {
    heading?: string;
    children?: React.ReactNode;
    subHeading?: string;
  }) {
    return (
      <div className="border-2 border-[#439A86] w-full h-fit rounded-2xl">
      <h1 className="text-xs text-[#BCD8C1] px-2">{subHeading}</h1>
      <div className="w-full bg-[#BCD8C1] text-center py-2 max-w-[your preferred width] mx-auto">
        <h1>{heading}</h1>
      </div>
      <div>{children}</div>
    </div>
    );
  }
  