export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full flex flex-col items-center border-b border-b-gray-300">
      <h1 className="text-2xl my-6 relative inline-flex justify-center items-start">
        <span className="w-[1em] h-[1em] absolute translate-x-2 -z-[1] bg-blue-200/50 rounded-full" />
        <span className="w-[1em] h-[1em] absolute -translate-x-2 -z-[1] bg-red-200/50 rounded-full" />
        {children}
      </h1>
    </section>
  );
}
