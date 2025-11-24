// ВСТРОЕННЫЕ ДАННЫЕ ИЗ ЗАПРОСА
const rawResponse = {
  status: "SUCCEEDED",
  data: [
    { date: "2025-07-01 00:00:00.000000", leads_created: 5607 },
    { date: "2025-07-02 00:00:00.000000", leads_created: 5632 },
    { date: "2025-07-03 00:00:00.000000", leads_created: 7924 },
    { date: "2025-07-04 00:00:00.000000", leads_created: 0 },
    { date: "2025-07-07 00:00:00.000000", leads_created: 7718 },
    { date: "2025-07-08 00:00:00.000000", leads_created: 5827 },
    { date: "2025-07-09 00:00:00.000000", leads_created: 7197 },
    { date: "2025-07-10 00:00:00.000000", leads_created: 3880 },
    { date: "2025-07-11 00:00:00.000000", leads_created: 7358 },
    { date: "2025-07-14 00:00:00.000000", leads_created: 8083 },
    { date: "2025-07-15 00:00:00.000000", leads_created: 7839 },
    { date: "2025-07-16 00:00:00.000000", leads_created: 6500 },
    { date: "2025-07-17 00:00:00.000000", leads_created: 7147 },
    { date: "2025-07-18 00:00:00.000000", leads_created: 7460 },
    { date: "2025-07-21 00:00:00.000000", leads_created: 7231 },
    { date: "2025-07-22 00:00:00.000000", leads_created: 7942 },
    { date: "2025-07-23 00:00:00.000000", leads_created: 5883 },
    { date: "2025-07-24 00:00:00.000000", leads_created: 8189 },
    { date: "2025-07-25 00:00:00.000000", leads_created: 9764 },
    { date: "2025-07-28 00:00:00.000000", leads_created: 10150 },
    { date: "2025-07-29 00:00:00.000000", leads_created: 7543 },
    { date: "2025-07-30 00:00:00.000000", leads_created: 7365 },
    { date: "2025-07-31 00:00:00.000000", leads_created: 9243 },
    { date: "2025-08-01 00:00:00.000000", leads_created: 6591 },
    { date: "2025-08-04 00:00:00.000000", leads_created: 7537 },
    { date: "2025-08-05 00:00:00.000000", leads_created: 7293 },
    { date: "2025-08-06 00:00:00.000000", leads_created: 7197 },
    { date: "2025-08-07 00:00:00.000000", leads_created: 7475 },
    { date: "2025-08-08 00:00:00.000000", leads_created: 6254 },
    { date: "2025-08-11 00:00:00.000000", leads_created: 6586 },
    { date: "2025-08-12 00:00:00.000000", leads_created: 8267 },
    { date: "2025-08-13 00:00:00.000000", leads_created: 8933 },
    { date: "2025-08-14 00:00:00.000000", leads_created: 9037 },
    { date: "2025-08-15 00:00:00.000000", leads_created: 6616 },
    { date: "2025-08-18 00:00:00.000000", leads_created: 7735 },
    { date: "2025-08-19 00:00:00.000000", leads_created: 9130 },
    { date: "2025-08-20 00:00:00.000000", leads_created: 8359 },
    { date: "2025-08-21 00:00:00.000000", leads_created: 6869 },
    { date: "2025-08-22 00:00:00.000000", leads_created: 6475 },
    { date: "2025-08-25 00:00:00.000000", leads_created: 10942 },
    { date: "2025-08-26 00:00:00.000000", leads_created: 7445 },
    { date: "2025-08-27 00:00:00.000000", leads_created: 7866 },
    { date: "2025-08-28 00:00:00.000000", leads_created: 9291 },
    { date: "2025-08-29 00:00:00.000000", leads_created: 9126 },
    { date: "2025-09-01 00:00:00.000000", leads_created: 0 },
    { date: "2025-09-02 00:00:00.000000", leads_created: 15115 },
    { date: "2025-09-03 00:00:00.000000", leads_created: 8370 },
    { date: "2025-09-04 00:00:00.000000", leads_created: 11114 },
    { date: "2025-09-05 00:00:00.000000", leads_created: 11803 },
    { date: "2025-09-08 00:00:00.000000", leads_created: 13055 },
    { date: "2025-09-09 00:00:00.000000", leads_created: 8574 },
    { date: "2025-09-10 00:00:00.000000", leads_created: 21203 },
    { date: "2025-09-11 00:00:00.000000", leads_created: 11495 },
    { date: "2025-09-12 00:00:00.000000", leads_created: 12093 },
    { date: "2025-09-15 00:00:00.000000", leads_created: 12274 },
    { date: "2025-09-16 00:00:00.000000", leads_created: 8435 },
    { date: "2025-09-17 00:00:00.000000", leads_created: 10455 },
    { date: "2025-09-18 00:00:00.000000", leads_created: 7774 },
    { date: "2025-09-19 00:00:00.000000", leads_created: 10244 },
    { date: "2025-09-22 00:00:00.000000", leads_created: 7782 },
    { date: "2025-09-23 00:00:00.000000", leads_created: 7362 },
    { date: "2025-09-24 00:00:00.000000", leads_created: 10535 },
    { date: "2025-09-25 00:00:00.000000", leads_created: 7316 },
    { date: "2025-09-26 00:00:00.000000", leads_created: 10070 },
    { date: "2025-09-29 00:00:00.000000", leads_created: 6255 },
    { date: "2025-09-30 00:00:00.000000", leads_created: 8094 }
  ]
};

// Утилиты
function parseDate(str) {
  return new Date(str.replace(" ", "T"));
}

function formatDate(d) {
  return d.toISOString().slice(0, 10);
}

function formatNumber(num) {
  return num.toLocaleString("ru-RU");
}

// Подготовка данных
const records = rawResponse.data
  .map((row) => {
    const d = parseDate(row.date);
    return {
      date: d,
      dateStr: formatDate(d),
      monthKey: d.toISOString().slice(0, 7), // YYYY-MM
      weekday: d.getDay(), // 0=Вс
      weekdayLabel: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][d.getDay()],
      leads: row.leads_created
    };
  })
  .sort((a, b) => a.date - b.date);

// KPI
function calcKpi(data) {
  const nonZero = data.filter((r) => r.leads > 0);
  const total = data.reduce((s, r) => s + r.leads, 0);
  const avg = data.length ? total / data.length : 0;
  let max = null;
  let min = null;

  nonZero.forEach((r) => {
    if (!max || r.leads > max.leads) max = r;
    if (!min || r.leads < min.leads) min = r;
  });

  return { total, avg, max, min };
}

function renderKpi() {
  const { total, avg, max, min } = calcKpi(records);
  document.getElementById("kpi-total").textContent = formatNumber(total);
  document.getElementById("kpi-average").textContent = formatNumber(
    Math.round(avg)
  );
  if (max) {
    document.getElementById("kpi-max").textContent = formatNumber(max.leads);
    document.getElementById("kpi-max-date").textContent = max.dateStr;
  }
  if (min) {
    document.getElementById("kpi-min").textContent = formatNumber(min.leads);
    document.getElementById("kpi-min-date").textContent = min.dateStr;
  }
}

// Линейный график (Chart.js)
let leadsChart = null;

function getFilteredRecordsByMonth(monthKey) {
  if (monthKey === "all") return records;
  return records.filter((r) => r.monthKey === monthKey);
}

function buildChart(monthKey = "all") {
  const ctx = document.getElementById("leadsChart").getContext("2d");
  const data = getFilteredRecordsByMonth(monthKey);

  const labels = data.map((r) => r.dateStr);
  const values = data.map((r) => r.leads);

  if (leadsChart) {
    leadsChart.destroy();
  }

  leadsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Лидов создано",
          data: values,
          fill: true,
          tension: 0.35,
          borderColor: "rgba(129, 140, 248, 1)",
          borderWidth: 2,
          pointRadius: 3,
          pointBackgroundColor: "rgba(129, 140, 248, 1)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#e5e7eb",
          pointHoverBorderColor: "#111827",
          backgroundColor: function (context) {
            const chart = context.chart;
            const {
              ctx,
              chartArea
            } = chart;
            if (!chartArea) {
              return null;
            }
            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );
            gradient.addColorStop(0, "rgba(129, 140, 248, 0.45)");
            gradient.addColorStop(1, "rgba(15, 23, 42, 0.0)");
            return gradient;
          }
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          borderColor: "rgba(148, 163, 184, 0.6)",
          borderWidth: 1,
          padding: 8,
          titleFont: { size: 12 },
          bodyFont: { size: 12 },
          callbacks: {
            label: (ctx) =>
              "  " + formatNumber(ctx.parsed.y) + " лидов"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "rgba(148, 163, 184, 0.9)",
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 10
          },
          grid: {
            color: "rgba(31, 41, 55, 0.5)",
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: "rgba(148, 163, 184, 0.9)",
            callback: (v) => formatNumber(v)
          },
          grid: {
            color: "rgba(31, 41, 55, 0.5)",
            drawBorder: false
          }
        }
      }
    }
  });
}

// Тепловая карта по дням недели/месяцам (Mon–Fri)
function buildHeatmap() {
  const container = document.getElementById("heatmap");
  container.innerHTML = "";

  // Только рабочие дни (Пн–Пт, weekday 1–5)
  const filtered = records.filter((r) => r.weekday >= 1 && r.weekday <= 5);

  // Группировка monthKey -> weekday(1-5) -> avg
  const monthMap = new Map();
  filtered.forEach((r) => {
    if (!monthMap.has(r.monthKey)) {
      monthMap.set(r.monthKey, { 1: [], 2: [], 3: [], 4: [], 5: [] });
    }
    monthMap.get(r.monthKey)[r.weekday].push(r.leads);
  });

  // Порядок месяцев по возрастанию
  const monthsSorted = Array.from(monthMap.keys()).sort();

  // Собираем для нормировки
  let allValues = [];
  monthsSorted.forEach((month) => {
    const wk = monthMap.get(month);
    [1, 2, 3, 4, 5].forEach((d) => {
      const arr = wk[d];
      if (arr.length) {
        const avg =
          arr.reduce((s, v) => s + v, 0) / arr.length;
        allValues.push(avg);
      }
    });
  });
  const globalMin = Math.min(...allValues);
  const globalMax = Math.max(...allValues);

  function valueToColor(v) {
    if (isNaN(v)) return "#111827";
    const ratio =
      globalMax === globalMin ? 0.5 : (v - globalMin) / (globalMax - globalMin);
    // Градиент от тёмно-синего к жёлто-красному
    const r = Math.round(31 + ratio * (239 - 31));
    const g = Math.round(41 + ratio * (200 - 41));
    const b = Math.round(55 + ratio * (64 - 55));
    return `rgb(${r}, ${g}, ${b})`;
  }

  const weekdayLabels = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  // Строим строки: по дней недели Пн–Пт
  for (let weekday = 1; weekday <= 5; weekday++) {
    const row = document.createElement("div");
    row.className = "heatmap-row";

    const labelCell = document.createElement("div");
    labelCell.className = "heatmap-label";
    labelCell.textContent = weekdayLabels[weekday];
    row.appendChild(labelCell);

    monthsSorted.forEach((monthKey) => {
      const wk = monthMap.get(monthKey);
      const arr = wk[weekday];
      let avg = NaN;
      if (arr && arr.length) {
        avg = arr.reduce((s, v) => s + v, 0) / arr.length;
      }

      const cell = document.createElement("div");
      cell.className = "heatmap-cell";
      cell.dataset.value = isNaN(avg)
        ? "-"
        : Math.round(avg).toLocaleString("ru-RU");
      cell.style.backgroundColor = valueToColor(avg);
      cell.title = `${weekdayLabels[weekday]} / ${monthKey}\nСреднее: ${
        isNaN(avg) ? "-" : Math.round(avg).toLocaleString("ru-RU")
      }`;

      row.appendChild(cell);
    });

    container.appendChild(row);
  }
}

// Таблица
function buildTable() {
  const tbody = document.getElementById("data-table-body");
  tbody.innerHTML = "";

  records.forEach((r) => {
    const tr = document.createElement("tr");
    const tdDate = document.createElement("td");
    const tdLeads = document.createElement("td");

    tdDate.textContent = r.dateStr;
    tdLeads.textContent = formatNumber(r.leads);

    tr.appendChild(tdDate);
    tr.appendChild(tdLeads);
    tbody.appendChild(tr);
  });
}

function setupTableFilter() {
  const input = document.getElementById("table-search");
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    const rows = Array.from(
      document.querySelectorAll("#data-table-body tr")
    );
    rows.forEach((row) => {
      const dateText = row.cells[0].textContent.toLowerCase();
      if (!query || dateText.includes(query)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

// Фильтр по месяцу для графика
function setupMonthFilter() {
  const select = document.getElementById("month-filter");
  select.addEventListener("change", () => {
    buildChart(select.value);
  });
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  renderKpi();
  buildChart("all");
  buildHeatmap();
  buildTable();
  setupTableFilter();
  setupMonthFilter();
});