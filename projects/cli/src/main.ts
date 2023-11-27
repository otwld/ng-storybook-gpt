import { Config } from './config';
import { FileReader } from './utils/file-reader';
import { getAI } from './utils/ai';
import { FileWriter } from './utils/file-writer';
import { getFileName } from './utils/file';

const config = new Config();

// const github = new Github(config.GITHUB_TOKEN, config.GITHUB_REPOSITORY, config.GITHUB_OWNER);

const ai = getAI(config);

// const componentFile = process.argv[2];
const componentFilePath = 'examples/button/button.component.ts';
const componentFileName = getFileName(componentFilePath);
const storyFilePath = componentFilePath.replace('.ts', '.stories.ts');

const fileContent = FileReader.read(componentFilePath);

ai.generateStory({
  content: fileContent,
  fileName: componentFileName,
}).subscribe((storyContent) => {
  FileWriter.write(storyContent, storyFilePath);
});
