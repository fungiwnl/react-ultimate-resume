#!/bin/bash

set -xe

aws s3 sync ../build $S3_BUCKET 
