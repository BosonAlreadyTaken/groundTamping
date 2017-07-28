var Beverage = function() {};

Beverage.prototype.boilWater = function() {
  console.log('把水煮沸')
}
Beverage.prototype.brew = function() {
  throw new Error('子类必须重写该方法');
}
Beverage.prototype.pourInCup = function() {
  throw new Error('子类必须重写该方法');
}
Beverage.prototype.addCondiments = function() {
  throw new Error('子类必须重写该方法');
}
Beverage.prototype.customerWantsCondiments = function() {
  return true;
}
Beverage.prototype.init = function() {
  this.boilWater();
  this.brew();
  this.pourInCup();
  if (this.customerWantsCondiments()) {
    this.addCondiments();
  }
}

//子类方法
var Tea = function() {};
Tea.prototype.brew = function() {
  console.log('用沸水浸泡茶叶');
};
Tea.prototype.pourInCup = function() {
  console.log('把茶水倒进杯子');
};
Tea.prototype.addCondiments = function() {
  console.log('加柠檬');
}
//不想加调料
Tea.prototype.customerWantsCondiments = function() {
  return window.confirm('请问需要加调料吗?');
}

Tea.prototype = new Beverage();
