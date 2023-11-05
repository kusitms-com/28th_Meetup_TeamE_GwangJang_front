import { MouseEvent } from "react";

import * as Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsAccessibility from "highcharts/modules/accessibility";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);
import "./theme.css";
import bg from "@/assets/bubbleBackground.svg";

const PackBubble = () => {
  const options = {
    chart: {
      type: "packedbubble",
      width: 1440,
      height: 800,
      backgroundColor: "#000",

      plotBackgroundImage: bg,
    },
    // title: {
    // 	text: _.startCase(`packedbubble chart`),
    // },
    legend: {
      backgroundColor: "#FCFFC5",
      itemStyle: { color: "#FFF" }, //legend 폰트 바꾸는 부분
    },
    tooltip: {
      enabled: false,
      animation: false,
      useHTML: true,
      pointFormat: "<b>{point.name}:</b> {point.value}m CO<sub>2</sub>",
    },
    exporting: {
      enabled: false,
    },

    plotOptions: {
      packedbubble: {
        minSize: "10%",
        maxSize: "200%",
        zMin: 0,
        zMax: 1000,
        shadow: true,
        // layoutAlgorithm: {
        // 	splitSeries: false,
        // 	gravitationalConstant: 0.02,
        // },
        marker: {
          fillOpacity: 1,
          states: {
            hover: {
              enabled: false,
            },
          },
        },
        layoutAlgorithm: {
          bubblePadding: 10,
          dragBetweenSeries: true,
          enableSimulation: true,
          friction: -1.0,
        },
        events: {
          click: function (e: MouseEvent<HTMLElement>) {
            console.log(e);
          },
        },

        dataLabels: {
          enabled: true,
          format: "{point.name}",
          shadow: true,
          style: {
            // color: '#fff',
            textOutline: "none",
            fontWeight: "normal",
            fontFamily: "Pretendard",
            fontSize: 24,
            transition: "opacity .1ms",
          },
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
        },
      },
    },
    series: [
      {
        name: "일자리",
        color: "#212121",

        dataLabels: {
          enabled: true,
          format: "{point.name}",
          shadow: true,
          style: {
            color: "#FF9900",
            textOutline: "none",
            fontWeight: "normal",
            fontFamily: "Pretendard",
            fontSize: 24,
            transition: "opacity .1ms",
          },
        },
        // events: {
        //   mouseOver() {
        //     this.update({
        //       dataLabels: {
        //         color: "#000000",
        //         fill: "#000000",
        //       },
        //     });
        //   },
        //   mouseOut() {
        //     this.update({
        //       dataLabels: {
        //         color: "#ff9900",
        //         fill: "#ff9900",
        //       },
        //     });
        //   },
        // },
        marker: {
          fillOpacity: 0.9,
        },
        data: [
          {
            name: "이수영",
            value: 420,
          },
          {
            name: "SPC",
            value: 110,
          },

          {
            name: "쿠팡",
            value: 132,
          },
        ],
      },
      {
        name: "노동자",
        color: "#212121",
        marker: {
          fillOpacity: 0.9,
        },
        data: [
          {
            name: "세포들",
            value: 232,
          },

          {
            name: "SPC",
            value: 222,
          },
        ],
      },
      {
        name: "환경",
        color: "#212121",
        marker: {
          fillOpacity: 0.9,
        },
        data: [
          {
            name: "서이초",
            value: 181,
          },
          {
            name: "서이초",
            value: 82,
          },
          {
            name: "서이초",
            value: 82,
          },
        ],
      },
      {
        name: "교육",
        color: "#212121",
        marker: {
          fillOpacity: 0.9,
        },
        data: [
          {
            name: "파업",
            value: 75,
          },

          {
            name: "파업",
            value: 119,
          },
        ],
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

export default PackBubble;
