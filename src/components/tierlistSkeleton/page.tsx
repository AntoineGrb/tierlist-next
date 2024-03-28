const TierlistSkeleton = () => {
    return (
      <div className="w-full flex flex-col">
        <div className="w-full py-12">
            <div className="h-10 mb-4 flex rounded-lg bg-gray-500 lg:pb-6 animate-pulse"></div>
            <div className="h-20 flex rounded-lg bg-gray-500 lg:pb-12 animate-pulse"></div>
        </div>
        <div className="w-full flex flex-col h-96 rounded-lg bg-gray-600 animate-pulse">
          <div className="w-full h-1/5 flex">
            <div className="flex w-1/4 bg-gray-500 animate-pulse"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse"></div>
          </div>
          <div className="w-full h-1/5 flex">
            <div className="flex w-1/4 bg-gray-500 animate-pulse"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse"></div>
          </div>
          <div className="w-full h-1/5 flex">
            <div className="flex w-1/4 bg-gray-500 animate-pulse"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse"></div>
          </div>
          <div className="w-full h-1/5 flex">
            <div className="flex w-1/4 bg-gray-500 animate-pulse"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse"></div>
          </div>
          <div className="w-full h-1/5 flex">
            <div className="flex w-1/4 bg-gray-500 animate-pulse"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse"></div>
          </div>

        </div>
      </div>
    );
};

export default TierlistSkeleton;
