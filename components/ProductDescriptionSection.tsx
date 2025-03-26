import React from "react";

export default function ProductDescriptionSection() {
	return (
		<section className="py-16 bg-gray-50 px-4">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold mb-4 text-center">
					Etkili Saç Büyüme Çözümü
				</h2>
				<p className="mb-6 text-lg text-center">
					Gelişmiş formülümüz, saçların sağlıklı büyümesini destekler ve saç derinizi güçlendirir.
				</p>
				<ul className="space-y-4">
					<li>
						<strong>Minoxidil (%2):</strong> Saç büyümesini uyarır; hassas ciltler ve kadın kullanımı için idealdir.
					</li>
					<li>
						<strong>Kafein:</strong> Saç köklerini canlandırır ve DHT etkisini azaltmaya yardımcı olur.
					</li>
					<li>
						<strong>Biberiye Yağı:</strong> Saç büyümesini destekler ve saç derisinde kan dolaşımını artırır.
					</li>
					<li>
						<strong>Niacinamide:</strong> Kan dolaşımını iyileştirir ve saç derisindeki iltihabı azaltır.
					</li>
					{/* Removed Panthenol list item */}
					<li>
						<strong>Azelaik Asit (%1.5):</strong> Hafif anti-inflamatuar etkisiyle saç derisini korur.
					</li>
				</ul>
			</div>
		</section>
	);
}
