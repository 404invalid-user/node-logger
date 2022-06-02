import { appendFileSync } from 'fs'
import * as path from 'path'
import * as moment from 'moment'

export default function (type: string, text: string, logPath: any, showDate: boolean) {
    if (!logPath) throw "Error: log path must be provided"
    let time: string = moment().format('YYYY-MM-DD HH:mm:ss')

    let content: string
    if (showDate) {
        content = `${time} [${type}]: ${text}`
    } else if (!showDate) {
        content = `[${type}]: ${text}`
    }

    //@ts-ignore
    appendFileSync(path.join(__dirname + '/../../../../', logPath), content + '\n', function (err) {
        if (err) {
            console.log(err.stack || err)
        }
    })
}