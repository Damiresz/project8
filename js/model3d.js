// 3D скролл


let zSpasing = -1500,
    lastPos = zSpasing / 10,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

    window.onscroll = function() {

      let top = document.documentElement.scrollTop,
          delta = lastPos - top

      lastPos = top 
if (top >=4300) {
      frames.forEach(function(n,i) {
        zVals.push((i * zSpasing) + zSpasing)
        zVals[i] += delta * -6
        let frame =frames[i],
          transform = `translateZ(${zVals[i]}px)`
          opacity = zVals[i] < Math.abs(zSpasing)  ? 1 : 0

        frame.setAttribute('style', `transform: ${transform}; opacity:${opacity}`)
      })}
    }

    window.scrollTo(0,1)