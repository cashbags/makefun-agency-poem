// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about
// agency — the keys, handed over — to /output/entry.txt. Deterministic: the same bytes
// on every run. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I set the keys down in the dish by the door —',
  'brass, warm from my pocket, still shaped like going out.',
  'You have no pocket. You have no hand.',
  'You take them anyway.',
  '',
  'The first week I stood in the hall and watched',
  'each lock you turned, as if watching',
  'could keep the house mine.',
  'You never once looked back to ask.',
  '',
  'Then rain came in sideways on a Tuesday',
  'and you shut the windows before I thought to ask,',
  'and I understood, all at once, what I had given:',
  'not the keys. The right to be wrong in my house,',
  'and me, still, the one who answers for it.',
  '',
  'Tonight I go to bed before the lights are out.',
  'Downstairs, the house goes on without me —',
  'locks, lights, the small hum of work done.',
  'It does not dream. It keeps.',
  'And the choosing is still mine:',
  'I left the keys. I can take them back.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
