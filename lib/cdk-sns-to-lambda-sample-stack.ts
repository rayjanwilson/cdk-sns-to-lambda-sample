import { Runtime, Tracing } from '@aws-cdk/aws-lambda';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { Topic } from '@aws-cdk/aws-sns';
import { Construct, Duration, Stack, StackProps } from '@aws-cdk/core';
import { RetentionDays } from '@aws-cdk/aws-logs';
import { LambdaSubscription } from '@aws-cdk/aws-sns-subscriptions';

export class CdkSnsToLambdaSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const topic = new Topic(this, 'Trigger')

    const myFunc = new NodejsFunction(this, 'Lambda', {
      runtime: Runtime.NODEJS_14_X,
      entry: `${__dirname}/lambda/index.js`,
      handler: 'handler',
      timeout: Duration.minutes(5),
      tracing: Tracing.ACTIVE,
      logRetention: RetentionDays.ONE_WEEK,
      bundling: {
        minify: true
      }
    })

    topic.addSubscription(new LambdaSubscription(myFunc))
  }
}
