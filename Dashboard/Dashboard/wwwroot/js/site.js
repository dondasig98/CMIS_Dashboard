

// ------------PATIENTS PER DIVISION CHART------------------ //

var xValues = ["Cardiology", "Telemetry", "Oncology", "Emergency", "Orthopedic", "Others"];
var yValues = [12, 19, 3, 5, 7, 3];
var barColors = [
    'rgba(62, 158, 164, 1)',
    'rgba(62, 164, 120, 1)',
    'rgba(62, 158, 164, 1)',
    'rgba(62, 164, 120, 1)',
    'rgba(62, 158, 164, 1)',
    'rgba(62, 164, 120, 1)'
];

new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            borderWidth: 1,
            data: yValues,
        }]
    },
    options: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "Patients per Division"
        }
    }
});

// ------------TOTAL NUMBER OF COVID PATIENTS CHART------------------ //

var xValue = ["Discharged", "Admits"];
var yValue = [20, 80];
var barColor = [
    'rgba(62, 158, 164, 1)',
    'rgba(62, 164, 120, 1)'
];

new Chart("pieChart", {
    type: "pie",
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
var xValue = ["Deaths", "Recoveries", "Active Cases", "New Cases"];
var yValue = [5, 5, 5, 5];
var barColor = [
    'rgba(62, 158, 164, 1)',
    'rgba(62, 164, 120, 1)',
    'rgba(62, 164, 91, 1)',
    'rgba(62, 106, 164, 1)'
];

new Chart("doughnutChart", {
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
            text: "Covid Patients"
        }
    }
});


// ---------------------COVID NON COVID PATIENTS CHART------------------ //

var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues1 = [25, 20, 60, 51, 66, 45, 50, 11, 2, 32, 65, 10];
var yValues2 = [5, 25, 15, 41, 35, 65, 80, 20, 23, 54, 50, 60];
var barColors1 = ['rgba(2, 158, 164, 0.3)'];
var barColors2 = ['rgba(62, 164, 120, 0.3)'];
var borderColors1 = ['rgba(2, 158, 164, 1)'];
var borderColors2 = ['rgba(62, 164, 120, 1)'];

new Chart("lineChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Patients w/ COVID",
            backgroundColor: barColors1,
            borderColor: borderColors1,
            borderWidth: 2,
            data: yValues1,
            fill: false
        }, {
            label: "Patients w/ Non-COVID",
            backgroundColor: barColors2,
            borderColor: borderColors2,
            borderWidth: 2,
            data: yValues2,
            fill: false
        }]
    },
    options: {
        legend: {
            display: true,
        },
        tooltips: {
            enabled: true,
        },
        title: {
            display: true,
            text: "COVID and Non-COVID Patients"
        }
    }
});