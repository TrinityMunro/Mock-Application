import React from "react";
import { Bar } from "react-chartjs-2";
import { Vehicle } from "../types";

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          callback: function (value: number) {
            if (value % 1 === 0) {
              return value;
            }
          },
        },
      },
    ],
  },
};
interface Props {
  data: Vehicle[];
}

//memoize component to stop redrawing on every rerender
export default React.memo(function Histogram({ data }: Props) {
  return (
    <Bar
      //@ts-ignore
      width={null}
      //@ts-ignore
      height={null}
      data={{
        labels: ["Sold", "Live"],
        datasets: [
          {
            label: "# of Vehicles",
            data: [
              data.filter((vehicle) => vehicle.status === "Sold").length,
              data.filter((vehicle) => vehicle.status === "Live").length,
            ],
            backgroundColor: [
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
            borderWidth: 1,
          },
        ],
      }}
      options={options}
    />
  );
});
