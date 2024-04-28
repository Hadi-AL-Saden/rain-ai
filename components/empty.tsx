interface EmptyProps{
  label:string,
}


export default function Empty({label}:EmptyProps) {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <p className=" text-muted-foreground text-lg text-center font-semibold">
          {label}
        </p>
      </div>
    </div>
  )
}
