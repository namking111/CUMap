require('dotenv').config();

async function main() {
    const app = await require('./app')();
    await app.listen(app.get('port'));
    console.log(`  App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
    console.log(`  Press CTRL-C to stop\n`);
}

main();