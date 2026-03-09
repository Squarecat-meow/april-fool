const Timeline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <ul className={`w-fit mx-auto space-y-12 ${className ?? ""}`}>
      {children}
    </ul>
  );
};

function Element({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 relative">
      <div className="w-5 h-5 bg-blue-500 rounded-full grid place-items-center">
        <div className="w-4 h-4 border-2 border-white rounded-full" />
      </div>
      <div className="flex flex-col">{children}</div>
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
    <span className="absolute top-8 left-[0.55em] h-20 border-r-2 border-blue-500" />
  );
}

Timeline.Element = Element;
Timeline.Date = Date;
Timeline.Text = Text;
Timeline.Line = Line;

export default Timeline;
