const { promises } = require('node:dns');
const fs = require('node:fs/promises');

async function datacopy() {
    async function readfileAsync() {
        const data = await fs.readFile('studentData.json', 'utf-8');
        console.log(data);
        return data;
    }

    try {
        const data = await readfileAsync();
        await fs.writeFile("Data.json", data);
        console.log("data written");
    } catch (err) {
        console.log("error", err);
    } finally {
        console.log("finally");
    }
}

datacopy();