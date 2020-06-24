import * as FS from "fs";
import * as Path from "path";
import * as Util from "util";
import * as HTTPS from "https";
import * as Stream from "stream";

const readFileAsync = Util.promisify(FS.readFile);

const writeFileAsync = Util.promisify(FS.writeFile);

const readDirAsync = Util.promisify(FS.readdir);

const mkdirAsync = Util.promisify(FS.mkdir);

const existsAsync = Util.promisify(FS.exists);

async function downloadFile(url: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    HTTPS.get(url, (response) => {
      const content = new Stream.Transform();

      response.on("data", (chunk: Buffer) => {
        content.push(chunk);
      });

      response.on("end", () => {
        resolve(content.read());
      });

      response.on("error", (error) => {
        reject(error);
      });
    });
  });
}

type Attachment = {
  url: string;
};

type Card = {
  attachments: Attachment[];
};

type Board = {
  cards: Card[];
};

async function main() {
  console.debug("Starting");

  const output = Path.resolve(__dirname, "attachments");
  if (!(await existsAsync(output))) {
    await mkdirAsync(output);
    console.debug("Attachments folder created");
  }

  const boards = Path.resolve(__dirname, "boards");
  if (!(await existsAsync(boards))) {
    await mkdirAsync(boards);
    console.debug("Boards folder created");
  }

  const extensions = new RegExp("(.*?).(jpg|jpeg|png|webp|pdf|zip)$");

  const projects: string[] = await readDirAsync(boards);

  const files: Buffer[] = await Promise.all(
    projects
      .map((project: string) => Path.resolve(boards, project))
      .map((project: string) => readFileAsync(project))
  );

  console.debug(`${files.length} boards found`);

  const cards: Card[] = await Promise.all(
    files
      .map((fileContent: Buffer) => fileContent.toString("utf8"))
      .map((fileContent: string) => JSON.parse(fileContent))
      .flatMap((board: Board) => board.cards)
  );

  console.debug(`${cards.length} cards read`);

  const attachments: string[] = cards.flatMap((card) =>
    card.attachments
      .map((attachment: Attachment) => attachment.url)
      .filter((url: string) => url !== undefined)
      .filter((url: string) => extensions.exec(url))
  );

  console.debug(`Starting downloads (${attachments.length} files)`);

  const downloads: string[] = await Promise.all(
    attachments.map((attachment: string) => {
      const file = attachment.split("/").reverse()[0];
      const path = Path.resolve(output, file);

      return downloadFile(attachment)
        .then((buffer: Buffer) => writeFileAsync(path, buffer))
        .then(() => file);
    })
  );

  console.debug(`${downloads.length} files downloaded`);
  downloads.forEach((download: string, index: number) =>
    console.log(`${index + 1}. ${download}`)
  );
}

main().catch(console.error);
