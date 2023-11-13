import app from "./app"
import config from "./config/config"
import {SyncDatabase} from "./repository/database"

main()

async function main() {
    await SyncDatabase()

    app.listen(Number(config.port || 3000), config.backend_url || "localhost",()=>
        console.log(`🚀 Server has listening on ${config.backend_url || "localhost"}:${config.port || 3000}`)
    )
}