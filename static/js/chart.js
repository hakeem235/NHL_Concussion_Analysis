
  
//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildMetadata(newSample);
//     buildCharts(newSample);
//   }
  
//   // Demographics Panel
//   function buildMetadata(sample) {
//     d3.json("data.json").then((data) => {
//       var metadata = data.metadata;
//       // Filter the data for the object with the desired sample number
//       var resultArray = metadata.filter((sampleObj) => sampleObj.id == sample);
//       var result = resultArray[0];
  
//       // Use d3 to select the panel with id of `#sample-metadata`
//       var PANEL = d3.select("#sample-metadata");
  
//       // Use `.html("") to clear any existing metadata
//       PANEL.html("");
  
//       // Use `Object.entries` to add each key and value pair to the panel
//       // Hint: Inside the loop, you will need to use d3 to append new
//       // tags for each key-value in the metadata.
//       Object.entries(result).forEach(([key, value]) => {
//         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//       });
//     });
//   }
  
//   // Deliverable 1: 1. Create the buildChart function.
//   function buildCharts(sample) {
//     // Deliverable 1: 2. Use d3.json to load the samples.json file
//     d3.json("data.json").then((data) => {
//       console.log(data);
  
//       // Deliverable 1: 3. Create a variable that holds the samples array.
//       var samples = data.samples;
//       // Deliverable 1: 4. Create a variable that filters the samples for the object with the desired sample number.
//       var samplesArray = samples.filter((sampleObj) => sampleObj.id == sample);
//       // Deliverable 3: 1. Create a variable that filters the metadata array for the object with the desired sample number.
//       var metaArray = data.metadata.filter((sampleObj) => sampleObj.id == sample);
//       // Deliverable 1: 5. Create a variable that holds the first sample in the array.
//       var firstSample = samplesArray[0];
//       // Deliverable 3: 2. Create a variable that holds the first sample in the metadata array.
//       var firstMeta = metaArray[0];
//       // Deliverable 1: 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
//       var otu_ids = firstSample.otu_ids;
//       var otu_labels = firstSample.otu_labels;
//       var sample_values = firstSample.sample_values;
//       // Deliverable 3: 3. Create a variable that holds the washing frequency.
//       var wfreq = firstMeta.wfreq;
  
//       // Deliverable 1: 7. Create the yticks for the bar chart.
//       // Hint: Get the the top 10 otu_ids and map them in descending order
//       // so the otu_ids with the most bacteria are last.
//       var yticks = otu_ids
//         .slice(0, 10)
//         .map((otu_ids) => `OTU ${otu_ids}`)
//         .reverse();
  
//       // Deliverable 1: 8. Create the trace for the bar chart.
//       var barData = [
//         {
//           x: sample_values.slice(0, 10).reverse(),
//           y: yticks,
//           text: otu_labels.slice(0, 10).reverse(),
//           type: "bar",
//           orientation: "h",
//         },
//       ];
  
//       // Deliverable 1: 9. Create the layout for the bar chart.
//       var barLayout = {
//         title: "Top 10 Bacteria Cultures Found",
//         margin: {
//           l: 100,
//           r: 100,
//           t: 100,
//           b: 100,
//         },
//       };
  
//       // Deliverable 1: 10. Use Plotly to plot the data with the layout.
//       Plotly.newPlot("bar", barData, barLayout);
//       // Deliverable 2: 1. Create the trace for the bubble chart.
//       var bubbleData = [
//         {
//           x: otu_ids,
//           y: sample_values,
//           text: otu_labels,
//           mode: "markers",
//           marker: {
//             size: sample_values,
//             color: otu_ids,
//             colorscale: "Earth",
//           },
//         },
//       ];
//       // Deliverable 2: 2. Create the layout for the bubble chart.
//       var bubbleLayout = {
//         title: "Bacteria Species per Sample",
//         xaxis: { title: "OTU ID" },
//         hovermode: "closest",
//         showlegend: false,
//       };
//       // Deliverable 2: 3. Use Plotly to plot the data with the layout.
//       Plotly.newPlot("bubble", bubbleData, bubbleLayout);
//       // Deliverable 3: 4. Create the trace for the gauge chart.
//       var gaugeData = [
//         {
//           domain: { x: [0, 1], y: [0, 1] },
//           value: wfreq,
//           title: { text: "Belly Button Washing Frequency <br> Scrubs per Week" },
//           type: "indicator",
//           mode: "gauge+number",
//           gauge: {
//             axis: { range: [null, 10] },
//             bar: { color: "black" },
//             steps: [
//               { range: [0, 2], color: "red" },
//               { range: [2, 4], color: "orange" },
//               { range: [4, 6], color: "yellow" },
//               { range: [6, 8], color: "lightgreen" },
//               { range: [8, 10], color: "green" },
//             ],
//           },
//         },
//       ];
//       // Deliverable 3: 5. Create the layout for the gauge chart.
//       var gaugeLayout = {
//         width: 500,
//         height: 460,
//         margin: { t: 0, b: 0 },
//       };
//       // Deliverable 3: 6. Use Plotly to plot the gauge data and layout.
//       Plotly.newPlot("gauge", gaugeData, gaugeLayout);
//     });
//   }