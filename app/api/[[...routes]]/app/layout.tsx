export const metadata = {
  title: 'Prediction Market Frame',
  description: 'A Farcaster Frame for a prediction market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
