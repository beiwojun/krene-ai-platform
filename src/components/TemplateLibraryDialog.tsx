'use client';

import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface TemplateLibraryDialogProps {
  open: boolean;
  onClose: () => void;
}

export function TemplateLibraryDialog({ open, onClose }: TemplateLibraryDialogProps) {
  const [selectedModel, setSelectedModel] = useState('nano-banana-2');

  if (!open) return null;

  const models = [
    { id: 'nano-banana-2', name: 'Nano Banana 2', icon: '🍌', color: 'bg-purple-100 text-purple-600' },
    { id: 'nano-banana-pro', name: 'Nano Banana Pro', icon: '🍌', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'jimeng-3-1', name: '即梦3.1', icon: '⚡', color: 'bg-blue-100 text-blue-600' },
  ];

  const templates = [
    {
      id: 1,
      name: '草图转线稿',
      description: '将草图转换为清晰的线稿，适合插画创作',
      model: 'Nano Banana 2',
      inputImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=300&h=200&fit=crop',
      outputImage: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      name: '线稿转色卡',
      description: '将线稿转化为配色方案，快速获取配色灵感',
      model: 'Nano Banana 2',
      inputImage: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?w=300&h=200&fit=crop',
      outputImage: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=200&fit=crop',
    },
    {
      id: 3,
      name: '风格迁移',
      description: '将照片转换为艺术风格，打造独特视觉效果',
      model: 'Nano Banana Pro',
      inputImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      outputImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=300&h=200&fit=crop',
    },
    {
      id: 4,
      name: '图片增强',
      description: '提升图片质量和分辨率，让作品更清晰',
      model: '即梦3.1',
      inputImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=200&fit=crop',
      outputImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&h=200&fit=crop',
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
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] max-w-[95vw] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex">
        {/* 左侧模型选择 */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">选择模型</h3>
          <div className="space-y-2">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`w-full p-3 rounded-lg text-left transition-all ${
                  selectedModel === model.id
                    ? 'bg-purple-100 border-2 border-purple-500'
                    : 'bg-white border border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{model.icon}</span>
                  <span className={`text-sm font-medium ${
                    selectedModel === model.id ? 'text-purple-700' : 'text-gray-700'
                  }`}>
                    {model.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 右侧模板内容 */}
        <div className="flex-1 flex flex-col">
          {/* 头部 */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" />
                <h2 className="text-lg font-semibold text-white">提示词模板库</h2>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 模板列表 */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-2 gap-4">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* 模型标签 */}
                  <div className="p-3 border-b border-gray-100">
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                      {template.model}
                    </span>
                  </div>

                  {/* 对比图 */}
                  <div className="p-4">
                    <div className="flex gap-2 mb-4">
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-2">输入</div>
                        <div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={template.inputImage}
                            alt="输入图"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 mb-2">输出</div>
                        <div className="aspect-[3/2] bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={template.outputImage}
                            alt="输出图"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 功能说明 */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {template.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {template.description}
                      </p>
                    </div>

                    {/* 尝试按钮 */}
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                      立刻尝试
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
