import styles from './styles.module.scss'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return <>
    <html lang="pt-BR">
      <head>
        <title>NEXTJS - APP ROUTER</title>
      </head>
      <body>
        <small>app layout</small>
        {children}
        <small>app layout</small>
      </body>
    </html>
  </>
}
