import { render } from 'ejs';
import db from '../models/index';
import CRUDService from '../Service/CRUDService';


let HomePage = (req, res) => {
    return res.render('homePage.ejs')
}
let Introduct = (req, res) => {
    return res.render('introduct.ejs');
}
let adminPage = (req, res) => {
    return res.render('Adminpage.ejs')
}
let contact = (req, res) => {
    return res.render('contact.ejs')
}
let Dstb = async (req, res) => {
    let data = await CRUDService.AllUser();
    console.log(data)
    return res.render('Dstb.ejs',
        {
            dataTable: data
        })
}
let readlistkh = async (req, res) => {
    let data = await CRUDService.AllUser();
    console.log(data)
    return res.render('listKh.ejs',
        {
            dataTable: data
        })
    // return res.render('listKh.ejs');
}
let readlistdv = async (req, res) => {
    let data = await CRUDService.AllUser();
    console.log(data)
    return res.render('listdv.ejs',
        {
            dataTable: data
        })
}
let readlistexport = async (req, res) => {
    let data = await CRUDService.AllLists();
    console.log(data)
    return res.render('export.ejs',
        {
            dataTable: data
        })
}
let getinsert = async (req, res) => {
    let message = await CRUDService.creatednewUser(req.body);
    console.log(message);
    return res.render('homePage.ejs');
}

let getinsertList = async (req, res) => {
    let message = await CRUDService.Createlistcontract(req.body);
    console.log(message);
    return res.render('Adminpage.ejs');
}

let getedit = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let userData = await CRUDService.InfoById(id);
        console.log(userData);
        return res.render('editKh.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found !');
    }
}

let geteditList = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let userData = await CRUDService.InfoById(id);
        console.log(userData);
        return res.render('editlistdv.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found !');
    }
}

let getput = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateData(data);
    return res.render('listdv.ejs', {
        dataTable: allUser
    })
}
let getputtb = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateData(data);
    return res.render('Dstb.ejs', {
        dataTable: allUser
    })
}

let getdelete = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteById(id);
        let data = await CRUDService.AllUser();
        // console.log(data)
        return res.render('listdv.ejs',
            {
                dataTable: data
            })
    }
    else {
        let data = await CRUDService.AllUser();
        console.log(data)
        return res.render('listdv.ejs',
            {
                dataTable: data
            })
    }
}
let getdeletetb = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteById(id);
        let data = await CRUDService.AllUser();
        // console.log(data)
        return res.render('Dstb.ejs',
            {
                dataTable: data
            })
    }
    else {
        let data = await CRUDService.AllUser();
        console.log(data)
        return res.render('Dstb.ejs',
            {
                dataTable: data
            })
    }
}
let getdeletelist = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteByIdList(id);
        let data = await CRUDService.AllLists();
        // console.log(data)
        return res.render('export.ejs',
            {
                dataTable: data
            })
    }
    else {
        let data = await CRUDService.AllLists();
        console.log(data)
        return res.render('export.ejs',
            {
                dataTable: data
            })
    }
}
let geteditcontract = async (req, res) => {
    let id = req.query.id;
    if (id) {
        let userData = await CRUDService.InfoByIdcontract(id);
        console.log(userData);
        return res.render('editcontract.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found !');
    }
}
let putcontract = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateDataContract(data);
    return res.render('export.ejs', {
        dataTable: allUser
    })
}
module.exports =
{
    HomePage: HomePage,
    readlistkh: readlistkh,
    getinsert: getinsert,
    getedit: getedit,
    getput: getput,
    getdelete: getdelete,
    readlistdv: readlistdv,
    readlistexport: readlistexport,
    getinsertList: getinsertList,
    geteditList: geteditList,
    getdeletelist: getdeletelist,
    geteditcontract: geteditcontract,
    putcontract: putcontract,
    Introduct: Introduct,
    adminPage: adminPage,
    contact: contact,
    Dstb: Dstb,
    getdeletetb: getdeletetb,
    getputtb: getputtb,
}
