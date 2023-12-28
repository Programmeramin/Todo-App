/**
 * 
 * @param {*} type 
 * @returns 
 */

export const TypeColor = (type) =>{

    switch (type) {
        case "Completed":
            return "green";

            case "Pending":
                return "yellow";

                case "Deleted":
                return "red";
    
    }

}