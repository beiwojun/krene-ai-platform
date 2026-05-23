# Krene AI 绘画平台

这是一个复刻的 Krene AI 绘画平台网站，包含完整的UI和交互功能。

## 功能特性

- 🎨 **AI绘画创作平台** - 完整的Dashboard界面
- 💧 **水滴系统** - 免费水滴、会员水滴管理
- 🎯 **多个弹窗功能** - 用户ID、充值、消息中心、模板库
- 🖼️ **新建绘板** - 独立的创作页面
- 🎭 **作品展示** - 卡片堆叠效果展示

## 技术栈

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:5000

### 生产构建

```bash
pnpm build
pnpm start
```

## 项目结构

```
src/
├── app/
│   ├── page.tsx              # 首页
│   ├── create/page.tsx       # 新建绘板页
│   ├── globals.css           # 全局样式
│   └── layout.tsx            # 布局
└── components/
    ├── Sidebar.tsx           # 侧边栏
    ├── ArtworkCard.tsx       # 作品卡片
    ├── FreeDropletDialog.tsx # 免费水滴弹窗
    ├── UserIdDialog.tsx      # 用户ID弹窗
    ├── RechargeDialog.tsx    # 充值弹窗
    ├── MessageCenterDialog.tsx # 消息中心
    └── TemplateLibraryDialog.tsx # 模板库
```

## 部署

### Vercel 部署（推荐）

1. 推送代码到 GitHub
2. 访问 https://vercel.com
3. 导入 GitHub 仓库
4. 自动部署完成

### 手动部署

```bash
# 构建
pnpm build

# 启动
pnpm start
```

## 许可证

MIT License
