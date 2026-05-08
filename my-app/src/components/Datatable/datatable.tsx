import { useEffect, useState } from "react";
import type { Issue } from "../../types";
import { fetchIssues } from "../../hooks/useFetchIssues";

export default function Datatable() {
  const [issues, setIssues] = useState<Issue[]>([]);
  useEffect(() => {
    const getIssues = async () => {
      const data = await fetchIssues();
      setIssues(data);
    };
    getIssues();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Github Issues Explorer</h1>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue ID</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                            <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                       {
                        issues.map((issue, index) => (
                            <tr key={issue.id} className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{issue.id}</td>
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{issue.title}</td>
                                <td className="py-4 px-6 whitespace-nowrap">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                        issue.state === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {issue.state}
                                    </span>
                                </td>
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{issue.created_at}</td>
                                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{issue.user.login}</td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}