import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

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
      width: 1080,
      marginLeft: 0,
      marginRight: 0,
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

  const aa = false; // 임시로 테스트

  return (
    <Container $aa={aa}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  );
};

export default Bubble;

const Container = styled.div<{ $aa: boolean }>`
  .highcharts-bubble-series .highcharts-point {
    filter: ${(props) =>
      props.$aa
        ? "drop-shadow(0px 6px 30px rgba(26, 226, 118, 1)) !important;" //환경
        : "drop-shadow(0px 6px 30px rgba(26, 226, 118, 0.3)) !important;"};
  }
  /* 
  filter: drop-shadow(0px 6px 30px rgba(255, 153, 0, 0.30)); 교육
  filter: drop-shadow(0px 6px 30px rgba(0, 132, 255, 0.30)); 일자리노동
  filter: drop-shadow(0px 6px 30px rgba(119, 85, 255, 0.30));  주거 사회안전망
   */
`;
