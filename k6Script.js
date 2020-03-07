import http from "k6/http";
import { check } from "k6";

export let options = {
  vus: 30,
  duration: '30s',
};

export default function () {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let id = getRandomInt(900000, 1000000)
  let res = http.get(`http://localhost:3007/earnings/${id}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};
