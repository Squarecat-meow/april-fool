type TDirection = "left" | "right";

function Timeline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={`mx-auto ${className ?? ""}`}>{children}</ul>;
}

function Element({
  children,
  direction = "right",
}: {
  children: React.ReactNode;
  direction?: TDirection;
}) {
  return (
    <li className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <div className={direction === "left" ? "text-right" : ""}>
        {direction === "left" && children}
      </div>
      <div className="w-5 h-5 bg-blue-500 rounded-full grid place-items-center z-10">
        <div className="w-4 h-4 border-2 border-white rounded-full" />
      </div>
      <div className={direction === "right" ? "text-left" : ""}>
        {direction === "right" && children}
      </div>
    </li>
  );
}

function Date({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function Line() {
  return (
    <li className="grid grid-cols-[1fr_auto_1fr] gap-4" aria-hidden>
      <div />
      <div className="w-5 flex justify-center">
        <span className="h-12 border-r-2 border-blue-500" />
      </div>
      <div />
    </li>
  );
}

Timeline.Element = Element;
Timeline.Date = Date;
Timeline.Text = Text;
Timeline.Line = Line;

export default Timeline;
