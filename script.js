var len = undefined;
var caseVar = 0;

var nodesArray = [
{ id: 0, label: "Computer Internet Literacy", group: 3, color:"orange", module:1 },
{ id: 2, label: "Python Programming", group: 4, module:1},
{ id: 3, label: "Characters Strings and Looping", group: 4,module:1 },
{ id: 5, label: "Computational Thinking", group: 4,module:1 },
{ id: 6, label: "Debugging", group: 4, module:2 },
{ id: 7, label: "HTML and CSS", group: 4,module:1 },
{ id: 8, label: "JavaScript", group: 4,module:1 },
{ id: 12, label: "Web Development", group: 5, module:1 },
{ id: 13, label: "Testing", group: 5, module:2 },
{ id: 16, label: "Algorithms", group: 5, module:2},
{ id: 17, label: "Databases", group: 5, module:3 },
{ id: 18, label: "Big Data", group: 5,module:3 },
{ id: 19, label: "Object Oriented Design", group: 5 ,module:3}
];
var edgesArray = [
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
{from: 16, to: 19}
];

nodes = new vis.DataSet(nodesArray);
edges = new vis.DataSet(edgesArray);

// create a network
var container = document.getElementById("mynetwork");
var data = {
nodes: nodes,
edges: edges
};
var options = {
nodes: {
  shape: "dot",
  size: 30,
  font: {
    size: 12,
    color: "white"
  },
  borderWidth: 2,
  shadow: true
},
edges: {
  width: 2,
  shadow: true
}
};

var options2 = {
nodes: {
  shape: "dot",
  size: 300,
  font: {
    size: 6,
    color: "white"
  },
  borderWidth: 2,
  shadow: true
},
edges: {
  width: 2,
  shadow: true
}
};


network = new vis.Network(container, data, options);

network.on( 'click', function(properties) {
  //alert('clicked node ' + properties.nodes);
  url = "https://tedilondon-my.sharepoint.com/personal/t1924844_tedi-london_ac_uk/_layouts/15/Doc.aspx?sourcedoc={f6faf3a8-7ea9-4ccd-9346-eec5f3dd4bf2}&action=edit&wd=target%28_Content%20Library%2FComputational%20Thinking.one%7C1bd916d4-bf74-4f69-a0a4-4507a6995e71%2FComputational%20Thinking%20Node%7C9cdb84f8-185e-bf42-ad73-8ff1602e3289%2F%29&wdorigin=703"
  if(properties.nodes == 5){
     window.open(url);
  }
  else if(properties.nodes == 8){
    console.log('clicked node ' + properties.nodes);
    window.open("https://view.genial.ly/5eb10d0db640df0d907fc96a/presentation-computational-thinking-node");
  }
  else if(properties.nodes == 7){
    window.open("https://tedilondon-my.sharepoint.com/personal/t1924844_tedi-london_ac_uk/_layouts/15/Doc.aspx?sourcedoc={f6faf3a8-7ea9-4ccd-9346-eec5f3dd4bf2}&action=edit&wd=target%28_Content%20Library%2FComputational%20Thinking.one%7C1bd916d4-bf74-4f69-a0a4-4507a6995e71%2FHTML%20and%20CSS%20Node%7C4ff247c3-b56d-4267-971a-eb5a11c79be7%2F%29&wdorigin=703");
  }
  else{
      console.log('clicked node ' + properties.nodes);
    //alert('clicked node ' + properties.nodes);
  }

});


$("#toggleView").click({param1: network, param2: options2, param3:nodes}, cool_function);

// $("#addNew").click({param1: network, param2: options2, param3:nodes}, addNewNode);

$("#togglePath").click({param1: network, param2: options2, param3:nodes}, toggle_path);

$('#refresh').click({param1:network}, refreshLayout);

$('#nodeFilterSelect').change({param3: nodes}, filter_nodes);

function filter_nodes(event){
  console.log("Filtering the nodes")
  console.log(event.target.value);
    if(event.target.value == "5"){
      console.log("Entered here")
      event.data.param3.update({id: 0, color: "yellow"});
      event.data.param3.update({id: 2, color: "yellow"});
      event.data.param3.update({id: 3, color: "yellow"});
      event.data.param3.update({id: 5, color: "yellow"});
      event.data.param3.update({id: 6, color: "#d3d3d3"});
      event.data.param3.update({id: 7, color: "#d3d3d3"});
      event.data.param3.update({id: 8, color: "#d3d3d3"});
      event.data.param3.update({id: 12, color: "#d3d3d3"});
      event.data.param3.update({id: 13, color: "#d3d3d3"});
      event.data.param3.update({id: 16, color: "yellow"});
      event.data.param3.update({id: 17, color: "#324ca8"});
      event.data.param3.update({id: 18, color: "#d3d3d3"});
      event.data.param3.update({id: 19, color: "#324ca8"});

    }
  else if(event.target.value == "1"){
    console.log("Display the first filter");
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "yellow"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});
    event.data.param3.update({id: 16, color: "yellow"});
    event.data.param3.update({id: 17, color: "#324ca8"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "#324ca8"});

  }
  else if (event.target.value == "2"){
    console.log("Display the second filter");
    event.data.param3.update({id: 0, color: "#d3d3d3"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});
    event.data.param3.update({id: 16, color: "yellow"});
    event.data.param3.update({id: 17, color: "#d3d3d3"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "yellow"});
  }
  else if(event.target.value == "3"){
    console.log("Display the third filter");
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "#91f9ff"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "yellow"});
    event.data.param3.update({id: 7, color: "#91f9ff"});
    event.data.param3.update({id: 8, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "yellow"});
    event.data.param3.update({id: 16, color: "#d3d3d3"});
    event.data.param3.update({id: 17, color: "#d3d3d3"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "#d3d3d3"});
  }

  else if (event.target.value == "4"){
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "#d3d3d3"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "yellow"});
    event.data.param3.update({id: 8, color: "#00ff99"});
    event.data.param3.update({id: 12, color: "yellow"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});
    event.data.param3.update({id: 16, color: "#d3d3d3"});
    event.data.param3.update({id: 17, color: "#d3d3d3"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "#d3d3d3"});

  }
  else{
    console.log("Display all");
    event.data.param3.update({id: 0, color: "orange"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "yellow"});
    event.data.param3.update({id: 5, color: "yellow"});
    event.data.param3.update({id: 6, color: "yellow"});
    event.data.param3.update({id: 7, color: "yellow"});
    event.data.param3.update({id: 8, color: "yellow"});
    event.data.param3.update({id: 12, color: "#eb8584"});
    event.data.param3.update({id: 13, color:"#eb8584"});
    event.data.param3.update({id: 16, color:"#eb8584"});
    event.data.param3.update({id: 17, color:"#eb8584"});
    event.data.param3.update({id: 18, color:"#eb8584"});
    event.data.param3.update({id: 19, color:"#eb8584"});
  }

}


function toggle_path(event){

  if(caseVar == 0){
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});
    event.data.param3.update({id: 16, color: "yellow"});
    event.data.param3.update({id: 17, color: "yellow"});
    event.data.param3.update({id: 18, color: "yellow"});
    event.data.param3.update({id: 19, color: "#d3d3d3"});
    caseVar = 1;


  }
  else if(caseVar == 1){
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});
    event.data.param3.update({id: 16, color: "yellow"});
    event.data.param3.update({id: 17, color: "#d3d3d3"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "yellow"});

    console.log("Another case, case is 1");
    caseVar = 2;


  }
  else{
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "yellow"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "yellow"});
    event.data.param3.update({id: 16, color: "#d3d3d3"});
    event.data.param3.update({id: 17, color: "#d3d3d3"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "#d3d3d3"});


    console.log("Another case, case is 2");

    caseVar = 0;
  }



};


function cool_function(event){
  var current = $("#toggleView").html();
  if(current == "My Completed Nodes"){
    $("#toggleView").html("All Nodes");
    event.data.param3.update({id: 0, color: "#00ff99"});
    event.data.param3.update({id: 2, color: "#d3d3d3"});
    event.data.param3.update({id: 3, color: "#00ff99"});
    event.data.param3.update({id: 5, color: "#00ff99"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#00ff99"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});
    event.data.param3.update({id: 16, color: "#d3d3d3"});
    event.data.param3.update({id: 17, color: "#d3d3d3"});
    event.data.param3.update({id: 18, color: "#d3d3d3"});
    event.data.param3.update({id: 19, color: "#d3d3d3"});



  }
  else{
    event.data.param3.update({id: 0, color: "orange"});
    event.data.param3.update({id: 2, color: "yellow"});
    event.data.param3.update({id: 3, color: "yellow"});
    event.data.param3.update({id: 5, color: "yellow"});
    event.data.param3.update({id: 6, color: "yellow"});
    event.data.param3.update({id: 7, color: "yellow"});
    event.data.param3.update({id: 8, color: "yellow"});
    event.data.param3.update({id: 12, color: "#eb8584"});
    event.data.param3.update({id: 13, color:"#eb8584"});
    event.data.param3.update({id: 16, color:"#eb8584"});
    event.data.param3.update({id: 17, color:"#eb8584"});
    event.data.param3.update({id: 18, color:"#eb8584"});
    event.data.param3.update({id: 19, color:"#eb8584"});


      $("#toggleView").html("My Completed Nodes");

  }


    console.log(event.data.param2);
    console.log(event.data.param1);
  //console.log(network.configure);
  //This works
    //event.data.param1.setOptions(event.data.param2);
  //event.data.param3.add({id:100, label:"I'm new node!"});


}
var id = 100;


function addNewNode(event){
  var newNodeId = id + 1;
  id = newNodeId;
  event.data.param3.add({id:newNodeId, label:"New Computing Node"});

};

function refreshLayout(event){
  nodes.clear();
  edges.clear();
  nodes.add(nodesArray);
  edges.add(edgesArray);
  event.data.param1.stabilize();

};


/*
$("#toggleView").on('click',function(){
  var current = $("#toggleView").html();
  if(current == "My Path"){
    $("#toggleView").html("Full Path");

    //network.update({id: 4, label: "changed label"});

  }
  else{
      $("#toggleView").html("My Path");



  }


  console.log($("#toggleView").html());
});
*/
