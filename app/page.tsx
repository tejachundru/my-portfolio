import { siteConfig } from "@/config/site";
import WorkDetails from "@/components/portfolio/work-details";
import Projects from "@/components/portfolio/projects";
import Tools from "@/components/ui/tools/tools";
import { FadeIn } from "@/components/fade-in";

export default function IndexPage() {
	return (
		<main id="main-content" className="container mx-auto max-w-4xl grid gap-20 pb-24 pt-12 md:pt-16">
			{/* Hero */}
			<div className="flex flex-col items-start gap-5">
				<h1 className="flex flex-col items-start gap-0 leading-none">
					<span className="font-mono text-[1.4rem] uppercase tracking-[0.5em] text-muted-foreground/60 animate-fade-up [animation-delay:0ms]">
						Chundru
					</span>
					<span className="text-[clamp(4.5rem,18vw,9rem)] font-black tracking-tight text-foreground animate-fade-up [animation-delay:80ms]">
						Teja
					</span>
					<span className="mt-5 block h-[3px] w-36 bg-gradient-to-r from-highlight to-highlight-to origin-left animate-draw [animation-delay:350ms]" aria-hidden="true" />
				</h1>
				<p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/70 animate-fade-up [animation-delay:420ms]">
					{siteConfig.title}
				</p>
				<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground/80 animate-fade-in [animation-delay:560ms]">
					<span>{siteConfig.location}</span>
					<span aria-hidden="true">·</span>
					<a
						href={`mailto:${siteConfig.email}`}
						className="transition-colors hover:text-foreground"
					>
						{siteConfig.email}
					</a>
					<span aria-hidden="true">·</span>
					<a
						href={siteConfig.links.github}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-foreground"
					>
						GitHub
					</a>
					<span aria-hidden="true">·</span>
					<a
						href={siteConfig.links.linkedin}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-foreground"
					>
						LinkedIn
					</a>
				</div>
			</div>

			{/* About */}
			<FadeIn>
				<section aria-labelledby="about-heading">
					<p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-highlight/40" aria-hidden="true">01 —</p>
					<h2 id="about-heading" className="mb-6 text-[clamp(2rem,5vw,2.75rem)] font-black tracking-tight">About</h2>
					<p className="max-w-2xl border-l-[3px] border-highlight pl-6 text-base leading-relaxed text-muted-foreground">
						{siteConfig.description}
					</p>
				</section>
			</FadeIn>

			{/* Projects / Work */}
			<FadeIn>
				<Projects />
			</FadeIn>

			{/* Experience */}
			<FadeIn>
				<WorkDetails />
			</FadeIn>

			{/* Tools */}
			<FadeIn>
				<Tools />
			</FadeIn>
		</main>
	);
}
