import { getFrameMetadata } from 'frog/next'
import type { Metadata } from 'next'
// Import the 'app' instance from your route file
import { app } from './api/[[...routes]]/route'

export async function generateMetadata(): Promise<Metadata> {
  // Generate metadata from the app instance directly
  // This avoids the build-time network error
  const frameTags = await getFrameMetadata(app, '/')
  
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
