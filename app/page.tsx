import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import WorkDetails from "@/components/portfolio/work-details"

export default function IndexPage() {
  return (
    <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-2">
        <h1 className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text p-2 text-center text-4xl font-extrabold leading-tight tracking-tighter text-transparent md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-2 max-w-[700px] text-center text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
      </div>
      <WorkDetails />
    </section>
  )
}
