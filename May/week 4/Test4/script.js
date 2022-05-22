const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
    var ctx = chart.getContext("2d");
    var myChart = new Chart(ctx, {
        type:"bar",
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.1)",
                        "rgba(54, 162, 235, 0.1)",
                        "rgba(255, 206, 86, 0.1)",
                        "rgba(75, 192, 192, 0.1)",
                        "rgba(153, 102, 255, 0.1)",
                        "rgba(255, 159, 64, 0.1)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 4,
                },
            ],
        },




        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});

$(document).ready(function () {
    $('#example').DataTable();
});