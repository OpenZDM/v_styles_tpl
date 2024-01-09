import { InputHTMLAttributes } from 'react'
import { format, parseISO } from "date-fns";
import { useState } from "react";

export interface DataPickerProps extends InputHTMLAttributes<HTMLInputElement> {}

export function DatePicker(){
  const [initialDate, setInitialDate] = useState(new Date())

  function onInitialDataChange(newInitialDate: Date) {
    setInitialDate(newInitialDate)
  }

  return (
    <input
      name="initialDate"
      className="border rounded-md border-black"
      type="datetime-local"
      value={format(initialDate, "yyyy-MM-dd'T'HH:mm:ss")}
      onChange={(e) => onInitialDataChange(parseISO(e.target.value))}
    />
  )
}