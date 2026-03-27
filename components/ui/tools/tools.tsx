import Image from "next/image";

const layers = [
	{
		id: "web",
		label: "Web",
		color: "text-highlight",
		borderColor: "border-highlight/30",
		bgColor: "bg-highlight/5",
		tools: [
			{ href: "https://reactjs.org/", src: "/icons/react.svg", name: "React" },
			{ href: "https://nextjs.org/", src: "/icons/nextjs.svg", name: "Next.js" },
			{ href: "https://tailwindcss.com/", src: "/icons/tailwind.svg", name: "Tailwind" },
			{ href: "https://redux.js.org", src: "/icons/redux.svg", name: "Redux" },
			{ href: "https://storybook.js.org/", src: "/icons/storybook.svg", name: "Storybook" },
			{ href: "https://www.typescriptlang.org/", src: "/icons/typescript.svg", name: "TypeScript" },
		],
	},
	{
		id: "mobile",
		label: "Mobile",
		color: "text-highlight-to",
		borderColor: "border-highlight-to/30",
		bgColor: "bg-highlight-to/5",
		tools: [
			{ href: "https://reactnative.dev/", src: "/icons/react-native.svg", name: "React Native" },
			{ href: "https://redux.js.org", src: "/icons/redux.svg", name: "Redux Toolkit" },
			{ href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "/icons/javascript.svg", name: "JavaScript" },
			{ href: "https://www.typescriptlang.org/", src: "/icons/typescript.svg", name: "TypeScript" },
		],
	},
	{
		id: "backend",
		label: "Backend & Infra",
		color: "text-muted-foreground",
		borderColor: "border-border/50",
		bgColor: "bg-muted/30",
		tools: [
			{ href: "https://nodejs.org", src: "/icons/nodejs.svg", name: "Node.js" },
			{ href: "https://expressjs.com", src: "/icons/express.svg", name: "Express" },
			{ href: "https://www.postgresql.org", src: "/icons/postgresql.svg", name: "PostgreSQL" },
			{ href: "https://www.mysql.com/", src: "/icons/mysql.svg", name: "MySQL" },
			{ href: "https://kafka.apache.org/", src: "/icons/kafka.svg", name: "Kafka" },
			{ href: "https://www.docker.com/", src: "/icons/docker.svg", name: "Docker" },
			{ href: "https://aws.amazon.com", src: "/icons/aws.svg", name: "AWS" },
			{ href: "https://git-scm.com/", src: "/icons/git.svg", name: "Git" },
			{ href: "https://www.jenkins.io", src: "/icons/jenkins.svg", name: "Jenkins" },
		],
	},
];

const Connector = () => (
	<div className="flex items-center justify-center py-1" aria-hidden="true">
		<div className="flex flex-col items-center gap-[3px]">
			<span className="block h-1 w-1 rounded-full bg-border/60" />
			<span className="block h-1 w-1 rounded-full bg-border/60" />
			<span className="block h-1 w-1 rounded-full bg-border/60" />
		</div>
	</div>
);

const Tools = () => {
	return (
		<section aria-labelledby="tools-heading">
			<p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-highlight/40" aria-hidden="true">04 —</p>
			<h2 id="tools-heading" className="mb-8 text-[clamp(2rem,5vw,2.75rem)] font-black tracking-tight">Tech Stack</h2>
			<div className="flex flex-col gap-0">
				{layers.map((layer, i) => (
					<div key={layer.id}>
						<div className={`rounded-lg border ${layer.borderColor} ${layer.bgColor} px-5 py-4`}>
							<p className={`mb-3 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${layer.color}`}>
								{layer.label}
							</p>
							<div className="flex flex-wrap gap-2">
								{layer.tools.map((tool) => (
									<a
										href={tool.href}
										target="_blank"
										rel="noreferrer"
										key={tool.name}
										className="group flex items-center gap-1.5 rounded border border-transparent px-2 py-1.5 text-xs transition-all duration-150 hover:border-border/60 hover:bg-background/60"
									>
										<Image
											src={tool.src}
											alt={tool.name}
											width={16}
											height={16}
											style={{ width: 16, height: 16 }}
										/>
										<span className="text-muted-foreground transition-colors duration-150 group-hover:text-foreground">
											{tool.name}
										</span>
									</a>
								))}
							</div>
						</div>
						{i < layers.length - 1 && <Connector />}
					</div>
				))}
			</div>
		</section>
	);
};

export default Tools;

