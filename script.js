var friends = ["Ariel", "Will", "Ryn", "Conner", "Eric"];

for(var i = 0; i < friends.length; i++) {
    console.log(friends[i].toUpperCase() + ':');
    for(var a = 99; a > 0; a--) {
            if(a === 1) {
                console.log(a + " line of code in the file, " + a + " line of code; " + friends[i] + "strikes one out, clears it all out, no more lines of code in the file");
            } else if(a === 2) {
                console.log(a + " lines of code in the file, " + a + " lines of code; " + friends[i] + " strikes out, clears it all out, " + (a-1) + " line of code in the file.");
            } else {
                console.log(a + " lines of code in the file, " + a + " lines of code; " + friends[i] + " strikes out, clears it all out, " + (a-1) + " lines of code in the file.");
            }
         }
};

