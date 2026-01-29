const PackageCardShimmer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden flex flex-col border-[3px] border-gray-200 bg-bage animate-pulse"
        >
          {/* Image */}
          <div className="h-64 bg-gray-200" />

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow space-y-4">
            {/* Title */}
            <div className="h-6 w-2/3 rounded-md bg-gray-200" />

            {/* Description */}
            <div className="space-y-2">
              {[1, 2].map((_, i) => (
                <div key={i} className="h-4 w-full rounded bg-gray-200" />
              ))}
            </div>

            {/* Includes */}
            <div className="mt-auto space-y-3">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-4 h-4 rounded-full bg-gray-200" />
                  <div className="h-4 w-3/4 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackageCardShimmer;
