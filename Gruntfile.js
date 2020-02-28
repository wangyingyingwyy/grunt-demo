module.exports=function (grunt) {
    // 构建的具体配置信息
    grunt.initConfig({
        csslint:{
            options:{
               csslintrc:'./.csslintrc'
            },
            src:['*.css']
        }
    }); 
    // 加载插件，多个插件写多行
    grunt.loadNpmTasks('grunt-contrib-csslint');
    // 定义构建任务清单
    grunt.registerTask('default',['csslint']);
  }