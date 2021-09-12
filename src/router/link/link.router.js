const express = require('express');
const router = express.Router();
const got = require('got');

router.get("/", async (req, res) => {
    return res.render('main.pug');
})

router.post("/", async (req, res) => {
    const linkOriginal = req.body.link;
    const qualityVideo = req.body.quality;

    const getLinkSD = (link) => {
        return got(link).then(res => {
            const link = res.body.split('sd_src:"')[1].split('",hd_tag')[0];
            return {
                url: link
            };
        }).catch(error => {
            return {
                url: null
            }
        })
    }
    
    const getLinkHD = (link) => {
        return got(link).then(res => {
            const link = res.body.split('hd_src:"')[1].split('",sd_src:"')[0];
            console.log(link);
            return {
                url: link
            };
        }).catch(error => {
            return {
                url: null
            }
        })
    }

    if(qualityVideo == "SD") {
        getLinkSD(linkOriginal).then(link => {
            return res.status(201).json({
                url : link
            })
        })
    }
    if(qualityVideo == "HD") {
        getLinkHD(linkOriginal).then(link => {
            return res.status(201).json({
                url : link
            })
        })
    }
});

module.exports = router;