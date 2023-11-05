import { useState } from "react";

import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

import bg from "@/assets/bubbleBackground.svg";
import { packbubbleDummydata } from "@/dummy/packBubbleData";

HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme.css";

const PackBubble = () => {
  const [width, setWidth] = useState<number>(1440); // 반응형 작업할 때 사용, 아마 강제로 view값 가져와서 거기에 맞게 useEffect로 줄여야할듯
  const options = {
    chart: {
      type: "packedbubble",
      width: width,
      height: 800,
      backgroundColor: "#000",
      plotBackgroundImage: bg,
    },
    legend: {
      itemStyle: { color: "#FFF" }, //legend 폰트 바꾸는 부분
    },
    tooltip: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },

    plotOptions: {
      packedbubble: {
        minSize: "10%",
        maxSize: "200%",
        zMin: 0,
        zMax: 1500,
        layoutAlgorithm: {
          bubblePadding: 10,
          dragBetweenSeries: true,
          enableSimulation: true,
          friction: -1.0,
        },
        events: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          click: function (e: any) {
            console.log(e.point.name);
            setWidth(width - 100); // 반응형 할 때, 사용 임시
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
          shadow: true,
          style: {
            // color: "#000",
            textOutline: "none",
            fontWeight: "normal",
            fontFamily: "Pretendard",
            fontSize: 24,
            transition: "opacity .1ms",
          },
        },
        color: "#212121",

        marker: {
          fillOpacity: 0.9,
        },
        draggable: true,
        enableMouseTracking: true,
        states: {
          hover: {
            fillOpacity: 1,
            enabled: false,
            halo: {
              opacity: 0, // 드래그 했을 때, 남는 잔상 없애기
            },
          },
          inactive: {
            // 호버 했을때 다른 요소들
            opacity: 1,
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: packbubbleDummydata, // 데이터 값
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default PackBubble;
