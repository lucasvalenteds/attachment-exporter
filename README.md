# Attachment Exporter

Exporting all Trello attachments based on board JSON file.

We want to download all attachments from any boards exported via JSON and placed in the `boards` directory.

Downloaded files are placed in `attachments` directory.

## How to run

| Description | Command |
| :--- | :--- |
| Install dependencies | `npm install --only=dev` |
| Run script | `npm start` |

## Preview

**directory structure before**

```
.
├── boards
│   ├── personal.json
│   ├── work.json
│   └── project-1.json
├── index.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

**Script execution**

```
Starting
Output folder created
3 boards found
8 cards read
Starting downloads (10 files)
10 files downloaded
1. IMG-20190803-WA0000.png
2. bbe0a4ef70b5fa13667e70a5cd073c59.zip
3. 56a6c35b5d1ca47d3f874838219326a4.pdf
4. f560c663549a446c0a5755d086e6e0e3.jpg
5. fe81cf78638969531f057ea111dc0885.jpg
6. ad6f82b3a7f514bc7f123410936635bc.jpg
7. b021f473b889ab645c6c8d3aef43975a.jpg
8. 835eae571f84c02df48c7eac0eae7d56.jpg
9. e5ba5e207a2632c3e3fa27db6f09ef43.jpg
10. cb088b5d4fc767766e76c6d72ed7eda9.jpg
```

**Directory structure after**

```
.
├── attachments
│   ├──  IMG-20190803-WA0000.png
│   ├──  bbe0a4ef70b5fa13667e70a5cd073c59.zip
│   ├──  56a6c35b5d1ca47d3f874838219326a4.pdf
│   ├──  f560c663549a446c0a5755d086e6e0e3.jpg
│   ├──  fe81cf78638969531f057ea111dc0885.jpg
│   ├──  ad6f82b3a7f514bc7f123410936635bc.jpg
│   ├──  b021f473b889ab645c6c8d3aef43975a.jpg
│   ├──  835eae571f84c02df48c7eac0eae7d56.jpg
│   ├──  e5ba5e207a2632c3e3fa27db6f09ef43.jpg
│   └──  cb088b5d4fc767766e76c6d72ed7eda9.jpg
├── boards
│   ├── personal.json
│   ├── work.json
│   └── project-1.json
├── index.ts
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```
