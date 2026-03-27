export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Teja Chundru",
	title: "Full-Stack Developer",
	description:
		"Full-stack developer who builds across the whole product — React, Node.js, React Native, and the layers in between. I've shipped mobile apps with 50k+ installs, built real-time industrial data pipelines with Kafka, and contributed to open source tools used by thousands of developers. Currently at Infomerica building analytics infrastructure and BFF systems.",
	location: "Hyderabad, India",
	email: "chundruteja218@gmail.com",
	skills: [
		{
			category: "Languages",
			items: "JavaScript, TypeScript, SQL",
		},
		{
			category: "Frontend",
			items:
				"React, React Native, Next.js, Redux Toolkit, RTK Query, SWR, Storybook, Material UI, Bootstrap, HTML5, CSS3, Sass, Shadcn",
		},
		{
			category: "Backend",
			items:
				"Node.js, Express, Node ORMs, Microservices, MySQL, PostgreSQL, Kafka, OPC UA, Bree Scheduler",
		},
		{
			category: "Tools & Platforms",
			items: "Git, GitLab, Docker, Jenkins, GitLab CI/CD, AWS (EC2, RDS, S3)",
		},
		{
			category: "Testing",
			items: "React Testing Library, Unit Testing, Linting, Pre-commit Hooks",
		},
		{
			category: "Methodologies",
			items: "Agile (Scrum, Kanban)",
		},
	],
	experience: [
		{
			role: "Frontend / API Developer",
			company: "Infomerica Inc",
			bullets: [
				"Designed BFF architecture aggregating multiple microservices — reduced client-side API calls by 40%.",
				"Built React admin dashboards with real-time RTK Query polling for data-heavy analytics products.",
				"Established a Storybook component system and JWT-secured REST APIs powering internal tooling.",
			],
			tech: "React, Storybook, Redux, Node.js, SQL, Next.js, RTK Query, SWR, Docker, GitLab CI/CD",
		},
		{
			role: "Frontend / Mobile / API Developer",
			company: "Opstech Pvt Ltd",
			bullets: [
				"Shipped 3 React Native apps accumulating 50,000+ combined installs with Redux Toolkit.",
				"Built real-time industrial data pipelines with Kafka + OPC UA for IoT-driven systems.",
				"Reduced API boilerplate by ~40% by introducing RTK Query across web and mobile codebases.",
			],
			tech: "React, React Native, Node.js, SQL, Kafka, OPC UA, Jenkins, Docker, AWS",
		},
		{
			role: "Front-End / Mobile Developer",
			company: "Skillsoft",
			bullets: [
				"Implemented voice-based search and deep linking (AASA) for a cross-platform app used globally.",
				"Added smart app banners that increased mobile app conversions by 22%.",
				"Built BFF APIs and custom EPub reader tracking, enabling richer analytics and multi-service data access.",
			],
			tech: "React Native, React, Node.js, Redux, EPub Reader, Deep Linking, Agile",
		},
	],
	openSource: {
		contributions: [
			{
				repo: "react-native-voice/voice",
				href: "https://github.com/react-native-voice/voice",
				description:
					"React Native voice recognition library for iOS and Android with offline support. Contributed as an active maintainer.",
				stars: 2200,
				forks: 609,
				language: "TypeScript",
				external: true,
			},
		],
		projects: [
			{
				repo: "react-vite-starter",
				href: "https://github.com/tejachundru/react-vite-starter",
				description:
					"Production-ready React starter template — Vite + Redux Toolkit + RTK Query + React Router + shadcn/ui.",
				stars: 29,
				forks: 6,
				language: "TypeScript",
			},
			{
				repo: "react-native-awesome-text",
				href: "https://github.com/tejachundru/react-native-awesome-text",
				description:
					"Typography solution for React Native — manage Text styles consistently across a mobile app.",
				stars: 9,
				forks: 0,
				language: "TypeScript",
			},
			{
				repo: "react-native-interactive-transcripts",
				href: "https://github.com/tejachundru/react-native-interactive-transcripts",
				description:
					"Interactive WEBVTT transcript support for React Native video players.",
				stars: 5,
				forks: 3,
				language: "TypeScript",
			},
			{
				repo: "node-ts-drizzle-starter",
				href: "https://github.com/tejachundru/node-ts-drizzle-starter",
				description:
					"Enterprise-grade Node.js backend starter — TypeScript, Express, Drizzle ORM.",
				stars: 1,
				forks: 0,
				language: "TypeScript",
			},
		],
	},
	mainNav: [
		{
			title: "Home",
			href: "/",
		},
	],
	links: {
		github: "https://github.com/tejachundru",
		linkedin: "https://linkedin.com/in/tejachundru",
	},
};
