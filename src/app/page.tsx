'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, MessageCircle, Droplet, X, Sparkles, Settings, Plus, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';
import { ArtworkCard } from '@/components/ArtworkCard';
import { FreeDropletDialog } from '@/components/FreeDropletDialog';
import { UserIdDialog } from '@/components/UserIdDialog';
import { RechargeDialog } from '@/components/RechargeDialog';
import { MessageCenterDialog } from '@/components/MessageCenterDialog';
import { TemplateLibraryDialog } from '@/components/TemplateLibraryDialog';

export default function Dashboard() {
  const [showBanner, setShowBanner] = useState(true);
  const [showFreeDropletDialog, setShowFreeDropletDialog] = useState(false);
  const [showUserIdDialog, setShowUserIdDialog] = useState(false);
  const [showRechargeDialog, setShowRechargeDialog] = useState(false);
  const [showMessageCenterDialog, setShowMessageCenterDialog] = useState(false);
  const [showTemplateLibraryDialog, setShowTemplateLibraryDialog] = useState(false);

  return (
    <div className="min-h-screen bg-paper-texture relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="fixed inset-0 pointer-events-none select-none">
        <div className="absolute top-20 right-20 text-[200px] font-bold text-gray-100/30 leading-none tracking-wider">
          KRENE
        </div>
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-sm text-gray-300/50 whitespace-nowrap">
          Where creativity meets AI • Where imagination becomes reality
        </div>
      </div>

      {/* 侧边栏 */}
      <Sidebar />

      {/* 主内容区 */}
      <main className="ml-[240px] relative">
        {/* 顶部通知横幅 */}
        {showBanner && (
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">
                升级到Pro版本，解锁更多AI创作功能，享受无限创作体验
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-white text-purple-600 hover:bg-gray-100 text-sm font-medium"
                onClick={() => setShowRechargeDialog(true)}
              >
                立即升级
              </Button>
              <button
                onClick={() => setShowBanner(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* 顶部用户信息栏 */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-gray-900">创作中心</h1>
          </div>
          
          <div className="flex items-center gap-3">
            {/* 免费领水滴 */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full border-purple-200 text-purple-600 hover:bg-purple-50"
              onClick={() => setShowFreeDropletDialog(true)}
            >
              <Droplet className="w-4 h-4" />
              <span>免费领水滴</span>
            </Button>

            {/* 消息中心 */}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full border-gray-200 text-gray-600 hover:bg-gray-50 relative"
              onClick={() => setShowMessageCenterDialog(true)}
            >
              <Bell className="w-4 h-4" />
              <span>消息中心</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            {/* 用户信息 */}
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div 
                className="text-right cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setShowRechargeDialog(true)}
              >
                <div className="text-sm font-medium text-gray-900">FREE 免费</div>
                <div className="text-xs text-gray-500 flex items-center gap-1 justify-end">
                  <Droplet className="w-3 h-3" />
                  <span>250</span>
                </div>
              </div>
              <div 
                className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-medium text-sm cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setShowUserIdDialog(true)}
              >
                U
              </div>
            </div>
          </div>
        </header>

        {/* 主内容 */}
        <div className="p-6">
          {/* 操作交互区 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="描述你想要创作的画面..."
                  className="w-full h-14 pl-5 pr-32 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none text-gray-700 placeholder-gray-400 text-sm bg-white/50"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                  <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors">
                    <span className="text-xs font-medium">1:1</span>
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <Button className="h-14 px-8 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-xl shadow-lg shadow-purple-500/30 font-medium">
                生图
              </Button>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="rounded-full border-gray-200 text-gray-600 hover:bg-gray-50"
                onClick={() => setShowTemplateLibraryDialog(true)}
              >
                提示词模板库
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-gray-200 text-gray-600 hover:bg-gray-50"
              >
                视频教程
              </Button>
            </div>
          </div>

          {/* 作品展示区 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork, index) => (
              <ArtworkCard key={index} {...artwork} />
            ))}
          </div>
        </div>
      </main>

      {/* 悬浮助手 */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <button className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/40 flex items-center justify-center text-white hover:scale-110 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* 弹窗 */}
      <FreeDropletDialog
        open={showFreeDropletDialog}
        onClose={() => setShowFreeDropletDialog(false)}
      />
      <UserIdDialog
        open={showUserIdDialog}
        onClose={() => setShowUserIdDialog(false)}
        onFreeDroplet={() => {
          setShowUserIdDialog(false);
          setShowFreeDropletDialog(true);
        }}
      />
      <RechargeDialog
        open={showRechargeDialog}
        onClose={() => setShowRechargeDialog(false)}
      />
      <MessageCenterDialog
        open={showMessageCenterDialog}
        onClose={() => setShowMessageCenterDialog(false)}
      />
      <TemplateLibraryDialog
        open={showTemplateLibraryDialog}
        onClose={() => setShowTemplateLibraryDialog(false)}
      />
    </div>
  );
}

// 模拟作品数据
const artworks = [
  {
    title: '樱花少女',
    description: '二次元风格插画',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop',
    rotation: -2,
  },
  {
    title: '星空梦境',
    description: '科幻风格场景',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop',
    rotation: 1,
  },
  {
    title: '古风仙子',
    description: '中国风人物设计',
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=400&fit=crop',
    rotation: -1,
  },
  {
    title: '赛博朋克',
    description: '未来科技风格',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=400&fit=crop',
    rotation: 2,
  },
  {
    title: '水彩风景',
    description: '艺术风景创作',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    rotation: -1,
  },
  {
    title: '动漫角色',
    description: '原创角色设计',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop',
    rotation: 1,
  },
];
