import Chart from 'chart.js/auto';

// fetch('./players.json')
// .then((response) => response.json())
// .then(data => {


//     var context = document.getElementById("PlayerChart");
//     // console.log(data["Kareem"]["totalpts"])
   
//     var CareerChart = new Chart(context, {
        
//         type: 'bar',
//         data: {
//             labels: ["Lebron James"],
//             datasets: [{
//                 label: 'Points Per Game',
//                 data: data["Lebron James"]["ppg"],
//                 backgroundColor: 'rgba(255, 0, 255, .2)',
//                 borderColor: 'rgba(255, 0, 255, 1)',
//                 borderWidth: 3
//             },
//             {
//                 label: 'Assists Per Game',
//             data: data["Lebron James"]["apg"],
//             backgroundColor: 'rgba(0, 0, 255, 0.2)',
//             borderColor: 'rgba(0, 0, 255, 1)',
//             borderWidth: 3
//             },
//             {
//                 label: 'Rebounds Per Game',
//             data: data["Lebron James"]["rpg"],
//             backgroundColor: 'rgba(99, 255, 132 , 0.2)',
//             borderColor: 'rgba(99, 255, 132, 1)',
//             borderWidth: 3
//             },
//             ]  
//         },
//     // options: {
//     //     scales: {
//     //         x: [{
//     //             scaleLabel: {
//     //                 display: true,
//     //             },
//     //         }],
//     //         y: [{
//     //             ticks: {
//     //                 beginAtZero: true,
//     //                 stepValue: 10,
//     //                 max: 35,
//     //             }
//     //         }]
//     //     }
//     // }
// })
// });
// document.querySelector("#player")
Chart.defaults.font.size = 18;
Chart.defaults.font.family = "Bradley Hand"
// Chart.defaults.font.weight = "undefined"
let playerNames = document.querySelectorAll(".player-name");
playerNames.forEach(playerName => {
    playerName.addEventListener('click', function() {
    // if (!event.target.matches('#option1')) return;
    // event.preventDefault(); 

    let playerValue = this.dataset.value;
    // console.log(playerValue);
    // let playerData = data["playerName"];
    // console.log(playerName)
    // myChart.data.datasets[0].data = playerData["apg"];
    // myChart.update();
    fetch('./players.json')
    .then((response) => response.json())
    .then(data => {
        
        var context = document.getElementById("PlayerChart");
       
       let chartStatus = Chart.getChart("PlayerChart")
        if (chartStatus != undefined) {
            chartStatus.destroy()
        }
        var CareerChart = new Chart(context, {
            

            type: 'bar',
            data: {
                labels: [playerValue],
                datasets: [
                    {
                        label: 'Minutes',
                    data: data[playerValue]["mpg"],
                    backgroundColor: 'rgba(255, 165, 0, 0.7)',
                    borderColor: 'rgba(255, 165, 0, 1)',
                    borderWidth: 5
                    },
                    {
                    label: 'Points',
                    data: data[playerValue]["ppg"],
                    backgroundColor: 'rgba(255, 0, 255, 0.7)',
                    borderColor: 'rgba(255, 0, 255, 1)',
                    borderWidth: 5
                },
                {
                    label: 'Assists',
                data: data[playerValue]["apg"],
                backgroundColor: 'rgba(0, 0, 255, 0.7)',
                borderColor: 'rgba(0, 0, 255, 1)',
                borderWidth: 5
                },
                {
                    label: 'Rebounds',
                data: data[playerValue]["rpg"],
                backgroundColor: 'rgba(99, 255, 132 , 0.7)',
                borderColor: 'rgba(99, 255, 132, 1)',
                borderWidth: 5
                },
                {
                    label: 'Field Goals Made',
                data: data[playerValue]["fgm"],
                backgroundColor: 'rgba(255, 0, 0, 0.7)',
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 5
                },
                {
                    label: 'Free Throws Made',
                data: data[playerValue]["ftm"],
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 5
                },
                ]  
            },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        fontFamily: 'sans-serif',
                        fontSize: 30,
                        fontStyle: 'bold',
                    }
                }
            },
            scales: {
                x: {
                        display: true,
                        ticks:{
                            color: "white"
                        }
                    },
                y: {
                    ticks: {
                        display: true,
                        color: "white",
                        beginAtZero: true,
                        max: 40,
                        fontFamily: 'sans-serif',
                        fontSize: 50,
                        fontStyle: 'bold',
                    }
                }
            }
        }
    })
    });
})

})
