// Gráfico de Temperatura pequeno

const labelsMiniTemp = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
];
const dataMiniTemp = {
    labels: labelsMiniTemp,
    datasets: [
        {
            label: "Controle",
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
            elements: {
                point: {
                    radius: 0,
                },
            },
            data: [25, 25, 25, 25, 25, 25, 25],
        },
        {
            label: "Variação de Temperatura",
            backgroundColor: "green",
            borderColor: "green",
            data: [17, 21, 19, 26, 18, 22, 24],
            tension: 0.4,
        },
        {
            label: "Controle",
            backgroundColor: "gray",
            borderColor: "gray",
            borderWidth: 1,
            elements: {
                point: {
                    radius: 0,
                },
            },
            data: [18, 18, 18, 18, 18, 18, 18],
        },
    ],
};

const configMiniTemp = {
    type: "line",
    data: dataMiniTemp,
    options: { maintainAspectRatio: false },
};

var miniGraficoTemp = new Chart(
    document.getElementById("miniGraficoTemp"),
    configMiniTemp
);

// Fim Gráfico de Temperatura pequeno

// Gráfico de Umidade pequeno

const labelsMiniUmi = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
];
const dataMiniUmi = {
    labels: labelsMiniUmi,
    datasets: [
        {
            label: "Controle",
            backgroundColor: "red",
            borderColor: "red",
            borderWidth: 1,
            elements: {
                point: {
                    radius: 0,
                },
            },
            data: [80, 80, 80, 80, 80, 80, 80],
        },
        {
            label: "Variação de Umidade",
            backgroundColor: "orangered",
            borderColor: "orangered",
            data: [55, 61, 69, 66, 73, 82, 84],
            tension: 0.4,
        },
        {
            label: "Controle",
            backgroundColor: "gray",
            borderColor: "gray",
            borderWidth: 1,
            elements: {
                point: {
                    radius: 0,
                },
            },
            data: [60, 60, 60, 60, 60, 60, 60],
        },
    ],
};

const configMiniUmi = {
    type: "line",
    data: dataMiniUmi,
    options: { maintainAspectRatio: false },
};

var miniGraficoUmi = new Chart(
    document.getElementById("miniGraficoUmi"),
    configMiniUmi
);

// Grafico destaque

const labels = ["9:00", "11:00", "13:00", "15:00", "17:00", "18:00"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "Temperatura (ºC)",
            backgroundColor: "#f16a43",
            borderColor: "#f16a43",
            data: [25, 21, 19, 26, 18, 22],
        },
        {
            label: "Umidade (%)",
            backgroundColor: "#2f9395",
            borderColor: "#2f9395",
            data: [50, 61, 69, 66, 73, 82],
        },
    ],
};

const config = {
    type: "bar",
    data,
    options: { maintainAspectRatio: false },
};

var graficoDestaque = new Chart(
    document.getElementById("graficoDestaque"),
    config
);
