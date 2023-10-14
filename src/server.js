import App from "./app.js";

const port = process.env.PORT || 8080;

const app = new App().app;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
}); 