interface StatCardProps {
    title: string;
    value: number;
    description: string;
    icon: string;
  }
  
  function StatCard({
    title,
    value,
    description,
    icon,
  }: StatCardProps) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
  
        <div className="flex items-start justify-between">
  
          <div>
  
            <p className="text-sm font-medium text-gray-500">
              {title}
            </p>
  
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              {value}
            </h2>
  
            <p className="mt-2 text-xs text-gray-500">
              {description}
            </p>
  
          </div>
  
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700">
            {icon}
          </div>
  
        </div>
  
      </div>
    );
  }
  
  export default StatCard;