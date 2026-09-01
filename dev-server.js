const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 4321);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".json": "application/json"
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p === "/") p = "/index.html";
    const file = path.join(root, p);
    if (!file.startsWith(root)) {
      res.writeHead(403).end("forbidden");
      return;
    }

    fs.stat(file, (err, st) => {
      if (err || !st.isFile()) {
        res.writeHead(404, { "content-type": "text/plain" }).end("not found");
        return;
      }

      const type = types[path.extname(file).toLowerCase()] || "application/octet-stream";
      const range = req.headers.range;

      /* A browser will not seek a <video> unless the server answers byte
         ranges — without this, video.seekable stays empty and scroll
         scrubbing silently does nothing. */
      if (range) {
        const m = /^bytes=(\d*)-(\d*)$/.exec(range);
        if (m) {
          let start = m[1] === "" ? null : parseInt(m[1], 10);
          let end = m[2] === "" ? null : parseInt(m[2], 10);
          if (start === null) {                 // suffix range: last N bytes
            start = Math.max(0, st.size - (end || 0));
            end = st.size - 1;
          } else if (end === null || end >= st.size) {
            end = st.size - 1;
          }
          if (start > end || start >= st.size) {
            res.writeHead(416, { "content-range": `bytes */${st.size}` }).end();
            return;
          }
          res.writeHead(206, {
            "content-type": type,
            "content-length": end - start + 1,
            "content-range": `bytes ${start}-${end}/${st.size}`,
            "accept-ranges": "bytes",
            "cache-control": "no-store"
          });
          fs.createReadStream(file, { start, end }).pipe(res);
          return;
        }
      }

      res.writeHead(200, {
        "content-type": type,
        "content-length": st.size,
        "accept-ranges": "bytes",
        "cache-control": "no-store"
      });
      fs.createReadStream(file).pipe(res);
    });
  })
  .listen(port, () => console.log("serving " + root + " on http://localhost:" + port));
