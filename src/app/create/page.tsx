'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Share2,
  Droplet,
  MessageCircle,
  Crown,
  Plus,
  Sparkles,
  Wand2,
  Settings,
  ChevronDown,
  Send,
  Play,
  BookOpen,
} from 'lucide-react';
import { TemplateLibraryDialog } from '@/components/TemplateLibraryDialog';
import { MessageCenterDialog } from '@/components/MessageCenterDialog';
import { RechargeDialog } from '@/components/RechargeDialog';

export default function CreateBoardPage() {
  const [templateLibraryOpen, setTemplateLibraryOpen] = useState(false);
  const [messageCenterOpen, setMessageCenterOpen] = useState(false);
  const [rechargeOpen, setRechargeOpen] = useState(false);
  const [prompt, setPrompt] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 顶部导航栏 */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* 左侧 */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-sm font-medium text-gray-900">未命名绘板</h1>
          </div>

          {/* 右侧 */}
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="w-4 h-4 mr-2" />
              分享
            </Button>

            <button
              onClick={() => {}}
              className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors"
            >
              <Droplet className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-600">免费领水滴</span>
            </button>

            <button
              onClick={() => setMessageCenterOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>

            <button
              onClick={() => setRechargeOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Crown className="w-4 h-4 text-yellow-600" />
              <span className="text-sm text-gray-700">FREE 免费</span>
              <span className="text-sm font-medium text-purple-600">250</span>
            </button>
          </div>
        </div>
      </header>

      {/* 主画布区 */}
      <div className="flex-1 relative">
        {/* 点状背景 */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* 中央提示 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <p className="text-sm">在下方输入提示词开始创作</p>
          </div>
        </div>

        {/* 右下角助手图标 */}
        <div className="absolute bottom-24 right-8">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white text-xl">🎨</span>
          </div>
        </div>

        {/* 右侧快捷按钮 */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
          <button className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          <button className="w-10 h-10 bg-white shadow-md rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
            <BookOpen className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* 底部操作区 */}
      <div className="bg-white border-t border-gray-200 p-4">
        {/* 辅助功能按钮 */}
        <div className="flex gap-2 mb-4">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => setTemplateLibraryOpen(true)}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            提示词模板库
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Play className="w-4 h-4 mr-2" />
            视频教程
          </Button>
        </div>

        {/* 提示词输入区 */}
        <div className="flex gap-3 items-end">
          {/* 左侧功能按钮 */}
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* 输入框 */}
          <div className="flex-1">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="描述你想生成的画面..."
              className="w-full px-4 py-3 bg-gray-100 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              rows={2}
            />

            {/* 功能按钮组 */}
            <div className="flex items-center gap-2 mt-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors">
                <Plus className="w-3 h-3 text-purple-600" />
                <span className="text-xs text-purple-600">添加</span>
              </button>

              <button className="flex items-center gap-1 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors">
                <Sparkles className="w-3 h-3 text-purple-600" />
                <span className="text-xs text-purple-600">智能</span>
              </button>

              <button className="flex items-center gap-1 px-3 py-1.5 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors">
                <Wand2 className="w-3 h-3 text-purple-600" />
                <span className="text-xs text-purple-600">生图</span>
              </button>

              <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <span className="text-xs text-gray-600">模型</span>
                <ChevronDown className="w-3 h-3 text-gray-600" />
              </button>

              <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <span className="text-xs text-gray-600">1:1</span>
                <ChevronDown className="w-3 h-3 text-gray-600" />
              </button>

              <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                <span className="text-xs text-gray-600">高清</span>
                <ChevronDown className="w-3 h-3 text-gray-600" />
              </button>
            </div>
          </div>

          {/* 发送按钮 */}
          <button className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* 弹窗 */}
      <TemplateLibraryDialog
        open={templateLibraryOpen}
        onClose={() => setTemplateLibraryOpen(false)}
      />
      <MessageCenterDialog
        open={messageCenterOpen}
        onClose={() => setMessageCenterOpen(false)}
      />
      <RechargeDialog
        open={rechargeOpen}
        onClose={() => setRechargeOpen(false)}
      />
    </div>
  );
}
