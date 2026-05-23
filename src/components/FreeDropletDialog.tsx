'use client';

import { X, Droplet, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FreeDropletDialogProps {
  open: boolean;
  onClose: () => void;
}

export function FreeDropletDialog({ open, onClose }: FreeDropletDialogProps) {
  if (!open) return null;

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* 弹窗主体 */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[90vw] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">领取免费水滴活动</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 内容区 */}
        <div className="flex">
          {/* 左侧：水滴余额区 */}
          <div className="w-[280px] bg-gray-50 p-6 border-r border-gray-100">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-600 mb-2">总水滴余额</p>
              <div className="flex items-center justify-center gap-2">
                <Droplet className="w-8 h-8 text-purple-600" />
                <span className="text-5xl font-bold text-purple-600">250</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">免费水滴</span>
                  <HelpCircle className="w-3 h-3 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-900">200/200</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">永久水滴</span>
                  <HelpCircle className="w-3 h-3 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-900">50</span>
              </div>

              <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplet className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-gray-700">补给水滴</span>
                  <HelpCircle className="w-3 h-3 text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-900">0</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-600 text-center">
                💧 登录可领50永久水滴
              </p>
            </div>
          </div>

          {/* 右侧：任务活动区 */}
          <div className="flex-1 p-6 space-y-4 max-h-[500px] overflow-y-auto">
            {/* 任务1：邀请新用户 */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplet className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">邀请新用户</h3>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">限时活动</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  分享邀请码，新人成功注册，双方可获得25补给水滴
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-600">+25 补给水滴</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                去完成
              </Button>
            </div>

            {/* 任务2：每日登录 */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplet className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">每日登录领水滴</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  每日登录即可领取10免费水滴，连续登录更多奖励
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-600">+10 免费水滴</span>
                </div>
              </div>
              <Button className="rounded-full bg-gray-100 text-gray-400 cursor-not-allowed">
                已领取
              </Button>
            </div>

            {/* 任务3：完成任务 */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplet className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">完成新手任务</h3>
                  <span className="px-2 py-0.5 bg-purple-100 text-purple-600 text-xs rounded-full">新手福利</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  完成新手引导任务，可获得50免费水滴奖励
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-600">+50 免费水滴</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                去完成
              </Button>
            </div>

            {/* 任务4：分享作品 */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplet className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">分享作品</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  分享你的AI创作作品到社交媒体，每次分享获得5免费水滴
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-600">+5 免费水滴</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                去完成
              </Button>
            </div>

            {/* 任务5：评价反馈 */}
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplet className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-medium text-gray-900">提交产品反馈</h3>
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs rounded-full">额外奖励</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  提交产品使用反馈或建议，审核通过后获得30永久水滴
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-purple-600">+30 永久水滴</span>
                </div>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-50"
              >
                去完成
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
