const fs = require('fs');

export default async function handler(req, res) {
    let data = await fs.promises.readdir('data/blogdata');
    let query = req.query.query;
    let allblogs = [];
    let myfile;
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(`data/blogdata/${item}`, 'utf-8');
        allblogs.push(JSON.parse(myfile.toString()));
    }
    allblogs = allblogs.filter(e => {
        return e.title.indexOf(query) !== -1
    })
    res.status(200).json(allblogs);
}