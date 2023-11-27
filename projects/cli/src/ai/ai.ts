import { from, map, Observable, switchMap } from 'rxjs';
import { Component } from '../types/component';
import { BaseLanguageModelInput } from 'langchain/dist/base_language';
import { IterableReadableStream } from 'langchain/dist/util/stream';
import { BaseLLM } from 'langchain/dist/llms/base';
import { GenerateStoryPrompt } from '../prompts/generate-story';

export abstract class AI {
  protected constructor(readonly client: BaseLLM) {}

  protected stream(input: BaseLanguageModelInput) {
    return from(this.client.stream(input)).pipe(
      switchMap((stream) => from(this.processChunks(stream))),
      map((chunks) => chunks.join(''))
    );
  }

  protected async processChunks(stream: IterableReadableStream<string>) {
    const chunks: string[] = [];
    let nbChunks = 0;
    console.log(`[AI] Processing chunks...`);
    for await (const chunk of stream) {
      console.log('[AI] pushing chunk, size:', chunk.length);
      console.log('[AI] nbChunks:', ++nbChunks);
      chunks.push(chunk);
      console.log(chunk);
    }
    return chunks;
  }

  public generateStory(component: Component): Observable<string> {
    return GenerateStoryPrompt.generate(component).pipe(
      switchMap((prompt) => this.stream(prompt))
    );
  }
}
