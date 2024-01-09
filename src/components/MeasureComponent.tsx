export interface MeasureComponentProps {
  greenName: string;
  yellowName: string;
  purpleName: string;
  redName: string;
  pointName: string;
  measuredValue: number;
  rejectionValue: number;
  specificationValue: number;
  toleranceValue: number;
}

export function MeasureComponent(props: MeasureComponentProps) {
  return (
    <div className="flex flex-col bg-zinc-50 border border-black h-52 w-72 rounded-md p-2 gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-emerald-500 rounded-full" />
          <span className="text-xs">{props.greenName}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-yellow-500 rounded-full" />
          <span className="text-xs">{props.yellowName}s</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-purple-500 rounded-full" />
          <span className="text-xs">{props.purpleName}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[10px] h-[10px] bg-red-500 rounded-full" />
          <span className="text-xs">{props.redName}</span>
        </div>
      </div>

      <span className="text-lg font-bold">{props.pointName}</span>
      <div className="flex items-center justify-between gap-2">
        <span className="text-lg font-bold flex-1">Measured (mm):</span>
        <span className="w-20 text-lg text-emerald-500 font-bold">{props.measuredValue.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-lg font-bold flex-1">Specification (mm):</span>
        <span className="w-20 text-lg text-emerald-500 font-bold">{props.specificationValue.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-lg font-bold flex-1">Tolerance (mm):</span>
        <span className="w-20 text-lg text-yellow-500 font-bold">{props.toleranceValue.toFixed(2)}</span>
      </div>
    </div>
  )
}