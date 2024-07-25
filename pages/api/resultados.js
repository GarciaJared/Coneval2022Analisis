import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filepath = path.join(process.cwd(), 'data/resultados.json');
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(fileContents);

  res.status(200).json(data);
}
