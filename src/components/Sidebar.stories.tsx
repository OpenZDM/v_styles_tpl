import { Meta, StoryObj } from '@storybook/react'
import { DashboardSidebar, Props } from './Sidebar'
import * as Icons from "@phosphor-icons/react"

export default {
  title: 'Components/Sidebar',
  component: DashboardSidebar,
  args: {
    menu: [
      {
        name: "DAT#8",
        key: "datEight",
        icon: <Icons.ClockClockwise size={24} />,
        opened: true,
        insideMenu: [{
          name: "Real Time(DAT#11)",
          key: "realtime",
          selected: true,
          route: "/dateight/realtime"
        },
        {
          name: "Framing",
          key: "framing",
          selected: false,
          route: "/dateight/framing"
        },
        {
          name: "DTB 1",
          key: "dtb1",
          selected: false,
          route: "/dateight/dtbone"
        },
        {
          name: "DTB 2",
          key: "dtb2",
          selected: false,
          route: "/dateight/dtbtwo"
        }]
      }
    ]
  },
  argTypes: {}
} as Meta<Props>

export const Default: StoryObj<Props> = {}
