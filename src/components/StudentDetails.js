import React from "react";
import StudentData from "./data/StudentData";
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
import wincTheme from "./data/WincTheme";

const StudentDetails = ({ match }) => {
  let name = match.params.name;
  let dataForChart = StudentData.filter(item => {
    return item.name === match.params.name;
  }).map(avg => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht: ${avg.assignment}
    Moeilijk: ${avg.difficultyRating} Leuk: ${avg.enjoymentRating}`,
  }));

  return (
    <React.Fragment>
      <figure>
        <h3>Dashboard overview {name}</h3>
        <>
          <div className="barchart">
            <h3 className="inside-div-h3">
              Difficult and Enjoyment rate all assignments for {name}
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
              <VictoryGroup offset={5}>
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
                      duration: 2000,
                      onLoad: { duration: 3000 },
                    }}
                    x="assignment"
                    y="enjoymentRating"
                    color="#8791f6"
                    alignment="middle"
                    tickValues={[1, 2, 3, 4, 5]}
                  />
                </VictoryStack>
              </VictoryGroup>
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={dataForChart.map(avg => avg.assignment)}
                tickLabelComponent={
                  <VictoryLabel angle={60} textAnchor="start" />
                }
              />
              <VictoryAxis dependentAxis />
            </VictoryChart>
          </div>

          <div className="linechart">
            <h3 className="inside-div-h3">
              Average line chart all assignments for {name}
            </h3>
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
                animate={{
                  duration: 4000,
                  onLoad: { duration: 4000 },
                }}
                x="assignment"
                y="difficultyRating"
                alignment="start"
                interpolation='cardinal'
              />
              <VictoryLine
                style={{
                  data: { stroke: "#8791f6" },
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
                interpolation='cardinal'
              />
              <VictoryAxis
                
                tickValues={[1, 2, 3, 4, 5]}
                tickFormat={dataForChart.map(avg => avg.assignment)}
                tickLabelComponent={
                  <VictoryLabel angle={50} textAnchor="start" />
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

export default StudentDetails;
