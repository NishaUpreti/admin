
	Chart.pluginService.register({
		beforeDraw: function (chart) {
			if (chart.config.options.elements.center) {
				//Get ctx from string
				var ctx = chart.chart.ctx;

				//Get options from the center object in options
				var centerConfig = chart.config.options.elements.center;
				var fontStyle = centerConfig.fontStyle || 'Arial';
				var txt = centerConfig.text;
				var color = centerConfig.color || '#000';
				var sidePadding = centerConfig.sidePadding || 20;
				var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
				//Start with a base font of 30px
				ctx.font = "50px " + fontStyle;

				//Get the width of the string and also the width of the element minus 10 to give it 5px side padding
				var stringWidth = ctx.measureText(txt).width;
				var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

				// Find out how much the font can grow in width.
				var widthRatio = elementWidth / stringWidth;
				var newFontSize = Math.floor(30 * widthRatio);
				var elementHeight = (chart.innerRadius * 2);

				// Pick a new font size so it will not be larger than the height of label.
				var fontSizeToUse = Math.min(newFontSize, elementHeight);

				//Set font settings to draw it correctly.
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
				var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
				ctx.font = fontSizeToUse + "px " + fontStyle;
				ctx.fillStyle = color;

				//Draw text in center
				ctx.fillText(txt, centerX, centerY);
			}
		}
	});
	
	var configcallmetric = {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Active Time',
					backgroundColor: ["#0253cc"],
					borderColor: ["#0253cc"],
                    data: [
                         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
                    ],
                    fill: false,
                },
                {
                    label: 'Idle Time',
					backgroundColor: ["#00c5fb"],
					borderColor: ["#00c5fb"],
                    data: [
                         3, 4, 1, 2, 5, 6, 7, 8, 9
                    ],
                    fill: false,
                }
            ]
        },
        options: {
			responsive: true,
    maintainAspectRatio: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Days'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Hours'
                    }
                }]
            }
        }
	};
	
	var configcall = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [250, 200],
				backgroundColor: [
					"#00c5fb", "#0253cc"
				],
				label: 'Dataset 1'
			}],
			labels: [
				'Male (250)',
				'Female (200)',
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				position: 'right',
			},
			animation: {
				animateScale: true,
				animateRotate: true
			},

			elements: {
				center: {
					text: '450',
					color: '#333', // Default is #000000
					fontStyle: 'Arial', // Default is Arial
					sidePadding: 20 // Defualt is 20 (as a percentage)
				}
			}
		}
	};

	var configLocatAtt = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [100, 50,20,150,140],
				backgroundColor: [
					"#00c5fb", "#0253cc", "#BBDEFB", "#86c5f9", "#3ea2f4"
				],
				label: 'Dataset 1'
			}],
			labels: [
				'Delhi (250)',
				'hyderabad (200)',
				'Bangalore (250)',
				'Pune (200)',
				'Mumbai (200)',
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				position: 'right',
			},
			animation: {
				animateScale: true,
				animateRotate: true
			},

		}
	};

	var configTime = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [10, 5,19],
				backgroundColor: [
					"#BBDEFB", "#86c5f9", "#3ea2f4"
				],
				label: 'Dataset 1'
			}],
			labels: [
				'Overtime (10)',
				'Half Day (5)',
				'Full day (19)',
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				position: 'right',
			},
			animation: {
				animateScale: true,
				animateRotate: true
			},

		}
	};

	var configDailyPer = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [10, 15, 10, 5, 2],
				backgroundColor: [
					"#00c5fb", "#0253cc", "#BBDEFB", "#86c5f9", "#3ea2f4"
				],
				label: 'Dataset 1'
			}],
			labels: [
				'Activity Feed (10)',
				'Calls (15)',
				'Mails (10)',
				'Meetings (5)',
				'Task (2)',
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				position: 'right',
			},
			animation: {
				animateScale: true,
				animateRotate: true
			},

		}
	};


    window.onload = function () {
		var ctx = document.getElementById('chart-area-callmetric').getContext('2d');
		window.myLine = new Chart(ctx, configcallmetric);
		
		var ctx1 = document.getElementById('chart-maleFemale').getContext('2d');
		window.myDoughnut = new Chart(ctx1, configcall);
			
		var ctx2 = document.getElementById('chart-locatAtt').getContext('2d');
		window.myDoughnut = new Chart(ctx2, configLocatAtt);
		
		var ctx4 = document.getElementById('chart-timeStatus').getContext('2d');
		window.myDoughnut = new Chart(ctx4, configTime);

		var ctx5 = document.getElementById('chart-dailyPerf').getContext('2d');
		window.myDoughnut = new Chart(ctx5, configDailyPer);

    };
		