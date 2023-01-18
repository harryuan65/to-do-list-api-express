import "reflect-metadata"
import { DataSource } from "typeorm"
import { ToDoItem } from "./entity/ToDoItem"

const Database = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [ToDoItem],
    migrations: [],
    subscribers: [],
})

if (!Database.isInitialized) {
  Database.initialize().then(async () => {
    console.log("🗄️ Loading database...")
    }).catch(error => console.log(error))
}

export default Database;