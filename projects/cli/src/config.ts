import { optionalEnv, requiredEnv } from './utils/env';

type AcceptableAI = 'ollama' | 'openai';

export class Config {
  public readonly GITHUB_TOKEN = requiredEnv('GITHUB_TOKEN');

  public readonly GITHUB_REPOSITORY = requiredEnv('GITHUB_REPOSITORY');

  public readonly GITHUB_OWNER = requiredEnv('GITHUB_OWNER');

  public readonly OLLAMA_API_URL = optionalEnv('OLLAMA_API_URL');

  public readonly OPENAI_API_KEY = optionalEnv('OPENAI_API_KEY');

  public readonly AI: AcceptableAI = this.getAI();

  constructor() {
    console.log('Config constructor');
  }

  private getAI(): AcceptableAI {
    const ai = requiredEnv('AI');
    switch (ai) {
      case 'ollama':
        if (!this.OLLAMA_API_URL)
          throw new Error(`OLLAMA_API_URL is required for AI: ${ai}`);
        return ai;
      case 'openai':
        if (!this.OPENAI_API_KEY)
          throw new Error(`OPENAI_API_KEY is required for AI: ${ai}`);
        return ai;
      default:
        throw new Error(`Invalid AI: ${ai}`);
    }
  }
}
