document.getElementById('searchSubmit').onclick = function () {
    
    //get pattern
    var pattern = document.getElementById("pattern").value;
    var re = new RegExp(pattern, "g");
    
    //get String
    var searchString = document.getElementById("incoming").value;
    
    var matchArray;
    var resultString = "<pre>";
    var first = 0;
    var last = 0;
    var count = 0;
    
    //find each match
    while ((matchArray = re.exec(searchString)) !== null) {
        last = matchArray.index;
        count += 1;
        
        //get all of the string up to match, concat
        resultString += searchString.substring(first, last);
        console.log(resultString);
        //add matched, with class
        resultString += "<span class='found'>" + matchArray[0] + "</span>";
        first = re.lastIndex;
        
    }
    
    //finish off string
    resultString += searchString.substring(first, searchString.length);
    resultString += "</pre>";
    
    //insert into page
    document.getElementById("searchResult").innerHTML = resultString;
    


    document.getElementById('footer').innerHTML = "Your search pattern: <em>" + pattern +
        "</em>, was found <b>" + count + "</b> times in this document.";
    
}
document.getElementById('submit').onclick = function () {
    var text = document.getElementById('incoming').value;
    var textArray = text.split(' ');
    console.log(textArray);
    
    var i = 0, l = textArray.length;
    (function iterator() {
    document.getElementById('footer').innerHTML = (textArray[i]);

    if(++i<l) {
        setTimeout(iterator, 200);
    }
})();
    
    
}

