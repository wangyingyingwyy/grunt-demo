var add =require('../calc.js');
// 断言库
expect=require('chai').expect;


// 测试代码
/**
 *  describe(放测试套件，里边包含多个测试用例)两个参数:
 * 第一个是测试套件的名称(描述)
 * 第二个参数是回调函数(里边放具体测试用例)
 * */ 
describe('加法函数的测试用例',function (){
    // 每一个it为一个测试用例
    /**
     * it 中两个参数：
     * 第一个：测试用例功能描述
     * 第二个：回调函数(用断言expect)
     */
    it('0+0=0',function () {
        expect(add(0,0)).to.be.equal(0);
    });

    it('3+5=8',function(){
        expect(add(3,5)).to.be.equal(8);
    })
    it('a+b=NaN',function(){
        expect(isNaN(add('a','b'))).to.be.ok;
    })
});