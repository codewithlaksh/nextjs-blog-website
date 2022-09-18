const fs = require('fs')

export default async function handler(req, res) {
    if (req.method == "POST"){
        let data = await fs.promises.readdir('data/contactdata');
        fs.writeFile(`data/contactdata/${data.length + 1}.json`, JSON.stringify(req.body), (err, data) => {
            
        });
        res.status(200).redirect("/contact");
    }else{
        res.status(400).json({message: `${req.method} is not allowed!`, 'status': 400})
    }
}