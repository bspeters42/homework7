function gettingJSON(){

    let location = document.querySelector("#location").value;
    if (location == ""){location = "Ann Arbor";}
    console.log("Location is : " + location);
    
   
    var format = document.querySelectorAll("input[name=temp]:checked")[0].value
    // I cannot figure out how to get the no radio button selected to default to something.  


    // if (document.querySelectorAll("input[name=temp]:checked")[0].value = "celcius"){format = "metric"}
    // else if (document.querySelectorAll("input[name=temp]:checked")[0].value = "imperial"){format = "imperial"}
    // else (format = "imperial");

    console.log("Format is " + format);
    
    
    //set the query  my key: 5bd29e4380d3159b2e5869880f6eac74
    let query = 'http://api.openweathermap.org/data/2.5/weather?q='+ location + '&units='+format+'&appid=5bd29e4380d3159b2e5869880f6eac74';

    console.log("Query is :" + query);


    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    // let loc ;
    // let temp ;
    // let tempImg ;
    // Your code here.

    document.getElementById("forecast").style.display = "block";

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three elements in HTML.  
        //I would print the JSON to the console
        // console.log(JSON.stringify(json));
        console.log(json);

        loc = json.name;
        console.log("loc is : " + loc);
        document.getElementById("loc").innerHTML = loc;

        temp = json.main.temp;
        console.log("temp is : " + temp);
        document.getElementById("temp").innerHTML = temp;

        tempImg = json.weather[0].main;
        console.log("tempImg is : " + tempImg);
        


    });
}
