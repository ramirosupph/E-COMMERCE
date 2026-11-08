// ==========================================================================
// VANGUARD & CO. - SERVIDOR LOCAL ESTÁTICO (NATIVE NODE.JS HTTP)
// ==========================================================================
// Puedes ejecutarlo con:
// agy-node.cmd server.js
// O si tienes node en PATH: node server.js
// ==========================================================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  // Manejo de URL base
  let safePath = decodeURI(req.url.split('?')[0]);
  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  // Prevenir Directory Traversal
  const filePath = path.join(BASE_DIR, path.normalize(safePath));
  if (!filePath.startsWith(BASE_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Prohibido');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <div style="font-family: sans-serif; text-align: center; padding: 60px 20px;">
          <h2>404 - Archivo no encontrado</h2>
          <p>El recurso solicitado no existe en la tienda.</p>
          <a href="/" style="color: #c49a45; font-weight: bold;">Volver al Inicio</a>
        </div>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log('========================================================');
  console.log('  VANGUARD & CO. - MEN\'S CLOTHIER & ATELIER');
  console.log('  E-commerce de Ropa Masculina iniciado exitosamente');
  console.log('========================================================');
  console.log(`  > Servidor local: http://localhost:${PORT}`);
  console.log(`  > Directorio:     ${BASE_DIR}`);
  console.log('  > Presiona Ctrl + C para detener el servidor');
  console.log('========================================================');
});
