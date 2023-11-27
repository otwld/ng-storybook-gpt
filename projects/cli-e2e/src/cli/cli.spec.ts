import { execSync } from 'child_process';
import { join } from 'path';
import * as fs from 'fs';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'dist/cli');

    const output = execSync(`node ${cliPath}`).toString();

    const fileExist = fs.existsSync(
      join(process.cwd(), 'examples/button.component.stories.ts')
    );

    // Expect file to be created
    expect(fileExist).toBe(true);
  });
});
