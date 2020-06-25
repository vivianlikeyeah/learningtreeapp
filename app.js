function removeStartNodes(){
  //when this is called all of the starting nodes are removed.
  startNodes =[1000,2000,3000]
  for(x=0;x<startNodes.length; x++){
    let clickedNode = nodes.get(startNodes[x]);
    nodes.remove(clickedNode)
  }


}

function addStartNode(projectID){
  //When this is called, given an ID, a start node is added.
}

function colourByCore(projectID){

  if(projectID == ""){
    colourByLevel();
    $("#LearnLegend").fadeOut(5);
    $("#ExploreLegend").fadeIn(5);
    return;

  }
  checkNodes = [0,2,3,5,6,7,8,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,42,43,44,100,200,300]
  $("#LearnLegend").fadeIn(5);
  $("#ExploreLegend").fadeOut(5);
  console.log("HELLOOO")

  for (nodeID=0; nodeID < checkNodes.length; nodeID++){
    console.log(nodeID)

    let clickedNode = nodes.get(checkNodes[nodeID]);
    console.log(clickedNode)

    //Manually updating optional vs Core nodes
    if(clickedNode){
      if(clickedNode.project == projectID){
        if(projectID == 1 && (nodeID == 11)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 2 && (nodeID == 19)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 1 && (nodeID == 6)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 3 && (nodeID == 43)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 1 && (nodeID == 4)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 2 && (nodeID == 20)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 2 && (nodeID == 21)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 3 && (nodeID == 42)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 1 && (nodeID == 10)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 1 && (nodeID == 12)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 2 && (nodeID == 23)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 2 && (nodeID == 25)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 2 && (nodeID == 44)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 3 && (nodeID == 30)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else if(projectID == 3 && (nodeID == 31)){
          clickedNode.color = "grey";
          nodes.update(clickedNode)
        }
        else{
          clickedNode.color = "#f0d700";
          nodes.update(clickedNode)

        }
      }
    }
  }
}

function colourByLevel(){
  checkNodes = [0,2,3,5,6,7,8,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,42,43,44,100,200,300]
  for (nodeID=0; nodeID < checkNodes.length; nodeID++){

      let clickedNode = nodes.get(checkNodes[nodeID]);

      if(clickedNode){
        if (clickedNode.group == 4){
          clickedNode.color = {  background: '#82cbff', border: '#82cbff'}  }
        else if (clickedNode.group == 3){  clickedNode.color = { background: '#8682ff', border: '#8682ff'} }
        else if (clickedNode.group==6){ clickedNode.color = { background: '#ff829d', border: '#ff829d'} }
        else if (clickedNode.group ==100){clickedNode.color = { background: '#f0d700', border: '#f0d700'} }
        else{ clickedNode.color = { background: '#ff9f82', border: '#ff9f82'} }
        nodes.update(clickedNode);
      }
  }
}

function colourByComplete(){
  checkNodes = [0,2,3,5,6,7,8,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,42,43,44,100,200,300]
  for (nodeID=0; nodeID < checkNodes.length; nodeID++){
    let clickedNode = nodes.get(checkNodes[nodeID]);
    if(clickedNode){
    if (clickedNode.completed == "true"){
      clickedNode.color = { background: '#03fc84'}
    }
    else if(clickedNode.completed == "na"){
      clickedNode.color = { background: '#f0d700'}

    }
    else{
      clickedNode.color = { background: '#FFFFFF'}
    }
    nodes.update(clickedNode);
  }
  }

}
function landingOff(){
  //write code to turn landing points on
  landingNodes = [20,37,0]
  for (nodeID=0; nodeID < landingNodes.length; nodeID++){
    let clickedNode = nodes.get(landingNodes[nodeID]);
    if(clickedNode){
      clickedNode.shape = "dot"
      nodes.update(clickedNode);

    }

    //nodes.update({id: nodeID, shape: "dot"});
  }

}

function landingOn(){
  landingNodes = [20,37,0]
  for (nodeID=0; nodeID < landingNodes.length; nodeID++){
    let clickedNode = nodes.get(landingNodes[nodeID]);
    if(clickedNode){
      //clickedNode.shape = "circularImage"
      nodes.update(clickedNode);

    }

    //nodes.update({id: nodeID, shape: "dot"});
  }
  //write code to toggle landing points off
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function UpdateProject(projectID) {

      document.getElementById("showComplete").checked = false;

      filtered = true;

      nodes.clear();
      edges.clear();
      nodes.add(nodesArray);
      edges.add(edgesArray);

      if(projectID == ''){
        $("#LearnLegend").fadeOut(5);
        $("#ExploreLegend").fadeIn(5);
        return
      }

      $("#LearnLegend").fadeIn(5);
      $("#ExploreLegend").fadeOut(5);

      //First, we add the start node.

      start = {id: 1000, font:{size:30}, label: 'Start', shape: 'box', group:100, module: 1, completed: "na", project: 4}
      nodes.add(start);


      checkNodes = [0,2,3,5,6,7,8,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,42,43,44,100,200,300]
      for (nodeID=0; nodeID < checkNodes.length; nodeID++){
        let clickedNode = nodes.get(checkNodes[nodeID]);
        console.log(clickedNode)
        console.log(nodeID)
        //Manually updating optional vs Core nodes
        if(clickedNode.project == projectID){
          if(projectID == 1 && (nodeID == 11)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 2 && (nodeID == 19)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 1 && (nodeID == 4)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 1 && (nodeID == 10)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 1 && (nodeID == 12)){
            clickedNode.color = "grey";
            nodes.update(clickedNode);
          }
          else if(projectID == 2 && (nodeID == 20)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 2 && (nodeID == 21)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 3 && (nodeID == 30)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else if(projectID == 3 && (nodeID == 31)){
            clickedNode.color = "grey";
            nodes.update(clickedNode)
          }
          else{
            clickedNode.color = "#f0d700";
            nodes.update(clickedNode);

          }
          //update ClickedNode to be colured || Decide the colours for each one.

        }
        else{
          //console.log("No Match")
          //nodes.remove({id:nodeID});
          nodes.remove(clickedNode);

          //console.log(nodes)
        }


    }

    if(projectID == 1){
      edges.update(edgesArray1);
    }

    if(projectID == 2){
      edges.update(edgesArray2);
    }

    if(projectID == 4){
      edges.update(edgesArray4);
    }
    if(projectID == 3){
      edges.update(edgesArray3);
    }

    //Call a function to update optional status.




  }



var filtered = false;

//Reset the filters when you move to the other filter
//$("#nodeFilterSelect").on("change", function () {

//  $("#projectFilterSelect").val('');

//});
//$("#projectFilterSelect").on("change", function () {

//  $("#nodeFilterSelect").val('');

//});

//Define the buttons in the left menu
var learn = document.getElementById("Learn");
var explore = document.getElementById("Explore");
var analytics = document.getElementById("Analytics");
var settings  = document.getElementById("Settings");
var nodeSearch = document.getElementById("NodeSearch");

//On click of each button on the left, activate the icon and deactivate the other icons.
learn.onclick = function(){
  landingOff();
  $(this).addClass('active');
  if ( explore.classList.contains('active') ){ explore.classList.toggle('active');}
  if ( analytics.classList.contains('active') ){ analytics.classList.toggle('active');}
  if ( settings.classList.contains('active') ){ settings.classList.toggle('active');}
  if ( nodeSearch.classList.contains('active') ){ nodeSearch.classList.toggle('active');}
  var net = document.getElementById("mynetwork");
  net.style.display = "block";
    $("#searchBox").fadeOut(300);
    $("#analyticsBox").fadeOut(300);
    $("#mynetwork").fadeIn(300);
      $("#h1").fadeIn(300);
        $("#rightBox").fadeIn(200);
}
explore.onclick = function(){
  landingOn();
  $(this).addClass('active');
  if ( learn.classList.contains('active') ){ learn.classList.toggle('active');}
  if ( analytics.classList.contains('active') ){ analytics.classList.toggle('active');}
  if ( settings.classList.contains('active') ){ settings.classList.toggle('active');}
  if ( nodeSearch.classList.contains('active') ){ nodeSearch.classList.toggle('active');}
  //var net = document.getElementById("mynetwork");
  //net.style.display = "block";
    $("#h1").fadeIn(300);
  $("#mynetwork").fadeIn(300);
  $("#searchBox").fadeOut(300);
  $("#analyticsBox").fadeOut(300);
    $("#LearnLegend").fadeOut(5);
      $("#ExploreLegend").fadeIn(5);
        $("#rightBox").fadeIn(200);
}
analytics.onclick = function(){
  $(this).addClass('active');
  if ( learn.classList.contains('active') ){ learn.classList.toggle('active');}
  if ( explore.classList.contains('active') ){ explore.classList.toggle('active');}
  if ( settings.classList.contains('active') ){ settings.classList.toggle('active');}
  if ( nodeSearch.classList.contains('active') ){ nodeSearch.classList.toggle('active');}
  var net = document.getElementById("mynetwork");
  net.style.display = "none";
  $("#projectFilterSelect").fadeOut(300);
  $("#searchBox").fadeOut(300);
  $("#analyticsBox").fadeIn(300);
    $("#h1").fadeOut(300);
    $("#rightBox").fadeOut(200);

}
settings.onclick = function(){
  $(this).addClass('active');
  if ( learn.classList.contains('active') ){ learn.classList.toggle('active');}
  if ( explore.classList.contains('active') ){ explore.classList.toggle('active');}
  if ( analytics.classList.contains('active') ){ analytics.classList.toggle('active');}
  if ( nodeSearch.classList.contains('active') ){ nodeSearch.classList.toggle('active');}
  var net = document.getElementById("mynetwork");
  net.style.display = "none";
  $("#projectFilterSelect").fadeOut(300);
  $("#searchBox").fadeOut(300);
  $("#analyticsBox").fadeOut(300);
    $("#h1").fadeOut(300);
      $("#rightBox").fadeOut(200);
}

nodeSearch.onclick = function(){
  $(this).addClass('active');
  if ( learn.classList.contains('active') ){ learn.classList.toggle('active');}
  if ( explore.classList.contains('active') ){ explore.classList.toggle('active');}
  if ( analytics.classList.contains('active') ){ analytics.classList.toggle('active');}
  if ( settings.classList.contains('active') ){ analytics.classList.toggle('active');}
  var net = document.getElementById("mynetwork");
  net.style.display = "none";
  $("#projectFilterSelect").fadeOut(300);
    $("#searchBox").fadeIn(300);
    $("#analyticsBox").fadeOut(300);
      $("#h1").fadeOut(100);
        $("#rightBox").fadeOut(200);
}


//Define the Modal to display Node Information
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var mode = "Explore"



// Needs to be combined with the top function.
$("#Explore").click(function(){

  if(filtered == true){
    nodes.clear();
    edges.clear();
    nodes.add(nodesArray);
    edges.add(edgesArray);
    filtered = false;
  }

  $("#projectFilterSelect").val("");


  mode = "Explore"
  document.getElementById("showComplete").checked = false;
  $("#projectFilterSelect").fadeOut(300);

  colourByLevel();
});


//Check and see if we can update a node colour when we click this
$("#Learn").click(function(){
  if(filtered == true){
    nodes.clear();
    edges.clear();
    nodes.add(nodesArray);
    edges.add(edgesArray);
    filtered = false;
  }
  mode = "Learn"
  $("#projectFilterSelect").fadeIn(500);
  document.getElementById("showComplete").checked = true;
  colourByComplete()
  /*
  //Time to iterate through all of the nodes.
  checkNodes = [0,2,3,5,6,7,8,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,42,43,44]
  for (nodeID=0; nodeID < checkNodes.length; nodeID++){
    let clickedNode = nodes.get(checkNodes[nodeID]);
    if (clickedNode.completed == "true"){
      clickedNode.color = { background: '#03fc84'}
    }
    else{
      clickedNode.color = { background: '#FFFFFF'}
    }
    nodes.update(clickedNode);
  }*/
});

function startNetwork(data) {
  const container = document.getElementById('mynetwork')
  const options = {
    physics:{
        enabled: true,
        barnesHut: {
      theta: 0.5,
      gravitationalConstant: -2000,
      centralGravity: 0.5,
      springLength: 95,
      springConstant: 0.24,
      damping: 0.09,
      avoidOverlap: 0
    },
    },
      nodes: {
        shape: "dot",
        size: 30,
        font: { size: 12,  color: "black"  },
        borderWidth: 5,  shadow: true},
        edges: { width: 2, shadow: true},
        groups: {
            4:{color:{background: '#82cbff', border: '#82cbff'}  },
            3:{color:{background: '#8682ff', border: '#8682ff'}},
            6:{color:{background: '#ff829d', border: '#ff829d'}},
            100: {color: { background: '#f0d700', border: '#f0d700'} },
            7:{color:{background: '#ff9f82', border: '#ff9f82'}}
          },
          height: '85%'
      };

  network = new vis.Network(container, data, options)
  network.on( 'click', function(properties) {
        if(mode == "Settings"){
          var xcoord = properties.pointer.DOM.x;
          var ycoord = properties.pointer.DOM.y;
          console.log(xcoord);
          console.log(ycoord);
          var options = {
              position: {x:xcoord,y:ycoord},
              offset: {x:400, y:200},
              scale: 1,
              animation: true // default duration is 1000ms and default easingFunction is easeInOutQuad.
          };
          //this.moveTo(options);

        }
        else{
          var modal = document.getElementById("myModal");
          if(properties.nodes.length > 0){
            console.log(properties.nodes)
            if(nodeData[properties.nodes[0]]){
              var modalcontent = document.getElementById("modal-content")
              //modalcontent.innerHTML =
              var text = ""
              var html = text.concat("<p> Node: <b>", nodeData[properties.nodes[0]].title,
              "</b> <br>Summary: ",  nodeData[properties.nodes[0]].blurb ,"<p> Node URL: ", "<a href=\"", nodeData[properties.nodes[0]].url , "\" target=\"_blank\">Learn Now</a>",
            " <br>Pre-requisite Understanding: ", nodeData[properties.nodes[0]].prereq )
              modalcontent.innerHTML = html
              modal.style.display = "block";

            }
            else{
              var modalcontent = document.getElementById("modal-content")
              var text = ""
              var html = text.concat("<p> Node: <b> <br>",
              "</b><p> Node URL: ", "<a href=\"", "\" target=\"_blank\">Learn Now</a>" )
              modalcontent.innerHTML = html
              modal.style.display = "block";
            }
          }

        }

      });

    }
    nodeData ={
      "0":{title:"Computer Internet Literacy", prereq:"None", blurb:"This node will guide you through the basic computer literacy skills required to complete a degree at TEDI-London. You may have encountered some of these skills already, or may learn something new. It includes demystifying jargon, basic troubleshooting, as well as Office 365 guides and resources ",url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FComputer%20Internet%20Literacy%7Ce17f70ba-d7dc-424f-8f0c-c172d8216901%2F%29&wdorigin=703"},
      "2":{title: "Python Programming", prereq:"Characters, Strings and Looping", blurb:"This node provides a crash course in the language of Python. Within 3 hours you'll be able to write your first computer programming having covered universal topics such as arrays and variables, to topics more specific to python such as indenting.",url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FPython%20Programming%7C8163e712-9363-4ef1-83b0-eb22309a4040%2F%29&wdorigin=703"},
      "3":{title: "Characters Strings and Looping",prereq:"Computational Thinking", blurb:"This node covers an introduction to 3 major topics that are crucial in developing any piece of software, characters, strings and looping. Once you cover this node, you'll be able to launch into a range of Programming Languages.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FCharacters%20Strings%20and%20Looping%7C1fc9ffe7-876a-4d35-b075-c6d06897403e%2F%29&wdorigin=703"},
      "5":{title:"Computational Thinking",prereq:"Computer Internet Literacy", blurb:"This node will explore 4 key concepts within Computational Thinking: Decomposition, Pattern Recognition, Algorithms and Abstraction.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FComputational%20Thinking%7C7040a41e-aa9b-4a94-af30-42eb665680c7%2F%29&wdorigin=703"},
      "6":{title:"Debugging", prereq:"Python Programming OR HTML & CSS",blurb:"This node is delivered in 5 programming languages, and covers debugging. In this node you'll look at what debugging is, common bugs you're likely to encounter, technqiues for finding and fixing them, as well as getting a chance to put these concepts to practice. ", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FDebugging%7C2f570e51-89ad-4f6c-967c-b86038c5504d%2F%29&wdorigin=703"},
      "7":{title:"HTML and CSS", prereq:"Characters, Strings and Looping", blurb:"The foundations of Web Development lies in 'vanila' HTML and CSS. These two langauges covered, work very closely together to produce web pages. You'll learn the fundamentals of each language separately, then put them together to build you're own webpage.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FHTML%20%20CSS%7Cdeb4a46b-02f2-478f-8006-043708c12f94%2F%29&wdorigin=703"},
      "8":{title:"JavaScript", prereq:"HTML & CSS", blurb:"This node teaches the fundamental web programming language, Javascript. Javascript is used to enhance webpages, make them more interactive, as well as performing computationally significant tasks.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FJavascript%7C334ef7f3-07d6-4e92-aae3-483c7e0936a5%2F%29&wdorigin=703"},
      "12":{title:"Web Development", prereq:"JavaScript", blurb:"This node builds off of the content taught in JavaScript and HTML & CSS Nodes, combining these languages and truly putting them into action", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FWeb%20Development%7C51a7c3c5-6b2e-4787-9653-d4d913585a5c%2F%29&wdorigin=703"},
      "13":{title:"Testing", prereq:"Debugging", blurb:"Testing is critical to programs big and small. This node will teach you what the different testing methods commonly used are as well as how you can put them into practice today.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FTesting%7C8bfcb936-a99e-4884-a6c1-108886eed492%2F%29&wdorigin=703"},
      "16":{title:"Algorithms", prereq:"Python Programming", blurb:"The algorithms node covers a range of algorithmic techniques and examples, delivered in 5 programming languages. ", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FAlgorithms%7Cb5ea5500-148a-4ff6-882a-9f521f225206%2F%29&wdorigin=703"},
      "17":{title:"Databases", prereq:"Algorithms", blurb:"This node covers an introduction into databases, as well as the techniques used to normalise them. This includes and understanding and implementation of 1NF, 2NF and 3NF.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FDatabases%7C69eeca8b-bab7-48c6-bd0d-865ba32f97c8%2F%29&wdorigin=703"},
      "18": {title: "Big Data",prereq:"Databases", blurb:"This node dives deep into the definition of Big Data, considering specficially the 5 V's. The node covers several examples of Big Data across the fields of Health, Entertainment and Transport. ", url: "https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FBig%20Data%7C90c6c554-f36f-4922-a370-da01d157c281%2F%29&wdorigin=703"},
      "19":{title:"Object Oriented Design", prereq:"Algorithms", blurb:"The object oriented design node covers the principles of OO in the languages Python and Java. It includes Abstraction, Encapsulation, Inheritance and Polymorphism.", url:"https://tedilondon.sharepoint.com/sites/TEDI-LondonLearningTree-Sandpit/_layouts/15/Doc.aspx?sourcedoc={48a7ecc2-6c9a-467c-98d0-2a44c4888440}&action=edit&wd=target%28_Content%20Library%2FUsing%20the%20Content%20Library.one%7C53ce0b5a-76b8-48e8-95a6-2cbe39f062ef%2FObject%20Oriented%20Design%7Cabaf3225-cfc7-453d-8fa6-a3564015ec80%2F%29&wdorigin=703"},
      "100":{title: "Computing Branch"},
      "200":{title: "Structurcal Engineering Branch"},
      "300":{title: "Business Skills Branch"}

    }

    var nodesArray = [
    { id: 0, label: "Computer Internet Literacy", group: 4,  module:1, completed:"true", shape: 'dot', image: 'start.png', project: 1},
    { id: 2, label: "Python Programming", group: 4, module:1, completed:"true", project: 1},
    { id: 3, label: "Characters Strings and Looping", group: 4,module:1, completed:"true",project: 1},
    { id: 5, label: "Computational Thinking", group: 4,module:1, completed:"true", project: 1},
    { id: 6, label: "Debugging", group: 6, module:1, completed:"false",project: 1},
    { id: 7, label: "HTML and CSS", group: 4,module:1, completed:"false", project: 4},
    { id: 8, label: "JavaScript", group: 6,module:1, completed:"false", project: 4},
    { id: 12, label: "Web Development", group: 7, module:1, completed:"false", project: 4},
    { id: 13, label: "Testing", group: 6, module:1, completed:"false", project: 4},
    { id: 16, label: "Algorithms", group: 6, module:1, completed:"false", project: 1},
    { id: 17, label: "Databases", group: 7, module:1, completed:"false", project: 1},
    { id: 18, label: "Big Data", group: 7,module:1 , completed:"false", project: 1},
    { id: 19, label: "Object Oriented Design", group: 7 ,module:3, completed:"false", project: 1},
    { id: 20, label: "Intro to Civil Engineering", group: 4, module: 3, completed:"false", shape: 'dot', image: 'start.png', project: 3  },
    { id: 21, label: "Strain", group: 4, module: 3, completed:"false", project: 3 },
    { id: 22, label: "A learning node", group: 6, module: 3, completed:"false", project: 4 },
    { id: 23, label: "A learning node", group: 6, module: 3, completed:"false", project: 2 },
    { id: 24, label: "A learning node", group: 6, module: 2, completed:"false", project: 2},
    { id: 25, label: "A learning node", group: 6, module: 2, completed:"false", project: 2},
    { id: 26, label: "A learning node", group: 7, module: 2, completed:"false", project: 2},
    { id: 27, label: "A learning node", group: 6, module: 2, completed:"false", project: 2},
    { id: 28, label: "A learning node", group: 7, module: 2, completed:"true", project: 2},
    { id: 29, label: "A learning node", group: 7, module: 2, completed:"false", project: 4},
    { id: 30, label: "Life Cycle Analysis", group: 7, module: 2, completed:"false", project: 3},
    { id: 31, label: "Life Cycle Assessment", group: 7, module: 2, completed:"false", project: 3},
    { id: 32, label: "A learning node", group: 4, module: 3, completed:"false", project: 4},
    { id: 33, label: "Design of Structural Sysyems", group: 6, module: 2, completed:"false", project: 3},
    { id: 34, label: "A learning node", group: 4, module: 3, completed:"false", project: 4},
    { id: 36, label: "Failure of structural systems", group: 6, module: 2, completed:"false", project: 3},
    { id: 37, label: "A learning node", group: 4, module: 3, completed:"false", shape: 'dot', image: 'start.png', project: 2 },
    { id: 42, label: "Limit State Design", group: 6, module: 3, completed:"false", project: 3},
    { id: 43, label: "Discrete Models of Structures", group: 6, module: 3, completed:"false", project: 3},
    { id: 44, label: "Stress", group: 4, module: 2, completed:"false", project: 3},
    {id: 100, font:{size:30}, label: 'Computing', shape: 'box', group:100, module: 1, completed: "na", project: 4},
    {id: 200, font:{size:30}, label: 'Structural', shape: 'box', group:100, module: 2, completed: "na", project: 4 },
      {id: 300, font:{size:30}, label: 'Business', shape: 'box', group:100, module: 3, completed: "na", project: 4 }
    ];

    var edgesArray1 = [
      {from: 1000, to:0}
    ]

    var edgesArray2 = [
      {from: 1000, to:37},
    { from: 8, to: 18 },
    {from: 8, to: 19},
    {from:37, to: 24},
    {from: 41, to: 46},
    {from: 44, to: 25},
    {from: 21, to:42},
    {from: 43, to:6},
    {from: 40, to:39},
    {from: 8, to: 32}
    ]

    var edgesArray3 = [
      {from:1000, to:20}

    ]
    var edgesArray4 = [
    { from: 20, to: 31 },
    {from: 42, to: 44},
    {from:44, to: 38}
    ]

    var edgesArray = [
      {from:200, to:20},
    {from:100, to:0},
    {from:300, to:37},
    {from: 32, to:37},
    { from: 0, to: 5 },
    {from: 5, to: 3},
    {from:3, to: 2},
    {from: 3, to: 7},
    {from: 7, to:8 },
    {from: 8, to: 12},
    {from: 17, to: 18},
    {from: 16, to: 17},
    {from: 2, to: 6},
    {from: 7, to: 6},
    {from: 6, to: 13},
    {from: 2, to: 16},
    {from: 16, to: 19},
    {from: 20, to:21},
    {from: 22, to: 23},
    {from: 24, to: 23},
    {from: 25, to: 28},
    {from: 23, to: 25},
    {from: 28, to: 26},
    {from: 24, to: 27},
    {from: 28, to: 29},
    {from: 28, to: 27},
    {from: 30, to:31},
    {from: 32, to:22},
    {from: 34, to: 23},
    {from: 35, to: 38},
    {from: 33, to: 44},
    {from: 38, to: 26},
    {from: 34, to: 37},
    {from: 38, to: 39},
    {from: 38, to: 41},
    {from: 42, to: 36},
    {from: 30, to: 36},
    {from: 43, to: 33},
    {from: 33, to: 36},
    {from: 40, to: 44},
    {from: 44, to: 21}

    ];



    nodes = new vis.DataSet(nodesArray);
    console.log("hello")
    console.log(nodes)
    edges = new vis.DataSet(edgesArray);

    /**
     * filter values are updated in the outer scope.
     * in order to apply filters to new values, DataView.refresh() should be called
     */
    let nodesFilter = true;
    let projectFilterValue = '';



    var myFilter = "all";

    const nodesView = new vis.DataView(nodes);

    var updateColour = false;



    startNetwork({ nodes: nodesView, edges: edges })

    projectFilter = document.getElementById("projectFilterSelect");
    function helloThere(val){
      console.log(val)
    }

    projectFilterSelect.onchange = function(){
      UpdateProject(projectFilterSelect.value);

    }



    showComplete = document.getElementById("showComplete");

    showComplete.onchange = function(){
      if(document.getElementById("showComplete").checked == true){

        colourByComplete();
        /*
        checkNodes = [0,2,3,5,6,7,8,12,13,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,42,43,44]
        for (nodeID=0; nodeID < checkNodes.length; nodeID++){

            let clickedNode = nodes.get(checkNodes[nodeID]);
            if(clickedNode){
              if (clickedNode.completed == "true"){
                clickedNode.color = {
                background: '#03fc84'
                }
              }
              else{
                clickedNode.color = {
                background: '#FFFFFF'
                }
              }
              nodes.update(clickedNode);
            }

        }*/
      }
      else{

        if(mode =="Explore"){
          colourByLevel();
        }
        else{
          pfs = document.getElementById("projectFilterSelect");
          colourByCore(pfs.value)
        }


      }
    };

var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor()
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.green,
        "#f0d700"
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Not Started',
      'Completed',
      'In Progress'
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Node Status'
    }
  }
};
var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var color = Chart.helpers.color;
		var barChartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Completed Nodes',
				backgroundColor: color("#f0d700").alpha(0.5).rgbString(),
				borderColor: "#f0d700",
				borderWidth: 1,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				]
			}]

		};
window.onload = function() {
  var ctx = document.getElementById('chart-area').getContext('2d');
  window.myPie = new Chart(ctx, config);

  var ctx = document.getElementById('chart-area2').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					responsive: true,
					legend: {
						position: 'top',
					},
					title: {
						display: true,
						text: 'Node Progression'
					}
				}
			});
};
