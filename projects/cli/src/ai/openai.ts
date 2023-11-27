import { AI } from './ai';
import { OpenAI } from 'langchain/llms/openai';

export class Openai extends AI {
  constructor(readonly API_KEY: string) {
    super(
      new OpenAI({
        modelName: 'gpt-3.5-turbo-1106', // Defaults to "gpt-3.5-turbo-instruct" if no model provided.
        temperature: 0,
        openAIApiKey: API_KEY, // In Node.js defaults to process.env.OPENAI_API_KEY
      })
    );
  }
}
