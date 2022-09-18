const fs = require('fs');

export default async function handler(req, res) {
    fs.readFile(`data/blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if (err){
            res.status(404).json({message: "No such blog found!", status: 404});
        }else{
            res.status(200).json(JSON.parse(data.toString()));
        }
    });
}