import { Progress } from "@/components/ui/progress"

export function CircularProgress({
  value,
  label
}) {
  const getColor = (score) => {
    if (score >= 90) return "text-green-500"
    if (score >= 50) return "text-yellow-500"
    return "text-red-500"
  }

  return (
    (<div className="relative flex flex-col items-center">
      <div className="relative w-24 h-24">
        <Progress
          value={value}
          className="h-24 w-24 [&>div]:stroke-[12px]"
          indicatorColor={getColor(value).replace("text-", "bg-")} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getColor(value)}`}>{value}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm font-medium text-gray-600">{label}</span>
    </div>)
  );
}

