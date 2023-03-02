module.exports = {
  title: '前尘忆梦的博客',
  description: '前尘忆梦',
  head: [
    ['link', { rel: 'icon', href: '/logo.jpg' }],
  ],
  port:6666,
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '主页', link: '/' },
      {text: '文档', link: '/' },
      {text: '项目预览', items: [
          { text: 'jeespring-mall', link: 'https://github.com/jeespring' },
          { text: 'jeespring-cloud-mall', link: 'https://github.com/jeespring' }
        ]
      },
      {text: 'CSDN', link: 'https://blog.csdn.net/zhangchaoyang'},
      {text: 'GitHub', link: 'https://github.com/jeespring'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
