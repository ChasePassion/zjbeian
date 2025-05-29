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
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white sm:text-5xl md:text-6xl">
          欢迎来到校园信息通
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          快速导航至您关心的信息模块。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 max-w-4xl w-full">
        {sections.map((section) => (
          <Link href={section.href} key={section.id} legacyBehavior>
            <a
              className="group block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className={`mb-2 text-2xl font-semibold tracking-tight text-blue-600 dark:text-blue-400`}>
                {section.title}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">
                  -&gt;
                </span>
              </h2>
              <p className={`font-normal text-gray-600 dark:text-gray-400 text-sm`}>
                {section.description}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
