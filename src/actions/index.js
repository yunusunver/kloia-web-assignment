export function openClose(data,result){
        if (data === "first") {
            return{
                type:'FIRST_ITEM',
                payload:!result
            }
        }
        else if(data==="second"){
            return{
                type:'SECOND_ITEM',
                payload:!result
            }
        }
    }