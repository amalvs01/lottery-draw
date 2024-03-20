var draw = [110095,990055,989876,125643,558844];

function winner(){

 
    let index = draw[Math.floor(Math.random() * draw.length)];

    console.log("Winner Ticket Number:", index);

    // Display winner on HTML page in red color

    document.getElementById("result").innerHTML = "Winner Ticket Number " + index;
     document.getElementById("result").style.color="#db350b";


    // Display winner in Bootstrap modal

    document.getElementById("elem").innerHTML = "Winner Ticket Number  " + index;

    $("#popup").modal("show");

  

}
