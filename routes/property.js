const express = require("express");
const PropertyInfo = require("../models/property/property.js");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser.json());

router.get("/", async (req, res) => {
    try{
        const details = await PropertyInfo.find().exec();
        res.json({
            status: "Success",
            details
        })

    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.get('/:id', async (req, res) => {

    try{  
        const ids = req.params.id
        const details = await PropertyInfo.find(ids);
        if(details){
            return  res.json({
                status: "Success",
                details
            })
        }
        res.status(403).json({ 
            status: "Failed",
            message: "No result Present"
        });
        
        }catch(e){
            res.status(500).json({
                status: "Failed",
                message: e.message
            })
        }
});

// router.post("/", async (req, res) => {
//     try{  
//         const details = await PropertyInfo.create({
//             name: req.body.name,
//             description: req.body.description,
//             price: req.body.price,
//             category: req.body.category,
//             picture: req.body.picture
//         });
//         res.json({
//             status: "Success",
//             details
//         })

//     }catch(e){
//         res.status(500).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// });
module.exports = router;
