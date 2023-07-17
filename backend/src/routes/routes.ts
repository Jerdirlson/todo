import { Express, Request, Response } from "express";
import { Database, initDatabase } from "../db";
import { OkPacket, OkPacketParams } from 'mysql2';

export default( app: Express) =>{

    app.post('/todo2', async (req : Request, res: Response) => {
        const db : Database = await initDatabase(res);
        const query = `
        INSERT INTO todos (title, description, color, stage) VALUES 
            (?, ?, ?, ?)`;
        const values = [
            req.body.title, req.body.description, req.body.color
        ]
        const response: OkPacketParams = await db.insertQuery(query, values);
        
        if(response.insertId! > 0){
            res.status(200)
        }else{
            res.status(210)
            res.end()
        }

    
    })

    app.get('/todo', async (req : Request, res: Response) => {
        console.log('Se esta recibiendo la peticion')
        const db : Database = await initDatabase(res);
        const query = `
        SELECT * FROM todos
        `;

        const response: OkPacketParams = await db.insertQuery(query, undefined);
        
        if(response){
            res.send(response);
            res.status(200)
        }else{
            res.status(210)
            res.end()
        }
    })

    app.get('/', (req : Request, res: Response) => {
        res.send('All OK')
    })


}