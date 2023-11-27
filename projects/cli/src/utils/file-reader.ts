import * as fs from 'fs';

export class FileReader {
  public static read(path: string): string {
    return fs.readFileSync(path, 'utf8');
  }
}
