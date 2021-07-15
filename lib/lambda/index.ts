import {SNSEvent, Context} from 'aws-lambda'


export const handler = (event: SNSEvent, context: Context): Promise<string> => {
    console.log(event)
    const message_string: string = event.Records[0].Sns.Message;
    const message: {some_id: number} = JSON.parse(message_string)

    console.log(message_string)
    // do some async stuff
    return new Promise( (resolve, reject) => {
        if (message.some_id === 1234) {
            resolve('success')
        } else {
            reject('fail')
        }
        
    })
}