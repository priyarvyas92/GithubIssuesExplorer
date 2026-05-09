export default function FilterSortHeader() {
    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
                <label htmlFor="state" className="text-sm font-medium text-gray-700">Filter by State:</label>
                <select id="state" name="state" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="">All</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                <select id="sort" name="sort" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="created">Created At</option>
                    <option value="updated">Updated At</option>
                    <option value="comments">Number of Comments</option>
                </select>
            </div>
        </div>
    );
}