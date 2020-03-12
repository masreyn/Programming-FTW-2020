const vm = new Vue({
  el: '#calcApp',
  data: {
    firstNum: null,
    secondNum: null,
    operation: 'add',
    total: null
  },
  methods: {
    calculate: (num1, num2) => {
      switch (vm.operation) {
        case 'add':
          vm.total = num1 + num2;
          break;
        case 'subtract':
          vm.total = num1 - num2;
          break;
        case 'multiply':
          vm.total = num1 * num2;
          break;
        case 'divide':
          vm.total = num1 / num2;
          break;

        default:
          window.alert('unexpected operator');
          break;
      }
      /* This operation is executed left to right
        can assign both of them as null on the same line
        can assign each null on own 2 separate lines */
      vm.firstNum = vm.secondNum = null;
    }
  }
});
