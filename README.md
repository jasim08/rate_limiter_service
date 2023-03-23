# rate_limiter_service - API Throttling / Rate Limiting with sliding window counter algorithm

## BEGIN

**Required Installation**
1) Node.js
2) Redis


**Github link:** [repo](https://github.com/jasim08/rate_limiter_service.git)


**How to Run the project?**
### npm start

or

### set NODE_ENV=dev && nodemon server.js


## API - GET USER
**/user**

### For load testing usign loadtest package from npm

**npm i loadtest --save-dev**

### Commands

**loadtest -n 10  -c 1 http://localhost:3000/user **

Rate limits are set to 5 request / 5 seconds

### SAMPLE OUTPUT

loadtest -n 10  -c 1 http://localhost:3000/user
[Thu Mar 23 2023 11:15:30 GMT+0530 (India Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO 
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Target URL:          http://localhost:3000/user
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Max requests:        10
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Concurrency level:   1
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Agent:               none
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO 
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO **Completed requests:  10**
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO **Total errors:        5**
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Total time:          3.1654459999999998 s
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Requests per second: 3
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Mean latency:        316 ms
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO Percentage of the requests served within a certain time
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO   50%      599 ms
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO   90%      632 ms
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO   95%      632 ms
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO   99%      632 ms
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO  100%      632 ms (longest request) 
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO  100%      632 ms (longest request) 
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO
[Thu Mar 23 2023 11:15:33 GMT+0530 (India Standard Time)] INFO   429:   **5 errors**

**errors are reffered as restricted call**


## Happy Coding! END.
