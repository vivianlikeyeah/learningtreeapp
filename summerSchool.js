var len = undefined;
var caseVar = 0;


//nodes on brand
var nodesArray = [
{ id: 0, label: "Personal Details", group: 3, color:"#3a4761"},
{ id: 1, label: "Welcome", group: 4, color: "#82a29f"},
{ id: 2, label: "What is ... ?", group: 4,color: "#82a29f"},
{ id: 3, label: "Cultural Sensitivity", group: 4, color: "#82a29f"},
{ id: 4, label: "Equality and Diversity ", group: 4, color: "#82a29f"},
{ id: 5, label: "Effective Teamworking", group: 4, color:"#82a29f"},
{ id: 6, label: "Effectively Working Online", group: 4, color:"#82a29f"},
{ id: 7, label: "Dimentia Attitudes Scale", group: 5, color:"#8194a2"},
{ id: 8, label: "Introduction to Dementia", group: 5, color:"#8194a2"},
{ id: 9, label: "Learning Styles", group: 6, color:"#b6abaf"},
{ id: 10, label: "Self-Evaluation", group: 6, color:"#b6abaf"},
{ id: 11, label: "Summer School Prep", group: 6, color:"#b6abaf"},
];

/* Cute Colours
var nodesArray = [
{ id: 0, label: "Personal Details", group: 3, color:"#abc1ed"},
{ id: 1, label: "Welcome", group: 4, color: "#bff2ed"},
{ id: 2, label: "What is ... ?", group: 4,color: "#bff2ed"},
{ id: 3, label: "Cultural Sensitivity", group: 4, color: "#bff2ed"},
{ id: 4, label: "Equality and Diversity ", group: 4, color: "#bff2ed"},
{ id: 5, label: "Effective Teamworking", group: 4, color:"#bff2ed"},
{ id: 6, label: "How to work effectively online", group: 4, color:"#bff2ed"},
{ id: 7, label: "Dimentia Attitudes Scale", group: 5, color:"#c6e1f5"},
{ id: 8, label: "Introduction to Dementia", group: 5, color:"#c6e1f5"},
{ id: 9, label: "Learning Styles", group: 6, color:"#edcad7"},
{ id: 10, label: "Self-Evaluation", group: 6, color:"#edcad7"},
{ id: 11, label: "Things to prepare before the summer school", group: 6, color:"#edcad7"},
];

*/



var edgesArray = [
{ from: 0, to: 1, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 1, to: 2, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from:2, to: 3, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 3, to: 4, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 4, to:5 , arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 5, to: 6, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 6, to: 7, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 7, to: 8, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 8, to: 9, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 9, to: 10, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }},
{from: 10, to: 11, arrows: {
        to: {
          enabled: true,
          type: 'arrow'
        } }}
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
  shape: "box",
  size: 30,
  font: {
    size: 13,
    color: "white"
  },
  borderWidth: 2,
  shadow: true
},
edges: {
  width: 2,
  shadow: true
}, physics:{
    enabled: true}
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
     //window.open(url);
     console.log("Do nothing");
  }
  else if(properties.nodes == 8){
    console.log('clicked node ' + properties.nodes);
  //  window.open("https://view.genial.ly/5eb10d0db640df0d907fc96a/presentation-computational-thinking-node");
  }
  else if(properties.nodes == 7){
    //window.open("https://vivianlikeyeah.github.io/tedi-css/");
    console.log("hmm");
  }
  else{
      console.log('clicked node ' + properties.nodes);
    //alert('clicked node ' + properties.nodes);
  }

});

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


  }
  else if (event.target.value == "2"){
    console.log("Display the second filter");

  }
  else if(event.target.value == "3"){
    console.log("Display the third filter");

  }

  else if (event.target.value == "4"){

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
