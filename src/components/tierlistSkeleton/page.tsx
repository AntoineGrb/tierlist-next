const TierlistSkeleton = () => {
    return (
      <div className="flex flex-col">
        <div className="w-full pb-12 flex flex-col gap-2">
            <div className="h-16 mb-4 flex rounded-lg bg-gray-500 lg:pb-6 animate-pulse"></div>
            <div className="h-3 w-full flex rounded-lg bg-gray-500 animate-pulse"></div>
            <div className="h-3 w-4/5 flex rounded-lg bg-gray-500 animate-pulse"></div>
            <div className="h-3 flex w-3/4 rounded-lg bg-gray-500 animate-pulse"></div>
        </div>
        <div className="w-full flex flex-col gap-2 h-96 mt-16 rounded-lg">
          <div className="w-full h-1/5 flex gap-2">
            <div className="flex w-1/4 bg-gray-500 animate-pulse rounded-lg"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse rounded-lg "></div>
          </div>
          <div className="w-full h-1/5 flex gap-2">
            <div className="flex w-1/4 bg-gray-500 animate-pulse rounded-lg"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse rounded-lg "></div>
          </div>
          <div className="w-full h-1/5 flex gap-2">
            <div className="flex w-1/4 bg-gray-500 animate-pulse rounded-lg"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse rounded-lg "></div>
          </div>
          <div className="w-full h-1/5 flex gap-2">
            <div className="flex w-1/4 bg-gray-500 animate-pulse rounded-lg"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse rounded-lg "></div>
          </div>
          <div className="w-full h-1/5 flex gap-2">
            <div className="flex w-1/4 bg-gray-500 animate-pulse rounded-lg"></div>
            <div className="flex w-3/4 bg-gray-700 animate-pulse rounded-lg "></div>
          </div>

        </div>
      </div>
    );
};

export default TierlistSkeleton;
