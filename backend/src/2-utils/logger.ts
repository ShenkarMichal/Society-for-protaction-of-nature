import fsPromises from 'fs/promises'

function logger(msg: string) {
    const now = new Date()
    fsPromises.appendFile("./logger.txt", `${now} \n ${msg} \n ------------`)
}

export default logger