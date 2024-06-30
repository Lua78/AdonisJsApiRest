'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')
const User = require('../../Models/User')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {



  async login ({ request, response, auth }) {
    try {
      const { email, password} = request.all()
      if (!email || !password) {
        return response.status(400).json({
          message: 'Email and password are required'
        });
      }
      const token = await auth.attempt(email, password);
      if (!token) {
        return response.status(500).json({
          message: 'Authentication failed, please try again'
        });
      }
      return response.status(200).json({
        message: 'Login successful',
        token
      });
    } catch (error) {
      console.log(error)
      return response.status(500).json({
        message: 'Authentication failed, please try again'
      });
    }

  }
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async list ({ request, response }) {
    return 'Hola mundo'
  }


  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const { username, email, password} = request.all()
      const user = await User.create({ username, email, password })
      return this.login(...arguments)
    } catch (error) {
      console.log(error)
      return response.status(500)
    }

  }



  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
