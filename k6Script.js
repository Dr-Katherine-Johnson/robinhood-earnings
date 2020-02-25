import http from "k6/http";
import { check } from "k6";

export default function () {
  let res = http.get("http://localhost:3007/earnings/P2M1QSWZ2MD2BR");
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};
