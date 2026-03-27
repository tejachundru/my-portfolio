import React from "react";

import { siteConfig } from "@/config/site";

const WorkDetails = () => {
	return (
		<section aria-labelledby="experience-heading">
			<p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-highlight/40" aria-hidden="true">03 —</p>
			<h2 id="experience-heading" className="mb-8 text-[clamp(2rem,5vw,2.75rem)] font-black tracking-tight">Experience</h2>
			<div className="flex flex-col">
				{siteConfig.experience.map((job, i) => (
					<div
						key={job.company}
						className={`group flex flex-col gap-3 py-8 transition-colors duration-200${i > 0 ? " border-t border-border/40" : ""}`}
					>
						<div className="flex flex-col gap-0.5">
						<h3 className="text-xl font-bold transition-colors duration-200 group-hover:text-highlight">{job.role}</h3>
					</div>
					<p className="text-sm font-semibold text-highlight">{job.company}</p>
						<ul className="list-disc space-y-1.5 pl-5">
							{job.bullets.map((bullet) => (
							<li key={bullet.slice(0, 40)} className="text-base text-muted-foreground transition-colors duration-200 group-hover:text-foreground/70">
									{bullet}
								</li>
							))}
						</ul>
					<p className="text-sm text-muted-foreground/70">
							<span className="font-medium text-muted-foreground">Tech: </span>
							{job.tech}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WorkDetails;
