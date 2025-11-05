/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'

// We are adding 'export' so the homepage (page.tsx) can import this file.
export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  title: 'Frog Frame',
})

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    // We are using the safe placeholder image URL
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

export const GET = handle(app)
export const POST = handle(app)
