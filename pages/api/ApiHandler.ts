import ErrorHandler from "@/pages/api/ErrorHandler";

const ApiHandler = (handler:any) => {
    return async (req:any, res:any) => {
        try {

        }catch (e){
            ErrorHandler(e, res);
        }
    }
}

export default ApiHandler;