import http from 'k6/http';

export default function () {
  http.get('http://localhost:8030/carousel/8/listing');
}