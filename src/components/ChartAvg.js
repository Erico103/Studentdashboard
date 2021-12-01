import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
  VictoryLabel,
} from "victory";

import wincTheme from "./data/WincTheme";


const ChartAvg = (props) => {
  
  let dataForChart = props.getNames();
  console.log("data for chart:",dataForChart)
  dataForChart = dataForChart.map((avg) => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht: ${avg.assignment}
    Moeilijk: ${avg.difficultyRating} Leuk: ${avg.enjoymentRating}`,
  }));

  return (
    <React.Fragment>
      <figure>
        <h3>Dashboard overview all Students</h3>
        <>
          
          <div className="barchart">
            <h3 className="inside-div-h3">Difficult and Enjoyment rate all assignments</h3>
          <VictoryChart
            padding={{ top: 40, bottom: 100, left: 60, right: 60 }}
            domainPadding={15}
            theme={wincTheme}
          >

            <VictoryGroup offset={20}>
              <VictoryBar
                labelComponent={<VictoryTooltip />}
                data={dataForChart}
                animate={{
                  duration: 4000,
                  onLoad: { duration: 3000 },
                }}
                x="assignment"
                y="difficultyRating"
                alignment="start"
                color='#8791f6'

                tickValues={[1, 2, 3, 4, 5]}
              />

              {/* Eerste staaf diagram geel */}
              <VictoryBar
                labelComponent={<VictoryTooltip />}
                data={dataForChart}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 3000 },
                }}
                x="assignment"
                y="enjoymentRating"
                color='#38d7a7'

                tickValues={[1, 2, 3, 4, 5]}
              />
            </VictoryGroup>
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={dataForChart.map((avg) => avg.assignment)}
              tickLabelComponent={
                <VictoryLabel angle={60} textAnchor="start" />
              }
            />
            <VictoryAxis dependentAxis />

    
          </VictoryChart>
          </div>
          {/* Begin lijn  */}
          <div className="linechart">

              <h3 className="inside-div-h3">Average line chart all assignments</h3>
          <VictoryChart
            padding={{ top: 40, bottom: 100, left: 60, right: 60 }}
            domainPadding={15}
            theme={wincTheme}
          >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
                parent: { border: "1px solid #ccc" },
              }}
              labelComponent={<VictoryTooltip />}
              data={dataForChart}
              animate={{
                duration: 4000,
                onLoad: { duration: 4000 },
              }}
              x="assignment"
              y="difficultyRating"
              alignment="start"
            />
            <VictoryLine
                style={{
                  data: { stroke: "#ff00ff" },
                  parent: { border: "1px solid #ccc" },
                }}
                labelComponent={<VictoryTooltip />}
                data={dataForChart}
                animate={{
                  duration: 4000,
                  onLoad: { duration: 4000 },
                }}
                x="assignment"
                y="enjoymentRating"
                alignment="start"
                />
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={dataForChart.map((avg) => avg.assignment)}
              tickLabelComponent={
                <VictoryLabel angle={60} textAnchor="start" />
              }
            />
            <VictoryAxis dependentAxis />
          </VictoryChart>
          </div>



       
        </>
      </figure>
    </React.Fragment>
  );
};

export default ChartAvg;
