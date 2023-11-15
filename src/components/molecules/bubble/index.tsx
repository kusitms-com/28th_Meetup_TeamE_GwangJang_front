import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

import backgroundImg from "@/assets/Bubble/detail-bubbleBackground.svg";
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme2.css";
import { bubbleDummydata } from "@/dummy/bubbleData";

const Bubble = () => {
  const options = {
    chart: {
      type: "bubble",
      plotBorderWidth: 0,
      height: 500,
      width: 1190,
      marginLeft: 100,
      plotBackgroundImage: backgroundImg,
    },

    legend: {
      enabled: false,
    },

    tooltip: {
      useHTML: true,
      headerFormat: "<table>",
      pointFormat:
        // '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
        "<tr><th><h5>키워드 도출 횟수 :&nbsp</h5></th><td><h5> {point.z}회</h5></td></tr>",
      footerFormat: "</table>",
      followPointer: true,
      style: {
        color: "#000",
        fontSize: "0.8rem",
      },
    },
    exporting: {
      enabled: false,
    },
    plotOptions: {
      bubble: {
        minSize: 3,
        maxSize: 180,
        zMin: 0,
        zMax: 200,
        color: "#212121",
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          style: {
            color: "#FFF",
            textOutline: "none",
            fontWeight: "normal",
            fontFamily: "Pretendard",
            fontSize: 18,
            transition: "opacity .1ms",
          },
        },
      },
    },

    series: [
      {
        data: bubbleDummydata,
        colorByPoint: true,
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default Bubble;
