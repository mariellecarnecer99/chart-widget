const el = document.getElementById('chart-container');

function myfunc(option) {
  var options = option;
  myfunc1(options);
};

function myfunc1(val) {
  var myChart = echarts.init(el, null, {
    renderer: 'svg',
    useDirtyRect: false
  });
  
  if (val && typeof val === 'object') {
    myChart.setOption(val);
  }
  
  window.addEventListener('resize', myChart.resize);
}

export default myfunc;
