import {
	JetBrains_Mono as FontMono,
	DM_Sans,
	Syne,
} from "next/font/google";

export const fontSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["300", "400", "500"],
});

export const fontDisplay = Syne({
	subsets: ["latin"],
	variable: "--font-display",
	weight: ["700", "800"],
});

export const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
});
