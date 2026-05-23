'use client';

import { X, Droplet, Crown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RechargeDialogProps {
  open: boolean;
  onClose: () => void;
}

export function RechargeDialog({ open, onClose }: RechargeDialogProps) {
  if (!open) return null;

  const plans = [
    {
      name: 'Free',
      originalPrice: 0,
      currentPrice: 0,
      waterDrops: 0,
      features: ['图片生成', '公共通道', '基础功能'],
      isCurrentPlan: true,
      buttonColor: 'bg-gray-200 text-gray-500',
      borderColor: 'border-gray-200',
    },
    {
      name: 'Plus',
      originalPrice: 130,
      currentPrice: 78,
      waterDrops: 2000,
      features: ['4K生成', '去水印', '加速通道', '个人创作'],
      badge: '推荐',
      buttonColor: 'bg-blue-500 hover:bg-blue-600 text-white',
      borderColor: 'border-blue-200',
    },
    {
      name: 'Pro',
      originalPrice: 290,
      currentPrice: 174,
      waterDrops: 5000,
      features: ['极速通道', '专业功能', '优先支持', '商业授权'],
      badge: '热门',
      buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
      borderColor: 'border-purple-300',
    },
    {
      name: 'Max',
      originalPrice: 570,
      currentPrice: 342,
      waterDrops: 12000,
      features: ['闪电通道', '全部功能', '专属支持', '无限创作'],
      buttonColor: 'bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white',
      borderColor: 'border-purple-400',
    },
  ];

  return (
    <>
      {/* 遮罩层 */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* 弹窗主体 */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] max-w-[95vw] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden">
        {/* 头部 */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-semibold text-white">水滴详情</h2>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">FREE 免费</span>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 水滴统计 */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-600">剩余水滴：</span>
                <span className="text-2xl font-bold text-purple-600">250</span>
              </div>
              <div className="text-xs text-gray-500">
                免费水滴: 200 | 永久水滴: 50 | 补给水滴: 0
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                查看账单
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                水滴详情
              </Button>
            </div>
          </div>
        </div>

        {/* 套餐切换 */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="flex gap-4">
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
              水滴补给包
            </button>
            <button className="px-4 py-2 text-sm font-medium text-purple-600 border-b-2 border-purple-600">
              月会员套餐
              <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full animate-pulse">
                假日特惠！
              </span>
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors">
              年会员套餐
            </button>
          </div>
        </div>

        {/* 套餐卡片 */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 ${plan.borderColor} ${plan.isCurrentPlan ? 'bg-gray-50' : 'bg-white'} hover:shadow-lg transition-shadow`}
              >
                {/* 套餐名称和徽章 */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                    {plan.badge && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  {plan.isCurrentPlan && (
                    <span className="text-xs text-gray-500">当前计划</span>
                  )}
                </div>

                {/* 价格 */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-900">¥{plan.currentPrice}</span>
                    <span className="text-sm text-gray-500">/月</span>
                  </div>
                  {plan.originalPrice > plan.currentPrice && (
                    <div className="text-xs text-gray-500 line-through">
                      原价 ¥{plan.originalPrice}/月
                    </div>
                  )}
                </div>

                {/* 水滴数量 */}
                {plan.waterDrops > 0 && (
                  <div className="mb-4 p-2 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Droplet className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-purple-600">
                        每月赠送 {plan.waterDrops} 水滴
                      </span>
                      <span className="text-xs text-purple-500">(可累积)</span>
                    </div>
                  </div>
                )}

                {/* 功能列表 */}
                <div className="mb-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* 按钮 */}
                <Button
                  className={`w-full rounded-full ${plan.buttonColor}`}
                  disabled={plan.isCurrentPlan}
                >
                  {plan.isCurrentPlan ? '当前计划' : '升级'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
