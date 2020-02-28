module.exports=function (grunt) {
    // 构建的具体配置信息
    grunt.initConfig({
        less:{
            compile:{
                files:{'dist/compiled.css':'css/*.less'}
            }
        }
    });
    // 加载插件，多个插件写多行
    grunt.loadNpmTasks('grunt-contrib-less');
    // 定义构建任务清单
    grunt.registerTask('default',['less:compile'])
  }