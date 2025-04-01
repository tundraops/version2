import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Automation Agency",
  description: "Your partner for AI automation solutions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
  
          {children}
       
      </body>
    </html>
  )
}

