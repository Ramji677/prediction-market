/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Note: We're using a static image URL for `image` in c.res()
  // to avoid the `getImageSize` error that was crashing the server.
  title: 'Frog Frame',
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    // Use a simple, static image URL. This will not crash.
    // This is a 1200x630px placeholder image.
    image: `https://placehold.co/1200x630/000000/FFFFFF?text=${
      status === 'response'
        ? `You picked ${fruit?.toUpperCase() || '...'}`
        : 'Welcome!'
    }`,
    imageAspectRatio: '1.91:1',
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
