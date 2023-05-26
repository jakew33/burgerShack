
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";




export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')

    this.router
    .get('', this.getBurgers)
    .get('/:burgerId', this.getBurger)
    // .put('/:burgerId', this.)
  }

  async getBurgers (req, res, next) {
    try {
      
      const burgers = await burgersService.getAllBurgers()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getBurger(req, res, next) {
    try {
      logger.log(req.params.burgerId) 

        const burger = await burgersService.getBurgerById(req.params.burgerId)
        res.send(burger)
      
    } catch (error) {
      next(error)
    }
  }

  async editBurger(req, res, next) {
    try {
      req.body === FormData
      logger.log('req', req)
    } catch (error) {
      next(error)
      
    }
  }
}