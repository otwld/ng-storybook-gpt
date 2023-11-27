import { PromptTemplate } from 'langchain/prompts';
import { Component } from '../types/component';
import { from } from 'rxjs';

const prompt = PromptTemplate.fromTemplate(
  `Generate a Storybook stores file for the following Angular component, don't add any markdown. The component file name is called {fileName}.\n\`\`\`typescript\n{content}\n\`\`\`\``
);

export class GenerateStoryPrompt {
  public static generate(component: Component) {
    console.info('[Prompt] generateStory');
    return from(
      prompt.format({
        fileName: component.fileName,
        content: component.content,
      })
    );
  }
}
