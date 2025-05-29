/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    // 如果有 utils、layouts 等文件夹，也一并添加：
    // "./src/utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // 在这里添加自定义的颜色、字体等
    },
  },
  plugins: [
    // 如需表单、排版等官方插件，可在此引入：
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
