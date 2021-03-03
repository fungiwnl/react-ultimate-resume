#!/bin/bash

set -xe

S3_BUCKET=s3://fung-test-bucket
aws s3 sync ../build $S3_BUCKET 
