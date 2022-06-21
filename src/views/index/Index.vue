<template>
  <div class="index">
    <div ref="echerts"></div>
  </div>
</template>

<script setup lang="ts">
import { EChartsOption } from '~/types/echarts';

const echarts = inject<any>('echarts');
const echertsRef = ref<HTMLDivElement | null>(null)
interface GraphNode {
  symbolSize: number;
  label?: {
    show?: boolean;
  };
}
// https://echarts.apache.org/examples/zh/editor.html?c=graph-circular-layout&lang=ts
onMounted(() => {
  // var myChart = echarts.init(echertsRef.value);
  // var option: EChartsOption;
  // var ROOT_PATH =
  //   'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
  // myChart.showLoading();
  // $.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
  //   myChart.hideLoading();

  //   graph.nodes.forEach(function (node: GraphNode) {
  //     node.label = {
  //       show: node.symbolSize > 30
  //     };
  //   });

  //   option = {
  //     title: {
  //       text: 'Les Miserables',
  //       subtext: 'Circular layout',
  //       top: 'bottom',
  //       left: 'right'
  //     },
  //     tooltip: {},
  //     legend: [
  //       {
  //         data: graph.categories.map(function (a: { name: string }) {
  //           return a.name;
  //         })
  //       }
  //     ],
  //     animationDurationUpdate: 1500,
  //     animationEasingUpdate: 'quinticInOut',
  //     series: [
  //       {
  //         name: 'Les Miserables',
  //         type: 'graph',
  //         layout: 'circular',
  //         circular: {
  //           rotateLabel: true
  //         },
  //         data: graph.nodes,
  //         links: graph.links,
  //         categories: graph.categories,
  //         roam: true,
  //         label: {
  //           position: 'right',
  //           formatter: '{b}'
  //         },
  //         lineStyle: {
  //           color: 'source',
  //           curveness: 0.3
  //         }
  //       }
  //     ]
  //   };

  //   myChart.setOption(option);
  // });
})
</script>

<style lang="less" scoped>
.index {
  background: #FAFAFA;
}
</style>
