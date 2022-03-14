
const app = require("./server/app.server");
                
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
console.log(`Server: listening on port ${port}`);
});
    
server.setTimeout(3600000);