"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			style={{ animationDelay: `${delay}ms` }}
			className={`${visible ? "animate-fade-up" : "opacity-0"} ${className ?? ""}`}
		>
			{children}
		</div>
	);
}
