import axios from 'axios'
import { json } from 'stream/consumers'

export default function (whtype: string, uri: string, type: string, text: string, colour: string) {
    if (whtype == "discord") {
        try {
            axios.post(uri, {
                content: "new " + type,
                embeds: [{
                    color: parseInt(colour.replace("black", "0x000000").replace('red', "0xFF0000").replace('green', "0x00FF00").replace('yellow', "0xFFFF00").replace('blue', "0x0000FF").replace('magenta', "0xC900FF").replace('cyan', "0x00DCFF").replace('white', "0xFFFFFF").replace('grey', "0xA5A5A5")),
                    title: type,
                    description: '```sh\n' + text + '\n```',
                    timestamp: new Date()
                }]
            })
        } catch (err:any) {
            //throw err
            console.log(err)
        }
    } else if (whtype == "googlechat") {
        try {
            axios.post(uri, {
                text: `[${type}]: ${text}`,
            })
        } catch (err:any) {
            throw err
        }
    }
}