import { ComposeOption } from 'echarts/core'
import { GraphSeriesOption } from 'echarts/charts'
import {
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponentOption,
} from 'echarts/components'

export type EChartsOption = ComposeOption<
  TitleComponentOption | TooltipComponentOption | LegendComponentOption | GraphSeriesOption
>
