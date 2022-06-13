import lodash from "lodash"
import { Product } from "../../types"

type ProductRequest = {
  name: string
}

const mock: Product = {
  category_id: '1',
  name: 'asd',
  id: '1'
}

const createProductService = async ({
  name,
}: ProductRequest): Promise<Product | Error> => {
  return mock 
}

export default createProductService
