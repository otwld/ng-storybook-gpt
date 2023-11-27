import { AI } from '../ai/ai';
import { Ollama } from '../ai/ollama';
import { Openai } from '../ai/openai';
import { Config } from '../config';

export function getAI(config: Config): AI {
  switch (config.AI) {
    case 'ollama':
      return new Ollama(config.OLLAMA_API_URL);
    case 'openai':
      return new Openai(config.OPENAI_API_KEY);
    default:
      throw new Error(`Invalid AI: ${config.AI}`);
  }
}
