import { Fragment } from "react";

export type MarketingLocale = "en" | "zh";

type MarketingPageProps = {
  locale: MarketingLocale;
};

const copy = {
  en: {
    skip: "Skip to main content",
    announcement: "RESEARCH MENTORSHIP · ADMISSIONS · CAREER",
    announcementAccent: "ONE CONTINUOUS GROWTH PATH",
    navLabel: "Main navigation",
    homeLabel: "Northstar Nexus Education home",
    brand: "Northstar Nexus Education",
    brandLine: "EDUCATION FOR THE AGE OF AI",
    nav: {
      why: "Why Northstar",
      services: "What We Do",
      path: "Growth Path",
      mentors: "Mentor Network",
      consultation: "Schedule a Consultation",
      menu: "Menu",
      openMenu: "Open navigation menu",
      language: "Choose language",
    },
    hero: {
      eyebrow: "AI × EDUCATION × HUMAN POTENTIAL",
      titleLead: "In the Age of AI",
      titleStrong: "Chart Your Path Forward",
      subtitle: "One connected journey—from research and admissions to career.",
      description:
        "With AI-powered learning and a global mentor network, we help students turn questions into projects, projects into evidence, and evidence into opportunity.",
      explore: "Explore the Growth Path",
      proofTitle: "Core team with Stanford backgrounds",
      proofText: "Supported by mentors from leading universities and technology companies worldwide",
      visualLabel: "A visual metaphor for a student finding direction on a university campus",
      imageAlt: "A student walking through a sunlit university campus and looking ahead",
      captionLabel: "YOUR NORTH STAR",
      caption: "Direction is not a one-time decision.\nIt becomes clearer through action.",
      direction: "Direction",
      evidence: "Evidence",
      opportunity: "Opportunity",
      metricsLabel: "Northstar Nexus Education at a glance",
      metrics: [
        ["3", "Integrated Service Pillars"],
        ["5", "Steps in One Growth Path"],
        ["6+", "Emerging Research Areas"],
        ["1:1", "Strategy & Mentor Matching"],
      ],
    },
    why: {
      heading: "What truly sets a student apart is a coherent body of evidence.",
      intro:
        "Many students pursue research, prepare university applications, and seek internships at the same time—yet those efforts rarely reinforce one another. The challenge is not a lack of options. It is a lack of connection.",
      problems: [
        ["Projects completed", "But the question, method, and contribution remain hard to explain."],
        ["Plenty of materials", "But no clear, credible personal narrative connects them."],
        ["Recruiting is approaching", "But skills and work have not yet been documented systematically."],
      ],
      nodes: [
        ["Direction", "DIRECTION"],
        ["Project", "PROJECT"],
        ["Evidence", "EVIDENCE"],
        ["Narrative", "NARRATIVE"],
        ["Opportunity", "OPPORTUNITY"],
      ],
      conclusion: "Every step creates evidence for what comes next.",
    },
    services: {
      heading: "Turn three priorities into one continuous growth journey.",
      intro: "Not three disconnected services, but one system that compounds over time.",
      research: {
        kicker: "RESEARCH MENTORSHIP",
        title: "Research Mentorship",
        text: "Learn to think like a researcher—from defining a meaningful question and choosing sound methods to producing work that can stand up to review.",
        items: [
          "Research questions and methodology design",
          "Data, code, and experiment documentation",
          "Reports, posters, and presentation practice",
        ],
        audience: "K–12 Students · University Students · Interdisciplinary Learners",
      },
      admissions: {
        kicker: "U.S. ADMISSIONS",
        title: "U.S. Admissions",
        text: "Start with official requirements, clarify competitive goals and personal constraints, then build an application strategy you can execute.",
        pills: ["Undergraduate", "Transfer", "Master’s", "PhD"],
        path: ["Requirements Check", "Pathway Strategy", "Application Narrative", "Enrollment Transition"],
        pathLabel: "Four-stage U.S. admissions support process",
      },
      career: {
        kicker: "CAREER DEVELOPMENT",
        title: "Career Development",
        text: "Translate what you can do into proof employers can see—and a story you can tell—based on real role requirements.",
        track: [
          ["Direction", "Roles & Skill Gaps"],
          ["Evidence", "Projects & Portfolio"],
          ["Communication", "Resume & Interviews"],
          ["Action", "Applications & Iteration"],
        ],
        audience: "AI · Technology · Finance · Emerging Fields",
      },
    },
    path: {
      heading: "Every step creates evidence for what comes next.",
      intro: "One connected body of evidence can support research, university applications, and career decisions alike.",
      steps: [
        {
          number: "01",
          title: "Set the Direction",
          english: "ORIENT",
          text: "Align interests, strengths, long-term goals, and practical constraints.",
        },
        {
          number: "02",
          title: "Build the Project",
          english: "BUILD",
          text: "Choose a meaningful, feasible question that supports long-term growth.",
        },
        {
          number: "03",
          title: "Document the Evidence",
          english: "DOCUMENT",
          text: "Document data, code, reports, deliverables, and feedback as the work evolves.",
        },
        {
          number: "04",
          title: "Shape the Story",
          english: "ARTICULATE",
          text: "Explain the question, method, contribution, limitations, and lessons learned.",
        },
        {
          number: "05",
          title: "Open the Next Door",
          english: "ADVANCE",
          text: "Turn completed work into opportunities in research, admissions, and careers.",
        },
      ],
      usecases: [
        ["Research Mentorship", "Research Question · Methodology · Data & Code · Report & Presentation"],
        ["Admissions", "Core Narrative · Academic Evidence · Application Materials · Interview Communication"],
        ["Career", "Role Map · Project Portfolio · Resume Narrative · Interview Reflection"],
      ],
    },
    research: {
      headingLead: "Start with real questions.",
      headingStrong: "Explore the frontiers.",
      intro:
        "Research areas reflect our mentors’ expertise and the methods and resources available. Each project is scoped around the student’s preparation, mentor fit, and schedule.",
      directions: [
        {
          index: "01",
          title: "Web3 × Causal Inference",
          text: "Use public on-chain data to study how technological events reshape DeFi liquidity and market structure.",
          tags: ["ECONOMICS", "TOKENOMICS"],
          tone: "cobalt",
        },
        {
          index: "02",
          title: "LLMs × Game Theory",
          text: "Compare how different collaboration mechanisms affect efficiency and fairness in multi-agent decision-making.",
          tags: ["LLM", "GAME THEORY"],
          tone: "cyan",
        },
        {
          index: "03",
          title: "Multimodal AI × Visual Intelligence",
          text: "Build image-text datasets and evaluate how well vision-language models recognize, retrieve, and explain information in specialized domains.",
          tags: ["VLM", "COMPUTER VISION"],
          tone: "mint",
        },
        {
          index: "04",
          title: "AI for Materials",
          text: "Use public materials datasets to predict properties and identify the structural features that drive model outcomes.",
          tags: ["MATERIALS", "MODELING"],
          tone: "gold",
        },
        {
          index: "05",
          title: "AI Inference × Safety",
          text: "Explore trade-offs among latency, resource use, robustness, and safety across model deployment strategies.",
          tags: ["INFERENCE", "AI SAFETY"],
          tone: "coral",
        },
        {
          index: "06",
          title: "AI × Sustainable Energy",
          text: "Develop predictive models using energy and environmental data, then identify the variables that most influence efficiency and risk.",
          tags: ["ENERGY", "SUSTAINABILITY"],
          tone: "violet",
        },
      ],
      note: "These are customizable examples. The final mentor, research question, scope, and deliverables are confirmed during project planning.",
    },
    delivery: {
      imageAlt: "A mentor and student discussing an individualized learning plan",
      overlay: ["Strategy Assessment", "Mentor Matching", "Milestone Progress"],
      heading: "Turn mentor matching into measurable progress.",
      lead: "At every stage, we answer three questions: What did you complete? Where is the evidence? What comes next?",
      steps: [
        ["Discovery", "Goals · Starting Point · Timeline · Gaps"],
        ["Match", "Domain · Methods · Project Stage · Communication Fit"],
        ["Build", "Milestones · 1:1 Guidance · Student-Led Execution"],
        ["Review", "Feedback · Iteration · Rehearsal · Reflection"],
        ["Translate", "Turn the work into credible evidence for applications or recruitment."],
      ],
    },
    mentors: {
      heading: "Expertise matched to the work your project requires.",
      intro: "Our mentor network is organized around six capability areas. Support is matched to each student’s research question, project stage, and next milestone.",
      list: [
        {
          title: "Digital Economy & Tokenomics",
          field: "Web3 · Causal Inference · Mechanism Design",
          background: "Support for turning public data and economic questions into testable research designs.",
        },
        {
          title: "LLMs & Strategic Systems",
          field: "Large Language Models · Game Theory · Multi-Agent Collaboration",
          background: "Guidance on designing simulations, interaction mechanisms, and clear evaluation frameworks.",
        },
        {
          title: "Language Intelligence",
          field: "Natural Language Processing · LLM Applications · Model Evaluation",
          background: "Support across data preparation, experiment design, benchmarking, and evidence-based interpretation.",
        },
        {
          title: "AI Systems & Safety",
          field: "Inference Systems · Edge AI · Safety Evaluation",
          background: "Guidance on balancing performance, efficiency, robustness, and responsible system behavior.",
        },
        {
          title: "AI for Materials & Scientific Discovery",
          field: "Scientific Machine Learning · Materials Informatics · Systems Design",
          background: "Support for structuring scientific datasets, building predictive workflows, and planning validation.",
        },
        {
          title: "Multimodal Intelligence",
          field: "Computer Vision · Vision-Language Models · Multimodal Learning",
          background: "Guidance on combining text, image, and structured data into measurable research projects.",
        },
      ],
      cardLabel: "EXPERTISE AREA",
      disclaimer:
        "These profiles represent capability areas rather than individual biographies. Matching depends on project needs, mentor availability, and the scope of support required.",
    },
    outputs: {
      heading: "Leave with work you can keep building on.",
      intro: "Editable, reviewable, and transferable—not one-time packaging.",
      cards: [
        {
          label: "Research Mentorship",
          title: "From a Question to a Research Portfolio",
          items: [
            "Research question and methodology plan",
            "Literature, data, and experiment records",
            "Code, models, and versioned feedback",
            "Research report, poster, and presentation",
          ],
        },
        {
          label: "U.S. Admissions",
          title: "From Requirements to a Coherent Application",
          items: [
            "Eligibility review and application timeline",
            "Coursework, GPA, and balanced school strategy",
            "CV, essays, and recommendation evidence",
            "Submission checklist and enrollment transition",
          ],
        },
        {
          label: "Career Development",
          title: "From Skills to Career Evidence",
          items: [
            "Role targeting and skill-gap map",
            "Project portfolio and tailored resume versions",
            "Interview preparation and reflection notes",
            "Job-search actions and follow-up plan",
          ],
        },
      ],
    },
    contact: {
      headingLead: "Choose your destination.",
      headingStrong: "Then make the next move real.",
      intro:
        "Tell us where you are now, where you want to go, and your timeline. We’ll connect you with a relevant advisor for a one-on-one discovery call and initial assessment.",
      checklist: [
        "Your name, current grade or year, school, and major",
        "Area of interest: Research Mentorship / Admissions / Career",
        "Target schools, roles, or research areas",
        "Preferred start date and current preparation",
      ],
      wechatTitle: "Connect on WeChat",
      wechatSubtitle: "WECHAT CONSULTATION",
      advisorTitle: "Chat with an Advisor",
      advisorText: "1:1 Discovery · Initial Assessment",
      advisorAlt: "WeChat QR code for a Northstar Nexus Education advisor",
      officialTitle: "Official Northstar WeChat",
      officialText: "Program Inquiries · Partnerships · Ongoing Support",
      officialAlt: "Official Northstar Nexus Education WeChat QR code",
      flow: ["Scan to Connect", "Initial Assessment", "Advisor Match", "Confirm Your Plan"],
    },
    footer: {
      topLabel: "Back to top",
      tagline: "Chart your path in the age of AI.",
      links: ["What We Do", "Research Areas", "Mentor Network", "Contact Us"],
      legal:
        "Northstar Nexus Education provides pathway planning, skills development, and project support. We do not guarantee publication, competition awards, admission, transfer credit, visas, internships, interviews, or employment. The final scope, deliverables, and timeline are defined in the service plan confirmed before engagement.",
      integrity:
        "All research and application work remains student-led; mentors provide instruction, feedback, and editorial guidance in accordance with academic-integrity standards.",
    },
  },
  zh: {
    skip: "跳到主要内容",
    announcement: "科研 · 升学 · 职业，一条连续的成长路径",
    announcementAccent: "ONE CONTINUOUS GROWTH PATH",
    navLabel: "主导航",
    homeLabel: "北辰智汇首页",
    brand: "北辰智汇",
    brandLine: "NORTHSTAR NEXUS EDUCATION",
    nav: {
      why: "为什么北辰",
      services: "核心服务",
      path: "成长路径",
      mentors: "导师网络",
      consultation: "预约目标诊断",
      menu: "菜单",
      openMenu: "打开导航菜单",
      language: "选择语言",
    },
    hero: {
      eyebrow: "AI × EDUCATION × HUMAN POTENTIAL",
      titleLead: "在 AI 时代",
      titleStrong: "为成长建立坐标",
      subtitle: "让科研、升学与职业沿同一条成长主线发生",
      description: "以 AI 能力与全球导师网络，构建从问题、项目到成果与机会的完整成长路径。",
      explore: "探索成长路径",
      proofTitle: "核心团队来自斯坦福",
      proofText: "汇聚全球高校与科技行业导师",
      visualLabel: "学生在校园中寻找成长方向的视觉意象",
      imageAlt: "学生走在校园中，面向前方的阳光",
      captionLabel: "YOUR NORTH STAR",
      caption: "方向不是一次选择，\n而是在行动中逐渐清晰。",
      direction: "方向",
      evidence: "证据",
      opportunity: "机会",
      metricsLabel: "北辰智汇服务概览",
      metrics: [
        ["3", "核心服务矩阵"],
        ["5", "步连续成长路径"],
        ["6+", "前沿研究方向"],
        ["1:1", "目标诊断与导师匹配"],
      ],
    },
    why: {
      heading: "真正拉开差距的，是一条完整的证据链",
      intro: "很多学生同时做科研、准备申请、寻找实习，却把三件事做成三条互不相干的线。问题不是选择太少，而是成果没有连成证据链。",
      problems: [
        ["项目做过", "讲不清问题、方法与贡献"],
        ["材料很多", "缺少一致、可信的个人主线"],
        ["求职临近", "能力与作品尚未系统沉淀"],
      ],
      nodes: [
        ["方向", "DIRECTION"],
        ["项目", "PROJECT"],
        ["证据", "EVIDENCE"],
        ["叙事", "STORY"],
        ["机会", "OPPORTUNITY"],
      ],
      conclusion: "每一步，都成为下一步的证据。",
    },
    services: {
      heading: "把三件事，做成同一条成长主线",
      intro: "不是三套彼此割裂的服务，而是一套能持续复用的成长系统。",
      research: {
        kicker: "AI + RESEARCH",
        title: "AI + 科研",
        text: "从问题定义、方法训练到可审阅成果，先学会像研究者一样思考。",
        items: ["研究问题与方法设计", "数据、代码与实验记录", "报告、海报与答辩表达"],
        audience: "K12 · 大学生 · 跨专业学习者",
      },
      admissions: {
        kicker: "US ADMISSIONS",
        title: "美国升学",
        text: "先分清官方规则、竞争力目标与个人约束，再把申请路径做实。",
        pills: ["本科", "转学", "硕士", "博士"],
        path: ["规则核验", "路径规划", "材料主线", "入学衔接"],
        pathLabel: "美国升学四阶段服务流程",
      },
      career: {
        kicker: "CAREER DEVELOPMENT",
        title: "职业发展",
        text: "围绕真实岗位标准，把“能做”转化为“能证明、能讲清”。",
        track: [
          ["方向", "岗位与差距"],
          ["证据", "项目与作品"],
          ["表达", "简历与面试"],
          ["行动", "投递与复盘"],
        ],
        audience: "AI · 科技 · 金融等方向",
      },
    },
    path: {
      heading: "每一步，都为下一步留下证据",
      intro: "同一条证据链，可以服务科研、院校申请与职业选择。",
      steps: [
        { number: "01", title: "定方向", english: "ORIENT", text: "对齐兴趣、能力、长期目标与现实约束。" },
        { number: "02", title: "做项目", english: "BUILD", text: "选择真实、可执行且长期匹配的问题。" },
        { number: "03", title: "留证据", english: "PROVE", text: "沉淀数据、代码、报告、作品与反馈。" },
        { number: "04", title: "成叙事", english: "ARTICULATE", text: "讲清问题、方法、贡献、局限与反思。" },
        { number: "05", title: "接机会", english: "ADVANCE", text: "把成果转化为科研、申请与职业机会。" },
      ],
      usecases: [
        ["科研", "研究问题 · 方法方案 · 数据/代码 · 报告/答辩"],
        ["升学", "定位主线 · 学术证据 · 文书材料 · 面试表达"],
        ["求职", "岗位地图 · 项目作品 · 简历叙事 · 面试复盘"],
      ],
    },
    research: {
      headingLead: "从真实问题，",
      headingStrong: "进入前沿研究",
      intro: "方向来自导师专长与可获得的方法资源；具体题目会根据学生基础、导师匹配与排期立项。",
      directions: [
        { index: "01", title: "Web3 × 因果推断", text: "以公开链上数据研究技术事件对 DeFi 流动性与市场结构的影响。", tags: ["ECONOMICS", "TOKENOMICS"], tone: "cobalt" },
        { index: "02", title: "LLM × 博弈论", text: "比较不同协作机制对多智能体决策效率与公平性的影响。", tags: ["LLM", "GAME THEORY"], tone: "cyan" },
        { index: "03", title: "多模态 × 视觉智能", text: "构建图文数据集，评估 VLM 在专业场景中的识别、检索与解释能力。", tags: ["VLM", "COMPUTER VISION"], tone: "mint" },
        { index: "04", title: "AI for Materials", text: "用公开材料数据预测性能，并解释影响结果的关键结构特征。", tags: ["MATERIALS", "MODELING"], tone: "gold" },
        { index: "05", title: "AI 推理 × 安全", text: "探索模型部署策略在延迟、资源消耗与安全鲁棒性之间的权衡。", tags: ["INFERENCE", "AI SAFETY"], tone: "coral" },
        { index: "06", title: "AI × 能源可持续", text: "基于能源与环境数据建立预测模型，识别效率与风险的关键变量。", tags: ["ENERGY", "SUSTAINABILITY"], tone: "violet" },
      ],
      note: "研究方向为可定制示例，具体导师、题目与交付物以立项确认为准。",
    },
    delivery: {
      imageAlt: "导师与学生进行一对一规划讨论",
      overlay: ["目标诊断", "导师匹配", "里程碑推进"],
      heading: "把导师匹配，变成可追踪的交付",
      lead: "每一阶段都回答三件事：完成了什么？证据在哪里？下一步是什么？",
      steps: [
        ["诊断", "目标 · 基础 · 时间 · 差距"],
        ["匹配", "领域 · 方法 · 阶段 · 沟通"],
        ["推进", "里程碑 · 1v1 · 学生主导"],
        ["评审", "反馈 · 版本 · 模拟 · 复盘"],
        ["转化", "沉淀为申请或求职可用的成果证据"],
      ],
    },
    mentors: {
      heading: "围绕项目所需能力，匹配合适的专业支持",
      intro: "我们的导师网络按六类专业能力组织，并根据学生的研究问题、项目阶段与下一里程碑进行匹配。",
      list: [
        { title: "数字经济与代币经济", field: "Web3 · 因果推断 · 机制设计", background: "支持将公开数据与经济问题转化为可检验的研究设计。" },
        { title: "大语言模型与策略系统", field: "大语言模型 · 博弈论 · 多智能体协作", background: "支持设计仿真实验、交互机制与清晰的评估框架。" },
        { title: "语言智能", field: "自然语言处理 · 大模型应用 · 模型评估", background: "覆盖数据准备、实验设计、基准测试与基于证据的结果解读。" },
        { title: "AI 系统与安全", field: "推理系统 · 边缘 AI · 安全评估", background: "支持在性能、效率、稳健性与负责任的系统行为之间建立平衡。" },
        { title: "AI 材料与科学发现", field: "科学机器学习 · 材料信息学 · 系统设计", background: "支持科学数据结构化、预测流程构建与验证方案设计。" },
        { title: "多模态智能", field: "计算机视觉 · 视觉语言模型 · 多模态学习", background: "支持将文本、图像与结构化数据整合为可衡量的研究项目。" },
      ],
      cardLabel: "专业方向",
      disclaimer: "以上内容展示的是专业能力方向，而非个人履历。实际匹配将根据项目需求、导师档期与所需支持范围综合确定。",
    },
    outputs: {
      heading: "最终带走的，是能继续使用的成果资产",
      intro: "可编辑、可复盘、可迁移，而不是一次性包装。",
      cards: [
        { label: "AI + 科研", title: "从问题到研究资产", items: ["研究问题与方法方案", "文献、数据与实验记录", "代码、模型与版本反馈", "研究报告、海报与答辩"] },
        { label: "美国升学", title: "从规则到申请主线", items: ["资格核验与申请时间线", "课程、GPA 与选校分层", "CV、文书与推荐信素材", "提交清单与入学衔接"] },
        { label: "职业发展", title: "从能力到职业证据", items: ["岗位定位与能力差距图", "项目作品集与简历版本", "面试准备与复盘记录", "求职行动与跟进计划"] },
      ],
    },
    contact: {
      headingLead: "先选一个目标，",
      headingStrong: "再把下一步做实",
      intro: "告诉我们你的阶段、目标与时间线，团队将安排匹配方向的老师与你进行一对一需求沟通与初步评估。",
      checklist: ["姓名与当前年级 / 学校 / 专业", "咨询方向：科研 / 升学 / 求职", "目标院校、岗位或研究方向", "期望启动时间与现有准备"],
      wechatTitle: "微信咨询",
      wechatSubtitle: "WECHAT CONSULTATION",
      advisorTitle: "咨询老师微信",
      advisorText: "一对一需求沟通 · 初步评估",
      advisorAlt: "北辰智汇咨询老师微信二维码",
      officialTitle: "Northstar 官方微信",
      officialText: "项目咨询 · 合作与后续服务",
      officialAlt: "北辰智汇官方微信二维码",
      flow: ["扫码添加", "需求初评", "匹配老师", "确认方案"],
    },
    footer: {
      topLabel: "返回网站顶部",
      tagline: "在 AI 时代，为成长建立坐标。",
      links: ["核心服务", "研究方向", "导师网络", "联系我们"],
      legal: "北辰智汇提供路径规划、能力训练与成果支持，不承诺论文发表、竞赛奖项、录取、转学分、签证、实习、面试或录用结果；具体服务范围与交付以签约前确认方案为准。",
      integrity: "",
    },
  },
} as const;

function LanguageSwitch({ locale, mobile = false }: { locale: MarketingLocale; mobile?: boolean }) {
  const label = copy[locale].nav.language;

  return (
    <div
      className={mobile ? "mobile-language-switcher" : "language-switcher"}
      role="group"
      aria-label={label}
    >
      {/* Cross-root-layout locale navigation requires a full document request. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>
        EN
      </a>
      <a href="/zh" hrefLang="zh-CN" lang="zh-CN" aria-current={locale === "zh" ? "page" : undefined}>
        中文
      </a>
    </div>
  );
}

export default function MarketingPage({ locale }: MarketingPageProps) {
  const t = copy[locale];

  return (
    <div className={`site locale-${locale}`}>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="announcement">
          <span className="announcement-dot" aria-hidden="true" />
          {t.announcement}
          <span className="announcement-en">{t.announcementAccent}</span>
        </div>

        <nav className="nav-shell" aria-label={t.navLabel}>
          <a className="brand" href="#top" aria-label={t.homeLabel}>
            <span className="brand-mark">
              <img src="/brand/northstar-logo.png" alt="" width="48" height="48" />
            </span>
            <span className="brand-copy">
              <strong>{t.brand}</strong>
              <span>{t.brandLine}</span>
            </span>
          </a>

          <div className="desktop-nav">
            <a href="#why">{t.nav.why}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#path">{t.nav.path}</a>
            <a href="#mentors">{t.nav.mentors}</a>
          </div>

          <LanguageSwitch locale={locale} />

          <a className="nav-cta" href="#contact">
            {t.nav.consultation}
            <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label={t.nav.openMenu}>
              <span>{t.nav.menu}</span>
              <i aria-hidden="true" />
            </summary>
            <div className="mobile-menu-panel">
              <a href="#why">{t.nav.why}</a>
              <a href="#services">{t.nav.services}</a>
              <a href="#path">{t.nav.path}</a>
              <a href="#mentors">{t.nav.mentors}</a>
              <a href="#contact">{t.nav.consultation}</a>
              <LanguageSwitch locale={locale} mobile />
            </div>
          </details>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-stars" aria-hidden="true" />
          <div className="hero-glow hero-glow-one" aria-hidden="true" />
          <div className="hero-glow hero-glow-two" aria-hidden="true" />

          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow light-eyebrow">
                <span aria-hidden="true">✦</span>
                {t.hero.eyebrow}
              </p>
              <h1>
                <span>{t.hero.titleLead}</span>
                <strong>{t.hero.titleStrong}</strong>
              </h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  {t.nav.consultation}
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-ghost" href="#path">
                  {t.hero.explore}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <span className="proof-star" aria-hidden="true">✦</span>
                <p>
                  <strong>{t.hero.proofTitle}</strong>
                  <span>{t.hero.proofText}</span>
                </p>
              </div>
            </div>

            <div className="hero-visual" aria-label={t.hero.visualLabel}>
              <div className="orbit orbit-one" aria-hidden="true" />
              <div className="orbit orbit-two" aria-hidden="true" />
              <div className="hero-image-frame">
                <img
                  src="/brand/campus-hero.webp"
                  alt={t.hero.imageAlt}
                  width="900"
                  height="1350"
                  fetchPriority="high"
                />
                <div className="image-shade" aria-hidden="true" />
                <div className="visual-caption">
                  <span>{t.hero.captionLabel}</span>
                  <strong>
                    {t.hero.caption.split("\n")[0]}
                    <br />
                    {t.hero.caption.split("\n")[1]}
                  </strong>
                </div>
              </div>
              <div className="coordinate-card coordinate-card-one">
                <span className="coordinate-index">01</span>
                <div><strong>{t.hero.direction}</strong><small>DIRECTION</small></div>
              </div>
              <div className="coordinate-card coordinate-card-two">
                <span className="coordinate-index">03</span>
                <div><strong>{t.hero.evidence}</strong><small>EVIDENCE</small></div>
              </div>
              <div className="coordinate-card coordinate-card-three">
                <span className="coordinate-index">05</span>
                <div><strong>{t.hero.opportunity}</strong><small>OPPORTUNITY</small></div>
              </div>
              <div className="northstar-point" aria-hidden="true">
                <span>✦</span>
              </div>
            </div>
          </div>

          <div className="hero-metrics" aria-label={t.hero.metricsLabel}>
            {t.hero.metrics.map(([value, label], index) => (
              <div className={index === 3 ? "metric-wide" : undefined} key={label}>
                <strong>{value}</strong><span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section why-section" id="why">
          <div className="section-shell">
            <div className="section-intro split-intro">
              <div>
                <p className="eyebrow"><span>02</span> WHY NORTHSTAR NEXUS</p>
                <h2>{t.why.heading}</h2>
              </div>
              <p>{t.why.intro}</p>
            </div>

            <div className="evidence-layout">
              <div className="problem-stack">
                {t.why.problems.map(([title, text], index) => (
                  <article className="problem-card" key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </article>
                ))}
              </div>

              <div className="evidence-map">
                <div className="map-grid" aria-hidden="true" />
                <div className="map-node node-direction"><span>{t.why.nodes[0][0]}</span><small>{t.why.nodes[0][1]}</small></div>
                <div className="map-node node-project"><span>{t.why.nodes[1][0]}</span><small>{t.why.nodes[1][1]}</small></div>
                <div className="map-node node-evidence"><span>{t.why.nodes[2][0]}</span><small>{t.why.nodes[2][1]}</small></div>
                <div className="map-node node-story"><span>{t.why.nodes[3][0]}</span><small>{t.why.nodes[3][1]}</small></div>
                <div className="map-node node-opportunity"><span>{t.why.nodes[4][0]}</span><small>{t.why.nodes[4][1]}</small></div>
                <div className="map-line line-one" aria-hidden="true" />
                <div className="map-line line-two" aria-hidden="true" />
                <div className="map-line line-three" aria-hidden="true" />
                <div className="map-line line-four" aria-hidden="true" />
                <p>{t.why.conclusion}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-shell">
            <div className="section-intro centered-intro">
              <p className="eyebrow"><span>03</span> WHAT WE DO</p>
              <h2>{t.services.heading}</h2>
              <p>{t.services.intro}</p>
            </div>

            <div className="services-grid">
              <article className="service-card service-research">
                <div className="service-topline"><span>01</span><small>{t.services.research.kicker}</small></div>
                <div className="service-icon service-icon-blue" aria-hidden="true">✦</div>
                <h3>{t.services.research.title}</h3>
                <p>{t.services.research.text}</p>
                <ul>
                  {t.services.research.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="service-audience">{t.services.research.audience}</div>
              </article>

              <article className="service-card service-admissions">
                <div className="service-topline"><span>02</span><small>{t.services.admissions.kicker}</small></div>
                <div className="service-icon service-icon-cyan" aria-hidden="true">◎</div>
                <h3>{t.services.admissions.title}</h3>
                <p>{t.services.admissions.text}</p>
                <div className="admission-pills">
                  {t.services.admissions.pills.map((pill) => <span key={pill}>{pill}</span>)}
                </div>
                <div className="admission-path" aria-label={t.services.admissions.pathLabel}>
                  {t.services.admissions.path.map((step, index) => (
                    <Fragment key={step}>
                      <i>{step}</i>
                      {index < t.services.admissions.path.length - 1 && <b aria-hidden="true">→</b>}
                    </Fragment>
                  ))}
                </div>
              </article>

              <article className="service-card service-career">
                <div className="service-topline"><span>03</span><small>{t.services.career.kicker}</small></div>
                <div className="service-icon service-icon-gold" aria-hidden="true">↗</div>
                <h3>{t.services.career.title}</h3>
                <p>{t.services.career.text}</p>
                <div className="career-track">
                  {t.services.career.track.map(([title, text]) => (
                    <span key={title}><b>{title}</b><small>{text}</small></span>
                  ))}
                </div>
                <div className="service-audience">{t.services.career.audience}</div>
              </article>
            </div>
          </div>
        </section>

        <section className="section path-section" id="path">
          <div className="section-shell">
            <div className="path-heading">
              <div>
                <p className="eyebrow light-eyebrow"><span>04</span> THE GROWTH PATH</p>
                <h2>{t.path.heading}</h2>
              </div>
              <p>{t.path.intro}</p>
            </div>

            <div className="growth-track">
              {t.path.steps.map((step) => (
                <article className="growth-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-point" aria-hidden="true"><i /></div>
                  <small>{step.english}</small>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="path-usecases">
              {t.path.usecases.map(([title, text]) => (
                <div key={title}><span>{title}</span><p>{text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="section-shell">
            <div className="section-intro split-intro research-intro">
              <div>
                <p className="eyebrow"><span>05</span> RESEARCH MATRIX</p>
                <h2>{t.research.headingLead}<br />{t.research.headingStrong}</h2>
              </div>
              <p>{t.research.intro}</p>
            </div>

            <div className="research-grid">
              {t.research.directions.map((direction) => (
                <article className={`research-card ${direction.tone}`} key={direction.index}>
                  <div className="research-index"><span>{direction.index}</span><i aria-hidden="true">↗</i></div>
                  <h3>{direction.title}</h3>
                  <p>{direction.text}</p>
                  <div className="research-tags">
                    {direction.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
            <p className="section-note">{t.research.note}</p>
          </div>
        </section>

        <section className="section delivery-section">
          <div className="section-shell delivery-grid">
            <div className="delivery-visual">
              <img
                src="/brand/mentoring.webp"
                alt={t.delivery.imageAlt}
                width="760"
                height="1330"
                loading="lazy"
              />
              <div className="delivery-overlay">
                <span>1 : 1</span>
                <p>
                  {t.delivery.overlay[0]}<br />
                  {t.delivery.overlay[1]}<br />
                  {t.delivery.overlay[2]}
                </p>
              </div>
            </div>

            <div className="delivery-content">
              <p className="eyebrow"><span>06</span> HOW WE DELIVER</p>
              <h2>{t.delivery.heading}</h2>
              <p className="delivery-lead">{t.delivery.lead}</p>
              <ol className="delivery-steps">
                {t.delivery.steps.map(([title, text], index) => (
                  <li key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{title}</h3><p>{text}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section mentors-section" id="mentors">
          <div className="mentors-stars" aria-hidden="true" />
          <div className="section-shell">
            <div className="path-heading mentors-heading">
              <div>
                <p className="eyebrow light-eyebrow"><span>07</span> MENTOR NETWORK</p>
                <h2>{t.mentors.heading}</h2>
              </div>
              <p>{t.mentors.intro}</p>
            </div>

            <div className="mentor-grid">
              {t.mentors.list.map((area, index) => (
                <article className="mentor-card" key={area.title}>
                  <div className="mentor-avatar" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <i>✦</i>
                  </div>
                  <div className="mentor-copy">
                    <small>{t.mentors.cardLabel}</small>
                    <h3>{area.title}</h3>
                    <strong>{area.field}</strong>
                    <p>{area.background}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mentor-disclaimer">{t.mentors.disclaimer}</p>
          </div>
        </section>

        <section className="section outputs-section">
          <div className="section-shell">
            <div className="section-intro centered-intro outputs-intro">
              <p className="eyebrow"><span>08</span> TANGIBLE OUTPUTS</p>
              <h2>{t.outputs.heading}</h2>
              <p>{t.outputs.intro}</p>
            </div>
            <div className="outputs-grid">
              {t.outputs.cards.map((output, index) => (
                <article className="output-card" key={output.label}>
                  <div className="output-card-head">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <small>{output.label}</small>
                  </div>
                  <h3>{output.title}</h3>
                  <ul>
                    {output.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-stars" aria-hidden="true" />
          <div className="section-shell contact-shell">
            <div className="contact-copy">
              <p className="eyebrow light-eyebrow"><span>09</span> START YOUR PATH</p>
              <h2>{t.contact.headingLead}<br />{t.contact.headingStrong}</h2>
              <p>{t.contact.intro}</p>

              <div className="contact-checklist">
                {t.contact.checklist.map((item, index) => (
                  <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
                ))}
              </div>

              <div className="direct-contact">
                <a href="mailto:info.northstar.edu@gmail.com">
                  <small>EMAIL</small>
                  <span>info.northstar.edu@gmail.com</span>
                </a>
                <a href="tel:+18629023096">
                  <small>PHONE</small>
                  <span>+1 862 902 3096</span>
                </a>
              </div>
            </div>

            <div className="wechat-panel">
              <div className="wechat-panel-head">
                <span className="wechat-symbol" aria-hidden="true">●</span>
                <div><strong>{t.contact.wechatTitle}</strong><small>{t.contact.wechatSubtitle}</small></div>
              </div>
              <div className="wechat-grid">
                <figure>
                  <div className="qr-frame">
                    <img src="/brand/consult-wechat.png" alt={t.contact.advisorAlt} width="520" height="520" loading="lazy" />
                  </div>
                  <figcaption><strong>{t.contact.advisorTitle}</strong><span>{t.contact.advisorText}</span></figcaption>
                </figure>
                <figure>
                  <div className="qr-frame">
                    <img src="/brand/official-wechat.png" alt={t.contact.officialAlt} width="360" height="360" loading="lazy" />
                  </div>
                  <figcaption><strong>{t.contact.officialTitle}</strong><span>{t.contact.officialText}</span></figcaption>
                </figure>
              </div>
              <div className="contact-flow">
                {t.contact.flow.map((step, index) => (
                  <Fragment key={step}>
                    <span>{step}</span>
                    {index < t.contact.flow.length - 1 && <i aria-hidden="true">→</i>}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#top" aria-label={t.footer.topLabel}>
            <span className="brand-mark"><img src="/brand/northstar-logo.png" alt="" width="48" height="48" /></span>
            <span className="brand-copy"><strong>{t.brand}</strong><span>{t.brandLine}</span></span>
          </a>
          <p>{t.footer.tagline}</p>
          <div className="footer-links">
            <a href="#services">{t.footer.links[0]}</a>
            <a href="#research">{t.footer.links[1]}</a>
            <a href="#mentors">{t.footer.links[2]}</a>
            <a href="#contact">{t.footer.links[3]}</a>
          </div>
        </div>
        <div className="footer-legal">
          <p>
            {t.footer.legal}
            {t.footer.integrity && <> {t.footer.integrity}</>}
          </p>
          <span>© 2026 NORTHSTAR NEXUS EDUCATION</span>
        </div>
      </footer>
    </div>
  );
}
