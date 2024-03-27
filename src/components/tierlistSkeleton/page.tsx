const TierlistSkeleton = () => {
    return (
      <>
        <div className="px-3 py-10 lg:pt-20">
            <div className="pb-4 flex rounded-md bg-gray-200 lg:pb-6"></div>
            <div className="pb-8 flex rounded-md bg-gray-200 lg:pb-12"></div>
        </div>
        <div className="flex min-w-24 min-h-32 rounded-md bg-gray-200">
          <div className="flex rounded-xl bg-gray-300"></div>
          <div className="flex rounded-xl bg-gray-300"></div>
          <div className="flex rounded-xl bg-gray-300"></div>
          <div className="flex rounded-xl bg-gray-300"></div>
        </div>
        <div className="fixed bottom-0 w-full min-h-3 flex rounded-md bg-gray-100">
        </div>
        </>
    );
};

export default Skeleton;
