import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filepath = path.join(process.cwd(), 'data/resultados.json'); 
  const fileContents = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(fileContents);

  // Desactiva la caché en desarrollo
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  res.status(200).json(data);
}
