"use client"

import { useEffect, useRef } from "react"

const vertexShader = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`

const fragmentShader = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    uv.x *= 0.92;
    float radius = length(uv - vec2(0.18, -0.05));
    float ripple = sin(radius * 19.0 - u_time * 0.55) * 0.016;
    float line = smoothstep(0.019, 0.0, abs(fract(radius * 2.5 + ripple) - 0.5) - 0.13);
    float field = smoothstep(1.04, 0.17, radius);
    float halo = smoothstep(0.72, 0.04, radius) * 0.24;
    vec3 paper = vec3(0.91, 0.89, 0.83);
    vec3 sage = vec3(0.23, 0.31, 0.27);
    vec3 color = mix(paper, sage, field * 0.52 + halo);
    color += line * field * vec3(0.35, 0.39, 0.32);
    gl_FragColor = vec4(color, 1.0);
  }
`

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null
}

export default function HeroWebgl() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const gl = canvas.getContext("webgl", { alpha: false, antialias: true })
    if (!gl) return

    const vertex = createShader(gl, gl.VERTEX_SHADER, vertexShader)
    const fragment = createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)
    if (!vertex || !fragment) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return

    const buffer = gl.createBuffer()
    if (!buffer) return
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, "a_position")
    const resolution = gl.getUniformLocation(program, "u_resolution")
    const time = gl.getUniformLocation(program, "u_time")
    let frame = 0
    let start = performance.now()

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 1.75)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * ratio)
      canvas.height = Math.floor(rect.height * ratio)
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const draw = (now: number) => {
      gl.useProgram(program)
      gl.enableVertexAttribArray(position)
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
      gl.uniform2f(resolution, canvas.width, canvas.height)
      gl.uniform1f(time, (now - start) / 1000)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      frame = requestAnimationFrame(draw)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    frame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertex)
      gl.deleteShader(fragment)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-webgl" aria-hidden="true" />
}
