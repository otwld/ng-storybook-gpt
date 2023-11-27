import * as fs from 'fs';

export class FileWriter {
  static write(content: string, path: string): void {
    fs.writeFileSync(path, content);
  }
}
