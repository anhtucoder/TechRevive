import express from "express";
import homeController from "../Controller/homeController";
let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.HomePage);
    router.get('/introduct', homeController.Introduct);

    // router.get('/readlistkh',homeController.readlistkh);
    router.post('/insertkh', homeController.getinsert);
    router.get('/editkh', homeController.getedit);
    router.post('/put', homeController.getput);


    router.get('/readlist', homeController.readlistdv);
    router.get('/editlist', homeController.geteditList);
    router.get('/delete', homeController.getdelete);
    router.post('/insertlist', homeController.getinsertList);


    router.get('/deletelist', homeController.getdeletelist);
    router.get('/exportlist', homeController.readlistexport);
    router.get('/editcontract', homeController.geteditcontract);
    router.post('/putcontract', homeController.putcontract);


    router.get('/deletedstb', homeController.getdeletetb);
    router.post('/putdstb', homeController.getputtb);
    router.get('/dstb', homeController.Dstb);
    router.get('/contact', homeController.contact);
    router.get('/admin', homeController.adminPage);
    return app.use("/", router);
}

module.exports = initWebRouter;