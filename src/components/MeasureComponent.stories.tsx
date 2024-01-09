import { Meta, StoryObj } from '@storybook/react'
import { MeasureComponent, MeasureComponentProps } from './MeasureComponent'

export default {
  title: 'Components/MeasureComponent',
  component: MeasureComponent,
  args: {
    greenName: "Inside Specification",
    yellowName: "Inside Limits",
    purpleName: "Not Measured",
    redName: "Rejected",
    pointName: "Pilar A Step LH/RH Flush",
    measuredValue: 0.51,
    rejectionValue: -1,
    specificationValue: 0.81,
    toleranceValue: 0.13,
  },
  argTypes: {}
} as Meta<MeasureComponentProps>

export const Default: StoryObj<MeasureComponentProps> = {}
