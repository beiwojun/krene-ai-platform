'use client';

import { X, FolderOpen, Droplet, Globe, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserIdDialogProps {
  open: boolean;
  onClose: () => void;
  onFreeDroplet: () => void;
}

export function UserIdDialog({ open, onClose, onFreeDroplet }: UserIdDialogProps) {
  if (!open) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* 弹窗主体 */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">用户中心</h2>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 内容区 */}
        <div className="p-6">
          {/* 用户ID */}
          <div className="mb-6">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xs text-gray-500">ID:</span>
                <span className="text-xs font-mono text-gray-700">6118354980e34cddae...</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <FolderOpen className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 灵感水滴 */}
          <div className="mb-6 p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">灵感水滴</span>
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-purple-600" />
                <span className="text-xl font-bold text-purple-600">250</span>
              </div>
            </div>
          </div>

          {/* 功能选项 */}
          <div className="space-y-2">
            <button
              onClick={onFreeDroplet}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <Droplet className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-700">免费水滴</span>
            </button>

            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Globe className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">语言</span>
            </button>

            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-700">退出</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
