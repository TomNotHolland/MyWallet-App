import axios from "axios";
const BaseURL = "http://localhost:3000/api";

export function GetSummary() {
	const Request = axios.get(`${BaseURL}/billingcycle/summary`)

  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: Request
  }
}
