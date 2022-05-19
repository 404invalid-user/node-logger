import { textColours, resetColour } from './colours'
import * as moment from 'moment'
export default function (type: string, text: string, typeColour: string, textColor: string, showDate: boolean) {
    let time: string = moment().format('YYYY-MM-DD HH:mm:ss')
    let content: string
    if (showDate) {
        content = `${time} [${(textColours as any)[typeColour]}${type}${resetColour}]: ${(textColours as any)[textColor]}${text}`
    } else if (!showDate) {
        content = `[${(textColours as any)[typeColour]}${type}${resetColour}]: ${(textColours as any)[textColor]}${text}`
    }
    //@ts-ignore
    process.stdout.write(content + resetColour + "\n")
}