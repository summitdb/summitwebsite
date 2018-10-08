// this script will add the three choices to chart3 and make a download button , a jbrowse link and an exp_view link

var firstChoice = "not_yet_selected";
var secondChoice =  "not_yet_selected";
var thirdChoice =  "not_yet_selected";

var firstIndex = "not_yet_selected";
var secondIndex = "not_yet_selected";
var thirdIndex = "not_yet_selected";

var firstIndexjbrowse = "not_yet_selected";
var secondIndexjbrowse = "not_yet_selected";
var thirdIndexjbrowse = "not_yet_selected";

var chosenexp = "";
var whichone = 3;
//so when it loads, it sets the third one and the user 
//starts with setting the first

function choosethree(x,y,z,w) {


if (whichone == 1) {
chosenexp = z;
firstChoice = x;
firstIndex = y;
firstIndexjbrowse = z;
firstAvgName = w;
whichone = 2;

}

else if (whichone == 2) { 
chosenexp = z;
secondChoice = x;
secondIndex = y;
secondIndexjbrowse = z;
secondAvgName = w;
whichone = 3;

}
else if (whichone == 3) { 
chosenexp = z;
thirdChoice = x;
thirdIndex = y;
thirdIndexjbrowse = z;
thirdAvgName = w;
whichone = 1;

}

d3.selectAll(".threechosen").remove();





var svgthree = d3.select("#chart3").append("text")
.html(function(d) { return "<div style=\"height:7em;padding:0.4em;\">You flagged the following experiments (cell line, antibody, element number): <br/> The blue buttons will help navigating to the other views.<br>Click on the buttons to open <br> the \'experiment view\' for more details <br>about the Chip-seq data. </div>"})
.attr("class", "threechosen");



var widththree = "15em";
var heightthree = "4em";
var word = "download last chosen";
var wordshift = "to paired shifts";
var wordjbrowse = "to the jbrowse";
var wordvenn = "to venn diagram";




var holdertwo = d3.select("#chart3")
      .append("svg")
      .attr("width", "24em")
      .attr("height", "8em")
      .attr("class", "threechosen");
// draw a rectangle for the downloads
holdertwo.append("a")
    .attr("xlink:href", function(d) {
return "http://summit.med.unideb.hu/summitdb/experiment_view.php?exp=" + firstIndexjbrowse ;})
    .attr("target", "blank")
    .append("rect")
    .attr("x", "0.1em")
    .attr("y", "0em")
    .attr("height", "2.5em")
    .attr("width", "23.4em")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.3em")

holdertwo.append("a")
    .attr("xlink:href", function(d) {
return "http://summit.med.unideb.hu/summitdb/experiment_view.php?exp=" + secondIndexjbrowse ;})
    .attr("target", "blank")
    .append("rect")
    .attr("x", "0.1em")
    .attr("y", "2.7em")
    .attr("height", "2.5em")
    .attr("width", "23.4em")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.6em")

holdertwo.append("a")
    .attr("xlink:href", function(d) {
return "http://summit.med.unideb.hu/summitdb/experiment_view.php?exp=" +  thirdIndexjbrowse;})
    .attr("target", "blank")
    .append("rect")
    .attr("x", "0.1em")
    .attr("y", "5.4em")
    .attr("height", "2.5em")
    .attr("width", "23.4em")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.3em")


// draw text on the screen
holdertwo.append("text")
    .attr("x", "9.3em")
    .attr("y", "0.8em")
    .style("fill", "black")
    .style("font-size", "1.3em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text( firstChoice )

// draw text on the screen
holdertwo.append("text")
    .attr("x", "9.3em")
    .attr("y", "2.9em")
    .style("fill", "black")
    .style("font-size", "1.3em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text( secondChoice )

// draw text on the screen
holdertwo.append("text")
    .attr("x", "9.3em")
    .attr("y", "5.2em")
    .style("fill", "black")
    .style("font-size", "1.3em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text( thirdChoice )





var holderthree = d3.select("#chart3")
      .append("svg")
      .attr("width", "17em")    
      .attr("height", "8em")
      .attr("class", "threechosen");
// draw a rectangle for the downloads
holderthree.append("a")
    .attr("xlink:href", function(d) { 
return "http://summit.med.unideb.hu/summitdb/downloads_BE.php?exp=" +  chosenexp  + "&motive=" + motive;})
    .append("rect")  
    .attr("x", "3.1em")
    .attr("y", "2.9em")
    .attr("height", "3em")
    .attr("width", "13.4em")
    .style("stroke", "blue")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.3em")
// draw text on the screen
holderthree.append("text")
    .attr("x", "9.3em")
    .attr("y", "1em")
    .style("fill", "black")
    .style("font-size", "1em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text("More views to browse.")


holderthree.append("text")
    .attr("x", "8.9em")
    .attr("y", "4em")
    .style("fill", "black")
    .style("font-size", "1.1em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text(word)
// paired shift view part

var holdershift = d3.select("#chart3")
      .append("svg")
      .attr("width", "12em")
      .attr("height", "8em")
      .attr("class", "threechosen");
// draw a button for the shift views
holdershift.append("a")
    .attr("xlink:href", function(d) { 
return "http://summit.med.unideb.hu/summitdb/paired_shift_view.php?exp1=" +  firstIndexjbrowse + "&exp2=" + secondIndexjbrowse  + "&exp3=" + thirdIndexjbrowse + "&motive=" + motive + "&motifid=" + motifid[0].motif_id +"&limit=25&low_limit=-25&formminid=" + formminid + "&formmaxid=" + formmaxid + "&formminelem=" + formminelem + "&formmaxelem=" + formmaxelem;})
    .attr("target", "blank")
    .append("rect")  
    .attr("x", "0.1em")
    .attr("y", "2.9em")
    .attr("height", "3em")
    .attr("width", "10.4em")
    .style("stroke", "blue")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.3em")

// draw text on the screen
holdershift.append("text")
    .attr("x", "4.9em")
    .attr("y", "4em")
    .style("fill", "black")
    .style("font-size", "1.1em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text(wordshift)

//jbrowse part

var holderjb = d3.select("#chart3")
      .append("svg")
      .attr("width", "11em")    
      .attr("height", "8em")
      .attr("class", "threechosen");
// draw a button for the jbrowse
holderjb.append("a")
    .attr("xlink:href", function(d) { 
return "http://genomics.dote.hu/summitdb/jbrowse5/index.html?tracks=DNA,ucsc-known-genes, mot-" + motifid[0].motif_id + "," + firstAvgName + "," + secondAvgName + "," + thirdAvgName + "&addStores={        \"" + motive  + "\":{\"type\":\"JBrowse/Store/SeqFeature/BED\",\"baseUrl\":\".\",\"urlTemplate\":\"{dataRoot}/beds/motif/" + motifid[0].motif_id + ".bed\"},        \"" + firstAvgName + "\":{\"type\":\"JBrowse/Store/SeqFeature/BED\",\"baseUrl\":\".\",\"urlTemplate\":\"{dataRoot}/beds/" + firstIndexjbrowse + ".bed\"},        \"" + secondAvgName + "\":{\"type\":\"JBrowse/Store/SeqFeature/BED\",\"baseUrl\":\".\",\"urlTemplate\":\"{dataRoot}/beds/" + secondIndexjbrowse + ".bed\"},        \"" + thirdAvgName + "\":{\"type\":\"JBrowse/Store/SeqFeature/BED\",\"baseUrl\":\".\",\"urlTemplate\":\"{dataRoot}/beds/" + thirdIndexjbrowse + ".bed\"}}&addTracks=[        {\"label\":\"" + motive  + "\",\"type\":\"JBrowse/View/Track/CanvasFeatures\",\"store\":\"" + motive  + "\"},        {\"label\":\"" + firstAvgName + "\",\"type\":\"JBrowse/View/Track/CanvasFeatures\",\"store\":\"" + firstAvgName + "\"},        {\"label\":\"" + secondAvgName + "\",\"type\":\"JBrowse/View/Track/CanvasFeatures\",\"store\":\"" + secondAvgName + "\"},        {\"label\":\"" + thirdAvgName + "\",\"type\":\"JBrowse/View/Track/CanvasFeatures\",\"store\":\"" + thirdAvgName + "\"}]";})
    .attr("target", "_blank")
    .append("rect")  
    .attr("x", "0.1em")
    .attr("y", "2.9em")
    .attr("height", "3em")
    .attr("width", "10.4em")
    .style("stroke", "blue")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.3em")

// draw text on the screen
holderjb.append("text")
    .attr("x", "4.9em")
    .attr("y", "4em")
    .style("fill", "black")
    .style("font-size", "1.1em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text(wordjbrowse)



//venn diagramm part

var holdervenn = d3.select("#chart3")
      .append("svg")
      .attr("width", "13em")
      .attr("height", "8em")
      .attr("class", "threechosen");
// draw a button for the shift views
holdervenn.append("a")
    .attr("xlink:href", function(d) { 
return "http://summit.med.unideb.hu/summitdb/venn_diagramm.php?exp1=" +  firstIndexjbrowse + "&exp2=" + secondIndexjbrowse  + "&exp3=" + thirdIndexjbrowse + "&motive=" + motive + "&motifid=" + motifid[0].motif_id ;})
    .attr("target", "blank")
    .append("rect")  
    .attr("x", "1.1em")
    .attr("y", "2.9em")
    .attr("height", "3em")
    .attr("width", "11.8em")
    .style("stroke", "blue")
    .style("fill", "lightblue")
    .attr("rx", "0.3em")
    .attr("ry", "0.3em");

// draw text on the screen
holdervenn.append("text")
    .attr("x", "6.3em")
    .attr("y", "4em")
    .style("fill", "black")
    .style("font-size", "1.1em")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("pointer-events", "none")
    .text(wordvenn);

};
