"use client";

import { useContext, useState } from "react";
import { produce } from "immer"
import Image from "next/image"
import Link from 'next/link'
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import logoZDM from "../assets/logoZDM.svg"

export interface Props {
  children?: React.ReactNode
  menu: Menu[]
}

export interface Menu {
  name: string;
  key: string;
  icon: JSX.Element;
  opened: boolean;
  insideMenu: {
    name: string;
    key: string;
    selected: boolean;
    route: string;
  }[]
}

export function DashboardSidebar({ children, menu }: Props) {
  function OnChevronClick(index: number) {
    const updatedNavigationOptions = produce(menu, draft => {
      draft[index].opened = !draft[index].opened
    })

    // setMenu(updatedNavigationOptions)
  }

  function OnMenuSelected(selectedMenuIndex: number, selectedSubMenuIndex: number) {
    const updatedNavigationOptions = produce(menu, draft => {
      const insideMenuUpdated = draft.map(options => {
        const { insideMenu } = options
        return insideMenu.map((subOptions, index) => {
          subOptions.selected = index === selectedSubMenuIndex

          return subOptions
        })
      })

      draft[selectedMenuIndex].insideMenu = insideMenuUpdated[0]
    })

    // setMenu(updatedNavigationOptions)
  }

  return (
    <div className="flex">
      <div className="w-64 flex-shrink-0 whitespace-nowrap">
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-hidden">
          <nav className="h-full px-3 py-4 overflow-y-auto bg-blue-800">
            <a href="https://www.openzdm.eu/" className="flex items-center pl-2.5 mb-5" target="_blank">
              <Image src={logoZDM} className="h-6 mr-3 sm:h-7" alt="OpenZDM Logo" />
            </a>
            <ul className="space-y-10 font-medium">
              {
                menu.map((menu, menuIndex) => {
                  const classMenu = `flex flex-col p-2 gap-2 text-zinc-50 rounded-lg ${menu.opened ? "bg-blue-900" : ""} hover:bg-blue-900 group`

                  return (
                    <li key={menu.key} className={classMenu}>
                      <div className="flex gap-4 cursor-pointer">
                        {menu.icon}
                        <span className="flex flex-1">{menu.name}</span>
                        {
                          menu.opened ?
                            <CaretUp onClick={(e) => OnChevronClick(menuIndex)} size={24} className="cursor-pointer" />
                            :
                            <CaretDown onClick={(e) => OnChevronClick(menuIndex)} size={24} className="cursor-pointer" />
                        }
                      </div>

                      {
                        menu.opened ?
                          <div className="flex flex-col gap-2">
                            {
                              menu.insideMenu.map((iMenu, subMenuIndex) => {
                                const classIMenu = `text-sm ${iMenu.selected ? "text-blue-400" : "text-gray-400"}`

                                return (
                                  <Link key={iMenu.key} href={iMenu.route} className="flex ml-10 flex-1" onClick={(e) => OnMenuSelected(menuIndex, subMenuIndex)}>
                                    <span className={classIMenu} >{iMenu.name}</span>
                                  </Link>
                                )
                              })
                            }
                          </div>
                          :
                          <></>
                      }
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </aside>
      </div>
      <div className="flex flex-1 flex-grow overflow-hidden flex-col">
        {children}
      </div>
    </div>
  )
}