import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const state = searchParams.get('state')
  const code = searchParams.get('code')

  try {
    // Log the received data (for debugging)
    console.log('Received OAuth callback:', {
      state,
      code,
    })

    // Store these values securely (e.g., in a database)
    // You'll need them to refresh the token later

    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Twitter Authentication</title>
          <style>
            body {
              font-family: system-ui;
              background: #000;
              color: #22c55e;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
            }
            .container {
              text-align: center;
              padding: 2rem;
              border: 1px solid #22c55e;
              border-radius: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>✅ Authentication Successful</h1>
            <p>The authorization code has been received.</p>
            <p>You can close this window and return to Telegram.</p>
          </div>
        </body>
      </html>
      `,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    )
  } catch (error) {
    console.error('Twitter callback error:', error)
    return NextResponse.json(
      { message: 'Authentication failed', error },
      { status: 500 }
    )
  }
} 