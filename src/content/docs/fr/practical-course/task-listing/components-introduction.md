---
title: Introduction sur les composants
description: Les composants sont les éléments constitutifs des applications Angular.
---

Les composants sont les piliers des applications Angular.
Ils aident à organiser une application en éléments plus petits et réutilisables pour une base de code plus maintenable.

Les composants sont utilisés pour :

- Diviser l'application en composants plus petits;
- Réutiliser le même bloc dans différentes parties de l'application;
- Dédier leur contenu à une route avec leur propre URL.

:::note
Si vous êtes familié avec les **composants** dans un autre framework, le concept est le même.
:::

## Votre premier composant

Votre projet a déjà un composant par défaut appelé `app`.

Il est composé de 3 fichiers :

- `app.component.ts`: Le code de la classe du composant écrit en TypeScript;
- `app.component.html`: Le Template du composant écrit en HTML;
- `app.component.css`: Les styles CSS dédiés au composant.

Pensez au corps humain :

- Le fichier HTML représente les os: c'est la structure;
- Le fichier TypeScript représente le cerveau et les muscles: c'est la logique;
- Le fichier CSS est l'apparence de la personne: à quoi il ressemblera.

Chacun de ces fichiers fait partie du composant.

:::note
Il y a souvent une incompréhension sur le terme Template. Le fichier HTML est le Template HTML de votre composant. Il représente la **vue** de votre composant.
Le fichier TypeScript représente quant à lui le modèle de votre composant.
:::

Les applications d'entreprise sont constituées de nombreux composants. Chaque composant est un élément de l'application qui contrôle une partie de l'écran.
Vous apprendrez comment créer un nouveau composant à l'étape suivante.
