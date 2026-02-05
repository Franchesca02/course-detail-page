export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="animate-pulse">
        
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
          
      
          <div className="lg:col-span-1">
            <div className="h-64 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}