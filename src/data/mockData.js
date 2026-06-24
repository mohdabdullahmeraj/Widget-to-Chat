export const mockWidgets = [
  {
    id: "w1",
    title: "Learning Velocity",
    description: "Speed of course completion across all active learners.",
    theme: "green", // pastel green
    keyMetric: "2.3x",
    trend: "↑ 18%",
    trendDirection: "up",
    timeframe: "Since Last Week",
    data: [1.8, 1.9, 2.0, 1.9, 2.1, 2.2, 2.1, 2.3],
    renderType: "stat-callout",
    chatThread: [
      { id: "msg0", role: "user", message: "Can you summarize the current learning velocity trend?" },
      { id: "msg1", role: "ai", message: { text: "Learning velocity has increased significantly this week.", stat: "Up 18%" }, renderType: "stat-callout" },
      { id: "msg2", role: "user", message: "Is this trend consistent across all departments?" },
      { id: "msg3", role: "ai", message: "Yes, velocity is up across the board, with Engineering leading the way due to their recent shift to asynchronous modules.", renderType: "text" }
    ],
    suggestedQuestions: [
      "Why is velocity increasing?",
      "Which courses are speeding people up?",
      "How does this compare to last month?"
    ],
    answers: {
      "Why is velocity increasing?": { message: "The recent introduction of micro-learning modules has reduced average completion time. Learners are finishing the 5-minute courses 40% faster.", renderType: "text" },
      "Which courses are speeding people up?": { message: "The 'Security Fundamentals' and 'Q3 Compliance' modules have the highest velocity, primarily due to their new interactive video format.", renderType: "text" },
      "How does this compare to last month?": { message: { text: "Compared to last month, velocity is significantly higher.", stat: "Up 35% MoM" }, renderType: "stat-callout" }
    }
  },
  {
    id: "w2",
    title: "Knowledge Retention",
    description: "Post-training assessment scores tracked over time by department.",
    theme: "amber", // pastel yellow/orange
    keyMetric: "67%",
    trend: "↑ 4%",
    trendDirection: "up",
    timeframe: "Since Last Month",
    data: [
      { dept: "Engineering", weeks: [80, 82, 81, 85] },
      { dept: "Sales", weeks: [60, 65, 70, 72] },
      { dept: "Marketing", weeks: [75, 74, 76, 78] },
      { dept: "Support", weeks: [85, 88, 86, 90] },
      { dept: "HR", weeks: [90, 92, 91, 95] }
    ],
    renderType: "insight-card",
    chatThread: [
      { id: "msg0-2", role: "user", message: "Any notable improvements in knowledge retention?" },
      { id: "msg1-2", role: "ai", message: { insights: ["Sales department showed highest improvement", "Support scores are consistently strong"] }, renderType: "insight-card" },
      { id: "msg2-2", role: "user", message: "Are there any specific areas of concern right now?" },
      { id: "msg3-2", role: "ai", message: "Compliance training retention drops significantly after week 3. It might be worth deploying a quick refresher module to those teams.", renderType: "text" }
    ],
    suggestedQuestions: [
      "Show me the Sales breakdown",
      "Which topics have the lowest retention?",
      "Compare Engineering and Support"
    ],
    answers: {
      "Show me the Sales breakdown": { message: { insights: ["Week 1: 60% (Baseline)", "Week 2: 65% (Post-training)", "Week 4: 72% (Sustained retention)"] }, renderType: "insight-card" },
      "Which topics have the lowest retention?": { message: "Currently, 'Advanced Data Policies' and 'Vendor Security Protocols' are showing retention drops of 12% after two weeks.", renderType: "text" },
      "Compare Engineering and Support": { message: "Engineering averages 82% retention while Support averages 87%. Support shows less degradation over time.", renderType: "text" }
    }
  },
  {
    id: "w3",
    title: "At-Risk Learners",
    description: "Learners currently falling behind their scheduled training deadlines.",
    theme: "rose", // pastel red/pink
    keyMetric: "14",
    trend: "↓ 9%",
    trendDirection: "down",
    timeframe: "Since Last Week",
    data: [
      { dept: "Engineering", count: 2, highlight: false },
      { dept: "Sales", count: 8, highlight: true },
      { dept: "Marketing", count: 1, highlight: false },
      { dept: "Support", count: 3, highlight: false }
    ],
    renderType: "alert-text",
    chatThread: [
      { id: "msg0-3", role: "user", message: "Give me an update on the at-risk learners." },
      { id: "msg1-3", role: "ai", message: { parts: [{ text: "There are currently " }, { text: "14 learners", bold: true }, { text: " marked as at-risk, with a concentration in the " }, { text: "Sales department", bold: true }, { text: "." }] }, renderType: "alert-text" },
      { id: "msg2-3", role: "user", message: "Have their respective managers been notified?" },
      { id: "msg3-3", role: "ai", message: "Not yet. You can use the suggested action below to automatically draft and send reminders to the 4 department managers.", renderType: "text" }
    ],
    suggestedQuestions: [
      "Who are the new at-risk learners?",
      "What courses are they stuck on?",
      "Send reminder to their managers"
    ],
    answers: {
      "Who are the new at-risk learners?": { message: "The 3 new learners are John D., Sarah M. (Sales), and Alex T. (Support).", renderType: "text" },
      "What courses are they stuck on?": { message: { parts: [{ text: "Most are stuck on " }, { text: "Q3 Sales Compliance", bold: true }, { text: ", averaging 4 days past the deadline." }] }, renderType: "alert-text" },
      "Send reminder to their managers": { message: "Drafted and sent reminders to 4 department managers regarding the 14 at-risk learners.", renderType: "text" }
    }
  }
];
