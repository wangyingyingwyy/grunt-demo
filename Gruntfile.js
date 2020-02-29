module.exports=function (grunt) {
    // 构建的具体配置信息
    grunt.initConfig({
        eslint:{
            options:{
                configFile:'./.eslintrc.json'
            },
            target:['*.js']
        }
    }); 
    // 加载插件，多个插件写多行
    grunt.loadNpmTasks('grunt-eslint');
    // 定义构建任务清单
    grunt.registerTask('default',['eslint']);
};