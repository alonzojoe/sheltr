import { cn } from "@/lib/utils";

const ComponentA = () => {
  const falsy = false;
  return (
    <div className={cn("text-red-500", falsy && "text-blue-500", "font-bold")}>
      Component A
    </div>
  );
};

export default ComponentA;
