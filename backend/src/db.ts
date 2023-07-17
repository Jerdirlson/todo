import { createConnection, Connection, OkPacketParams } from 'mysql2';
import { Response } from 'express';

export const initDatabase = async(res : Response) =>{
    const database: Database = new Database(res);
    const response = await database.createConnection()
    if(!response){
        console.log('La conexion no fue exitosa');
        process.exit()
    }
    console.log("Conexion exitosa db")
    return database;
}

export class Database {
    private host: string = '127.0.0.1';
    private user: string = 'root';
    private password: string = 'root';
    private database: string = 'todos';
    private port: number = parseInt('3306');

    private response: Response;
    public conection!: Connection;

    constructor(res: Response) {
        this.response = res
    }

    async createConnection() {
        let connected: boolean
        try{
            connected = await new Promise((resolve, reject) => {
                try {
                    this.conection = createConnection({
                        host: this.host,
                        user: this.user,
                        password: this.password,
                        database: this.database,
                        port: this.port
                    });
                    this.conection.connect((err) => {
                        err ? reject(false) : resolve(true);
                    });
                } catch (err: any) {
                    reject(false);
                }
            });
        }catch(error: any){
            console.error("Error in DB connection")
            this.response.status(500);
            this.response.send("Contact with the provider");
            return false
        }
        if (!connected) {
            this.response.status(500);
            this.response.end();
        }
        return true;
    }

    async insertQuery(query: string, values: any[] | undefined): Promise<OkPacketParams>{
        return await new Promise((resolve, reject)=>{
            this.conection.query(query, values, (err, result)=>{
                if(err){
                    reject(err);
                }
                resolve(result as OkPacketParams);
            })
        })
    }

}