import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
    vus: 1, // max 2 for smoke testing
    duration: '1m',
    thresholds: { http_req_duration: ['avg', 'p(95)<400', 'p(99.99)<1500'] },
    summaryTrendStats: ['avg', 'p(95)', 'p(99.99)'],
};

export default () => {
    http.get('https://test-api.loadimpact.com/public/crocodiles/');
    sleep(3);
}
