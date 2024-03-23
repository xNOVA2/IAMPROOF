export default function SubHeading({
  text,
  bgColor,
  number
}: {
  text: string;
  bgColor: string;
  number?:number
}) {
  return (
    <div className={`flex-grow  text-center py-2 bg-[${bgColor}] w-full`}>
        <p className="font-semibold">
        {text}
        <strong>{number}</strong>
        </p>
      
    </div>
  );
}
