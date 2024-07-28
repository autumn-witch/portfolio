import { join } from 'node:path';
import { promises } from 'fs';
const baseDir = process.cwd();

const prebuildScripts = async () => {
  const file = join(
    baseDir,
    '/node_modules',
    'next/dist/server/require-hook.js',
  );

  const content = await promises.readFile(file, 'utf-8');
  await promises.writeFile(
    file,
    content.replace(
      'if (process.env.__NEXT_PRIVATE_PREBUNDLED_REACT) {',
      'if (true) {',
    ),
  );
};

prebuildScripts();
