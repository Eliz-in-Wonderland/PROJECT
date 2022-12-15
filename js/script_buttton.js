let buttonpl = document.getElementById("minus_button");
count1 = 0;
buttonpl.onclick = function() {
    count1 += 1;
    buttonpl.innerHTML = " " + count1;
}

let buttonmin = document.getElementById("plus_button");
count2 = 0;
buttonmin.onclick = function() {
    count2 += 1;
    buttonmin.innerHTML = " " + count2;
    
}