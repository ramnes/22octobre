import {wedding_date} from "./constants";

export function married() {
    return (new Date() > wedding_date);
}
