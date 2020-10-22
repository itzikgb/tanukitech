import http from 'k6/http';

export let options = {
    stages: [
        { duration: '1m', target: 100 },
//         { duration: '5m', target: 60 }, // simulate ramp-up of traffic from 1 to 60 users over 5 minutes.
//         { duration: '10m', target: 60 }, // stay at 60 users for 10 minutes
//         { duration: '3m', target: 100 }, // ramp-up to 100 users over 3 minutes (peak hour starts)
//         { duration: '2m', target: 100 }, // stay at 100 users for short amount of time (peak hour)
//         { duration: '3m', target: 60 }, // ramp-down to 60 users over 3 minutes (peak hour ends)
//         { duration: '10m', target: 60 }, // continue at 60 for additional 10 minutes
//         { duration: '5m', target: 0 }  // ramp-down to 0 users
    ],
    thresholds: { 'http_req_duration': ['p(95)<400', 'p(99.99)<1500'] },
    summaryTrendStats: ['avg', 'p(95)', 'p(99.99)'],
};

export default () => {
   // http.get('https://test-api.loadimpact.com/public/crocodiles/');
   http.get('http://production-demos-tanukitech.35.204.255.125.nip.io/');
}
