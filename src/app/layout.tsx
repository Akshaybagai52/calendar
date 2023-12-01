'use client'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import { SessionProvider } from "next-auth/react";

import './globals.css'
import { store } from '@/store/store'
import { Provider } from 'react-redux'

// export const metadata: Metadata = {
//   title: 'Calendar',
//   description: 'Booking Calendar App',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        {/* <link
          rel="styleSheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        ></link> */}
        <title>Calendar</title>
      </head>
      <body>
        <div>
          <SessionProvider>
            {/* <Provider store={store}> */}
              <section>
                <Navbar />
                <main>{children}</main>
              </section>
            {/* </Provider> */}
          </SessionProvider>,
        </div>
      </body>
    </html>
  )
}
