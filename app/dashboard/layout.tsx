export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <small>app/dashboard/layout.jsx</small>
      {children}
      <small>app/dashboard/layout.jsx</small>
  </>
}
