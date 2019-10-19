/* eslint-disable no-new */
const starShip = { // 生成动态背景
  data () {
    return {
      canvas: null, // 画布Dom元素
      ctx: null, // 画布对象
      circleClass: null, // circle类
      circleIndex: 0, // circleId
      circles: {} // 所有circle集合
    }
  },
  methods: {
    getRandomColor () { // 生成随机颜色
      return '#' + (Math.random() * 0xffffff << 0).toString(16)
    },
    init () {
      this.canvas = this.$refs.starShip
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.ctx = this.canvas.getContext('2d')
      this.initCircle()
    },
    initCircle () {
      let vm = this
      this.circleClass = function () {
        this.x = vm.canvas.width / 2 // 初始位置
        this.y = vm.canvas.height / 2 // 初始位置
        this.vx = (Math.random() * 2 - 1) * 1.5 // 横向速度
        this.vy = (Math.random() * 2 - 1) * 1.5 // 纵向速度
        this.size = Math.random() // 圈大小
        this.growth = Math.random() * 0.015 // 圈大小增加速度
        this.color = vm.getRandomColor() // 圈颜色
        vm.circleIndex = vm.circleIndex + 1
        this.circleId = vm.circleIndex
        vm.circles[this.circleId] = this
      }
      this.circleClass.prototype.draw = function () {
        this.x += this.vx
        this.y += this.vy
        this.size += this.growth
        if (this.x > vm.canvas.width || this.y > vm.canvas.height) {
          delete vm.circles[this.circleId]
        }
        vm.ctx.beginPath()
        vm.ctx.fillStyle = this.color
        vm.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        vm.ctx.fill()
      }
      requestAnimationFrame(this.animation)
    },
    animation: function () {
      requestAnimationFrame(this.animation)
      this.ctx.fillStyle = '#000'
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
      if (Math.random() > 0.2) {
        let Circle = this.circleClass
        new Circle()
      }
      for (let i in this.circles) {
        this.circles[i].draw()
      }
    }
  },
  mounted () {
    this.init()
  }
}

export default starShip
