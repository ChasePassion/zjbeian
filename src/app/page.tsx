import Link from 'next/link';

const sections = [
  { id: "baoyan", title: "保研政策", description: "了解研究生推免相关规定与流程。", href: "/info#baoyan" },
  { id: "erke", title: "二课学分", description: "查看第二课堂学分获取要求与细则。", href: "/info#erke" },
  { id: "guojiang", title: "国家奖学金", description: "国家奖学金申请条件与评审办法。", href: "/info#guojiang" },
  { id: "xuefen", title: "学分管理", description: "学分制度、选课与绩点计算方式。", href: "/info#xuefen" },
  { id: "zongce", title: "综合测评", description: "综合测评构成、加分细则与评定。", href: "/info#zongce" },
  { id: "pingjiang", title: "评奖评优", description: "各类奖项、荣誉称号申报条件与奖励。", href: "/info#pingjiang" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">校园信息汇总</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">选择您感兴趣的主题:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {sections.map((section) => (
          <Link key={section.id} href={section.href} legacyBehavior>
            <a className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors group">
              <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                {section.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 text-sm opacity-50 text-gray-700 dark:text-gray-400">
                {section.description}
              </p>
            </a>
          </Link>
        ))}
      </div>

      {/* ICP 备案信息 */}
      <footer className="w-full text-center mt-auto py-6 text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
            粤ICP备2025419036号-1
          </a>
        </p>
      </footer>
    </main>
  );
}
