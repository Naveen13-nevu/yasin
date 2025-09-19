function calculate(operation) {
    let resultBox = document.getElementById("result")
    try {
        let a = document.getElementById("num1").value;
        let b=document.getElementById("num2").value;

        if (a === "" || b==="")
        {
            throw new Error("Enter a number ");
        }
        a = Number(a);
        b = Number(b);
        // let result;
        switch (operation) {
            case "add":
                result = a + b;
                break;
            case "sub":
                result = a - b;
                break;
        case "multiply":
                result = a * b;
                break;
            case "divide":
                if (b === 0) {
                    throw new Error("can't devide by 0")
                }
                result = a / b;
                break;
        
            default:
                throw new Error("Unkown operation");
                
                // break;
        }
        resultBox.textContent = "Result :" + result;
    } catch (err) {
         resultBox.textContent = "error :"+ err.message;
         
    } finally {
        console.log("calculation attennded");
        
    }
}


