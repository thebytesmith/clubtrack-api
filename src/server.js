import app from "./app.js";
import dotenv from 'dotenv'

dotenv.config({
  path: './.env'
})

// const result = dotenv.config({ path: '../.env' });
// console.log(result);
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})