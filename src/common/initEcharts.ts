import { GraphChart } from 'echarts/charts'
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import * as echarts from 'echarts/core'
// import { } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers'
import { GlobeComponent } from 'echarts-gl/components'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphChart,
  CanvasRenderer,
  GlobeComponent,
])

export default echarts
