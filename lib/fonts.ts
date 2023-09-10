import { JetBrains_Mono as FontMono, Lato as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "700"],
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
