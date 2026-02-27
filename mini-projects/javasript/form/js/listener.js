    document.getElementById("calc-btn").addEventListener("click", function() {
        let firstinput = document.getElementById("first-input").value;
        let secondinput = document.getElementById("second-input").value;


        try {

        let result = divide(Number(firstinput), Number(secondinput));
        document.getElementById("result").textContent = result;

        }catch(error){
            document.getElementById("result").innerHTML = `<span style="color: red;">${error}</span>`;
        }


        
    })