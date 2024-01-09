import { InputHTMLAttributes, useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { CaretDown, CaretUp, Check } from '@phosphor-icons/react';
import { clsx } from 'clsx';

export interface SelectInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SelectInput() {
  const [pageLimit, setPageLimit] = useState('20');
  function onPageChangeClick(selectedPage: string) {
    setPageLimit(selectedPage)
  }

  return (
    <Select.Root value={pageLimit} onValueChange={(e) => onPageChangeClick(e)}>
      <Select.Trigger
        className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-zinc-900 shadow-[0_2px_10px] shadow-black/10 hover:bg-slate-300 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-zinc-700 outline-none"
        aria-label="Max itens per page"
      >
        <Select.Value defaultValue={pageLimit} />
        <Select.Icon className="text-zinc-900">
          <CaretDown size={16} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-zinc-900 cursor-default">
            <CaretUp size={16} />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Item
              className={clsx(
                'text-[13px] leading-none text-zinc-900 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-zinc-300 data-[highlighted]:text-violet1'
              )}
              value="20"
            >
              <Select.ItemText>20</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              className={clsx(
                'text-[13px] leading-none text-zinc-900 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-zinc-300 data-[highlighted]:text-violet1'
              )}
              value="40"
            >
              <Select.ItemText>40</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              className={clsx(
                'text-[13px] leading-none text-zinc-900 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-zinc-300 data-[highlighted]:text-violet1'
              )}
              value="60"
            >
              <Select.ItemText>60</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              className={clsx(
                'text-[13px] leading-none text-zinc-900 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-zinc-300 data-[highlighted]:text-violet1'
              )}
              value="80"
            >
              <Select.ItemText>80</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item
              className={clsx(
                'text-[13px] leading-none text-zinc-900 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-slate-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-zinc-300 data-[highlighted]:text-violet1'
              )}
              value="100"
            >
              <Select.ItemText>100</Select.ItemText>
              <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <Check size={16} />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-zinc-900 cursor-default">
            <CaretDown size={16} />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}