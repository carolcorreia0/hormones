var content_charts= `

                <!--Your modal content goes here-->
                <p class="title"> Charts </p>
                
                 <div id="carouseldivparent" align="center" style="background:transparent;position:relative;padding-top:5%;left:5%;">
                    <div id="carouseldiv" class="owl-carousel owl-theme" style="background:transparent; width:99%; height:99%;">
                        <div class="item" style="width:100%; height:100%;"><div id="graph1"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph2"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph3"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph4"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph5"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph6"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph7"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph8"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph9"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph10"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph11"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph12"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph13"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph14"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph15"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph16"></div></div>
                        <div class="item" style="width:100%; height:100%;"><div id="graph17"></div></div>
                    </div>
                </div>
                <script>
$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    nav:true,
    smartSpeed:450
});

$(".owl-carousel").on('slid.bs.carousel', function () {
    $(window).trigger("resize");
 });


                
                Highcharts.createElement('link', {
   href: 'https://fonts.googleapis.com/css?family=News+Cycle',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ['#996666', '#88174e', '#336666', '#666699', '#ee6666', '#eeaaee', '#7798BF', '#aaeeee','#DF5353'],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: 'News Cycle, sans-serif'
      },
      spacingLeft:'0', 
      marginRight:'0',
   },
   title: {
      style: {
         fontSize: '20px',
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
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        size: "75%",
        dataLabels: {
            enabled: false
        },
        showInLegend: true
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
                y: 46.6
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
                y: 78.8
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
            text: 'Do you have kids?'
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
            name: 'Do you have kids',
            colorByPoint: true,
            data: [{
                name: 'No',
                y: 88
            }, {
                name: 'Yes',
                y: 10.8
            }, {
                name: 'I am pregnant at the moment',
                y: 1.2
          
            }]
        }]
    });

Highcharts.chart("graph5", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Have you ever had unpleasant effects related to the use of the pill or other hormonal contraceptives? If so, which ones?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "unpleasant effects",
            colorByPoint: true,
            data: [{
                name: "Headaches",
                y: 47.4
            }, {
                name: "Fluid retention",
                y: 52.4
            }, {
                name: "Cramps",
                y: 24.1
            }, {
                name: "Thrombosis",
                y: 1.7
            }, {
                name: "Libido's decrease",
                y: 69
            }, {
                name: "Lubrication's decrease",
                y: 56
            }, {
                name: "Other (specify)",
                y: 12.7
            }, {
                name: "No",
                y: 10.6
          
            }]
        }]
    }); 

Highcharts.chart("graph6", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "At the moment what kind of contraceptive do you use?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "kind of contraceptive",
            colorByPoint: true,
            data: [{
                name: "Hormonal (pill, Mirena, etc)",
                y: 11
            }, {
                name: "Non-hormonal (condom, copper IUD)",
                y: 68.3
            }, {
                name: "Hormonal + Non-hormonal",
                y: 3.6
            }, {
                name: "None",
                y: 17.1
             
          
            }]
        }]
    });


Highcharts.chart("graph7", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Do you consider yourself as feminist?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "Do you consider yourself as feminist?",
            colorByPoint: true,
            data: [{
                name: "Yes",
                y: 77
            }, {
                name: "No",
                y: 10.5
            }, {
                name: "Maybe",
                y: 12.5
        
             
          
            }]
        }]
    });


Highcharts.chart("graph8", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Do you consider that this Facebook group is feminist?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "Do you consider yourself as feminist?",
            colorByPoint: true,
            data: [{
                name: "Yes",
                y: 64.4
            }, {
                name: "No",
                y: 13.1
            }, {
                name: "Maybe",
                y: 22.6
        
             
          
            }]
        }]
    });


Highcharts.chart("graph9", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Do you consider this group a safe and free place to share experiences and opinions? Scale from 0 (not at all) to 4 (sure)"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "Group as a free place",
            colorByPoint: true,
            data: [{
                name: "0",
                y: 0.5
            }, {
                name: "1",
                y: 4.4
            }, {
                name: "2",
                y: 24.9
            }, {
                name: "3",
                y: 39.6
            }, {
                name: "4",
                y: 30.6
            }]
        }]
    });

    Highcharts.chart("graph10", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Do you consider that the type of information and discussion that is in the group is difficult to find elsewhere? Scale from 0 (not at all) to 4 (sure)"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "type of information",
            colorByPoint: true,
            data: [{
                name: "0",
                y: 2.3
            }, {
                name: "1",
                y: 2.8
            }, {
                name: "2",
                y: 11.5
            }, {
                name: "3",
                y: 31.3
            }, {
                name: "4",
                y: 52
             
          
            }]
        }]
    });

Highcharts.chart("graph11", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Do you usually participate in group discussions? (Whether by asking questions or commenting). Scale from 0 (never) to 4 (always)"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "do you usually participate",
            colorByPoint: true,
            data: [{
                name: "0",
                y: 11.3
            }, {
                name: "1",
                y: 28.8
            }, {
                name: "2",
                y: 38
            }, {
                name: "3",
                y: 16.4
            }, {
                name: "4",
                y: 5.5
            }]
        }]
    });

Highcharts.chart("graph12", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "When expressing yourself (with a comment, question, placement) in the group, do you feel more comfortable and confident when other users 'like' your post. Scale from 0 (not even a little) to 4 (a lot)"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "likes",
            colorByPoint: true,
            data: [{
                name: "0",
                y: 15.9
            }, {
                name: "1",
                y: 8
            }, {
                name: "2",
                y: 21.1
            }, {
                name: "3",
                y: 23.1
            }, {
                name: "4",
                y: 31.9 
            }]
        }]
    });


Highcharts.chart("graph13", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "When interacting in the group, do you contract negative feelings (disappointment, anguish, regret or decreased self-esteem, for example) when your post does not receive 'likes'? Scale from 0 (not even a little) to 4 (a lot)"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "lack of likes",
            colorByPoint: true,
            data: [{
                name: "0",
                y: 56.7
            }, {
                name: "1",
                y: 21.5
                
            }, {
                name: "2",
                y: 15.6
            }, {
                name: "3",
                y: 4.1
            }, {
                name: "4",
                y: 2.1
             
          
            }]
        }]
    });
Highcharts.chart("graph14", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "What kind of feeling do you get when you receive a negative feedback?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "negative feedback",
            colorByPoint: true,
            data: [{
                name: "That inspires me to continue the discussion",
                y: 46.4
            }, {
                name: "That discourages me to continue the discussion",
                y: 20.2
            }, {
                name: "Shame",
                y: 16.6
            }, {
                name: "Frustration",
                y: 14.4
            }, {
                name: "Regret",
                y: 13.8
            }, {
                name: "Anger",
                y: 4.6
            }, {
                name: "Other (specify)",
                y: 14.3
             
          
            }]
        }]
    });

Highcharts.chart("graph15", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Have you ever deleted a post due to lack of likes or interactions?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "delete posts",
            colorByPoint: true,
            data: [{
                name: "Yes",
                y: 9.8
            }, {
                name: "No",
                y: 90.2
          
            }]
        }]
    });

Highcharts.chart("graph16", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Have you made friends using the group?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "make friends",
            colorByPoint: true,
            data: [{
                name: "Yes",
                y: 9.7
            }, {
                name: "No",
                y: 90.3
         
          
            }]
        }]
    });


Highcharts.chart("graph17", {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: "Have you strengthened friendships you already had using the group?"
        },
        tooltip: {
            pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: "strengthened friendship",
            colorByPoint: true,
            data: [{
                name: "Yes",
                y: 35.2
            }, {
                name: "No",
                y: 64.8,
            }]
        }]
    });

    </script>
`;
