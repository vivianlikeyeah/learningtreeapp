//ModuleView.js

currentID = -1;
var xcoord = 0;
var ycoord = 0;

function returnID(givenID){

  //console.log("the given ID is ")
  //console.log(givenID)
  //console.log("The nodes we have in nodes 2 are")
  var ids = nodes2.getIds();
  //console.log(ids)
  currentNode = nodes2.get(givenID)
  //console.log("The node that matches is")
  //console.log(currentNode)
  //console.log("Therefore its label is")
  //console.log(currentNode.label)
  //console.log(nodeData)

  for (var key in nodeData) {
    //console.log(nodeData[key])
    //console.log(nodeData[key].title)
    if(nodeData[key].title == currentNode.label){
      //console.log("It's a match")
    //  console.log(nodeData[key])
      //console.log(key)
      output = key;
      break
    }

  }

  return output


};

function calculateTime(){
  //Get a list of all of the nodes in the build module
  //Of each node, check if their Core
  //If core, add to time.
  currentTime = 0;
  currentNodes = nodes2.getIds();
  for(x=0; x<currentNodes.length; x++){
    console.log(currentNodes[x])
    var retID = returnID(currentNodes[x]);
    console.log("The return ID is ", retID)
    state = nodeData[retID].cou
    if(state == "c"){
      currentTime = currentTime + 3;
    }
    //Get the appropriate ID
    //
  }
  return currentTime;
}
function addNode(title, group) {

        xcoord = xcoord + 70;
        ycoord = ycoord - 50;

        var newId = currentID + 1
        var colour
        if (group == 3){
          colour = "RGB(237,129,121)"
        }
        else if (group == 4){
          colour = "RGB(115,190,207)"
        }
        nodes2.add({id:newId, x:xcoord, y:ycoord, label:title, shape: "dot", group: group, color: colour});
        currentID = newId
        //nodeIds.push(newId);
}


// create an array with nodes
var nodes = new vis.DataSet([
  { id: 0, label: "AC Analysis", title: "AC Analysis", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 1, label:"AC Power", title: "AC Power", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 2, label:"Capacitors & RC Circuits", title: "Capacitors and Resistor-Capacitor (RC) Circuits", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 3, label:"DC Circuit Analysis, DC Circuit Theorems", title: "Circuit Theory", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 4, label:"Digital Logic Circuits", title: "Digital Logic Circuits", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 5, label:"Inductors & RI Circuits", title: "Inductors and Resistor-Inductor (RI) Circuits", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 6, label:"Intro to Sensors", title: "Introduction to Sensors", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 7, label:"Nodal Circuit Analysis", title: "Nodal Circuit Analysis", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 8, label:"Operational Amplifiers", title: "Operational Amplifiers", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 9, label:"AC circuit analysis,\n AC circuit theorems", title: "AC circuit analysis, AC circuit theorems", group: 3, shape:"dot", color: "RGB(237,129,121)" },
  { id: 10, label:"Advanced PV concepts", title: "Advanced PV concepts", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 11, label:"Alternative Energy", title: "Alternative Energy", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 12, label:"Power Distribution", title: "Power Distribution", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 13, label:"Power Storage", title: "Power Storage", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 14, label:"Renewable Energy", title: "Renewable Energy", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 15, label:"Sensors & Data Acquisition", title: "Sensors and Data Acquisition", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 16, label:"Signals & Systems", title: "Signals and Systems", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 17, label:"Autonomous Systems", title: "Autonomous Systems", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  { id: 18, label:"Mechatronics", title: "Mechatronics", group: 4, shape:"dot", color:"RGB(115,190,207)" },
  {id: 19, label: "AC Network Functions", title:"AC Network Functions", group: 3, shape: "dot", color: "RGB(237,129,121)"},
  {id: 20, label: "More Digital Circuits", title:"More Digital Circuits", group: 4, shape: "ellipse", color:"RGB(115,190,207)"}
]);

var nodeData = {
  "0":{title:"AC Analysis", code:"EE10001", group: 3, summary: "This is a description", url:"Click here for node", prereq: "NA" , cou: "u"},
  "1":{title:"AC Power", code:"EE10002", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "2":{title:"Capacitors & RC Circuits", code:"EE10003", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "3":{title:"Circuit Theory", code:"EE10004", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "4":{title:"Digital Logic Circuits", code:"EE10005", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "5":{title:"Inductors & RI Circuits", code:"EE10006", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "6":{title:"Intro to Sensors", code:"EE10007", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "7":{title:"Nodal Circuit Analysis", code:"EE10008", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "8":{title:"Operational Amplifiers", code:"EE10009", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "9":{title:"AC circuit analysis AC circuit theorems AC network functions", code:"EE20001", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "10":{title:"Advanced PV concepts", code:"EE20002", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "11":{title:"Alternative Energy", code:"EE20003", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "12":{title:"Power Distribution", code:"EE20004", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "13":{title:"Power Storage", code:"EE20005", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "14":{title:"Renewable Energy", code:"EE20006", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "15":{title:"Sensors & Data Acquisition", code:"EE20007", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "16":{title:"Signals & Systems", code:"EE20008", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "17":{title:"Autonomous Systems", code:"EE20009", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "18":{title:"Mechatronics", code:"ME20009", group: 4, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "19":{title:"AC Network Functions", code:"NEW NODE", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"},
  "20":{title:"More Digital Circuits", code:"XXXXXXX", group: 3, summary: "This is a description", url:"Click here for node", prereq: "Coming Soon", cou: "u"}
}

// create an array with edges
var edges = new vis.DataSet([
  {from:1	, to: 3},
  {from:2	, to: 5},
  {from:3	, to: 2},
  {from:3, to: 8},
  {from:4	, to: 20},
  {from:5	, to: 9},
  {from:6	, to: 15},
  {from:8	, to: 15},
  {from:9	, to: 19},
  {from:9, to: 12},
  {from:12, to: 13},
  {from:14, to: 12},
  {from: 14, to: 10},
  {from: 14, to: 13},
  {from:15, to: 16},
  {from:18, to: 17},
  {from: 19, to: 18},
  {from: 19, to: 8},
  {from: 20, to: 15}
]);




// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  interaction:{
    hover:true,
    keyboard:{
      enabled: true
    },
    //The tooltip is an annoying feature when you already have a popup - work around to hide it.
    tooltipDelay: 10000
  },
    height: '80%',
    edges:{
      arrows:"to"

    }
};
var network = new vis.Network(container, data, options);



// create an array with nodes
var nodes2 = new vis.DataSet([
]);

// create an array with edges
var edges2 = new vis.DataSet([
]);

// create a network
var container2 = document.getElementById('mynetwork2');
var data2 = {
  nodes: nodes2,
  edges: edges2
};
var options2 = {
  interaction:{
    hover:true,
    keyboard:{
      enabled: true
    }
  },
  physics:{
    enabled: false,
    repulsion:{
      nodeDistance:5,
      centralGravity: 50
    }

  },
  edges:{
    arrows:"to",
    smooth: {
       type: 'continuous'
     }

  },
  manipulation:{
    addEdge: function (data, callback) {
      if (data.from == data.to) {
        var r = confirm("Do you want to connect the node to itself?");
        if (r == true) {
          callback(data);
        }
      }
      else {
        callback(data);
      }
    },
    deleteNode: function(data,callback){
      //console.log("allo poppet")

      console.log(data.nodes[0])
      updateID = returnID(data.nodes[0])
      //This ID no longer corresponds.
      //For this node find the matching ID - given an ID in one array return the corresponding thing.
      console.log(updateID)
      //console.log("Hello")
      let thisNode = nodes.get(Number(updateID))
      console.log(thisNode.group)

      var colour;

      if (group == 3){
        colour = "RGB(237,129,121)"
      }
      else if (group == 4){
        colour = "RGB(115,190,207)"
      }
      nodeData[updateID].cou= "u"




      //Fix this so it retains all of the properties.

       nodes.update([{id:thisNode.id,color:colour}]);
      //change the colour back.
      callback(data)
    }
  }

};
var network2 = new vis.Network(container2, data2, options2);

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


function showPopUp(properties){
  console.log("Run showPopUp function")
  console.log(properties)
  console.log(properties.nodes)
  if(properties.nodes.length >0){
    console.log("Trigger If Statement")
    nodeID = properties.nodes[0]
    info = nodeData[nodeID]
    console.log(info)
    var modalcontent = document.getElementById("modal-content")
    var text = ""
    var html = text.concat("<p> Node: <b>", info.title,
    "</b> <br>Summary: ",  info.summary ,"<p> Node URL: ", "<a href=\"", info.url , "\" target=\"_blank\">Learn Now</a>",
  " <br>Pre-requisite Understanding: ", info.prereq )
    modalcontent.innerHTML = html
    modal.style.display = "block";
  }

}

function hidePopUp(){
  modal.style.display = "none";
}

function moveToBuild(properties){
  if(properties.nodes.length > 0){
    x=properties.nodes[0];
    console.log(nodeData[x].title);
    title = nodeData[x].title;
    group = nodeData[x]. group;
    addNode(title, group);
    let clickedNode = nodes.get(x);
    console.log(clickedNode)
    clickedNode.color = "RGB(166,223,197)";
    nodes.update(clickedNode)

  }
  else{
    console.log("Clicked elsewhere")
  }

}

network.on('click', function(properties){
  console.log("Click Registered")
  onClick(properties);
});
network.on('doubleClick', function(properties){
  onDoubleClick(properties);});

var doubleClickTime = 0;
var threshold = 200;

function onClick(properties) {
    var t0 = new Date();
    if (t0 - doubleClickTime > threshold) {
        setTimeout(function () {
            if (t0 - doubleClickTime > threshold) {
                doOnClick(properties);
            }
        },threshold);
    }
}

function doOnClick(properties) {
    showPopUp(properties);
}

function onDoubleClick(parameters) {
    doubleClickTime = new Date();
    console.log("execute onDoubleClick function");
    moveToBuild(parameters);
}

//Set the check to uncheck when you check the other
setCore = document.getElementById("setCore");
setOptional = document.getElementById("setOptional");

setCore.onchange = function(){

  setOptional.checked=false


}

setOptional.onchange = function(){
  setCore.checked= false
}

network2.on( 'click', function(properties) {
    if(properties.nodes.length > 0){
      if(setCore.checked == true){
        console.log("Set Core")
        x=properties.nodes[0];
        let clickedNode = nodes2.get(x);
        console.log(clickedNode)
        clickedNode.color = "#f0d700";
        nodes2.update(clickedNode)
        //We need to update the paramter in the data sheet
        console.log(returnID(x))
        console.log("The Node Data is")
        console.log(nodeData[returnID(x)])
        nodeData[returnID(x)].cou = "c"
        console.log(nodeData[returnID(x)])

        //if the property was checked
      }
      else{
        if(setOptional.checked == true){
          console.log("Set Optional")
          x=properties.nodes[0];
          //console.log(nodeData[x].title);
          //title = nodeData[x].title;
          //group = nodeData[x]. group;
          //addNode(title, group);
          let clickedNode = nodes2.get(x);
          console.log(clickedNode)
          clickedNode.color = "RGB(117,117,117)";
          nodes2.update(clickedNode)
          console.log(returnID(x))
          console.log("The Node Data is")
          console.log(nodeData[returnID(x)])
          nodeData[returnID(x)].cou = "o"
          console.log(nodeData[returnID(x)])

        }
        //alert("Nothing selected")
      }
      console.log(nodes2.getIds())
      for (x=0; x< nodes2.getIds().length; x++){
        console.log(x)
        console.log(returnID(x))
      }
    //  x=properties.nodes[0];
      //console.log(nodeData[x].title);
      //title = nodeData[x].title;
      //group = nodeData[x]. group;
      //addNode(title, group);
    //  let clickedNode = nodes2.get(x);
    //  console.log(clickedNode)
      //clickedNode.color = "#f0d700";
      //nodes2.update(clickedNode)

    }
    else{
      console.log("Clicked elsewhere")
    }

    time = calculateTime();
    console.log("The time is ", time)
    text = "";
    var timeText = document.getElementById("timeEstimate");
    timeText.innerHTML = text.concat(time + " hours") ;

});



theButton = document.getElementById("exportEdges");


theButton.onclick = function(){

  var ids = nodes2.getIds();
  var data = [];
  var data2=[];

  for(id in ids){
    //console.log("the ID at ths point is")
    //console.log(id)
    //console.log(nodes2.get(Number(id)))
    var connectedNodes = network2.getConnectedNodes(Number(id), "to")
    //console.log(connectedNodes)
    var connectedNodes2 = [];
    data.push([id, connectedNodes])
    for(y=0; y<connectedNodes.length; y++){
      //console.log(connectedNodes[y])
      //console.log("^")
      var newID = returnID(connectedNodes[y])
      //TO-DO: Given the current Node, get the code
      connectedNodes2.push(nodeData[Number(newID)].code);
      //connectedNodes2.push("Dummy Code")
    }
    //TO-DO: Given the current node, get the code
    //console.log("NOW the id is ")
    //console.log(id)
    var newID2 = returnID(Number(id))
    data2.push([nodeData[newID2].code,connectedNodes2])

  }

  //Create a list of all the node ID's
  var csv = 'Node,Connections\n';

  data.forEach(function(row) {
          csv += row.join(',');
          csv += "\n";
  });

  //console.log(csv);
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'IDsnodeConnections.csv';
  hiddenElement.click();

  var csv2 = 'Node,Connections\n';

  data2.forEach(function(row) {
          csv2 += row.join(',');
          csv2 += "\n";
  });

  //console.log(csv2);
  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv2);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'CODESnodeConnections.csv';
  hiddenElement.click();

};
