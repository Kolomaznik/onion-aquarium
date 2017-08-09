#!/bin/bash

HRS=hours
MIN=min
SEC=sec

HRS=$(date +%H)
MIN=$(date +%M)
SEC=$(date +%S)
echo $HRS ":" $MIN " " $SEC
