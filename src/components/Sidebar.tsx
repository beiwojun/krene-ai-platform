'use client';

import { Home, FolderOpen, Menu, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-white border-r border-gray-100 flex flex-col z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">K</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">Krene</span>
      </div>

      {/* 新建绘板按钮 */}
      <div className="px-4 mb-4">
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full h-12 flex items-center gap-2 shadow-lg shadow-blue-500/30">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Plus className="w-4 h-4" />
          </div>
          <span className="font-medium">新建绘板</span>
        </Button>
      </div>

      {/* 导航菜单 */}
      <nav className="flex-1 px-4 space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 bg-purple-50 text-purple-700 hover:bg-purple-100"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">首页</span>
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 text-gray-600 hover:bg-gray-50"
        >
          <FolderOpen className="w-5 h-5" />
          <span className="font-medium">绘板</span>
        </Button>
      </nav>

      {/* 底部菜单 */}
      <div className="px-4 py-4 border-t border-gray-100">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 text-gray-600 hover:bg-gray-50"
        >
          <Menu className="w-5 h-5" />
          <span className="font-medium">更多</span>
        </Button>
      </div>
    </aside>
  );
}
