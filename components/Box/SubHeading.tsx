export default function SubHeading({
  text,
  bgColor,
}: {
  text: string;
  bgColor: string;
}) {
  return (
    <div className={`flex-grow  text-center py-2 bg-[${bgColor}] w-full`}>
      {text}
    </div>
  );
}
