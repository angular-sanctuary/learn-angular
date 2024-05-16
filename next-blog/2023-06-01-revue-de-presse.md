---
title: 'Learning from Cypress API Testing'
slug: 'foo9'
description: 'What i learnt from creating a test suite for API Testing with Cypress'
pubDate: 'Mar 28 2023'
heroImage: '/blog/from-consumer-to-contributor.jpeg'
tags: [ 'open-source', 'testing', 'api', 'cypress' ]
---


## Revue de presse Mai 2023

### sortie de Qwik v1

Si une poigné de framworks javascript

Alors que la tenadance est souvent de vouloir faire toujours plus rapide en pimpant la performance, Qwik a pris le chemin de la sobriété pour atteindre ce résultat: faire plus rapide en faisant moins. Du moins en en ne chargeant et n'exécutant que ce qui est nécessaire à l'instant T.

Et donc où est le superflu?
Il s'agit à la fois du code javascript qui pourrait ne jamais être exécuté (et si je ne voulais jamais créer un compte sur ce site?) mais également du contenu html qui n'est pas encore lisible à l'écran (et si je ne scroll jamais jusqu'en bas de la page?).


Ca va couper chéri!
Cette logique présuppose donc la dépendance à un serveur, seul capitaine à bord pour fournir les resources nécessaire à une telle architecture.
Cela sous-entend donc une autre dépendance inhérente, celle de l'accès à un réseau internet quel qu'il soit.

Pour les New Yorkais et le réseau de métro, cela représente une population de 2 millions d'utilisateurs potentiels qui ne pourront pas profiter d'une expérience utilisateur adéquate.

Pour répondre à cette probléamtique des applications web feraient le choix d'un chargement plus conséquent de l'application au chargement dans un navigateur, couplé avec un fonctionnement offline à base de service workers pour utiliser le cache du navigateur pour proposer une expérience, certe dégradée mais suffisante pour une utilisation hors ligne.

Cette situation ne sonne pas le glas de Qwik, mais elle met en lumière une problématique récurrente dans la création d'un produit: la dépendance à un serveur et à un réseau internet.
Cela n'en demeure pas moins un pointeur non négligeable dans le choix des technologies choisies pour un projet.

Qwik ne déroge pas à la règle du besoin de structure dans un projet et à l'image des autres acteurs majeurs de l'univers Javascript, il s'est enrichit d'une version framework: QwikCity.
Cette solution de framework vient répondre aux problématiques courantes de la communauté Qwik, à savoir la gestion de l'état, la gestion des routes et la gestion des composants.



https://www.builder.io/blog/qwik-v1

TODO example with RealWorld


### Overcoming spam during Hacktoberfest

https://developerrelations.com/devrel-case-studies/overcoming-hacktoberfest-spam
