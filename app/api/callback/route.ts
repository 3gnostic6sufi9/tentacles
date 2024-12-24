import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const oauthVerifier = searchParams.get('oauth_verifier')
  const oauthToken = searchParams.get('oauth_token')

  try {
    // Log the tokens (for debugging during setup)
    console.log('Received callback with:', {
      verifier: oauthVerifier,
      token: oauthToken
    })

    // Return HTML response
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
            <p>You can close this window now.</p>
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