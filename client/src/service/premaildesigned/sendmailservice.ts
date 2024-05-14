
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const mailSendService = async (inputs: FieldValues) => {
    const response = await axios.post("api/email/sendmail", inputs)
    console.log(response)
    return response
}
export default mailSendService;