import { FakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"



class BurgersService {
  createBurger(newBurgerData) {
    newBurgerData.id = ~~(Math.random() * 6666666) + 'b'

    FakeDb.burgers.push(newBurgerData)
    return newBurgerData
  }
  getBurgerById(burgerId) {
    const burger = FakeDb.burgers.find(b => b.id == burgerId)

    if (!burger) {
      throw new BadRequest ('Invalid Burger Id')
    }
    return burger
  }

  getAllBurgers() {
    return FakeDb.burgers
  }
}

export const burgersService = new BurgersService