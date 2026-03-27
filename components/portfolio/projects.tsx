import { siteConfig } from "@/config/site";

const StarIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	>
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
	</svg>
);

const ForkIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="18" r="3" />
		<circle cx="6" cy="6" r="3" />
		<circle cx="18" cy="6" r="3" />
		<path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
		<line x1="12" y1="12" x2="12" y2="15" />
	</svg>
);

const Projects = () => {
	return (
		<section aria-labelledby="projects-heading">
			<p
				className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-highlight/40"
				aria-hidden="true"
			>
				02 —
			</p>
			<h2
				id="projects-heading"
				className="mb-8 text-[clamp(2rem,5vw,2.75rem)] font-black tracking-tight"
			>
				Projects
			</h2>

			{/* Community contribution callout */}
			{siteConfig.openSource.contributions.map((project) => (
				<div key={project.repo} className="mb-10">
					<p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-highlight/60">
						Open Source Contribution
					</p>
					<a
						href={project.href}
						target="_blank"
						rel="noreferrer"
						className="group block"
					>
						<div className="border-l-[3px] border-highlight pl-6 transition-all duration-300 group-hover:pl-8">
							<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
								<h3 className="text-lg font-bold transition-colors duration-200 group-hover:text-highlight">
									{project.repo}
								</h3>
								<div className="flex items-center gap-3 font-mono text-xs text-muted-foreground/70 transition-colors duration-200 group-hover:text-muted-foreground">
									<span className="flex items-center gap-1">
										<StarIcon />
										{project.stars >= 1000
											? `${(project.stars / 1000).toFixed(1)}k`
											: project.stars}
									</span>
									<span className="flex items-center gap-1">
										<ForkIcon />
										{project.forks}
									</span>
									<span>{project.language}</span>
								</div>
							</div>
							<p className="mt-1.5 max-w-xl text-base text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
								{project.description}
							</p>
						</div>
					</a>
				</div>
			))}

			{/* Own open source projects */}
			<div className="flex flex-col divide-y divide-border/30">
				{siteConfig.openSource.projects.map((project) => (
					<a
						key={project.repo}
						href={project.href}
						target="_blank"
						rel="noreferrer"
						className="group flex flex-col gap-1.5 py-5 first:pt-0 last:pb-0 transition-opacity duration-200 hover:opacity-100 opacity-90"
					>
						<div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
							<h3 className="text-base font-semibold transition-all duration-200 group-hover:text-highlight group-hover:translate-x-0.5">
								{project.repo}
							</h3>
							<div className="flex items-center gap-3 font-mono text-xs text-muted-foreground/70 transition-colors duration-200 group-hover:text-muted-foreground">
								{project.stars > 0 && (
									<span className="flex items-center gap-1">
										<StarIcon />
										{project.stars}
									</span>
								)}
								{project.forks > 0 && (
									<span className="flex items-center gap-1">
										<ForkIcon />
										{project.forks}
									</span>
								)}
								<span>{project.language}</span>
							</div>
						</div>
						<p className="max-w-xl text-base text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
							{project.description}
						</p>
					</a>
				))}
			</div>

			<div className="mt-8">
				<a
					href={siteConfig.links.github}
					target="_blank"
					rel="noreferrer"
					className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60 transition-colors hover:text-highlight"
				>
					All 34 repositories on GitHub
					<span
						className="transition-transform group-hover:translate-x-1"
						aria-hidden="true"
					>
						→
					</span>
				</a>
			</div>
		</section>
	);
};

export default Projects;
