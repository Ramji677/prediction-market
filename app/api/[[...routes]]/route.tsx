/** @jsxImportSource frog/jsx */

// We are removing 'devtools' and 'serveStatic' as they are for local development only
import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'

const app = new Frog({
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

// We have removed the 'devtools' line that was here

export const GET = handle(app)
export const POST = handle(app)
