export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    <small>template</small>
    <div>{children}</div>
    <small>template</small>
  </div>
}
