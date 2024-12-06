import { server } from "./server.js";

// server.listen(…
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
