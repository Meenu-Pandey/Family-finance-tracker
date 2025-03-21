import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { FinanceSidebar } from "@/components/sidebar/finance-sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Family Finance Tracker",
  description: "A unified family finance tracker application",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SidebarProvider>
            <div className="flex min-h-screen">
              <FinanceSidebar userRole="admin" userName="John Doe" />
              <SidebarInset className="flex-1">
                <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
                  <SidebarTrigger />
                  <div className="flex-1">
                    <h1 className="text-xl font-semibold">Family Finance Tracker</h1>
                  </div>
                </header>
                <main className="flex-1 p-6">{children}</main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'