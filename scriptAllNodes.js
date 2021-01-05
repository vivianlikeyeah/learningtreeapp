file = "allNodes.csv"

var documentData = null;

$(document).ready(function(){
  $("#demo").click(function(){
      readTextFile("allNodes.csv")

  });

  if (documentData != null){
    console.log(documentData);
  }
});


function readTextFile(file)
{

    console.log("Entered this");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            //if all is well.
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
                documentData = allText;
                console.log(documentData);
            }
        }
    }

    rawFile.send(null);
}
