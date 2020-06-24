# Attachment Exporter

Exporting all Trello attachments based on board JSON file.

We want to download all attachments from any boards exported via JSON and placed in the `boards` directory.

Downloaded files are placed in `attachments` directory.

## How to run

| Description | Command |
| :--- | :--- |
| Install dependencies | `npm install --only=development` |
| Compile the script | `npm run build` |
| Run the script | `npm start` |

> Only Node.js built-in modules are used during runtime.

## Preview

The output below can be tested by running `make example`.

**Directory structure before**

```
.
├── boards
├── index.js
├── index.ts
├── Makefile
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

**Script execution**

```
Starting
Attachments folder created
1 boards found
24 cards read
Starting downloads (24 files)
24 files downloaded
1. Red-Lentils-with-Toasted-Cauliflower.jpg
2. Eggplant-Un-Parmesan-11.jpg
3. Ricotta_Dumplings.jpg
4. black-bean-espresso-4.jpg
5. Nutty-Falafel-.png
6. ZaatarChickenEggplant.jpg
7. Rice-Bowl-Sausage-4.jpg
8. kebabs-4.jpg
9. chicken_0-1.jpg
10. steak-2.jpg
11. Eggplant_and_Chicken_Parmesan.jpg
12. simplest-shrimp-2.jpg
13. salmon-lentils.jpg
14. scallops-2.jpg
15. Jambalay-des-Herbes-1.jpg
16. Humble_Paella.png
17. zuccas_Orange_and_Olive_Salad.jpg
18. chickpea-arugula1_0.jpg
19. Quinoa-Salad.jpg
20. Fennel_and_Celery_Salad.jpg
21. cobbler-2.jpg
22. corn-bread-3_0.jpg
23. sweet-potato-salad-5.jpg
24. hummus-3.jpg
```

**Directory structure after**

```
.
├── attachments
│   ├── black-bean-espresso-4.jpg
│   ├── chicken_0-1.jpg
│   ├── chickpea-arugula1_0.jpg
│   ├── cobbler-2.jpg
│   ├── corn-bread-3_0.jpg
│   ├── Eggplant_and_Chicken_Parmesan.jpg
│   ├── Eggplant-Un-Parmesan-11.jpg
│   ├── Fennel_and_Celery_Salad.jpg
│   ├── Humble_Paella.png
│   ├── hummus-3.jpg
│   ├── Jambalay-des-Herbes-1.jpg
│   ├── kebabs-4.jpg
│   ├── Nutty-Falafel-.png
│   ├── Quinoa-Salad.jpg
│   ├── Red-Lentils-with-Toasted-Cauliflower.jpg
│   ├── Rice-Bowl-Sausage-4.jpg
│   ├── Ricotta_Dumplings.jpg
│   ├── salmon-lentils.jpg
│   ├── scallops-2.jpg
│   ├── simplest-shrimp-2.jpg
│   ├── steak-2.jpg
│   ├── sweet-potato-salad-5.jpg
│   ├── ZaatarChickenEggplant.jpg
│   └── zuccas_Orange_and_Olive_Salad.jpg
├── boards
│   └── example.json
├── index.js
├── index.ts
├── Makefile
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```
