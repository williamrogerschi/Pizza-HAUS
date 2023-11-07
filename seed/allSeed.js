const db = require('../db/index')

const cheeseSeed = require('./cheeseSeed')
const toppingsSeed = require('./toppingsSeed')
const menuSeed = require('./menuSeed')
const orderSeed = require('./orderSeed')
const cartSeed = require('./cartSeed')
const userSeed = require('./userSeed')

async function deleteCollections() {
    try {
      const collections = Object.keys(db.collections);
  
      for (const collectionName of collections) {
        await db.collections[collectionName].deleteMany({});
        console.log(`Deleted all documents from collection: ${collectionName}`);
      }
  
      console.log('All collections are empty.');
    } catch (error) {
      console.error('Error deleting collections:', error);
    }
  }

async function seed() {
    await deleteCollections()
    await cheeseSeed()
    await toppingsSeed()
    await menuSeed()
    await orderSeed()
    await cartSeed()
    await userSeed()
    db.close()
}

seed()

