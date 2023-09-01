export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return <>
    <header>
      <h1>header</h1>
      <nav>nav</nav>
    </header>
    <main>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </main>
    <footer>
      <small>footer</small>
    </footer>
  </>
}
