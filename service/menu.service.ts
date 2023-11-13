import {Menu} from "../repository/model/menu.model"

import db from "../repository/database"

const menuRepository = db.typeorm.getRepository(Menu)

const MenuService = {
    async createMenu(payload:any){
        try{
            let new_menu = new Menu()
            new_menu.name = payload.name
            new_menu.description = payload.description
            new_menu.price = payload.price
            new_menu.img_name = payload.img_name
            new_menu.category = payload.category
            let menu = await menuRepository.save(new_menu)
            return menu
        }catch(error){
            console.log(error)
            throw(error)
        }
    },

    async getMenu(id:number){
        try{
            let menu = await menuRepository.findOne({
                where:{
                    id_menu:id,
                    is_delete:false
                }
            })
            console.log(menu)
            return menu
        }catch(error){
            console.log(error)
            throw(error)
        }
    },

    async getAllMenu(filter:any){
        try{
            let all_menu = await menuRepository.findAndCount({
                where:{
                    ...filter,
                    is_delete:false
                }
            })

            return all_menu
        }catch(Error){
            throw(Error)
        }
    },

    async updateMenu(id:number,payload:any){
        try {
            let menu = await menuRepository.findOne({
                where:{
                    id_menu:id,
                    is_delete:false
                }
            })
            if(!menu){
                return null
            }
            return await menuRepository.save({
                ...menu,
                ...payload
            })
        } catch (error) {
            console.log(error)
            throw(error)
            
        }
    },

    async deleteMenu(id:number){
        try{
            let menu = await menuRepository.findOne({
                where:{
                    id_menu:id
                }
            })
            if(!menu){
                return null
            }
            menu.is_delete = true
            return await menuRepository.save(menu)
        }catch(error){
            console.log(error)
            throw(error)
        }
    }
}

export default MenuService