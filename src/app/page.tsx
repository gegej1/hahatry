import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectList } from "@/components/project-list";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      {/* 顶部导航 */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold">manus</h1>
        </div>
      </header>

      {/* 主要内容区 */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-3xl mx-auto">
          {/* 欢迎消息 */}
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2">你好，hongjian gan</h2>
            <p className="text-xl text-gray-600">我能为你做什么？</p>
          </div>

          {/* 输入框区域 */}
          <div className="border rounded-xl shadow-sm mb-8">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-500">给 Manus 一个任务...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="输入您的问题或指令..."
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-2 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                </Button>
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">1,000 + 300</span>
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>
                </Button>
              </div>
            </div>
          </div>

          {/* 快捷功能区 */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant="outline" size="sm" className="rounded-full">
              充电站分布图 <span className="ml-1">↑</span>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              制作 p5.js动画 <span className="ml-1">↑</span>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              动画讲解数学题 <span className="ml-1">↑</span>
            </Button>
          </div>

          {/* 分类标签 */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant="secondary" size="sm" className="rounded-full bg-black text-white">
              推荐 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw ml-1"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              精选
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              生活
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              研究
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              教育
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              数据分析
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              生产力
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              内容创作
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              IT与开发
            </Button>
          </div>

          {/* 项目卡片区域 */}
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
