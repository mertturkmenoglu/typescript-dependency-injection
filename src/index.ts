import 'reflect-metadata';

import express from 'express';

const main = async () => {
  const app = express();

  app.listen(3000, () => {
    console.log('Server started');
  });
}

main().catch(err => {
  console.error(err);
});