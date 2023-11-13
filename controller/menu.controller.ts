import MenuService from "../service/menu.service"
import {Menu} from "../repository/model/menu.model"
import { Request,Response } from "express"

const MenuController = {
    async createMenu(req:Request,res:Response,next:any){
        const payload  = req.body
        try {
            const result = await MenuService.createMenu(payload)
            return res.status(200).send({
                status:"success",
                data:result
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async getMenu(req:Request,res:Response,next:any){
        try{
            const {id} = req.params
            const menu = await MenuService.getMenu(Number(id))
            return res.status(200).send({
                status:"success",
                data:menu
            })
        }catch(error){
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async getAllMenu(req:Request,res:Response,next:any){
        try {
            const filter = req.query
            const all_menu = await MenuService.getAllMenu(filter)
            return res.status(200).send({
                status:"success",
                data: all_menu
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async updateMenu(req:Request,res:Response,next:any){
        try {
            let {id} = req.params
            const payload = req.body
            const result = await MenuService.updateMenu(Number(id),payload)
            return res.status(200).send({
                status:"success",
                message:`Update menu id: ${id} successfully`
            })
        } catch (error) {
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    },

    async deleteMenu(req:Request,res:Response,next:any){
        try{
            const {id} = req.params
            const menu = await MenuService.getMenu(Number(id))
            if(!menu){
                return res.status(404).send({
                    message:"Menu not found"
                })
            }
            const result = await MenuService.deleteMenu(Number(id))
            return res.status(200).send({
                status:"success",
                message:`Delete id ${id} successfully`
            })
        }catch(error){
            return res.status(500).send({
                status:"error",
                message:"Internal Server Error"
            })
        }
    }
}

export default MenuController