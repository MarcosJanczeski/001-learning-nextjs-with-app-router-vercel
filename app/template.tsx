export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    <small>app/template</small>
    <div>{children}</div>
    <small>app/template</small>
  </div>
}
