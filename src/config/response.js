export default class HttpResponseEntity{
    
    success(data = null){
        let response = {
            status : true
        }
        if(data != undefined || data != null || data != null)
            response.data = data;
        return response;
    }

    error(message = "No data found"){
        return {
            status : false,
            message : message
        }
    }
}