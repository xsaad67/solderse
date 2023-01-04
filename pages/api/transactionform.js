const Validator = require("fastest-validator");
import { env } from "../../next.config";


const v = new Validator();
const schema = {
    amount: { type: "number", min: env.MIN_VALUE, max: env.MAX_VALUE }, // required
    email: { type: "email", empty: true }
}
const check = v.compile(schema);
export default function handler(req, res) {

    let validation = check(req.body);
    let errorMessages = {};

    if (validation !== true) {
        validation.forEach((element, index, array) => {
            errorMessages[element.field] = element.message;
        });
        return res.status(400).json(errorMessages)
    }

    // console.log(account);

    return res.status(200).json({ data: "hello" })
}