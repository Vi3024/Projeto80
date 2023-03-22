namesOfPeople = []

function submit() {

    var GuestName = document.getElementById("name1").value;
    console.log(GuestName);
    namesOfPeople.push(GuestName);
    document.getElementById("displayName").innerHTML = namesOfPeople;

    var removeCommas = namesOfPeople.join(" ");
    console.log(removeCommas);
    document.getElementById("displayName").innerHTML = removeCommas;


}
function show() {
    var GuestName = document.getElementById("showButton").value;
    console.log(GuestName);
    namesOfPeople.push(GuestName);
    document.getElementById("displayName2").innerHTML = namesOfPeople;

    var removeCommas = namesOfPeople.join(" ");
    console.log(removeCommas);

    document.getElementById("displayName2").innerHTML = removeCommas;

    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting() {
    namesOfPeople.sort();
    var GuestName = document.getElementById("sortButton").value;
    console.log(GuestName);
    namesOfPeople.push(GuestName);
    document.getElementById("displayName3").innerHTML = namesOfPeople;

    var removeCommas = namesOfPeople.join(" ");
    console.log(removeCommas);

    document.getElementById("displayName3").innerHTML = removeCommas;
}

function searching() {
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;


    for (j = 0; j < namesOfPeople.length; j++) {
        if (s == namesOfPeople[j]) {
            found = found + 1;
        }
    }
    document.getElementById("p2").innerHTML = "Nome encontrado " + found + " vez(es)";
    console.log("Nome encontrado " + found + " vez(es)");
}