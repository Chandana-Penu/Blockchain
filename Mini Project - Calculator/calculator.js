function ClearDisplay()
{
    // alert("Hey There! Let's clear the display.");
    // DisplayID.value="";
    document.getElementById("DisplayID").value = "";
}

function displayN(n)
{
    // alert("Hey There! "+n);
    document.getElementById("DisplayID").value += n;
}

function result()
{
    let x = document.getElementById("DisplayID").value;
    let y = eval(x);
    document.getElementById("DisplayID").value = y;
}