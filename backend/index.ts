import "reflect-metadata";
import express from 'express'
import cors from 'cors'
import * as StoreController from './src/api/StoreController'
import { AppDataSource } from "./src/data-source";

const PORT = 3000;

async function startup() {
  await AppDataSource.initialize().then(() => {

    const app = express();
  
    app.use(express.json());
    app.use(cors());
  
    app.post('/store', StoreController.saveStoresOnDataBase)
    app.get('/store', StoreController.getAllStoreFromDataBase)
  
    app.listen(PORT, () => {
      console.log('App running on port ' + 3000);

  })
  })
}

startup();