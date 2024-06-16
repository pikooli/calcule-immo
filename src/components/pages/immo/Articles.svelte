<script>
	// Si vous avez des données dynamiques, vous pouvez les importer ici
</script>

<div class="container mx-auto p-4 font-sans">
	<div class="mb-6">
		<h2 class="mb-2 text-2xl font-bold">Simulateur de prêt immobilier</h2>
		<p class="mb-4">
			Calculez votre prêt immobilier facilement avec notre simulateur complet. Comprend des taux
			d'assurance fixes, des calendriers de prêt détaillés et des options pour envoyer les résultats
			par email ou télécharger au format PDF. Simplifiez la planification de votre achat immobilier
			dès aujourd'hui !
		</p>
	</div>

	<div class="mb-6">
		<h2 class="mb-2 text-2xl font-bold">
			Comment sont calculés les prêts immobiliers et comment lire un tableau d'amortissement
		</h2>

		<div class="mb-4">
			<h3 class="mb-2 text-xl font-semibold">Calcul du prêt immobilier</h3>
			<p>
				Lorsque vous contractez un prêt immobilier, plusieurs éléments entrent en jeu pour
				déterminer vos paiements mensuels et le coût total du crédit. Voici les principaux facteurs
				:
			</p>
			<ul class="mb-4 list-inside list-disc">
				<li>
					<strong>Montant du prêt</strong> : La somme totale que vous empruntez pour acheter votre propriété.
				</li>
				<li>
					<strong>Apport personnel</strong> : Le montant que vous investissez de vos propres fonds. Plus
					l'apport est élevé, moins vous aurez besoin d'emprunter.
				</li>
				<li>
					<strong>Frais d'agence immobilière</strong> : Les coûts payés à l'agence immobilière pour les
					services fournis lors de l'achat de la propriété.
				</li>
				<li>
					<strong>Frais de notaire</strong> : Les frais payés au notaire pour les services fournis lors
					de l'achat de la propriété.
				</li>
				<li>
					<strong>Emprunt</strong> : Le montant total emprunté pour l'achat du bien immobilier.
				</li>
				<li>
					<strong>Durée du prêt</strong> : La période sur laquelle vous rembourserez le prêt, généralement
					en années.
				</li>
				<li>
					<strong>Taux d'intérêt</strong> : Le pourcentage annuel que vous paierez pour emprunter l'argent.
					Un taux d'intérêt plus bas signifie des paiements d'intérêts moins élevés sur la durée du prêt.
				</li>
				<li>
					<strong>Coût mensuel de l'assurance</strong> : Le coût mensuel de l'assurance emprunteur.
				</li>
				<li>
					<strong>Assurance annuelle du prêt</strong> : L'assurance qui garantit le remboursement du
					prêt immobilier en cas de décès, d'invalidité ou de perte d'emploi.
				</li>
			</ul>
			<p class="mb-4">Avec ces informations, vous pouvez calculer :</p>
			<ul class="mb-4 list-inside list-disc">
				<li><strong>Paiement mensuel</strong> : Le montant que vous paierez chaque mois.</li>
				<li>
					<strong>Paiement mensuel avec assurance</strong> : Le montant que vous paierez chaque mois,
					y compris l'assurance.
				</li>
				<li>
					<strong>Taux d'intérêt mensuel effectif</strong> : Le taux d'intérêt mensuel du prêt immobilier.
				</li>
				<li>
					<strong>Intérêts totaux</strong> : La somme totale des intérêts payés sur la durée du prêt.
				</li>
				<li>
					<strong>Coût total du crédit</strong> : La somme totale incluant le capital emprunté, les intérêts
					et l'assurance.
				</li>
				<li>
					<strong>Coût total de l'assurance</strong> : Le coût total de l'assurance sur la durée du prêt.
				</li>
				<li>
					<strong>Coût total de l'achat immobilier</strong> : Le coût total pour l'achat de la propriété,
					incluant les frais d'agence et de notaire.
				</li>
			</ul>
		</div>

		<div class="mb-4">
			<h3 class="mb-2 text-xl font-semibold">Lecture d'un tableau d'amortissement</h3>
			<p>
				Un tableau d'amortissement décompose chaque paiement mensuel effectué au cours de la durée
				du prêt, montrant la répartition entre le remboursement du capital et le paiement des
				intérêts, ainsi que le capital restant dû après chaque paiement.
			</p>
			<div class="overflow-x-auto">
				<table class="mt-4 w-full table-auto border-collapse border border-gray-200">
					<thead>
						<tr class="bg-gray-100">
							<th class="border border-gray-200 px-4 py-2 text-right">Mois</th>
							<th class="border border-gray-200 px-4 py-2 text-right">Mensualité</th>
							<th class="border border-gray-200 px-4 py-2 text-right">Capital</th>
							<th class="border border-gray-200 px-4 py-2 text-right">Intérêt</th>
							<th class="border border-gray-200 px-4 py-2 text-right">Assurance</th>
							<th class="border border-gray-200 px-4 py-2 text-right">Capital restant</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border border-gray-200 px-4 py-2 text-right">1</td>
							<td class="border border-gray-200 px-4 py-2 text-right">970,53 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">738,20 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">199,00 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">33,33 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">199 261,80 €</td>
						</tr>
						<tr class="bg-gray-50">
							<td class="border border-gray-200 px-4 py-2 text-right">2</td>
							<td class="border border-gray-200 px-4 py-2 text-right">970,53 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">738,94 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">198,27 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">33,33 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">198 522,86 €</td>
						</tr>
						<tr>
							<td class="border border-gray-200 px-4 py-2 text-right">3</td>
							<td class="border border-gray-200 px-4 py-2 text-right">970,53 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">739,67 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">197,53 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">33,33 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">197 783,19 €</td>
						</tr>
						<tr class="bg-gray-50">
							<td class="border border-gray-200 px-4 py-2 text-right">4</td>
							<td class="border border-gray-200 px-4 py-2 text-right">970,53 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">740,41 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">196,79 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">33,33 €</td>
							<td class="border border-gray-200 px-4 py-2 text-right">197 042,78 €</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="mb-6">
			<h3 class="mb-2 text-xl font-semibold">Interprétation</h3>
			<p>
				Au début du prêt, une plus grande partie de la mensualité est consacrée aux intérêts. Au fur
				et à mesure que vous remboursez le prêt, une plus grande partie de la mensualité va vers le
				remboursement du capital, et le montant des intérêts diminue. Le tableau d'amortissement
				vous permet de visualiser ce processus, de comprendre combien il vous reste à rembourser à
				tout moment et de planifier des remboursements anticipés pour réduire le coût total du prêt.
			</p>
		</div>

		<div>
			<p class="mb-4">
				Pour en savoir plus sur les prêts immobiliers et utiliser notre simulateur, explorez notre
				site <a href="https://www.calcule-immo.com" class="text-blue-500 underline">Calcule Immo</a
				>.
			</p>
		</div>
	</div>
</div>
