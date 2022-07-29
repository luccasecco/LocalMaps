import { Request, Response } from 'express'

import { AppDataSource } from '../data-source'
import { Store } from '../entity/Store'


export async function saveStoresOnDataBase(request: Request, response: Response) {
  const storeRepository = AppDataSource.getRepository(Store)

  const savedStore = await storeRepository.save(request.body)

  return response.status(200).json(savedStore)
}

export async function getAllStoreFromDataBase(request: Request, response: Response) {
  const storeRepository = AppDataSource.getRepository(Store)

  const allStores =  await storeRepository.find();

  return response.json(allStores)

}