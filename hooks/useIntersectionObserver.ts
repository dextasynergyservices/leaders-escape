import { type RefObject, useEffect, useState } from "react";

export function useIntersectionObserver(
	ref: RefObject<Element | null>,
	options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px" },
): boolean {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsIntersecting(true);
				observer.disconnect(); // Only trigger once
			}
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [ref, options]);

	return isIntersecting;
}
