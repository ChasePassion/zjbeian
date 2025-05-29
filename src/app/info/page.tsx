import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface SectionProps {
  id: string;
  title: string;
  contentFile: string;
  markdownContent?: string; 
}

// Helper function to fetch and process sections
async function getSectionsWithContent(): Promise<SectionProps[]> {
  const sectionsBase: Omit<SectionProps, 'markdownContent'>[] = [
    { id: "baoyan", title: "保研", contentFile: "metarial/保研.md" },
    { id: "erke", title: "二课分", contentFile: "metarial/二课分.md" },
    { id: "guojiang", title: "国家奖学金", contentFile: "metarial/国家奖学金.md" },
    { id: "xuefen", title: "学分", contentFile: "metarial/学分.md" },
    { id: "zongce", title: "综测分", contentFile: "metarial/综测.md" },
    { id: "pingjiang", title: "评奖评优评先", contentFile: "metarial/评奖评优评先.md" },
  ];

  const sectionsWithContent = sectionsBase.map(section => {
    const filePath = path.join(process.cwd(), section.contentFile);
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content } = matter(fileContents); 
      return { ...section, markdownContent: content };
    } catch (error) {
      console.error(`Error reading file ${section.contentFile}:`, error);
      // 返回错误信息，以便在页面上显示
      return { ...section, markdownContent: `# 加载错误\\n\\n无法加载文件: \`${section.contentFile}\`\\n\\n请检查文件路径和权限。` };
    }
  });
  return sectionsWithContent;
}

export default async function InfoPage() { // Make the component async
  // Fetch data directly within the Server Component
  const sectionsWithContent = await getSectionsWithContent();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              校园信息通
            </div>
            <div className="hidden md:flex space-x-4">
              {sectionsWithContent.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
            {/* Mobile menu button (optional) */}
            <div className="md:hidden">
              {/* You can add a hamburger menu icon here and a dropdown for mobile */}
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {sectionsWithContent.map((section) => (
          <section key={section.id} id={section.id} className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700 dark:text-blue-500 border-b-2 border-blue-500 pb-2">
              {section.title}
            </h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {section.markdownContent ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {section.markdownContent}
                </ReactMarkdown>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 italic">
                  内容加载失败或未提供。 (来自: <code>{section.contentFile}</code>)
                </p>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-12 py-6 text-center border-t dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} 校园信息通. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
            粤ICP备2025419036号-1
          </a>
        </p>
      </footer>
    </div>
  );
}

// Removed getStaticProps as it's not supported in App Router 