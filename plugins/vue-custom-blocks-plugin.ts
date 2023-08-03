// 自定义插件 获取当前组件文件源代码以及指定代码块
import fs from "fs";
// @vue/compiler-core包
import { baseParse } from "@vue/compiler-core";
// 自定义插件
const vitePluginVue = {
  name: "preview",
  // vite生命周期-transform:执行导入的时候 提供检测的函数 
  // 每写一个import vite把这个信息传递给每一个插件的transform中
  // 插件更具所需转化为自己需要的 transform接收两个参数 src(导入文本内容)/id(模块的绝对路径)
  // 是一个解析函数 执行转化
  transform(code, id) {
    // id这个路径没有/src/views/doc/xx.preview.vue 或者 /vue&type=preview 就返回
    // resourceQuery 和 resourcePath
    if (
      !/\/src\/views\/doc\/.*\.preview\.vue/.test(id) ||
      !/vue&type=preview/.test(id)
    ) {
      return;
    }
    // 获取匹配到的完整路径 match(/src/views/doc/xx.preview.vue)[0]是正则全部匹配到的 
    let path = `.${id.match(/\/src\/views\/doc\/.*\.preview\.vue/)[0]}`;
    // 读取path文件的内容
    const file = fs.readFileSync(path).toString(); 
    // 通过 baseParse 将字符串模板转换成 AST 抽象语法树
    // 获取源代码信息的标签内容 <preview>
    const parsed = baseParse(file).children.find((n) => n.tag === "preview");
    // 标题 就是<preview>标签的内容
    const title = parsed.children[0].content;
    // 将<preview></preview> 标签和内容进行抽离
    const main = file.split(parsed.loc.source).join("").trim();

    // 添加到组件对象上
    return `export default function (Component) {
      Component.__sourceCode = ${JSON.stringify(main)}
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim();
  },
};

export default vitePluginVue;
