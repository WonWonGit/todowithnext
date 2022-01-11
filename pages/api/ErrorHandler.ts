const ErrorHandler = (err:any, res:any) => {
    if(typeof(err) == 'string'){
        return res.status(400).json({message:err});
    }

    if(err.name === 'UnauthorizedEorror') {
        return res.status(401).json({message:'Invalid Token'});
    }

    return res.status(500).json({message: err.message});
}
export default ErrorHandler;