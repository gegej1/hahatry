import { Button } from "@/components/ui/button";

export default function Sidebar() {
  return (
    <aside className="w-[300px] border-r border-gray-200 bg-gray-50 flex flex-col">
      {/* 顶部搜索和菜单 */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
      </div>

      {/* 新建任务按钮 */}
      <div className="px-4 mb-6">
        <Button className="w-full justify-start gap-2 text-gray-700 bg-white border shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          新建任务 
          <span className="text-xs ml-auto opacity-70">⌘ K</span>
        </Button>
      </div>

      {/* 空白任务区域 */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 rounded-md border border-gray-200 flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M9 3H5a2 2 0 0 0-2 2v4"/><path d="M9 21H5a2 2 0 0 1-2-2v-4"/><path d="M19 3h-4"/><path d="M19 21h-4"/><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 21v-9"/></svg>
        </div>
        <p className="text-sm text-gray-600">新建一个任务以开始</p>
      </div>

      {/* 底部用户信息 */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm mr-2">h</div>
          <span className="text-sm">hongjian gan</span>
          <div className="ml-auto flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
          </div>
        </div>
      </div>
    </aside>
  );
} 