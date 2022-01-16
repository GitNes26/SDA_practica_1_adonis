import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from '../../Models/Product';

export default class ProductsController {
  public async index({}: HttpContextContract) {
    const products = await Product.all();

    if (products.length > 0) {
      return await products;
    }
    return await {"message":"Sin registros."}
  }
  public async store({request}: HttpContextContract) {
    try {
      const {name, description, price, quantity} = request.all();

      const product =  await Product.create({name, description, price, quantity});

      let response = {
        message: "Producto registrado",
        data: product
      }
      return await response;
    } catch (e) {
      return await {"message":"No se ha podido registrar el procucto, verifique sus datos. Probablemente el nombre del producto ya exista."}
    }
  }
}
