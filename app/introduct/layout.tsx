import PageHeader from '../components/page-header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <PageHeader />
      {children}
    </section>
  );
}
