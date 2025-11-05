import { getFrameMetadata } from 'frog/next'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  // This is your correct production URL
  const vercelUrl = 'https://prediction-market-wyw6.vercel.app'
  
  const frameTags = await getFrameMetadata(
    `${vercelUrl}/api`,
  )
  return {
    other: frameTags,
  }
}

// This is the simple homepage. It's not part of the frame.
export default function Page() {
  return (
    <main>
      <h1>Prediction Market Frame</h1>
      <p>This is a Farcaster Frame. You can see it in a Farcaster client like Warpcast.</p>
    </main>
  )
}
