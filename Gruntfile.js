module.exports=function (grunt) { 
    //构建的具体配置信息
    grunt.initConfig({
       concat:{
           files:{
               src:['rectangle.js','util.js'],
               dest:'dist/bundle.js'
           }
       }
    });
    // 加载插件，多个插件写多行
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);
};