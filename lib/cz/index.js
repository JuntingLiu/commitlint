'format cjs';
const engine = require('./engine');

module.exports = engine({
  types: {
    feat: {
      description: '新功能（feature）',
      title: '🌟 新功能'
    },
    fix: {
      description: 'bug 修复',
      title: '🐛 Bug 修复'
    },
    perf: {
      description: '性能优化',
      title: '🚀 性能优化'
    },
    style: {
      description: '代码格式（不影响代码运行的变动，非 UI 样式）',
      title: '🎨 代码样式'
    },
    docs: {
      description: '文档变更',
      title: '📝 文档'
    },
    test: {
      description: '添加一些缺失的测试或者修正已存在的测试',
      title: '🔧 测试'
    },
    refactor: {
      description: '重构（即不是新增功能，也不是修复bug）',
      title: '🔨 代码重构'
    },
    chore: {
      description: '影响构建系统或外部依赖的更改（例如：gulp，npm，webpack）',
      title: '🏠 构建'
    },
    ci: {
      description: '持续集成的配置文件和脚本的改变（例如: Travis, Circle）',
      title: '📦 持续集成'
    },
    revert: {
      description: '回滚',
      title: '🔙 回滚'
    }
  },
  scopes: {
    global: {
      description: '影响整个项目',
      title: 'global'
    },
    ui: {
      description: 'UI 界面',
      title: 'ui'
    },
    data: {
      description: '数据变化',
      title: 'data'
    },
    component: {
      description: '影响公共组件使用',
      title: 'component'
    },
    unknown: {
      description: '不知道影响范围',
      title: 'unknown'
    }
  }
});
