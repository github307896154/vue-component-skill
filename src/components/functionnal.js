export default {
  functional: true,   //必要的设置
  render: function (createElement, context) {
    return createElement(context.props.domType,context.data,context.children);
  }
}