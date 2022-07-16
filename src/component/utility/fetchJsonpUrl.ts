import fetchJsonp from "fetch-jsonp";
import { debounce } from "lodash";

interface fetchJsonpUrlProps {
  endpoint: string;
  term?: string;
}
export const fetchJsonpUrl = async ({ endpoint, term }: fetchJsonpUrlProps) => {
  const options = { jsonpCallback: "jsoncallback", timeout: 3000 };
  const response = await fetchJsonp(`${endpoint}${term}`, options);
  return await response.json();
};
