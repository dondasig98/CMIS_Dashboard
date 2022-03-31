

// ------------PATIENTS PER DIVISION CHART------------------ //

var xValues = ["Cardiology", "Telemetry", "Oncology", "Emergency", "Orthopedic", "Others"];
var yValues = [12, 19, 3, 5, 2, 3];
var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
];
var borderColors = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
];

new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            borderColor: borderColors,
            borderWidth: 1,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Number of patients per division"
        },
        beginAtZero: true
    }
});

// ------------TOTAL NUMBER OF COVID PATIENTS CHART------------------ //

var xValue = ["Discharged", "Admits"];
var yValue = [20, 80];
var barColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];

new Chart("pieChart", {
    type: "doughnut",
    data: {
        labels: xValue,
        datasets: [{
            backgroundColor: barColor,
            data: yValue
        }],
        borderWidth: 1

    },
    options: {
        title: {
            display: true,
            text: "Total Number of Covid Patients"
        }
    }
});

// ---------------------COVID PATIENTS CHART------------------ //

const doughnut = document.getElementById('doughnutChart').getContext('2d');
const myChart4 = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['Deaths', 'Recoveries', 'Active Cases', 'New Cases'],
        datasets: [{
            data: [5, 5, 5, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: "Total Number of Covid Patients"
        },
        
    }
});

// ---------------------COVID NON COVID PATIENTS CHART------------------ //

const line = document.getElementById('lineChart').getContext('2d');
const myChart3 = new Chart(line, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Patients w/ COVID",
            data: [25, 20, 60, 41, 66, 45, 80, 11, 2, 32, 60, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }, {
            label: "Patients w/o COVID",
            data: [5, 20, 15, 41, 35, 65, 80, 20, 23, 54, 50, 60],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: false,
        title: {
            display: true,
            text: "Covid and Non Covid Patients"
        },
    }
});