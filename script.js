function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")   
}

var options = {
    series: [60, 40],
    chart: {
    width: 380,
    type: 'pie'
  },
  labels: ['HTML', 'Team B'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#bar-pie-chart"), options);
  chart.render();
