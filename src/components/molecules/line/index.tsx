import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme3.css";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { lineDummydata } from "@/dummy/lineData";
import { areaState } from "@/recoil/atoms";

const Line = ({ showGraph }: { showGraph: boolean }) => {
  const area = useRecoilValue(areaState);
  const options = {
    chart: {
      type: "line",
      plotBorderWidth: 0,
      height: 246,
      width: 887,
      marginLeft: 0,
      marginRight: 0,
    },

    legend: {
      enabled: false,
    },
    tooltip: {
      pointFormat:
        "<span class='tooltip-point-custom'><span class='tooltip-dot-custom'>\u25CF</span> 검색횟수: <b>{point.y}</b></span><br/>",
      useHTML: true,
      style: {
        fontSize: "1em",
        color: "#fff",
      },
    },
    exporting: {
      enabled: false,
    },

    series: [
      {
        name: "검색횟수",
        data: lineDummydata,
      },
    ],
    credits: {
      enabled: false,
    },
  };
  return (
    <Container
      $showGraph={showGraph}
      $area={area}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </Container>
  );
};

export default Line;

const Container = styled.div<{ $showGraph: boolean; $area: string }>`
  display: flex;
  justify-content: center;
  //height: ${(props) => (!props.$showGraph ? "0" : "300px")};
  /* visibility: ${(props) => (!props.$showGraph ? "hidden" : "visible")}; */
  transform: ${(props) => (!props.$showGraph ? "translateY(-300px)" : "translateY(0)")};
  opacity: ${(props) => (!props.$showGraph ? "0" : "1")};
  z-index: ${(props) => (!props.$showGraph ? "-99" : "1")};
  /* transition: visibility 0.3s; */
  /* transition: transform 1s; */
  transition-duration: 0.7s;
  /* transition: opacity 0.7s; */

  .tooltip-dot-custom {
    color: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(0, 132, 255, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(255, 153, 0, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
  .highcharts-line-series .highcharts-halo {
    fill: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(0, 132, 255, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(255, 153, 0, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
  .highcharts-tracker-line {
    stroke: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(0, 132, 255, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(255, 153, 0, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
  .highcharts-line-series .highcharts-point {
    fill: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(0, 132, 255, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(255, 153, 0, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
    stroke: ${(props) =>
      props.$area === "환경"
        ? " rgba(26, 226, 118, 1) !important;"
        : props.$area === "교육"
        ? "rgba(0, 132, 255, 1) !important;"
        : props.$area === "일자리·노동"
        ? " rgba(255, 153, 0, 1) !important;"
        : props.$area === "주거·사회 안전망"
        ? " rgba(119, 85, 255, 1) !important;"
        : ""};
  }
`;
