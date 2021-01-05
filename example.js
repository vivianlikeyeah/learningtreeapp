//Example for scope document

var len = undefined;
var caseVar = 0;

var nodesArray = [
{ id: 0, label: "Node 0", group: 'one', module:1 },
{ id: 1, label: "Node 1", group: 'one', module:1},
{ id: 2, label: "Node 2", group: 'two',module:2 },
{ id: 3, label: "Node 3", group: 'two',module:2 },
{ id: 4, label: "Node 4", group: 'two', module:2 },
{ id: 5, label: "Node 5", group: 'three',module:3 },
{ id: 6, label: "Node 6", group: 'three',module:3 },
{ id: 7, label: "Node 7", group: 'three', module:1 },
{ id: 8, label: "Node 8", group: 'one', module:2 },
{ id: 9, label: "Node 9", group: 'two', module:2},
{ id: 10, label: "Node 10", group: 'two', module:3 },
{ id: 11, label: "Node 11", group: 'three',module:3 },
{ id: 12, label: "Node 12", group: 'three' ,module:3},
{ id: 13, label: "Node 13", group: 'three', module:4}
];
var edgesArray = [
{ from: 0, to: 1 },
{from: 1, to: 2},
{from: 1, to: 3},
{from: 7, to:6 },
{from: 8, to: 9},
{from: 1, to: 4},
{from: 2, to: 5},
{from: 6, to: 5},
{from: 9, to : 10},
{from: 10, to: 13},
{from: 9, to: 11},
{from: 11, to: 12},
{from: 4, to: 6},
{from: 3, to: 6},
{from: 5, to: 7},
{from: 8, to: 10},
{from: 10, to: 11}
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
},
groups: {
            one: {
                color: {background:'#ab8fff', border: '#ab8fff'},
                shape: 'dot'
            },
            oneopt:{
              color: {background:'#fff494'},
              shape: 'dot'
            },
            two: {
                shape: 'dot',
                color: '#2f8bfa'
            },
            twoopt: {
                shape: 'dot',
                color: '#8fc2ff'
            },

            three: {color:'rgb(0,255,140)'},
            threeopt: {color:'rgb(0,255,140)'}

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


console.log("hmm");


$("#toggleView").click({param1: network, param2: options2, param3:nodes}, cool_function);

// $("#addNew").click({param1: network, param2: options2, param3:nodes}, addNewNode);

$("#togglePath").click({param1: network, param2: options2, param3:nodes}, toggle_path);

$('#refresh').click({param1:network}, refreshLayout);

$('#nodeFilterSelect').change({param3: nodes}, filter_nodes);

function filter_nodes(event){
  console.log("Filtering the nodes")
  console.log(event.target.value);
  if(event.target.value == "1"){
    console.log("Display the first filter");
      event.data.param3.update({id: 0, color: "#f0d700"});
      event.data.param3.update({id: 1, color: "#f0d700"});
      event.data.param3.update({id: 2, color: "#d3d3d3"});
      event.data.param3.update({id: 3, color: "#fff494"});
      event.data.param3.update({id: 4, color: "#fff494"});
      event.data.param3.update({id: 5, color: "#d3d3d3"});
      event.data.param3.update({id: 6, color: "#f0d700"});
      event.data.param3.update({id: 7, color: "#f0d700"});
      event.data.param3.update({id: 8, color: "#d3d3d3"});
      event.data.param3.update({id: 9, color: "#d3d3d3"});
      event.data.param3.update({id: 10, color: "#d3d3d3"});
      event.data.param3.update({id: 11, color: "#d3d3d3"});
      event.data.param3.update({id: 12, color: "#d3d3d3"});
      event.data.param3.update({id: 13, color: "#d3d3d3"});


  }
  else if (event.target.value == "2"){
    console.log("Display the second filter");
    event.data.param3.update({id: 0, color: "#d3d3d3"});
    event.data.param3.update({id: 1, color: "#d3d3d3"});
    event.data.param3.update({id: 2, color: "#d3d3d3"});
    event.data.param3.update({id: 3, color: "#d3d3d3"});
    event.data.param3.update({id: 4, color: "#d3d3d3"});
    event.data.param3.update({id: 5, color: "#d3d3d3"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#f0d700"});
    event.data.param3.update({id: 9, color: "#fff494"});
    event.data.param3.update({id: 10, color: "#fff494"});
    event.data.param3.update({id: 11, color: "#f0d700"});
    event.data.param3.update({id: 12, color: "#f0d700"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});

  }
  else if(event.target.value == "3"){
    console.log("Display the third filter");
    event.data.param3.update({id: 0, color: "#d3d3d3"});
    event.data.param3.update({id: 1, color: "#d3d3d3"});
    event.data.param3.update({id: 2, color: "#d3d3d3"});
    event.data.param3.update({id: 3, color: "#d3d3d3"});
    event.data.param3.update({id: 4, color: "#d3d3d3"});
    event.data.param3.update({id: 5, color: "#d3d3d3"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#f0d700"});
    event.data.param3.update({id: 9, color: "#d3d3d3"});
    event.data.param3.update({id: 10, color: "#f0d700"});
    event.data.param3.update({id: 11, color: "#fff494"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#fff494"});

  }

  else if (event.target.value == "4"){
    console.log("Display the fourth filter");
    event.data.param3.update({id: 0, color: "#f0d700"});
    event.data.param3.update({id: 1, color: "#f0d700"});
    event.data.param3.update({id: 2, color: "#fff494"});
    event.data.param3.update({id: 3, color: "#d3d3d3"});
    event.data.param3.update({id: 4, color: "#fff494"});
    event.data.param3.update({id: 5, color: "#fff494"});
    event.data.param3.update({id: 6, color: "#fff494"});
    event.data.param3.update({id: 7, color: "#f0d700"});
    event.data.param3.update({id: 8, color: "#f0d700"});
    event.data.param3.update({id: 9, color: "#d3d3d3"});
    event.data.param3.update({id: 10, color: "#f0d700"});
    event.data.param3.update({id: 11, color: "#d3d3d3"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#f0d700"});


  }

  else if (event.target.value == "5"){
    console.log("Display the fifth filter");
    event.data.param3.update({id: 0, color: "#f0d700"});
    event.data.param3.update({id: 1, color: "#f0d700"});
    event.data.param3.update({id: 2, color: "#f0d700"});
    event.data.param3.update({id: 3, color: "#d3d3d3"});
    event.data.param3.update({id: 4, color: "#d3d3d3"});
    event.data.param3.update({id: 5, color: "#f0d700"});
    event.data.param3.update({id: 6, color: "#d3d3d3"});
    event.data.param3.update({id: 7, color: "#d3d3d3"});
    event.data.param3.update({id: 8, color: "#f0d700"});
    event.data.param3.update({id: 9, color: "#f0d700"});
    event.data.param3.update({id: 10, color: "#d3d3d3"});
    event.data.param3.update({id: 11, color: "#f0d700"});
    event.data.param3.update({id: 12, color: "#d3d3d3"});
    event.data.param3.update({id: 13, color: "#d3d3d3"});

  }
  else{
    console.log("Display all");

  }

}


function toggle_path(event){

  if(caseVar == 0){

    caseVar = 1;


  }
  else if(caseVar == 1){


    console.log("Another case, case is 1");
    caseVar = 2;


  }
  else{



    console.log("Another case, case is 2");

    caseVar = 0;
  }



};


function cool_function(event){
  var current = $("#toggleView").html();
  if(current == "My Completed Nodes"){
    $("#toggleView").html("All Nodes");



  }
  else{



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
