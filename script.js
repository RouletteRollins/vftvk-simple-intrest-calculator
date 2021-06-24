function compute()
{
		//commute button
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    
    // math multiplication
    let interest = principal * years * rate / 100;
    let endYear = new Date().getFullYear() + parseInt(years);

    
    let compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))
		
    
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    //result message
    
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>at an interest rate of 
    <mark>${rate}</mark>.<br>You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>in the year <mark>${endYear}</mark><br>
    <br>your amount will result in <mark>${compounded.toFixed(2)}</mark>`;
}
//slider change

function updateRate()
{
	var rateval=document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval;
}   

        
