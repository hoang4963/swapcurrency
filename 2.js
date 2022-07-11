function swap()
{
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result;
    a = parseFloat(amount);
    b = parseInt(from);
    c = parseInt(to);
    if (b == 1 && c == 1) {
        result= "Result:     " + a + "  VND"


    }
    else if ( b == 2 && c == 2)
    {
        result= "Result:    " + a + "  USD"
    }
    else if ( b == 1 && c == 2 ){
        result= "Result:     " + (a/23000) + "  USD"
    }
    else  {
        result= "Result:      " + (a*23000) + "  VND"
    }
    document.getElementById("result").innerHTML = result;
}