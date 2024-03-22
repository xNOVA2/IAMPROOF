export default function SubHeading({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}) {
  return (
    <div className={`flex-grow  text-center py-2 bg-[${bgColor}] w-full`}>
        <p className="font-semibold">
        {text.slice(0, -2)}
        <strong>{text.slice(-2)}</strong>
        </p>
      
    </div>
  );
}
