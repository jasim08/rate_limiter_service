# rate_limiter_service - API Throttling / Rate Limiting with sliding window counter algorithm

## BEGIN

**Required Installation**
1) Node.js
2) Redis


**Github link:** [repo](https://github.com/jasim08/rate_limiter_service.git)


**How to Run the project?**
### npm install && npm start

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

Requests: 0 (0%), requests per second: 0, mean latency: 0 ms

Target URL:          http://localhost:3000/user
Max requests:        10
Concurrency level:   1
Agent:               none

**Completed requests:  10**
**Total errors:        5**
Total time:          3.1654459999999998 s
Requests per second: 3
Mean latency:        316 ms

Percentage of the requests served within a certain time
50%      599 ms
90%      632 ms
95%      632 ms
99%      632 ms
100%      632 ms (longest request) 

100%      632 ms (longest request) 

429:   **5 errors**


**errors are reffered as restricted call**


## Happy Coding! END.
