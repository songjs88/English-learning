// Zero-dependency production server for Render
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.mp3': 'audio/mpeg'
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let reqPath = decodeURI(parsedUrl.pathname);

  // 1. First-party TTS Audio Proxy (/api/tts?q=...)
  // Streams clean native English MP3 audio without referer restrictions
  if (reqPath === '/api/tts') {
    const textQuery = (parsedUrl.query.q || '').slice(0, 200).trim();
    if (!textQuery) {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Missing text query');
      return;
    }

    const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(textQuery)}`;
    const ttsReq = https.get(
      ttsUrl,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      },
      (ttsRes) => {
        if (ttsRes.statusCode === 200) {
          res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Cache-Control': 'public, max-age=86400, immutable',
            'Access-Control-Allow-Origin': '*'
          });
          ttsRes.pipe(res);
        } else {
          res.writeHead(ttsRes.statusCode, { 'Content-Type': 'text/plain' });
          res.end('TTS Upstream Error');
        }
      }
    );

    ttsReq.on('error', (err) => {
      console.error('TTS proxy error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('TTS Proxy Error');
    });
    return;
  }

  // 2. Static File Serving
  if (reqPath === '/' || reqPath === '') {
    reqPath = '/index.html';
  }

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    let cacheControl = 'public, max-age=3600';
    if (ext === '.html') {
      cacheControl = 'no-cache';
    } else if (ext === '.svg' || ext === '.png' || ext === '.woff2') {
      cacheControl = 'public, max-age=86400, immutable';
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Server Error');
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
        'X-Content-Type-Options': 'nosniff'
      });
      res.end(content);
    });
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Jenny English Cafe is running on http://0.0.0.0:${PORT}`);
});
