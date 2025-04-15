"use client";

import { useInViewport } from "@mantine/hooks";
import { useEffect } from "react";
import { headerStore } from "../stores/headerStore";

export default function SectionCommunity() {
	const { inViewport, ref } = useInViewport();
	const { setCurrentSection } = headerStore();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (inViewport) setCurrentSection("community");
	}, [inViewport]);

	return (
		<section
			className="mx-auto h-[92dvh] px-2 md:max-w-[1200px]"
			id="community"
		>
			<div className="w-full after:content-['']" ref={ref} />
			SectionCommunity
		</section>
	);
}
