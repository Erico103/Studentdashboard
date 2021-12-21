import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
  VictoryLabel,
  VictoryStack,
} from "victory";
// import StudentData from "./StudentData";
import wincTheme from "./data/WincTheme";

const ChartAvg = props => {
  // Verkrijg hier de namen van de assignments
  let dataForChart = props.getNames();
  console.log("data for chart:", dataForChart);
  dataForChart = dataForChart.map(avg => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht: ${avg.assignment}
    Moeilijk: ${avg.difficultyRating} Leuk: ${avg.enjoymentRating}`,
  }));

  return (
    <>
      {/* Eerste staaf diagram rood */}
      <div className="barchart">
        <h3 className="inside-div-h3">
          Average Difficult and Enjoyment rate all assignments
        </h3>
        <div className="header-title">
          <div className="red">difficulty</div>
          <div className="green">funfactor</div>
        </div>
        <VictoryChart
          padding={{ top: 40, bottom: 100, left: 60, right: 60 }}
          domainPadding={20}
          theme={wincTheme}
        >
          <VictoryGroup offset={17}>
            <VictoryStack>
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
                color="red"
                tickValues={[1, 2, 3, 4, 5]}
              />
            </VictoryStack>
            <VictoryStack>
              <VictoryBar
                labelComponent={<VictoryTooltip />}
                data={dataForChart}
                animate={{
                  duration: 4000,
                  onLoad: { duration: 3000 },
                }}
                y="enjoymentRating"
                alignment="middle"
                color="#8791f6"
                tickValues={[1, 2, 3, 4, 5]}
              />
            </VictoryStack>
          </VictoryGroup>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={dataForChart.map(avg => avg.assignment)}
            tickLabelComponent={<VictoryLabel angle={60} textAnchor="start" />}
          />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </div>

      <div className="linechart">
        <h3 className="inside-div-h3">Average line chart all assignments</h3>
        <div className="header-title">
          <div className="red">difficulty</div>
          <div className="green">funfactor</div>
        </div>
        <VictoryChart
          padding={{ top: 40, bottom: 100, left: 60, right: 60 }}
          domainPadding={15}
          theme={wincTheme}
        >
          <VictoryLine
            style={{
              data: { stroke: "red" },
              parent: { border: "1px solid #ccc" },
            }}
            labelComponent={<VictoryTooltip />}
            data={dataForChart}
            interpolation="cardinal"
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
              data: { stroke: "#8791f6" },
              parent: { border: "1px solid #ccc" },
            }}
            labelComponent={<VictoryTooltip />}
            data={dataForChart}
            interpolation="cardinal"
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
            tickFormat={dataForChart.map(avg => avg.assignment)}
            tickLabelComponent={<VictoryLabel angle={60} textAnchor="start" />}
          />
          <VictoryAxis dependentAxis />
        </VictoryChart>
      </div>
    </>
  );
};

export default ChartAvg;
