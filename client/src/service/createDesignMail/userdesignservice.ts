
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const createDesignMailService = async (inputs: FieldValues) => {
    const response = await axios.post("api/email/customizemail", inputs)
    console.log("service of CUSTMIZE EMAIL====")
    console.log(response)
    return response
}
export default createDesignMailService;