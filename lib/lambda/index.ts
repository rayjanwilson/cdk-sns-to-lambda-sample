import {SNSEvent, SNSEventRecord, SNSMessage, Context} from 'aws-lambda'


export const handler = async (event: SNSEvent, context: Context) => {
    console.log(event)
    return 'hello'
}