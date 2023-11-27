import { Octokit } from '@octokit/rest';
import { from } from 'rxjs';

export class Github {
  readonly #client = new Octokit({
    auth: this.accessToken,
  });

  constructor(
    readonly accessToken: string,
    readonly repository: string,
    readonly owner: string
  ) {
    console.log('Github constructor', this);
  }

  listenToPullRequestEvents() {
    console.log('listenToPullRequestEvents');
    return from(
      this.#client.pulls.list({
        repo: this.repository,
        owner: this.owner,
      })
    );
  }
}
