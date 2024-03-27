import type { NextApiRequest, NextApiResponse } from 'next';

// fake data
import products from '../../shared/data/products';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);

  // fake loading time
  setTimeout(() => {
    res.status(200).json(products);
  }, 800);
}
