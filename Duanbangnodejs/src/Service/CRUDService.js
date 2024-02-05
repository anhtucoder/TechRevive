import db from '../models/index';

let creatednewUser = async (data) =>  //tao moi du lieu database
{
    return new Promise(async (resolve, reject) => {
        try {
            await db.Users.create({
                name: data.name,
                sdt: data.sdt,
                address: data.address,
                listdevice: data.listdevice,
                error: data.error,
                note: data.note,
                hdid: data.hdid,
                dvid: data.dvid
            })
            resolve('Save complete')
        } catch (e) {
            reject(e);
        }
    })
}
let AllUser = () => // lay danh sach cac bang DATABASE
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.Users.findAll({
                raw: true,
            });
            resolve(user);
        }
        catch (e) {
            reject(e);
        }
    })
}
let AllLists = () => // lay danh sach cac bang DATABASE
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = db.lists.findAll({
                raw: true,
            });
            resolve(user);
        }
        catch (e) {
            reject(e);
        }
    })
}
let InfoById = (id) =>  //tim id cua bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: id },
                raw: true,
            })
            if (user) {
                resolve(user);
            } else {
                resolve({});
            }

        } catch (e) {
            reject(e);
        }
    })
}
let InfoByIdcontract = (id) =>  //tim id cua bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let list = await db.lists.findOne({
                where: { id: id },
                raw: true,
            })
            if (list) {
                resolve(list);
            } else {
                resolve({});
            }

        } catch (e) {
            reject(e);
        }
    })
}

let updateData = (data) =>  // cap nhat bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: data.id }

            })
            if (user) {
                user.name = data.name;
                user.sdt = data.sdt;
                user.address = data.address;

                await user.save();
                let allUser = await db.Users.findAll();
                resolve(allUser);
            }
            else {
                resolve();
                return console.log('loi~')
            }
        } catch (error) {

        }
    })
}
let updateDataContract = (data) =>  // cap nhat bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.lists.findOne({
                where: { id: data.id }

            })
            if (user) {
                user.hdid = data.hdid;
                user.phutrach = data.phutrach;
                user.ngaynhan = data.ngaynhan;
                user.ngaysua = data.ngaysua;
                user.ngaybaohanh = data.ngaybaohanh;
                user.phithanhtoan = data.phithanhtoan;
                user.thanhtoan = data.thanhtoan;
                user.note = data.note;

                await user.save();
                let allUser = await db.lists.findAll();
                resolve(allUser);
            }
            else {
                resolve();
                return console.log('loi~')
            }
        } catch (error) {

        }
    })
}
let deleteById = (id) =>  // xoa bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: id }
            })
            if (user) {
                await user.destroy();
            }
            resolve();
        } catch (error) {

        }
    })
}
let deleteByIdList = (id) =>  // xoa bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.lists.findOne({
                where: { id: id }
            })
            if (user) {
                await user.destroy();
            }
            resolve();
        } catch (error) {

        }
    })
}
let deleteByIddstb = (id) =>  // xoa bang database
{
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.lists.findOne({
                where: { id: id }
            })
            if (user) {
                await user.destroy();
            }
            resolve();
        } catch (error) {

        }
    })
}
let Createlistcontract = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.lists.create({
                hdid: data.hdid,
                name: data.name,
                sdt: data.sdt,
                dvid: data.dvid,
                listdevice: data.listdevice,
                error: data.error,
                phutrach: data.phutrach,
                ngaynhan: data.ngaynhan,
                ngaysua: data.ngaysua,
                ngaybaohanh: data.ngaybaohanh,
                phithanhtoan: data.phithanhtoan,
                thanhtoan: data.thanhtoan,
                note: data.note
            })
            resolve('Save complete')
        } catch (e) {
            reject(e);
        }
    })
}
module.exports =
{
    creatednewUser: creatednewUser,
    AllUser: AllUser,
    InfoById: InfoById,
    updateData: updateData,
    deleteById: deleteById,
    Createlistcontract: Createlistcontract,
    AllLists: AllLists,
    deleteByIdList: deleteByIdList,
    InfoByIdcontract: InfoByIdcontract,
    updateDataContract: updateDataContract,
    deleteByIddstb: deleteByIddstb,


}