export default function DashboardLayout({ children }: {
  children: React.ReactNode
}) {
  return <>
    <small>app/dashboard/settings/layout</small>
    <div>{children}</div>
    <small>app/dashboard/settings/layout</small>
  </>
}
