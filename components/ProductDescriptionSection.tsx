import React from "react";

export default function ProductDescriptionSection() {
	return (
		<section className="py-16 bg-gray-50 px-4">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-4 text-center">
					A Topical Hair Growth Solution
				</h2>
				<p className="mb-6 text-lg text-center">
					Our advanced formula supports healthy hair growth and improves scalp health.
				</p>
				<ul className="space-y-4">
					<li>
						<strong>Minoxidil (2%):</strong> Clinically proven to stimulate hair growth,
						perfect for women or those preferring a gentler option.
					</li>
					<li>
						<strong>Caffeine:</strong> Helps stimulate hair follicles and counteract the effects of DHT.
					</li>
					<li>
						<strong>Rosemary Oil:</strong> Traditionally used for promoting hair growth and improving scalp circulation – some studies suggest its positive role in hair care.
					</li>
					<li>
						<strong>Niacinamide:</strong> Supports blood circulation and reduces scalp inflammation.
					</li>
					<li>
						<strong>Panthenol:</strong> Hydrates the scalp and hair for improved elasticity and manageability.
					</li>
					<li>
						<strong>Azelaic Acid (1.5%):</strong> Provides mild anti-inflammatory benefits to maintain scalp health.
					</li>
				</ul>
			</div>
		</section>
	);
}
