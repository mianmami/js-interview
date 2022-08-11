class Vue {
  constructor(options) {

    this.options = options;
    this.$el = options.el;
    this.$data = options.data;
    this.$watchEvent = {};
    /* 
    
    {
      key1: [watcher1, watcher2],
      key2: [watcher3, watcher4]
    }
    */
    let item = document.querySelector(this.$el)
    

    // 数据代理
    this.proxyData();

    // 数据劫持
    this.observe();

    // 模板解析
    this.compile(item) 

    
  }

  // 用于解析模板
  compile(node) {
    node.childNodes.forEach((item,index)=>{
      // 解析文本节点
      if(item.nodeType === 3){
        let reg = /\{\{(.*?)\}\}/g;
        let text = item.textContent;
        item.textContent = text.replace(reg,(match, vmKey)=>{
          // 如果这个属性值是vm身上的属性
          // 有几个地方需要替换，就会出来几个watch
          // 解析模板的时候，给每个需要替换的地方加上watcher
          if(this.hasOwnProperty(vmKey)){
            let watcher = new Watch(this, vmKey, item, 'textContent');
            if(this.$watchEvent[vmKey]){
              this.$watchEvent[vmKey].push(watcher)
            }else{
              this.$watchEvent[vmKey] = []
              this.$watchEvent[vmKey].push(watcher)
            }
          }
          return this.$data[vmKey];
        })
      }
      // 解析元素节点
      if(item.nodeType === 1){
        // 解析事件
        if(item.hasAttribute("@click")){
          let fn = item.getAttribute("@click")
          item.addEventListener("click",(e)=>{
            let F = this.options.methods[fn].bind(this)
            F(e);
          })
        }
        if(item.hasAttribute("v-model")){
          let vmKey = item.getAttribute("v-model")
          item.addEventListener("input",(e)=>{
            this[vmKey] = item.value
          })
        }
        // 解析字符串模板
        this.compile(item)
      }
    })

  }
  // 用于数据代理 把$data上的属性都绑定在vm身上
  proxyData(){
    for(let key in this.$data){
      Object.defineProperty(this, key,{
        get(){
          return this.$data[key]
        },
        set(val){
          this.$data[key] = val
        }
      })
    }
  }
  /*  
  监听数据的变化，就是给$data中的数据加上getter setter，然后调用Watch中的update方法
  这个update方法很简单，就是把节点的内容进行了重新的赋值。compile是把{{}}等解析出来赋值。
  */
  observe(){
    for(let key in this.$data){
      let value = this.$data[key];
      let that = this;
      Object.defineProperty(this.$data, key, {
        get(){
          return value;
        },
        set(val){
          value = val;
          if(that.$watchEvent[key]){
            that.$watchEvent[key].forEach((item)=>{
              item.update()
            })
          }
        }
      })
    }
  }

}

class Watch{
  constructor(vm, key, node, attr){
    this.vm = vm;
    this.key = key;
    this.node  = node;
    this.attr = attr; // TextContent
  }
  update(){
    this.node[this.attr] = this.vm[this.key]
  }
}

/* 
数据 -》 视图   (一开始加载的时候就解析了)
试图 -> 数据  直接利用input框

*/