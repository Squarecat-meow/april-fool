import PageHeader from './components/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <PageHeader />
      {children}
    </section>
  );
}
