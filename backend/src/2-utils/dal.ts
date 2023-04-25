import mysql from 'mysql'
import appConfig from './app-config'

const connection = mysql.createPool({
    host: appConfig.host,
    user: appConfig.user,
    password: appConfig.password,
    database: appConfig.database
})

function execute(sql: string): Promise<any> {
    return new Promise<any>((resolve,reject)=>{
        connection.query(sql,(err, resoult)=>{
            if(err){
                reject(err)
                return
            }
            resolve(resoult)
        })
    })
}

export default {
    execute
}