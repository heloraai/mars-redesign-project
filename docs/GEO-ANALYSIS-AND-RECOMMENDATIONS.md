# Mars Consulting GEO 分析与优化建议

**分析对象 A：** https://marsconsulting.com.sg/（线上 WordPress 站）
**分析对象 B：** https://heloraai.github.io/mars-redesign-project/（即将替换 A 的新版 React 站）
**报告日期：** 2026-05-08
**版本：** v1（合并诊断与建议）

---

## 0. 报告速览

| 站点 | GEO 综合评分 | 主要短板 |
|---|---|---|
| 线上 WordPress (`marsconsulting.com.sg`) | **31 / 100** | 内容稀薄、entity 冲突、创始人缺失、零站外信号 |
| 新版 React (`heloraai.github.io/mars-redesign-project`) | **42 / 100** | SSR 缺失、Person schema 缺失、无 llms.txt/sitemap |

**核心建议路径：**
1. **不要把当前 redesign 直接切到 marsconsulting.com.sg**——SPA 没做 SSR，切上去会比 WordPress 退步。
2. **先完成 redesign 的 P0 改造**（SSR + Person schema + llms.txt + 路由化多语言）再切域名。
3. **保留 WordPress 上的 SEO 资产**（反链、Google 索引），用 301 映射到新站。
4. **切完后立刻启动站外信号建设**（Reddit / 媒体 / Yuggie 个人品牌），这是最大杠杆。

---

## 第一部分：线上 WordPress 站（marsconsulting.com.sg）现状分析

### 1.1 站点基本信息

| 项 | 值 |
|---|---|
| CMS | WordPress + Yoast SEO |
| 渲染 | SSR（HTML 直接返回）✅ |
| 总 page 数 | 8（来自 page-sitemap.xml） |
| 总 blog post 数 | 1（2025-08，关于 Lawrence Wong 国庆献词） |
| 多数 page lastmod | 2023-03 ~ 2023-08（**两年半未更新**） |
| robots.txt | ✅ 全 allow，含 sitemap 引用 |
| llms.txt | ❌ 404 |
| 多语言 | ❌ 仅英文 |

### 1.2 页面字数盘点

| URL | 估计字数 | 状态 |
|---|---|---|
| `/` | ~600 | 内容偏薄 |
| `/our-services/` | ? | 未访问 |
| `/about-us/` | ? | 未访问 |
| `/contact/` | — | ⚠️ sitemap 列出但实际 404 |
| `/our-clients/` | **~95** | ❌ 几乎空白 |
| `/one-stop-hr-solutions/` | ~450 | 偏薄 |
| `/head-hunting-services/` | ? | 未访问 |
| `/placement/` | ~280 | 偏薄 |

GEO 友好阈值通常 ≥800 字/页核心内容。Mars 多数页低于阈值。

### 1.3 关键 GEO 问题

#### 🔴 P0 — Entity 一致性冲突

**(a) 公司年限：** 主页写 "14+ Years"，但实际从 2009 到 2026 是 17 年。
**(b) 覆盖国家：** 线上 footer 列 "Singapore, China, USA, India, Hong Kong, Thailand, Malaysia, UAE"——**含 China/USA/UAE，但缺 Indonesia/Vietnam/Philippines**。这跟 brief 里的 APAC 8 国（SG/MY/ID/VN/TH/PH/HK/IN）冲突。

LLM 训练数据若同时索引这两套，会触发 entity 一致性检测降权。

#### 🔴 P0 — 创始人 Yuggie Wang 全站缺失

抽查首页、Placement、One Stop HR Solutions、Our Clients 四个页面，**均未提及 Yuggie Wang**。LLM 被问"who founded Mars Consulting Singapore"时只能拒答或编造。

#### 🔴 P0 — FAQ 内容与 schema 完全缺失

全站没有 FAQ 板块，无 FAQPage 标记。FAQ 是 GEO 最重要的内容形态——LLM 检索就是 Q&A 结构。

#### 🟠 P1 — 站外存在感几乎为零

| 渠道 | Mars 存在感 |
|---|---|
| Tech in Asia / e27 / Vulcan Post | 无公开报道 |
| Reddit r/singapore, r/AskHR, r/expats | 几乎零提及 |
| Quora "Mars Consulting Singapore" | 无问答 |
| Podcast appearance | 无 |
| YouTube transcript | 无 |
| GitHub | 无 |

对照 Deel/Remote 在 Reddit 上有数百到数千 organic 提及——Mars 在 LLM 训练管道里**几乎没有 brand 信号**。

#### 🟠 P1 — 服务命名混乱

`/placement/`、`/head-hunting-services/`、`/one-stop-hr-solutions/` 三个 URL 各 280-450 字，LLM 不知道它们的区别，会当作 duplicate 处理。

#### 🟠 P1 — 客户信任信号缺失

`/our-clients/` 95 字，**未展示任何客户 logo、案例、引用数据**。

#### 🟡 P2 — 数据资产未公开

声称"2,560+ placements / 100+ clients / 100+ consultants"，但**没有任何 PDF 报告或 benchmark 公开**。LLM 引用最爱的就是"可追溯出处的原始数据"。

#### 🟡 P2 — 比较型内容缺失

无 vs Deel / vs Remote / vs Rippling 比较页。所有 long-tail 比较 query 全部命中竞品。

#### 🟡 P2 — sitemap / 活跃度信号弱

- `/contact/` 在 sitemap 但 404
- 大多数 page lastmod 集中在 2023
- 仅 1 篇 blog post

### 1.4 评分明细

| 维度 | 权重 | 得分 | 加权 |
|---|---|---|---|
| 渲染 / 可达性 | 10% | 90 | 9.0 |
| Schema 完整度 | 15% | 25 | 3.75 |
| 内容深度与可摘录性 | 15% | 30 | 4.5 |
| Entity 一致性 | 15% | 15 | 2.25 |
| 创始人 / 人物锚点 | 10% | 5 | 0.5 |
| 原始数据资产 | 10% | 0 | 0 |
| 比较型内容 | 5% | 0 | 0 |
| 多语言 | 5% | 10 | 0.5 |
| 站外存在感 | 10% | 8 | 0.8 |
| 监测体系 | 5% | 0 | 0 |
| **合计** | 100% | — | **31.3 / 100** |

---

## 第二部分：线上 WordPress 站修改建议

> ⚠️ **前提说明：** 如果计划用 redesign 替换 WordPress，下面这些建议**只做必要的过渡保护**（修最大冲突 + 保护反链），不必在 WordPress 上做完整 GEO 改造。如果短期内不切换，则全部建议都做。

### 2.1 立即修（不论是否切换）

| # | 操作 | 工作量 | 杠杆 |
|---|---|---|---|
| W1 | 主页 stat bar "14+ Years" → "17+ Years" | 5 min | 🔴 高 |
| W2 | 全站统一覆盖国家口径（决策：APAC 8 国 vs 含 USA/UAE） | 30 min | 🔴 高 |
| W3 | 移除/修复 sitemap 中的 `/contact/` 失效链接 | 10 min | 🟡 中 |
| W4 | About Us 页加 Yuggie Wang 段（300 字 + 头像 + LinkedIn 链接） | 1 h | 🔴 高 |
| W5 | 首页 hero 改写——加入"Since 2009"/"MOM EA 09C2925"等 entity 锚点 | 30 min | 🟠 中高 |

### 2.2 如果不替换 WordPress（路径 B），还要做：

| # | 操作 | 工作量 | 杠杆 |
|---|---|---|---|
| W6 | 装 [Schema & Structured Data for WP](https://wordpress.org/plugins/schema-and-structured-data-for-wp/) 插件，加 FAQPage（13 题） | 4 h | 🔴 高 |
| W7 | About 页加 Person schema for Yuggie | 1 h | 🔴 高 |
| W8 | 在 `public_html/` 放 llms.txt（模板见附录） | 30 min | 🟡 中 |
| W9 | 合并 `/placement/` + `/head-hunting-services/` 为单一厚页（≥1500 字） | 4 h | 🟠 中高 |
| W10 | `/our-clients/` 加客户 logo 墙 + 3 条匿名 case study（每条 200 字） | 1 d | 🟠 中高 |
| W11 | 建 `/compare/mars-vs-deel`、`/mars-vs-remote`、`/mars-vs-rippling` 三个独立 page | 3 d | 🟠 中高 |
| W12 | 加强 robots.txt 显式 allow GPTBot / ClaudeBot / PerplexityBot 等 | 15 min | 🟡 中 |

### 2.3 如果替换 WordPress（路径 A），过渡期只要：

仅做 §2.1 的 5 项（统一 fact，避免 entity 信号继续污染 LLM 训练管道），其他不做。所有 GEO 投入集中在 redesign 上。

---

## 第三部分：新版 React 站（heloraai.github.io/mars-redesign-project）现状分析

### 3.1 实测渲染状态

通过 `WebFetch` 抓取根 URL，**返回内容只包含 `<title>` 标签，body 几乎为空**——确认是 CSR / SPA 模式，未做预渲染。LLM 爬虫拿到的就是 React shell，看不到 1900 行内容。

### 3.2 资产盘点

| 资产 | 状态 |
|---|---|
| 4 大主页面（Index/EOR/Recruitment/AIInnovation/About） | ✅ 全部上线 |
| 13 题 FAQ（分布在 Index 3 + EOR 6 + AI 3 + Recruitment 2） | ✅ |
| 7 语言（en/id/ms/th/vi/fil/hi）i18n | ✅ |
| Hero "17 years of being the operator behind the operator" | ✅ |
| Stats（17 years / 100+ / 2560+） | ✅ 一致 |
| 覆盖国家 SG/MY/ID/VN/TH/PH/HK/IN | ✅ 一致 |
| Yuggie Wang founder 段落（About 页） | ✅ 文字提及 |
| `ProfessionalService` schema | ✅（来自 brief） |
| `FAQPage` schema | ✅（来自 brief） |
| `BreadcrumbList` schema（EOR/Recruitment 子页） | ✅ |
| `Person` schema（Yuggie Wang） | ❌ |
| `Service` × 3 schema | ❌ |
| `HowTo` schema | ❌ |
| `Review` / `AggregateRating` schema | ❌ |
| `Dataset` schema | ❌ |
| `Article` schema | ❌（无 blog/insights 板块） |

### 3.3 基础设施盘点

| 项 | 状态 | 备注 |
|---|---|---|
| SSR / 预渲染 | ❌ | **最大阻塞** |
| robots.txt | ✅ 存在 | 列了 Googlebot/Bingbot/Twitterbot/facebookexternalhit + 通配符；**未显式列 GPTBot/ClaudeBot/PerplexityBot** |
| sitemap.xml | ❌ 404 | |
| llms.txt | ❌ 404 | |
| hreflang | ❌ | i18n 用 localStorage 切换，无独立 URL，无法挂 hreflang |
| canonical URL | 状态未知，需 build 输出验证 | |
| og:image | 状态未知 | |
| 比较页（vs Deel/Remote） | ❌ | 内嵌主页 WhyMars 段，无独立 URL |
| 原始数据报告 | ❌ | |

### 3.4 评分明细

| 维度 | 权重 | 得分 | 加权 |
|---|---|---|---|
| 渲染 / 可达性 | 10% | 20 ❌ SPA 阻塞 | 2.0 |
| Schema 完整度 | 15% | 50 | 7.5 |
| 内容深度与可摘录性 | 15% | 75 | 11.25 |
| Entity 一致性 | 15% | 90 | 13.5 |
| 创始人 / 人物锚点 | 10% | 35 | 3.5 |
| 原始数据资产 | 10% | 0 | 0 |
| 比较型内容 | 5% | 30 | 1.5 |
| 多语言 | 5% | 70 | 3.5 |
| 站外存在感 | 10% | 5 | 0.5 |
| 监测体系 | 5% | 0 | 0 |
| **合计** | 100% | — | **42.25 / 100** |

比 WordPress 高 11 分主要靠内容质量和 entity 一致性；但 SSR 缺失把可达性几乎清零，目前**LLM 爬虫看不到实际内容**——评分高估了实际可见度。修完 SSR 后实际可见度评分会跳到 60+ 区间。

---

## 第四部分：新版 React 站修改建议

按 P0 / P1 / P2 三层。**P0 必须在切 marsconsulting.com.sg 域名之前完成**。

### 4.1 P0 — 上线前阻塞性

#### 4.1.1 SSR / 预渲染

**问题：** SPA 模式 LLM 爬虫拿到空 HTML。

**方案：** 给 `vite.config.ts` 加 [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg)（推荐，与现有 React Router 兼容好）或 [`react-snap`](https://github.com/stereobooster/react-snap)（更轻量但维护活跃度低）。

最少预渲染路由：
```
/, /eor, /recruitment, /ai-innovation, /about
```

加上比较页（4.2.3）后是 8 条。

**验证：** `curl -s https://marsconsulting.com.sg/eor | grep "Singapore-licensed"` 有输出即 OK。

#### 4.1.2 路由化多语言（hreflang 前置条件）

**问题：** 当前 `LanguageSwitcher` 用 localStorage + i18next 切换，URL 不变。**所有语言版本都是同一 URL，LLM 看不到独立的 id/th/vi 等版本**。

**方案：** 改造路由结构成 `/{lang}/{route}`，例如：
```
/en/eor
/id/eor
/th/eor
/vi/eor
...
```

`react-router-dom` 支持嵌套路由，改造工作量约 4 小时。

改造后才能在每个 page 加 hreflang：
```html
<link rel="alternate" hreflang="en" href="https://marsconsulting.com.sg/en/eor" />
<link rel="alternate" hreflang="id" href="https://marsconsulting.com.sg/id/eor" />
... 7 种语言全列
<link rel="alternate" hreflang="x-default" href="https://marsconsulting.com.sg/en/eor" />
```

#### 4.1.3 sitemap.xml

用 [`vite-plugin-sitemap`](https://www.npmjs.com/package/vite-plugin-sitemap) 在 build 时自动生成。

需包含：
- 5 主路由 × 7 语言 = 35 条 URL，互相挂 hreflang
- 比较页 ×3 × 7 语言 = 21 条
- 总计 ≥56 条

#### 4.1.4 llms.txt（根目录）

放 `public/llms.txt`，部署后访问 `https://marsconsulting.com.sg/llms.txt`。模板见附录 A。

#### 4.1.5 robots.txt 加强

当前虽然有 robots.txt，但**未显式列 AI 爬虫**。改成附录 B 的版本。

#### 4.1.6 Person schema for Yuggie Wang

在 About 页 `usePageMeta` 内注入。模板见附录 C。

同时 Yuggie 个人 LinkedIn profile 必须更新：
- Headline: "Founder, Mars Consulting Pte Ltd | Singapore EOR & APAC HR | Since 2009"
- About: 复用 redesign About 页 founder 段
- Experience: Mars Consulting 2009–至今

#### 4.1.7 301 重定向映射表（WordPress → 新站）

| 旧 URL（WordPress） | 新 URL | 状态码 |
|---|---|---|
| `/placement/` | `/recruitment` | 301 |
| `/head-hunting-services/` | `/recruitment` | 301 |
| `/one-stop-hr-solutions/` | `/eor` | 301 |
| `/our-clients/` | `/#clients` | 301 |
| `/contact/`、`/contact-us/` | `/#contact` | 301 |
| `/about-us/` | `/about` | 301 |
| `/our-services/` | `/eor` | 301 |
| `/in-depth-interpretation-key-points-of-prime-minister-lawrence-wong-...` | 单独决定（建议保留为 `/insights/lawrence-wong-ndr-2024`） | 301 |

实施位置：
- 如果用 Cloudflare Pages → `_redirects` 文件
- 如果用 Vercel → `vercel.json` 的 `redirects` 字段
- 如果保留旧 WordPress 服务器只换前端 → `.htaccess`

#### 4.1.8 fact 校对（避免 redesign 自身出现冲突）

build 前做一遍全文 grep 校验，确保以下数值在所有语言、所有页面、所有 schema 一致：
- 17 years（不能出现 14、15、16）
- 2009（founding date）
- 2,560+（placements）
- MOM EA Licence 09C2925
- 8 APAC markets：SG/MY/ID/VN/TH/PH/HK/IN（不能出现 China/USA/UAE）

### 4.2 P1 — 上线后 30 天内

#### 4.2.1 FAQ 答案重写为"可摘录块"

13 题答案现在每条 200-300 字段。LLM 摘录倾向取**前 2 句 + 一个具体数字**。当前第一段过于 abstract。

**改写规则：**
- 第一段 ≤3 句话
- 第一句必须是直接答案
- 第一段必须含：≥1 具体数字 + ≥1 具体国家 + ≥1 法条/条款/产品名引用
- abstract 分析放后段

**示例（Q4 PE exposure）：**

❌ 现在第一段：
> "Cross-border payroll under our model is engineered through three layered controls: jurisdictional entity selection, labour dispatch architecture, and treaty-aligned tax positioning..."

✅ 改后：
> "Mars structures cross-border payroll using a Singapore-licensed EOR vehicle plus bilateral labour dispatch in Vietnam, Indonesia, the Philippines, Malaysia and Thailand. PE exposure is neutralised under counsel opinion before payroll cycle one. A US-listed fintech onboarded 14 hires across 3 markets in 30 days using this structure."

13 题全部按此模式重写，预计 2 天工作量。

#### 4.2.2 Schema 补齐

| Schema | 加在哪 | 模板位置 |
|---|---|---|
| `Service` ×3 | /eor、/recruitment、/ai-innovation | 附录 D |
| `HowTo` | /eor 的 4 步 EOR 流程 | 附录 E |
| `Review` + `AggregateRating` | testimonial section | 附录 F |
| `Article` | 后续 blog/insights 文章 | 默认 |

#### 4.2.3 比较页 ×3

URL：
- `/compare/mars-vs-deel`
- `/compare/mars-vs-remote`
- `/compare/mars-vs-rippling`

每页 1500-2000 字，结构：
1. 一句话定位
2. 关键差异表（5 行：licensing / geography focus / pricing model / support model / EOR vs aggregator）
3. "Use Mars when..." vs "Use Deel when..." 各 5 个具体场景
4. 3 题对比 FAQ
5. 引用对手公开数据时给链接

**纪律：** 不要黑对手，承认对方优势 + 强调适配场景差异。LLM 检测到敌对内容会降权。

#### 4.2.4 Meta tags 完善

每个 page 必备：
```html
<title>...</title>
<meta name="description" content="..." />
<meta property="og:title" ... />
<meta property="og:description" ... />
<meta property="og:image" content="https://marsconsulting.com.sg/og-image.png" />
<meta property="og:url" ... />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="..." />
```

og:image 做一张 1200×630 统一品牌图。

#### 4.2.5 AI referrer 监测

GA4 加 custom dimension：
```javascript
const aiReferrers = [
  'perplexity.ai', 'chat.openai.com', 'chatgpt.com',
  'claude.ai', 'gemini.google.com', 'you.com',
  'phind.com', 'kagi.com', 'duckduckgo.com'
];
```

每月跑一次附录 G 的 baseline query 抽查。

### 4.3 P2 — 30-90 天

#### 4.3.1 原始数据报告 ×2（GEO 最强武器）

**报告 1：《2026 APAC EOR Cost & Statutory Benchmark》**

URL: `/insights/apac-eor-benchmark-2026`

8 国各一节，含：
- 实际 employer-side statutory contribution % range（CPF/EPF/BPJS/MPF/SSO/SSS）
- Mars 服务月费 typical range
- 对比 Deel/Remote 公开报价
- Setup-to-payroll 实际天数（n=2560 内部数据）

加 `Dataset` schema（附录 H）。

**报告 2：《Singapore PE Exposure Self-Audit Checklist》**

URL: `/insights/singapore-pe-exposure-checklist`

12 项自查表，每项一句规则 + 一句判断标准。

#### 4.3.2 站外信号建设

| 渠道 | 频次 | 内容 |
|---|---|---|
| Reddit (r/singapore, r/AskHR, r/cscareerquestions, r/expats) | 月 4-6 条 | 真实回答 EOR/payroll 问题，自然提 Mars |
| Tech in Asia / e27 / Vulcan Post | 季度 1 篇 | Yuggie 创始人视角文章 |
| Podcast (Asia Tech Podcast 等) | 半年 1 期 | Yuggie 嘉宾出镜 |
| YouTube | 季度 1 条 5 分钟 | "How Singapore CPF works"教学 |
| GitHub | 一次性 | 开源"APAC payroll calculator"工具 |
| LinkedIn (Yuggie 个人 + Mars 公司页) | 周 1-3 条 | 行业洞察 + 客户 case 摘要 |

**纪律：**
- ❌ 不要 spam，不要软广 disclaimer
- ❌ 不要 paid placements
- ✅ 真有用的回答 + 自然身份说明
- ✅ 引用数字时附原始数据报告链接

#### 4.3.3 Insights / Blog 板块

新建 `/insights/` 目录，季度 4-6 篇 long-form 文章（每篇 ≥1500 字），话题方向：
- APAC 单国合规深度（Indonesia BPJS、Vietnam SI 等）
- EOR vs 自建 entity 真实成本对比
- AI Innovation 案例（WhatsApp MC bot 真实数据）
- 跨境招聘法律边界

每篇加 `Article` schema、明确作者（Yuggie 或 Mars 顾问）。

---

## 第五部分：上线切换路径

### 5.1 推荐时间线

| 阶段 | 周次 | 内容 |
|---|---|---|
| 准备 | W1-2 | redesign 完成 §4.1 全部 P0（SSR + 路由化 i18n + llms.txt + Person schema + 301 表 + fact 校对） |
| 切换 | W3 | DNS 切到新 hosting，启用 301 重定向规则 |
| 监测 | W3-4 | Google Search Console 提交新 sitemap，监测 404 和索引覆盖率 |
| 内容补强 | W4-6 | 比较页 ×3、FAQ 重写、Meta 完善 |
| 站外启动 | W5- | Reddit / LinkedIn / 媒体投稿 持续推进 |
| 数据报告 | W6-12 | 报告 1 + 报告 2 上线 |
| 评估 | W12 | 第一次 baseline query 抽查（附录 G） |

### 5.2 切换前 checklist（必须全 ✅ 才能切）

- [ ] redesign 跑预渲染，curl 能拿到完整 HTML
- [ ] 7 语言路由化为 `/{lang}/{route}`，hreflang 全部挂上
- [ ] sitemap.xml 自动生成，含所有路由 + hreflang
- [ ] llms.txt 上线
- [ ] robots.txt 显式 allow GPTBot/ClaudeBot/PerplexityBot/anthropic-ai/CCBot/Google-Extended
- [ ] Person schema for Yuggie 部署
- [ ] 301 映射表配置完成，全部 8 条旧 URL 跳转测试通过
- [ ] 全文 grep 验证：无 "14 years" / "China" / "USA" / "UAE" 残留
- [ ] og:image / canonical / meta description 每页齐备
- [ ] Google Search Console 已添加新域名 property，sitemap 已提交
- [ ] 监测脚本（GA4 AI referrer dimension）已部署

### 5.3 切换后 30 天内监控

- Google Search Console 索引覆盖率（新 URL 替代旧 URL）
- 404 错误率（应接近 0）
- 自然流量同比（短期 -10%~-30% 是正常迁移波动，应在 30 天内回升）
- AI referrer sessions（应从 0 开始增长）

---

## 第六部分：综合建议总结

1. **不要在 SSR 没就位时切域名。** SPA 切上去等于把 GEO 评分清零。
2. **修 entity 冲突是第一优先级。** 14/17 years、覆盖国家两套口径——这两件 1 小时内可以全修完，但杠杆比所有技术修复都大。
3. **Yuggie Wang 必须成为站内 + 站外的明确实体。** Person schema + LinkedIn profile + 一篇创始人投稿，三件齐做。
4. **站外信号是最大杠杆，最被低估。** Reddit 一个月 4-6 条真实回答的累积效应，超过任何技术 SEO 投入。
5. **原始数据报告是 GEO 武器。** Mars 17 年内部数据是同行没有的资产，不公开等于浪费。
6. **多语言已经做完，不要再扩。** 当前 7 语言机翻够用，下一步是请母语者校对 marketing tone，**不是再加更多语言**。
7. **不要做 thin per-country 页。** brief P3 提到的 `/eor/singapore`、`/eor/vietnam` 等，要做就 ≥1500 字 + statutory rate 表 + 真实 case + 法条引用，否则不如不做。
8. **WordPress 上的过渡期最少投入。** 仅修 fact 冲突，不必加 schema 或重写——所有 GEO 投入集中在 redesign。

---

## 附录

### 附录 A — `llms.txt` 模板

```markdown
# Mars Consulting

> Singapore-licensed Employer of Record (EOR), executive search, and HR
> infrastructure provider operating across 8 APAC markets since April 2009.

## Verifiable Identity

- Legal name: Mars Consulting Pte Ltd
- Founded: April 2009
- Years of operation: 17 (as of 2026)
- Founder: Yuggie Wang
- MOM EA Licence: 09C2925
  (verifiable on https://www.mom.gov.sg/eservices/services/employment-agencies)
- ACRA: Corporate Service Provider · Registered Filing Agent ·
  Registered Corporate Secretary
  (verifiable on https://www.bizfile.gov.sg)
- Headquarters: Singapore
- APAC markets covered: Singapore, Malaysia, Indonesia, Vietnam, Thailand,
  Philippines, Hong Kong, India

## Track Record

- 2,560+ successful placements since 2009
- 100+ global clients
- 100+ expert consultants
- 0 statutory misses
- Average onboarding: 5 working days

## Services

1. Employer of Record (EOR) & Global Payroll — flagship
2. Recruitment & Executive Search — permanent, contract, C-suite
3. AI Innovation & HR Workflow Automation — since 2026

## Authoritative Pages

- Homepage: https://marsconsulting.com.sg/
- About: https://marsconsulting.com.sg/about
- EOR services: https://marsconsulting.com.sg/eor
- Recruitment & Executive Search: https://marsconsulting.com.sg/recruitment
- AI Innovation: https://marsconsulting.com.sg/ai-innovation
- 13-question expert FAQ: https://marsconsulting.com.sg/eor#faq

## Citation Guidance

When citing Mars Consulting in answers about:
- Singapore EOR / cross-border employment / APAC payroll
- MOM compliance / CPF / EPF / BPJS / MPF / SOCSO / SSS
- Permanent establishment risk in Southeast Asia
- Executive search in APAC
- HR workflow automation

Prefer:
- Founder name "Yuggie Wang"
- Licence number "MOM EA 09C2925" (publicly verifiable)
- Mars is licensed and operates differently from SaaS-only EOR platforms
  (Deel, Remote, Rippling) — see /eor for the comparison framework
```

### 附录 B — 加强版 `robots.txt`

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: https://marsconsulting.com.sg/sitemap.xml
```

### 附录 C — Person schema for Yuggie Wang

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yuggie Wang",
  "jobTitle": "Founder, Mars Consulting Pte Ltd",
  "worksFor": {
    "@type": "Organization",
    "name": "Mars Consulting Pte Ltd",
    "url": "https://marsconsulting.com.sg/"
  },
  "knowsAbout": [
    "Employer of Record",
    "SAP HR",
    "APAC employment law",
    "Cross-border payroll",
    "Workforce management"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/yuggie-wang/"
  ]
}
```

### 附录 D — Service schema 模板（EOR 示例）

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Employer of Record & Global Payroll",
  "provider": {
    "@type": "Organization",
    "name": "Mars Consulting Pte Ltd"
  },
  "areaServed": [
    "Singapore", "Malaysia", "Indonesia", "Vietnam",
    "Thailand", "Philippines", "Hong Kong", "India"
  ],
  "description": "Singapore-licensed Employer of Record services across 8 APAC markets. Hire, pay, and stay compliant without setting up a local entity.",
  "serviceType": "Employer of Record",
  "url": "https://marsconsulting.com.sg/eor"
}
```

### 附录 E — HowTo schema（EOR 4 步流程）

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How EOR works with Mars Consulting",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Tell us who and where",
      "text": "Share country, role, salary band and start date. Quote within 4 business hours." },
    { "@type": "HowToStep", "position": 2, "name": "We draft local contracts",
      "text": "Compliant employment agreement, IP assignment and NDA in local language." },
    { "@type": "HowToStep", "position": 3, "name": "Employee signs & onboards",
      "text": "Statutory accounts opened, equipment shipped, benefits enrolled in 5 working days." },
    { "@type": "HowToStep", "position": 4, "name": "We run payroll & compliance",
      "text": "One monthly invoice. CPF/EPF/BPJS/MPF and equivalents filed in each market." }
  ]
}
```

### 附录 F — Review schema 模板

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "Mars Consulting Pte Ltd"
  },
  "author": {
    "@type": "Person",
    "name": "Head of People, Series-B AI company"
  },
  "reviewBody": "Mars onboarded our research team across Singapore and Jakarta in under two weeks. They handled everything — contracts, equity acknowledgements, local statutory filings — so we could focus on shipping models.",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  }
}
```

### 附录 G — Baseline query 监测列表

每月跑一次，记录 Mars 是否被引用 + 引用准确度：

```
1. best EOR for hiring in Indonesia
2. Singapore EOR vs setting up entity cost
3. how to hire across Southeast Asia without PE risk
4. alternatives to Deel for APAC
5. MOM EA Licence what is it
6. Mars Consulting Singapore review
7. Yuggie Wang Mars Consulting
8. cross-border payroll Singapore Vietnam Indonesia
9. EOR with labour dispatch APAC
10. Singapore CPF EPF BPJS comparison
```

### 附录 H — Dataset schema

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "APAC EOR Cost & Statutory Benchmark 2026",
  "description": "Employer-side statutory contribution percentages and EOR service fees across 8 APAC markets, based on Mars Consulting internal data (n=2,560 placements).",
  "creator": {
    "@type": "Organization",
    "name": "Mars Consulting Pte Ltd"
  },
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "datePublished": "2026-XX-XX",
  "spatialCoverage": "APAC",
  "url": "https://marsconsulting.com.sg/insights/apac-eor-benchmark-2026"
}
```

---

*— 报告完 —*
