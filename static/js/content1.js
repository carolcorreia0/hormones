var content1= `

                <!--Your modal content goes here-->
                <p class="title"> Results</p>
                
                 <div id="carouseldivparent" align="center" style="background:transparent;position:relative;top:10%;left:-5%;">
                    <div id="carouseldiv" class="owl-carousel owl-theme owl-loaded" style="background:transparent; width:90%; height:99%;">
                        <div class="item" style="width:100%; height:100%;"><div id="graph1"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph2"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph3"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph4"></div></div>

                    </div>
                    <!--<div id="graph" style="width:99%"></div>-->
                 </div>

                <script>
$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:1,
    stagePadding:1,
    smartSpeed:450,
    nav:true
});



                
                Highcharts.createElement('link', {
   href: 'https://fonts.googleapis.com/css?family=News+Cycle',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ['#996666', '#88174e', '#336666', '#666699', '#66999', '#ee6666', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: 'News Cycle, sans-serif'
      }
   },
   title: {
      style: {
         fontSize: '50px',
         fontWeight: 'bold',
         color: 'rgba(300,219,216,1)'
      }
   },
   tooltip: {
      borderWidth: 0,
      backgroundColor: 'rgba(219,219,216,1)',
      shadow: false
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '15px',
         color: 'rgba(219,219,216,1)'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      title: {
         style: {
            textTransform: 'lowercase'
         }
      },
      labels: {
         style: {
            fontSize: '20px'
         }
      }
   },
   plotOptions: {
      candlestick: {
         lineColor: '#404048'
      }
   },


   // General
   background2: '#F0F0EA'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);


Highcharts.chart('graph1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Age'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Age',
            colorByPoint: true,
            data: [{
                name: 'up to 18',
                y: 1.6
            }, {
                name: '18-24 years old',
                y: 46.6,
                sliced: true,
                selected: false
            }, {
                name: '25-30 years old',
                y: 38.5
            }, {
                name: '31-39 years old',
                y: 12.3
            }, {
                name: '40-49 years old',
                y: 0.9
            }, {
                name: '50-64 years old',
                y: 0
            }, {
                name: 'over 65 years old',
                y: 0
            }]
        }]
    });

Highcharts.chart('graph2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Level of Education (last title)'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Level of Education (last title)',
            colorByPoint: true,
            data: [{
                name: 'Elementary School',
                y: 1.6
            }, {
                name: 'Highschool',
                y: 23.3
            }, {
                name: 'Bachelors Degree',
                y: 64.8
            }, {
                name: 'Masters Degree',
                y: 10.1
            }, {
                name: 'Phd',
                y: 1.1
            }, {
                name: 'Post-doc',
                y: 0.3
            }, {
                name: 'over 65 years old',
                y: 0
            }]
        }]
    });

Highcharts.chart('graph3', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Sexual Orientation'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Sexual Orientation',
            colorByPoint: true,
            data: [{
                name: 'Homosexual',
                y: 0.8
            }, {
                name: 'Heterosexual',
                y: 78.8,
                sliced: true,
                selected: true
            }, {
                name: 'Bisexual',
                y: 19.3
            }, {
                name: 'I would rather not answer',
                y: 1.2
            }]
        }]
    });

Highcharts.chart('graph4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'xxx'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'xxx',
            colorByPoint: true,
            data: [{
                name: 'Homosexual',
                y: 0.8
            }, {
                name: 'Heterosexual',
                y: 78.8,
                sliced: true,
                selected: true
            }, {
                name: 'Bisexual',
                y: 19.3
            }, {
                name: 'I would rather not answer',
                y: 1.2
            }]
        }]
    });



$("#myCarousel").on('slid.bs.carousel', function () {
    $(window).trigger("resize");
 });
    
    </script>
`;
