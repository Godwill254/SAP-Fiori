import {
  Card,
  CardHeader,
  Text,
  List,
  StandardListItem,
  CustomListItem,
  ValueState,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from "@ui5/webcomponents-react";

import { ThemingParameters } from "@ui5/webcomponents-react-base";

import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { useState } from "react";
import lineChartIcon from "@ui5/webcomponents-icons/dist/line-chart.js";
import barChartIcon from "@ui5/webcomponents-icons/dist/horizontal-bar-chart.js";

const dataset = [
  {
    month: "January",
    data: 65,
  },
  {
    month: "February",
    data: 59,
  },
  {
    month: "March",
    data: 80,
  },
  {
    month: "April",
    data: 81,
  },
  {
    month: "May",
    data: 56,
  },
  {
    month: "June",
    data: 55,
  },
  {
    month: "July",
    data: 40,
  },
];

const tableData = new Array(500).fill(null).map((_, index) => {
  return {
    name: `name${index}`,
    age: Math.floor(Math.random() * 100),
    friend: {
      name: `friend.Name${index}`,
      age: Math.floor(Math.random() * 100),
    },
  };
});

const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // String-based value accessors!
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Friend Name",
    accessor: "friend.name",
  },
  {
    Header: "Friend Age",
    accessor: "friend.age",
  },
];
export function Home() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };

  const contentTitle =
    toggleCharts === "lineChart" ? "Line chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";

  return (
    <>
      <FlexBox
        justifyContent={FlexBoxJustifyContent.Center}
        wrap={FlexBoxWrap.Wrap}
        style={{ padding: "2rem" }}
      >
        <Card
          header={
            <CardHeader
              titleText="Stock Prices"
              subtitleText={`Click here to switch to ${switchToChart}`}
              interactive
              onClick={handleClick}
              avatar={
                <Icon
                  name={
                    toggleCharts === "lineChart" ? lineChartIcon : barChartIcon
                  }
                />
              }
            />
          }
          style={{ width: "300px", padding: "2rem" }}
        >
          <Text style={{ padding: 10 }} className="sap-padding">
            This is a Card component
          </Text>
          {toggleCharts === "lineChart" ? (
            <LineChart
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dimensions={[{ accessor: "month" }]}
              dataset={dataset}
              loading={loading}
            />
          ) : (
            <BarChart
              measures={[{ accessor: "data", label: "Stock Price" }]}
              dimensions={[{ accessor: "month" }]}
              dataset={dataset}
              loading={loading}
            />
          )}
        </Card>

        <Card
          header={
            <CardHeader
              titleText="Progress"
              subtitleText="List"
              avatar={<Icon name={listIcon} />}
            />
          }
          style={{ width: "300px", padding: "2rem" }}
        >
          <List>
            <StandardListItem
              additionalText="finished"
              additionalTextState={ValueState.Success}
            >
              Activity 1
            </StandardListItem>
            <StandardListItem
              additionalText="failed"
              additionalTextState={ValueState.Error}
            >
              Activity 2
            </StandardListItem>
            <CustomListItem>
              <FlexBox
                direction={FlexBoxDirection.Column}
                style={{
                  width: "100%",
                  paddingBottom: "1rem",
                  paddingTop: "1rem",
                }}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text
                    style={{ fontSize: ThemingParameters.sapFontLargeSize }}
                  >
                    Activity 3
                  </Text>
                  <Text
                    style={{ color: ThemingParameters.sapCriticalTextColor }}
                  >
                    in Progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  style={{ marginTop: "0.3rem" }}
                  value={80}
                  valueState={ValueState.Success}
                />
              </FlexBox>
            </CustomListItem>
            <CustomListItem>
              <FlexBox
                style={{
                  width: "100%",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
                direction={FlexBoxDirection.Column}
              >
                <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
                  <Text
                    style={{ fontSize: ThemingParameters.sapFontLargeSize }}
                  >
                    Activity 4
                  </Text>
                  <Text
                    style={{ color: ThemingParameters.sapCriticalTextColor }}
                  >
                    in Progress
                  </Text>
                </FlexBox>
                <ProgressIndicator
                  style={{ marginTop: "0.3rem" }}
                  value={15}
                  valueState={ValueState.Error}
                />
              </FlexBox>
            </CustomListItem>
          </List>
        </Card>

        <Card
          header={
            <CardHeader
              titleText="Analytical Table"
              avatar={<Icon name={tableViewIcon} />}
            />
          }
          style={{ width: "900px", padding: "2rem" }}
        >
          <AnalyticalTable
            data={tableData}
            columns={tableColumns}
            visibleRows={5}
          />
        </Card>
      </FlexBox>
    </>
  );
}
