# 开发

以下内容适用于 v1.9.0 及以上版本的源码结构。

## 环境要求

- Windows 10/11（仅支持 Windows）
- .NET SDK 9.0+
- Node.js 20+（LTS 建议）
- Yarn 1.22+
- Microsoft Edge / WebView2 Runtime

## 获取源码

将以下仓库克隆到同一父级目录下（并列放置）：

- `InsideWorld`（主仓库）
- `LazyMortal`
- `bakabase.infrastructures`

示例目录结构：

```
I:\Code\Anobaka\
  InsideWorld\
  LazyMortal\
  bakabase.infrastructures\
  Bakabase.Docs\
```

## 安装依赖

1. 还原 .NET 依赖（在解决方案根目录执行或通过 IDE 自动完成）
2. 在前端目录执行依赖安装：
   - `src/ClientApp` 下执行：`yarn install`

> 注意：历史版本（< v1.9.0）的前端路径与运行方式不同，请参考旧文档。

## 启动与调试

1. 在 `src/ClientApp` 执行：`yarn start`
2. 在 IDE 中将 `Bakabase` 设为启动项目并运行

应用启动后，可在系统配置中查看当前监听端口与 API 文档地址。

## 贡献

- 提交 Issue 前请尽量提供复现步骤与最小复现数据
- PR 说明清晰，包含动机、改动点与验证方式
- 建议遵循提交信息规范（feat/fix/chore/docs 等）
- 规划与进度：
  - 功能里程碑：`https://github.com/anobaka/Bakabase/milestones`
  - 计划看板：`https://github.com/users/anobaka/projects/3`

## 常见问题

- 启动报错缺少 WebView2：请安装 Edge 或 WebView2 Runtime
- 端口被占用：在系统配置中调整或释放端口
- Node/Yarn 版本不匹配：升级至 Node 20+ 与 Yarn 1.22+
