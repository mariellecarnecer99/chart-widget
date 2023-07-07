const el = document.getElementById('chart');

console.log(el);
function fetchChartData(option) {
    var options = option;
    getData(options);
};

function getData(val) {
    var myChart = echarts.init(el, null, {
        renderer: 'svg',
        useDirtyRect: false
    });
    
    if (val && typeof val === 'object') {
        myChart.setOption(val);
    }
    
    window.addEventListener('resize', myChart.resize);
}

export default fetchChartData;
