# Communication

mainThread中
	你要是把这个放在主线程，那么他就是一直在算，消耗cpu性能，不会继续往下走代码，而你要是放在子线程，他什么时候算出来，都不影响接下来的代码

多线程需要在服务器环境下运行

测试的结果
	当传参30的时候
	test：出数快，但cpu性能消耗为80%+
	main：出数慢，但cpu性能一直保持在20%左右



gulp中
	可参考npm 官网
