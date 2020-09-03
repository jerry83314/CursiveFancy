module.exports = {
  publicPath: './dist',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args
      obj.title = '遇扇坊'
      obj.meta = {
        keywords: '客製化書法，畫仙板，扇子',
        description: '遇扇坊（CursiveFancy)，主營書法扇品。我們的扇品，是書道人一筆一畫悉心而就，每一把筆走龍蛇墨氣舒健的作品，都帶著獨特韻味，淬冶著匠心溫度，以及對藝術的虔誠與熱愛。'
      }
      return args
    })
  }
}
