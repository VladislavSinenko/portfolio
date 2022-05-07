export interface ParticlesObj {
  canvas: {
    el: HTMLCanvasElement
  },
  fn: {
    particlesCreate: () => void,
    particlesEmpty: () => void
  },
  particles: {
    array: []
  }
}
