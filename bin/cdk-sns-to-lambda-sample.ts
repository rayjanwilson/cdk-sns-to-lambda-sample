#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSnsToLambdaSampleStack } from '../lib/cdk-sns-to-lambda-sample-stack';

const app = new cdk.App();
new CdkSnsToLambdaSampleStack(app, 'CdkSnsToLambdaSampleStack');
