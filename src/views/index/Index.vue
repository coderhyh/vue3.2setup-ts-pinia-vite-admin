<template>
  <div class="index">
    <div ref="echertsRef" id="echerts">666</div>
  </div>
</template>

<script setup lang="ts">
import { EChartsOption } from '~/types/echarts';
import { Graph } from './index.type'
import { reqJson } from '~/network/Index'
const echarts = inject<any>('echarts');
const echertsRef = ref<HTMLDivElement | null>(null)
interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}
// https://echarts.apache.org/examples/zh/editor.html?c=graph-circular-layout&lang=ts
onMounted(async () => {
  initEcharts();
})

const initEcharts = async () => {
  var myChart = echarts.init(echertsRef.value);
  var option: EChartsOption;
  myChart.showLoading();
  const graph: Graph = await reqJson()
  myChart.hideLoading();

  graph.nodes.forEach(function (node: GraphNode) {
    node.label = {
      show: node.symbolSize > 30
    };
  });

  option = {
    title: {
      text: 'Les Miserables',
      subtext: 'Circular layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a: { name: string }) {
          return a.name;
        })
      }
    ],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        }
      }
    ]
  };

  myChart.setOption(option);
}
</script>

<style lang="less" scoped>
.index {
  width: 500px;
  height: 500px;
  background: #FAFAFA;

  #echerts {
    width: 100%;
    height: 100%;
  }
}
</style>
