# La Pharmacie

L’objectif de ce mini-projet est de développer une application web (uniquement la partie front) permettant
de gérer le stock de médicaments d’une pharmacie.

## Fonctionnalitées

Les fonctionnalités :
- Afficher le contenu de la pharmacie: liste des medicaments
- Ajouter un nouveau médicament à la pharmacie
- Supprimer un médicament de la pharmacie
- Ajouter/retirer 1 à la qte d’un médicament présent dans la pharmacie
- Modifier les infos d’un médicament présent dans la pharmacie (toutes caractéristiques)
- Rechercher de médicaments
- Créer une commande client (en local)
- Rechercher la liste des commende client (en local)
- Trier par ordre alfabetique
- Filtrer par facon de prendre le medicament
- Recherchr par quantiter

## Détails des fonctionalitées

La pharmacie est modelisé assez simplement. Chaque medicament est dans un cadre. Dans ce dernier, nous 
pouvons retrouvers divers fonctionalitées: la supretion du medicament, l'incrementation ou la décrementation
de sa quantité en stock mais aussi le fait de le modifier. Dans cette derniere fonctionnalitée, nous pouvons 
modifier divers atribut du medicament comme sa quantiter, sa photo, sa forme phramaceutique ou encore son nom.

Paralement, nous pouvons ajouter de nouveau medicament grace a l'aide d'un bouton situer en bas de l'interface.
Lorsque nous cliquons dessus des champs aparaissent et nous permettent de renseigner toute les caratéristique
d'un médicament (Nom, forme phramaceutique, quantiter et l'image).

De plus nous pouvons rechercher par leurs nom des medicament. Cette recherche n'a pas besoin d'etre "exact",
si nous tapons qu'une suite de lettre comme "li", tout les medicament comportant cette suite de letre s'afficherons.

### Fonctionalitées suplementaires en local

La pharmacie comporte une fonctionalité "Commande" qui permet de créé une commende client. cette fonctionnalité
est acsécible en cliquant sur un bouton en haut de la page. lorsque, le bouton est enclancher, il ouvre la 
possibilité de voir et remplir des champs de texte afin de caratériser une commende (Nom du demandeur de la commende
, nom du médicament commendé, nombre de boite de ce médicament). Apres avoir validé cela crée une commende.

Toutes les commende peuvent etre observer en cliquant sur le bouton a droite du précedent. ce dernier affiche alors la liste
des commende créé.

###### Déatail de ces deux fonctionalitées

La fonctionalité "commande" et "liste des commande client" est générer en local du fait de l'api non modifiable.


### Fonctionalitées suplémentaires 

#### A faire
- Trier par ordre alfabetique
- Filtrer par facon de prendre le medicament
- Recherchr par quantiter

🔎 1. Filtrage par catégorie ou forme pharmaceutique

   Permettre à l’utilisateur de filtrer les médicaments par forme : comprimé, sirop, pommade…

   Utilisation : Simple tri côté front.

   Avantage : Améliore la lisibilité de la liste.

🟢 2. Tri des médicaments

    Tri par nom, quantité, date d’ajout, etc.

    Tri ascendant/descendant par ordre alphabétique ou par quantité.

    Bonus UX : Ajoute des flèches pour montrer l’ordre du tri.

🧮 3. Indicateur de stock faible

    Afficher un visuel (⚠️, 🔴, etc.) si la quantité d’un médicament est inférieure à un seuil.

    Exemple : Si qte < 5, badge "stock bas".

    Utilité : Alerte rapide pour réapprovisionnement.


⭐ 7. Favoris ou médicaments fréquents

    Permettre de marquer certains médicaments comme “favoris” pour un accès rapide.

🌙 8. Mode sombre / clair

    Pas lié aux données, mais améliore l’expérience utilisateur.

🔐 9. Confirmation avant suppression

    Avant de supprimer totalement un médicament, demander confirmation à l’utilisateur.

🎲 1. Un médicament aléatoire du jour

    Affiche chaque jour un médicament choisi au hasard, comme une “découverte” ou un “focus produit”.

    📌 Bonus : Ajouter un bouton "Découvrir un autre".

    📦 Utile pour tester, ou pour les curieux.



🧓 4. Mode “Senior” (grands textes, icônes simplifiées)


👻 4. Mode "pharmacie hantée"

    Tous les noms de médicaments sont modifiés temporairement pour ressembler à des potions maléfiques :

    Doliprane → Nécroprane

    Dafalgan → Elixir noir

🪞 1. Mode miroir (interface inversée)

    L’interface entière est affichée en miroir (effet transform: scaleX(-1)), comme si tu étais dans un univers parallèle.

    Peut être activé avec un bouton “Inverser la réalité”.

    Totalement inutile, donc génial.

🌡️ 2. Thermomètre émotionnel de la pharmacie

    En fonction du stock total ou moyen, affiche une “émotion” de la pharmacie :

    Plein stock → 😁

    Stock bas → 😰

    Rupture → 💀


🐔 8. Mode “poulailler”

    Quand activé, tous les noms de médicaments sont remplacés par “Cot Cot”, et les quantités deviennent des œufs 🥚.

