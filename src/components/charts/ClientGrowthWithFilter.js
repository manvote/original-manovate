import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../About.css";

/* =========================
   MONTHLY DATA
========================= */
const MONTHLY_DATA = [
  { label: "Jan 2025", clients: 563 },
  { label: "Feb 2025", clients: 565 },
  { label: "Mar 2025", clients: 569 },
  { label: "Apr 2025", clients: 571 },
  { label: "May 2025", clients: 575 },
  { label: "Jun 2025", clients: 578 },
  { label: "Jul 2025", clients: 582 },
  { label: "Aug 2025", clients: 589 },
  { label: "Sep 2025", clients: 595 },
  { label: "Oct 2025", clients: 603 },
  { label: "Nov 2025", clients: 615 },
  { label: "Dec 2025", clients: 620 },
];

/* =========================
   YEARLY DATA
========================= */
const YEARLY_DATA = [
  { label: "2016", clients: 30 },
  { label: "2017", clients: 50 },
  { label: "2018", clients: 80 },
  { label: "2019", clients: 120 },
  { label: "2020", clients: 95 },
  { label: "2021", clients: 180 },
  { label: "2022", clients: 260 },
  { label: "2023", clients: 420 },
  { label: "2024", clients: 560 },
  { label: "2025", clients: 620 },
];

/* =========================
   FILTER CONFIG
========================= */
const FILTERS = {
  "6M": { type: "monthly", count: 6 },
  "1Y": { type: "monthly", count: 12 },
  ALL: { type: "yearly" },
};

/* =========================
   SMART Y-AXIS BUILDER
========================= */
const buildYAxis = (data, activeFilter) => {
  const values = data.map((d) => d.clients);
  const min = Math.min(...values);
  const max = Math.max(...values);

  /* ---- ALL → baseline chart ---- */
  if (activeFilter === "ALL") {
    const step = Math.ceil(max / 5 / 10) * 10;
    const top = step * 6;

    return {
      domain: [0, top],
      ticks: Array.from({ length: 6 }, (_, i) => step * (i + 1)),
    };
  }

  /* ---- 3M / 6M / 1Y → zoomed ---- */
  const padding = Math.ceil((max - min) * 0.25);
  const lower = Math.max(0, min - padding);
  const upper = max + padding;

  const step = Math.ceil((upper - lower) / 4 / 10) * 10;

  return {
    domain: [lower, upper],
    ticks: Array.from({ length: 5 }, (_, i) => lower + step * i),
  };
};

export default function ClientGrowthChart() {
  const [active, setActive] = useState("ALL");

  /* =========================
     DATA PER FILTER
  ========================= */
  const data = useMemo(() => {
    const cfg = FILTERS[active];
    if (cfg.type === "yearly") return YEARLY_DATA;
    return MONTHLY_DATA.slice(-cfg.count);
  }, [active]);

  /* =========================
     Y-AXIS PER FILTER
  ========================= */
  const yAxis = useMemo(
    () => buildYAxis(data, active),
    [data, active]
  );

  return (
    <div className="client-chart-card">
      {/* HEADER */}
      <div className="chart-header">
        <div>
          <h3>Client Growth</h3>
          <p>
            {active === "ALL"
              ? "Year-wise completed client projects (till 2025)"
              : "Actual client onboarding (monthly)"}
          </p>
        </div>

        <div className="chart-filters">
          {Object.keys(FILTERS).map((key) => (
            <button
              key={key}
              className={active === key ? "active" : ""}
              onClick={() => setActive(key)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={420}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 40, left: 30, bottom: 30 }}
        >
          <CartesianGrid
            stroke="#eaf0f7"
            strokeDasharray="4 6"
            vertical={false}
          />

          <XAxis
            dataKey="label"
            tickLine={false}
            axisLine={false}
            tickMargin={14}
          />

          <YAxis
            domain={yAxis.domain}
            ticks={yAxis.ticks}
            tickLine={false}
            axisLine={false}
            tickMargin={16}
          />

          <Tooltip
            formatter={(v) => [`${v} Clients`, "Completed"]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              fontSize: 13,
            }}
          />

          <Line
            type="monotone"
            dataKey="clients"
            stroke="#004aad"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "#ffffff",
              stroke: "#004aad",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 8,
              fill: "#004aad",
            }}
            isAnimationActive
            animationDuration={600}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* FOOTER */}
      <div className="chart-footer">
        <strong>2025:</strong> Projects successfully completed till date
      </div>
    </div>
  );
}
