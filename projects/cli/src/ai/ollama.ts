import { Ollama as LangchainOllama } from 'langchain/llms/ollama';
import { AI } from './ai';

export class Ollama extends AI {
  constructor(readonly API_URL: string) {
    super(
      new LangchainOllama({
        baseUrl: API_URL,
        model: 'codellama',
      })
    );
  }
}
