import { Environment, Projectile, Tuple, add, logTuple } from "../tuple"

export const tick = (
  env: Environment,
  projectile: Projectile
) => {
  return {
    position: add(projectile.position, projectile.velocity),
    velocity: add(
      add(projectile.velocity, env.gravity),
      env.wind,
    )
  }
}

const stopGame = (p: Projectile) => {
  return p.position.y < 0
}

export const chapterOneGame = (init: {
  env: Environment
  p: Projectile
}) => {
  let env = init.env
  let p = init.p
  let index = 1
  do {
    tick(env, p)
    logTuple(p.position, `tick ${index++}: new Position=`)
  } while(stopGame(p) === false)
}