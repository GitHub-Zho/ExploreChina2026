# 转化追踪与表单可靠性

> 本文档说明：已经埋好的追踪架子如何激活、有哪些事件、广告 UTM 怎么用、
> 表单双写兜底怎么工作，以及将来预算允许时的付费升级选项。

## 现状：架子已埋好，填两个 ID 即生效

配置位置：`src/data/site.ts` 的 `analytics` 对象。**ID 留空 = 对应脚本完全不加载**
（零第三方请求，不影响性能与隐私）。

```ts
export const analytics = {
  ga4MeasurementId: '',   // 例 'G-XXXXXXXXXX'
  metaPixelId: '',        // 例 '1234567890'
};
```

### 激活 GA4（免费，10 分钟）

1. https://analytics.google.com → 创建账号 → 创建媒体资源（Property）
2. 数据流（Data Stream）→ 网站 → 填 `https://www.explorechina.ca`
3. 复制 Measurement ID（`G-` 开头）→ 粘贴到 `site.ts` → 推 test 验证 → 合并 main
4. GA4 后台把 `apply_submitted` 标记为关键事件（Key Event），投 Google Ads 时可直接导入为转化

### 激活 Meta Pixel（免费，投 Instagram 广告前必须）

1. https://business.facebook.com → Events Manager → 创建 Pixel
2. 复制 Pixel ID → 粘贴到 `site.ts` → 部署
3. Events Manager 里确认收到 PageView 和 Lead 事件（用 Test Events 工具）
4. 投放时广告组的优化目标选 **Lead**——`apply_submitted` 已自动映射为
   Meta 标准 Lead 事件（见 Layout.astro 的 `ecTrack`）

## 事件参考

| 事件 | 触发时机 | GA4 | Meta |
|------|----------|-----|------|
| （自动）page_view / PageView | 每页加载 | ✓ | ✓ |
| `apply_submitted` | 申请表提交成功（至少一个通道确认） | 自定义事件 | **标准 Lead 事件** |
| `apply_submit_failed` | 两个通道都失败 | 自定义事件 | 自定义事件 |

新增事件的方式：任何页面/组件调用 `window.ecTrack('事件名', {参数})`——
helper 永远存在且安全（provider 未加载时静默跳过），弱模型照抄即可。

## 广告 UTM 规范（现在就要用，不依赖任何平台）

落地页 URL 带上 UTM 参数，例：

```
https://www.explorechina.ca/trips/east-china-2026-summer?utm_source=instagram&utm_medium=paid&utm_campaign=summer2026-east&utm_content=reel-a
```

Layout 里的内联脚本会在落地时把 utm_source/medium/campaign/content/term
存进 sessionStorage；用户之后无论浏览多少页，提交申请时这些字段会
**一并写进 Google Sheet 和兜底邮件**。也就是说：哪条广告带来了哪个申请，
从第一天起就有据可查——即使 GA4/Pixel 还没开通。

命名约定（保持一致才能聚合分析）：
- `utm_source`: instagram / youtube / xiaohongshu / wechat
- `utm_medium`: paid / organic / bio-link
- `utm_campaign`: `{季节}{年}-{线路}`，如 `summer2026-east`
- `utm_content`: 区分素材，如 `reel-a` / `story-b`

## 表单双写（防丢单）机制

`ApplyForm.jsx` 提交时**并行**发两路：

1. **主通道**：Google Apps Script → Google Sheet（`mode: no-cors`，响应不可读——
   这是它单独存在时的致命弱点：Apps Script 挂了用户照样看到"成功"）
2. **兜底通道**：FormSubmit AJAX → `hello@explorechina.ca`（响应**可读**，
   邮件主题 `New trip application — {姓名}`，表格排版）

判定逻辑：任一通道确认成功 → 显示成功；两路都失败 → 报错并提示用户直接发邮件。
所以最坏情况（Sheet 静默坏掉）下，**每条线索仍然会出现在邮箱里**，
且邮箱与 Sheet 的差集就是 Sheet 通道故障的信号。

> 运维习惯：每周把 Sheet 行数和申请邮件数对一下，不一致 = Apps Script 需要检查。

## 未来升级选项（预算允许时）

| 工具 | 解决什么 | 价格感 | 何时考虑 |
|------|----------|--------|----------|
| Plausible / Fathom | 无 cookie 弹窗负担的隐私友好分析（替代 GA4） | ~$9-14/月 | 在意欧盟/隐私合规或讨厌 GA 界面时 |
| PostHog | 行为回放 + 漏斗分析（哪一步流失） | 免费额度大 | 申请量上来后优化表单流失 |
| Sentry | 前端报错监控告警 | 免费额度够用 | 建议尽早（免费档即可） |
| Tally / Formspark | 带送达保证和后台的表单服务（替代 Apps Script） | 免费/低价 | Sheet 通道故障频发或需要表单版本管理时 |
| Mailchimp / Loops | 确认邮件 + nurture 序列 | 免费档起步 | 上 lead magnet（邮件捕获）时 |
