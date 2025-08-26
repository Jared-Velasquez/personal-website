import ArticleIntro from "@/components/articleintro";

export default function Articles() {
	// Article ideas:

	// High-level software architecture / system design
	// CQRS
	// Microservices
	// Serverless Functions
	// Event-Driven Architecture

	// Lower-level implementations
	// Redis Client in Spring Boot, common patterns 
	return (
		<div className="app bg-whip">
			<div className="w-5/6 mx-auto md:h-full">
        <ArticleIntro />
      </div>
		</div>
	);
}